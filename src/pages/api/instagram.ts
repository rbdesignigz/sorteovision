import type { APIRoute } from 'astro';
import { getMockPosts } from '../../data/mock';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  let username = url.searchParams.get('username');

  if (!username) {
    return new Response(JSON.stringify({ error: 'Username is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Eliminar el '@' si el usuario lo ingresó por accidente
  username = username.replace(/^@/, '').trim();

  const apiKey = import.meta.env.RAPIDAPI_KEY;

  // Si no hay clave de API configurada, devolvemos los Mocks directamente
  if (!apiKey || apiKey.trim() === '') {
    console.log(`[API] RapidAPI Key no encontrada. Devolviendo mocks para @${username}`);
    return new Response(JSON.stringify({ 
      success: true, 
      isMock: true,
      data: getMockPosts(username) 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Permitir configurar el Host por si el usuario elige otra API de Instagram en RapidAPI
    const rapidApiHost = import.meta.env.RAPIDAPI_HOST || 'instagram130.p.rapidapi.com';
    
    const response = await fetch(`https://${rapidApiHost}/api/instagram/posts`, {
      method: 'POST',
      headers: {
        'x-rapidapi-host': rapidApiHost,
        'x-rapidapi-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        maxId: ""
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API de Instagram respondió con status: ${response.status}. Body: ${errorText}`);
    }

    const json = await response.json();

    // Soportar diferentes formatos de respuesta de RapidAPI
    let rawPosts = [];
    if (json.result && json.result.edges) {
      rawPosts = json.result.edges.map((e: any) => e.node);
    } else if (json.data && json.data.items) {
      rawPosts = json.data.items;
    } else if (json.items) {
      rawPosts = json.items;
    }

    let profilePicUrl = '';
    if (rawPosts.length > 0) {
      const firstPost = rawPosts[0];
      profilePicUrl = firstPost.owner?.profile_pic_url || firstPost.user?.profile_pic_url || '';
    }

    const posts = rawPosts.slice(0, 12).map((item: any) => ({
      id: item.id || item.pk || Math.random().toString(),
      // Múltiples posibles ubicaciones de la imagen según la API
      imageUrl: item.display_url || item.thumbnail_src || item.thumbnail_url || item.image_versions2?.candidates?.[0]?.url || '',
      commentsCount: item.edge_media_to_comment?.count || item.comment_count || 0,
      likesCount: item.edge_media_preview_like?.count || item.like_count || 0,
    }));

    return new Response(JSON.stringify({ 
      success: true, 
      isMock: posts.length === 0,
      profilePicUrl: profilePicUrl,
      data: posts.length > 0 ? posts : getMockPosts(username) // Fallback si no parseó bien
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('[API] Error al consultar RapidAPI:', error);
    // En caso de error, como plan B devolvemos mocks para que la UI no se rompa en medio de una demo
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      isMock: true,
      data: getMockPosts(username) 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
