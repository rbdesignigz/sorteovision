const getMockPosts = (username) => {
  return Array.from({ length: 12 }).map((_, i) => {
    const commentsCount = Math.floor(Math.random() * 2e3) + 10;
    return {
      id: `post_${username}_${i}`,
      imageUrl: `https://picsum.photos/seed/${username}_${i}/400/400`,
      commentsCount,
      likesCount: commentsCount * (Math.floor(Math.random() * 5) + 2)
    };
  });
};

const GET = async ({ request }) => {
  const url = new URL(request.url);
  let username = url.searchParams.get("username");
  if (!username) {
    return new Response(JSON.stringify({ error: "Username is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  username = username.replace(/^@/, "").trim();
  const apiKey = "498f6f813cmsh0dfa088dcee36c0p1d40efjsn532d630849b6";
  if (apiKey.trim() === "") {
    console.log(`[API] RapidAPI Key no encontrada. Devolviendo mocks para @${username}`);
    return new Response(JSON.stringify({
      success: true,
      isMock: true,
      data: getMockPosts(username)
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const rapidApiHost = "instagram120.p.rapidapi.com";
    const response = await fetch(`https://${rapidApiHost}/api/instagram/posts`, {
      method: "POST",
      headers: {
        "x-rapidapi-host": rapidApiHost,
        "x-rapidapi-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        maxId: ""
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API de Instagram respondió con status: ${response.status}. Body: ${errorText}`);
    }
    const json = await response.json();
    let rawPosts = [];
    if (json.result && json.result.edges) {
      rawPosts = json.result.edges.map((e) => e.node);
    } else if (json.data && json.data.items) {
      rawPosts = json.data.items;
    } else if (json.items) {
      rawPosts = json.items;
    }
    let profilePicUrl = "";
    if (rawPosts.length > 0) {
      const firstPost = rawPosts[0];
      profilePicUrl = firstPost.owner?.profile_pic_url || firstPost.user?.profile_pic_url || "";
    }
    const posts = rawPosts.slice(0, 12).map((item) => ({
      id: item.id || item.pk || Math.random().toString(),
      // Múltiples posibles ubicaciones de la imagen según la API
      imageUrl: item.display_url || item.thumbnail_src || item.thumbnail_url || item.image_versions2?.candidates?.[0]?.url || "",
      commentsCount: item.edge_media_to_comment?.count || item.comment_count || 0,
      likesCount: item.edge_media_preview_like?.count || item.like_count || 0
    }));
    return new Response(JSON.stringify({
      success: true,
      isMock: posts.length === 0,
      profilePicUrl,
      data: posts.length > 0 ? posts : getMockPosts(username)
      // Fallback si no parseó bien
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[API] Error al consultar RapidAPI:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      isMock: true,
      data: getMockPosts(username)
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
