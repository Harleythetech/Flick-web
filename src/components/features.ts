export function Features(): string {
  return `
<section class="bg-[#101010] text-white py-24 md:py-32 relative z-20 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-6 lg:px-16">
    
    <div class="mb-16 md:mb-20">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-balance">
        Engineered for the Ear. <br>Coded for the DAC.
      </h2>
      <p class="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
        We stripped away the bloat and built a custom audio engine from the ground up, ensuring nothing stands between your high-res files and your hardware.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div class="lg:col-span-2 bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col h-full min-h-[300px]">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 flex-shrink-0 text-gray-400 mb-6"><path d="M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M12 4v4"/><circle cx="12" cy="10" r="2"/></svg>
          <div>
            <h3 class="text-2xl font-bold mb-3 tracking-tight">Direct UAC 2.0 Bypass</h3>
            <p class="text-gray-400 leading-relaxed max-w-md">
              Our custom Rust implementation detects hot-plugged USB DACs and streams bit-perfect audio directly via isochronous transfers, bypassing the OS mixer entirely.
            </p>
            <div class="flex gap-2 mt-5 flex-wrap">
              <span class="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/10 rounded text-white border border-white/10">ALAC/M4A Support</span>
              <span class="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/10 rounded text-white border border-white/10">Gapless Playback</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between h-full min-h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 flex-shrink-0 text-gray-400 mb-6"><path d="M4 22v-7"/><path d="M4 11V2"/><path d="M12 22v-3"/><path d="M12 15V2"/><path d="M20 22v-9"/><path d="M20 9V2"/><path d="M2 11h4"/><path d="M10 15h4"/><path d="M18 9h4"/></svg>
        <div>
          <h3 class="text-xl font-bold mb-3 tracking-tight">10-Band Parametric EQ</h3>
          <p class="text-gray-400 leading-relaxed text-sm">
            Real-time audio processing with finely tunable bands and preset configurations tailored for your specific listening hardware.
          </p>
        </div>
      </div>

      <div class="bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between h-full min-h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 flex-shrink-0 text-gray-400 mb-6"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg>
        <div>
          <h3 class="text-xl font-bold mb-3 tracking-tight">Offline Scrobbling</h3>
          <p class="text-gray-400 leading-relaxed text-sm">
            Full Last.fm integration that queues your plays even when offline. Plus, native synced lyric reading from embedded tags or .lrc files.
          </p>
        </div>
      </div>

      <div class="lg:col-span-2 bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col h-full min-h-[300px]">
        <div class="absolute -bottom-10 -right-10 w-[70%] h-[120%] bg-gradient-to-tl from-white/5 to-transparent rounded-tl-[4rem] pointer-events-none"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 flex-shrink-0 text-gray-400 mb-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          <div>
            <h3 class="text-2xl font-bold mb-3 tracking-tight">Adaptive 120Hz Glassmorphism</h3>
            <p class="text-gray-400 leading-relaxed max-w-md">
              A visually immersive Flutter UI that extracts colors from your album art. Powered by an ultra-fast Isar database for instantaneous library queries, auto-syncing, and duplicate cleaning.
            </p>
            <div class="flex gap-2 mt-5 flex-wrap">
              <span class="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/10 rounded text-white border border-white/10">Waveform Seekbar</span>
              <span class="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/10 rounded text-white border border-white/10">Isar Database</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;
}
