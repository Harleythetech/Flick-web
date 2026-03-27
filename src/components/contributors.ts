export function Contributors(): string {
  return `
<section class="bg-[#101010] text-white py-24 relative z-20 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-6 lg:px-16">

    <div class="mb-16 text-center" data-animate="fade-up">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-balance">
        Built by the Community
      </h2>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
        Flick Player is driven by open-source collaboration. A massive thank you to the developers shaping the future of bit-perfect audio.
      </p>
    </div>

    <div id="contributors-grid" class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 max-w-4xl mx-auto" data-animate="fade-up" data-animate-delay="0.2">
      
      <div class="col-span-full flex flex-col items-center justify-center py-12 animate-pulse">
        <div class="w-16 h-16 bg-white/10 rounded-full mb-4"></div>
        <div class="h-4 w-24 bg-white/10 rounded mb-2"></div>
        <div class="text-gray-500 text-sm tracking-widest uppercase">Loading network...</div>
      </div>

    </div>

  </div>
</section>
`;
}
