import { c as createComponent } from './astro-component_DJXKCNjs.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead, h as addAttribute, q as Fragment } from './entrypoint_1PNQvzUc.mjs';
import { $ as $$Layout } from './Layout_BPtVbO0J.mjs';

const $$SelectPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SelectPost;
  const username = Astro2.url.searchParams.get("username") || "usuario_demo";
  const apiUrl = new URL(`/api/instagram?username=${username}`, Astro2.url);
  let posts = [];
  let isMock = false;
  let errorMsg = null;
  let profilePicUrl = "";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    isMock = data.isMock;
    if (data.success) {
      posts = data.data;
      profilePicUrl = data.profilePicUrl || "";
    } else {
      errorMsg = data.error || "Error al obtener las publicaciones.";
      posts = data.data || [];
      isMock = data.isMock;
    }
  } catch (e) {
    errorMsg = e.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 flex flex-col items-center pb-24"> <!-- Simple Header --> <header class="w-full bg-white shadow-sm py-4 px-6 flex items-center mb-12 sticky top-0 z-20"> <a href="/" class="flex items-center gap-2 text-gray-800 font-bold hover:text-red-500 transition-colors bg-gray-100 px-4 py-2 rounded-full"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
VOLVER
</a> <div class="mx-auto flex flex-col items-center relative"> <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-md -mt-10 mb-2 overflow-hidden"> ${profilePicUrl ? renderTemplate`<img${addAttribute(profilePicUrl, "src")}${addAttribute(username, "alt")} class="w-full h-full object-cover">` : renderTemplate`<span class="text-xs font-black text-gray-500 text-center uppercase">@<br>${username}</span>`} </div> ${isMock && renderTemplate`<span class="absolute -bottom-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-200">MODO DEMO</span>`} </div> <div class="w-24"></div> <!-- Spacer for flex centering --> </header> <div class="max-w-4xl w-full px-4 text-center mb-10"> <h1 class="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
Elige el post<br>del sorteo
</h1> </div> <!-- Posts Grid --> <div class="max-w-5xl w-full px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"> ${posts.map((post) => {
    const hasNoComments = post.commentsCount === 0;
    return renderTemplate`<a${addAttribute(hasNoComments ? "#" : `/config?post=${post.id}`, "href")}${addAttribute(`group relative aspect-square rounded-[2rem] overflow-hidden bg-gray-200 shadow-md block transition-all duration-300
                   ${hasNoComments ? "cursor-not-allowed grayscale-[80%] opacity-80" : "hover:shadow-2xl hover:scale-[1.02]"}`, "class")}${addAttribute(hasNoComments ? "event.preventDefault();" : "", "onclick")}> <img${addAttribute(post.imageUrl, "src")} alt="Instagram Post" class="w-full h-full object-cover"> <!-- Hover Overlay --> <div${addAttribute(`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 
                        ${hasNoComments ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, "class")}> <div class="flex items-center gap-2 text-white font-bold text-xl"> ${hasNoComments ? renderTemplate`<span class="text-sm bg-black/60 px-4 py-2 rounded-full backdrop-blur">Sin comentarios</span>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span>💬</span> <span>${post.commentsCount.toLocaleString()}</span> ` })}`} </div> </div> <!-- Default comment badge if not hovered (and has comments) --> ${!hasNoComments && renderTemplate`<div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 font-bold px-3 py-1 rounded-full text-sm shadow-sm group-hover:opacity-0 transition-opacity">
💬 ${post.commentsCount} </div>`} </a>`;
  })} </div> </main> ` })}`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/select-post.astro", void 0);

const $$file = "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/select-post.astro";
const $$url = "/select-post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SelectPost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
