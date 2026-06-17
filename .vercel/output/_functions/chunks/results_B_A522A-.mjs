import { c as createComponent } from './astro-component_DJXKCNjs.mjs';
import 'piccolore';
import { p as createRenderInstruction, o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_1PNQvzUc.mjs';
import { $ as $$Layout } from './Layout_BPtVbO0J.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Results = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-pttseihw": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main id="main_container" class="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-1000" data-astro-cid-pttseihw> <!-- Circular Reveal Element --> <div id="circle_reveal" class="fixed top-1/2 left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 z-10 pointer-events-none transition-transform duration-1000 ease-in-out" data-astro-cid-pttseihw></div> <!-- Loading Animation --> <div id="loading_screen" class="flex flex-col items-center text-center z-20 transition-opacity duration-300" data-astro-cid-pttseihw> <div class="text-7xl mb-6 animate-bounce" data-astro-cid-pttseihw>⏳</div> <h2 class="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 animate-pulse" data-astro-cid-pttseihw>
Sorteando...
</h2> <p class="text-xl text-gray-500 font-medium h-8 overflow-hidden relative w-64 text-center" id="shuffling_names" data-astro-cid-pttseihw> <!-- Names will flash here --> </p> </div> <!-- Results Container (Hidden initially) --> <div id="results_screen" class="hidden w-full max-w-3xl z-20 animate-fade-in-up" data-astro-cid-pttseihw> <div class="text-center mb-10" data-astro-cid-pttseihw> <span class="text-6xl mb-4 block" data-astro-cid-pttseihw>🎉</span> <h1 class="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm leading-tight" data-astro-cid-pttseihw>
¡Sorteo Finalizado!
</h1> <p class="text-gray-300 mt-2 font-medium text-lg" data-astro-cid-pttseihw>Aquí están los resultados oficiales.</p> </div> <div class="bg-black border border-gray-800 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col gap-10" data-astro-cid-pttseihw> <!-- Winners --> <div data-astro-cid-pttseihw> <h2 class="text-3xl font-black text-white mb-6 flex items-center gap-3" data-astro-cid-pttseihw> <span class="text-4xl" data-astro-cid-pttseihw>🏆</span> Ganadores
</h2> <div id="winners_list" class="flex flex-col gap-4" data-astro-cid-pttseihw> <!-- Injected via JS --> </div> </div> <!-- Substitutes (if any) --> <div id="substitutes_section" class="hidden" data-astro-cid-pttseihw> <hr class="border-gray-800 mb-10" data-astro-cid-pttseihw> <h2 class="text-2xl font-black text-white mb-6 flex items-center gap-3" data-astro-cid-pttseihw> <span class="text-3xl" data-astro-cid-pttseihw>🥈</span> Suplentes
</h2> <div id="substitutes_list" class="flex flex-col gap-3" data-astro-cid-pttseihw> <!-- Injected via JS --> </div> </div> </div> <div class="mt-10 flex flex-col md:flex-row items-center justify-center gap-4" data-astro-cid-pttseihw> <button onclick="window.print()" class="bg-gray-800 text-white font-bold px-8 py-4 rounded-full shadow hover:bg-gray-700 transition-colors flex items-center gap-2 border border-gray-700" data-astro-cid-pttseihw> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-pttseihw><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" data-astro-cid-pttseihw></path></svg>
Guardar Certificado
</button> <a href="/" class="bg-white text-black font-bold px-8 py-4 rounded-full shadow hover:bg-gray-200 transition-colors" data-astro-cid-pttseihw>
Hacer otro sorteo
</a> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/results.astro", void 0);

const $$file = "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/results.astro";
const $$url = "/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
