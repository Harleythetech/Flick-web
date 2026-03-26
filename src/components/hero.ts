import prodsample2 from "../assets/Product-Sample2.png";

export function Hero(): string {
  return `
<div class="relative w-full h-[100dvh] overflow-hidden bg-[#101010] font-sans">

  <img 
    src="${prodsample2}" 
    alt="Flick Player Interface" 
    class="absolute bottom-0 right-0 w-full h-[65%] lg:top-0 lg:h-full lg:w-[45%] object-cover object-top lg:object-left-top z-0"
  >

  <div class="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#101010]/95 to-transparent lg:hidden z-[5]"></div>

  <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start lg:justify-center pt-[15vh] lg:pt-0 z-10 px-6 md:px-12 lg:px-16">
    
    <div class="w-full lg:w-[50%] max-w-2xl lg:pr-8 xl:pr-12 relative z-10">
      
      <h1 class="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white mb-4 lg:mb-6 tracking-tight text-balance leading-tight drop-shadow-xl lg:drop-shadow-none">
        Built for High Fidelity. <br>Crafted by Audio Enthusiasts.
      </h1>
      
      <p class="text-base md:text-lg text-gray-300 mb-8 lg:mb-10 text-left lg:text-justify hyphens-auto leading-relaxed drop-shadow-md lg:drop-shadow-none max-w-xl lg:max-w-none">
        Flick Player is a high-performance music player application built with Flutter and Rust, designed primarily for audiophiles who demand bit-perfect audio playback through external DACs and amplifiers.
      </p>

      <button id="download-btn" class="inline-flex items-center space-x-3 lg:space-x-4 bg-white text-black px-5 py-3 lg:px-6 lg:py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] relative z-10">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lg:w-[28px] lg:h-[28px]">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </div>

        <div class="flex flex-col items-start leading-none">
          <span class="text-[15px] lg:text-[17px] font-bold tracking-tight">Download Flick</span>
          <span id="version-tag" class="text-[10px] lg:text-[11px] font-medium opacity-50 mt-1 lg:mt-1.5 uppercase tracking-wider">Loading...</span>
        </div>
      </button>
    </div>
  </div>

</div>`;
}
