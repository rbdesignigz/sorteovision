import { c as createComponent } from './astro-component_DJXKCNjs.mjs';
import 'piccolore';
import { h as addAttribute, v as renderHead, w as renderSlot, k as renderTemplate } from './entrypoint_1PNQvzUc.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Sortealo.app - Tu sorteo de Instagram rápido, fácil y gratis</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/bpablo.DFSPI/Documents/GitHub/serteoarg/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
