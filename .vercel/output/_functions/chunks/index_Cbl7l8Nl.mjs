import { c as createComponent } from './astro-component_DJXKCNjs.mjs';
import 'piccolore';
import { m as maybeRenderHead, k as renderTemplate, o as renderComponent } from './entrypoint_1PNQvzUc.mjs';
import { $ as $$Layout } from './Layout_BPtVbO0J.mjs';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-10 text-black font-semibold"> <div class="flex items-center gap-2"> <!-- Icon Placeholder / Logo --> <div class="bg-black rounded p-1 text-white text-2xl font-black"> <span>*</span> </div> <span class="text-xl tracking-tight font-black">Sorteos<span class="text-sm font-normal">.vision</span></span> </div> <div class="hidden md:flex items-center gap-8 text-sm tracking-wide"> <a href="#como-hacer" class="hover:text-gray-500 transition-colors">CÓMO HACER UN SORTEO</a> <a href="#precios" class="hover:text-gray-500 transition-colors">PRECIOS</a> <a href="#faq" class="hover:text-gray-500 transition-colors">PREGUNTAS FRECUENTES</a> </div> <div> <button class="border border-black hover:bg-black hover:text-white transition-colors px-6 py-2 rounded-full text-sm tracking-wide">
INGRESAR
</button> </div> </nav>`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-white px-4"> <div class="z-10 text-center max-w-4xl mx-auto flex flex-col items-center mt-16"> <h1 class="text-black text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
Haz tu sorteo de <br> Instagram rápido, <br> fácil y gratis
</h1> <div class="text-gray-600 mb-8 space-y-2 text-lg md:text-xl font-medium"> <p class="flex items-center justify-center gap-2"> <span class="text-xs font-bold border border-gray-300 px-2 py-0.5 rounded text-black">AR</span> Pagá en pesos. Sin sorpresas.
</p> <p class="flex items-center justify-center gap-2"> <span class="bg-black text-white rounded-full p-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></span> Sorteo gratis hasta 500 comentarios.
</p> <div class="flex flex-wrap items-center justify-center gap-4 text-base mt-2"> <p class="flex items-center gap-1"> <span class="bg-black text-white rounded-full p-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></span> Sin descargas.
</p> <p class="flex items-center gap-1"> <span class="bg-black text-white rounded-full p-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></span> Sin suscripciones.
</p> <p class="flex items-center gap-1"> <span class="bg-black text-white rounded-full p-0.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></span> Sin loguearte.
</p> </div> </div> <!-- Main Input Form --> <form action="/select-post" method="GET" class="w-full max-w-2xl flex flex-col items-center gap-6 mt-4 relative z-20"> <div class="w-full relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 p-2"> <input type="text" name="username" required placeholder="Pega el link del post o escribí tu arroba aquí" class="w-full bg-transparent text-black text-lg md:text-xl font-semibold px-6 py-5 outline-none text-center placeholder-gray-400 transition-all"> </div> <button type="submit" class="bg-black hover:bg-gray-800 text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-200 uppercase tracking-widest">
Comenzar
</button> </form> </div> </section>`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/components/Hero.astro", void 0);

const $$HowTo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="como-hacer" class="py-24 px-4 bg-gray-50 flex flex-col items-center"> <div class="max-w-5xl mx-auto w-full text-center"> <h2 class="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
Cómo hacer tu<br>sorteo de Instagram,<br>paso a paso 🏃
</h2> <p class="text-gray-600 text-lg mb-16">Es mega fácil. Sigue los pasos, no hay dónde perderse.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative"> <!-- Step 1 --> <div class="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"> <div class="flex items-center justify-center gap-2 mb-6"> <span class="text-5xl">😎</span> <div class="bg-black rounded-xl p-2 rotate-12"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> </div> </div> <p class="text-gray-800 font-medium leading-snug"> <strong class="font-bold">Ingresa tu @usuario</strong> y toca la flecha para comenzar.
</p> </div> <!-- Step 2 --> <div class="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transform translate-y-4 hover:translate-y-0 transition-transform duration-300"> <div class="flex items-center justify-center gap-2 mb-6 relative"> <span class="text-6xl z-10">🎁</span> <span class="text-5xl absolute -right-4 -top-2 opacity-50">⚙️</span> </div> <p class="text-gray-800 font-medium leading-snug text-sm"> <strong class="font-bold">Selecciona el post</strong> donde organizaste el sorteo, <strong class="font-bold">configúralo</strong>, elige animaciones y continúa a la carga de comentarios.
</p> </div> <!-- Step 3 --> <div class="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transform rotate-[2deg] hover:rotate-0 transition-transform duration-300"> <div class="flex items-center justify-center gap-2 mb-6"> <span class="text-5xl">🥳</span> <span class="text-4xl">🎉</span> <span class="text-5xl">📣</span> </div> <p class="text-gray-800 font-medium leading-snug"> <strong class="font-bold">Sorteas y listo.</strong><br>¡Celebra y comparte los resultados con tus seguidores! ✨
</p> </div> </div> </div> </section>`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/components/HowTo.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="precios" class="py-24 px-4 bg-white flex flex-col items-center"> <div class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <!-- Testimonial / Features text --> <div> <h2 class="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
Sortealo.app es el sorteador online más fácil de usar y rápido.
</h2> <p class="text-gray-600 text-lg mb-8 font-medium">
Pon tu nombre de usuario o link de tu publicación y sorteas en segundos. Sin registro, sin lío. <strong class="text-gray-900">Casi 1 millón de emprendedores y marcas ya hicieron su sorteo con nosotros.</strong> </p> <div class="flex items-start gap-4 bg-gray-50 p-6 rounded-3xl"> <div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative"> <!-- Placeholder avatar --> <img src="https://i.pravatar.cc/150?img=47" alt="User" class="w-full h-full object-cover"> <div class="absolute -bottom-2 -right-2 bg-black p-1.5 rounded-full border-2 border-white"> <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" clip-rule="evenodd"></path></svg> </div> </div> <div> <p class="text-sm text-gray-600 italic mb-2">
"Sorteamos con Sortealo.app porque es muy fácil y rápido y podemos elegir animaciones que van con nuestra marca. 100% Recomendado."
</p> <div class="flex text-black text-sm mb-1">
★★★★★
</div> <p class="text-sm font-bold text-gray-900">Trini. <br> <span class="text-gray-500 font-normal">@deviaje.okk</span></p> </div> </div> </div> <!-- Pricing Card --> <div class="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[3rem]"> <div class="flex-1"> <h3 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
¿Cuánto cuesta hacer un sorteo en Sortealo?
</h3> <ul class="text-gray-600 space-y-2 mb-6 font-medium"> <li>Hasta 500 comentarios → GRATIS</li> <li>Más de 500 → Precio accesible, sin suscripción.</li> </ul> <p class="text-gray-900 font-bold">Pagás por sorteo, solo cuando lo necesitás.</p> </div> <!-- Interactive Widget Mock --> <div class="bg-white rounded-[2rem] p-6 shadow-xl w-full max-w-[280px] text-center border border-gray-100 flex-shrink-0"> <div class="flex items-center justify-between mb-4"> <span class="font-black text-gray-900 text-lg leading-tight text-left">¿Cuántos<br>comentarios?</span> <span class="text-3xl">🐢</span> </div> <div class="flex items-center justify-between bg-gray-50 rounded-full p-2 mb-6"> <button class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-bold text-xl hover:bg-gray-100 transition-colors">-</button> <div class="text-center"> <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block">Hasta</span> <span class="font-black text-3xl text-gray-900 leading-none">500</span> </div> <button class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-bold text-xl hover:bg-gray-100 transition-colors">+</button> </div> <button class="w-full bg-black hover:bg-gray-800 text-white font-black py-4 rounded-2xl text-xl tracking-wide transition-colors">
GRATIS
</button> </div> </div> </div> <div class="max-w-4xl mx-auto w-full mt-24 flex flex-col md:flex-row gap-12 items-center"> <div class="flex-1"> <h2 class="text-4xl font-black tracking-tight text-gray-900 mb-6">¿Qué es<br>Sortealo?</h2> <div class="text-gray-600 space-y-4 font-medium text-lg leading-relaxed"> <p>Sortealo es una herramienta simple, segura y profesional para crear sorteos en Instagram. Solo tienes que elegir la publicación, configurar cantidad de ganadores y suplentes y Sortealo se encarga del resto.</p> <p>No necesitas compartir tus contraseñas ni dar acceso extraño a tu cuenta.</p> <p>Además, Sortealo genera certificados de ganador listos para compartir, lo que aporta más confianza y credibilidad a cada sorteo.</p> </div> <p class="mt-8 font-bold text-gray-900">
Importante: Los posts tienen que tener los comentarios desbloqueados y ser públicos.<br>
No podemos obtener los posts de una cuenta privada.
</p> </div> <div class="flex-shrink-0 relative"> <span class="text-9xl relative z-10">🎁</span> <div class="absolute -top-4 -left-8 bg-black rounded-2xl w-24 h-24 rotate-12 -z-10 flex items-center justify-center text-5xl">
😉
</div> </div> </div> </section>`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/components/Info.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative w-full overflow-x-hidden"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "HowTo", $$HowTo, {})} ${renderComponent($$result2, "Info", $$Info, {})} </main> ` })}`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/index.astro", void 0);

const $$file = "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
