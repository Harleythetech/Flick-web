export function Specs(): string {
  return `
<section class="bg-[#101010] text-white py-24 relative z-20 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-6 lg:px-16">
    
    <div class="mb-16">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-4">Under the Hood</h2>
      <p class="text-gray-400 text-lg max-w-2xl">
        The granular details and architectural decisions that make Flick Player a bit-perfect powerhouse.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      
      <div>
        <h3 class="text-lg font-bold mb-6 tracking-wide text-white border-b border-white/10 pb-3">Audio Pipeline & DSP</h3>
        <ul class="space-y-4">
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Fallback Engine:</strong> Native just_audio support for devices without USB UAC 2.0 capabilities.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>On-the-Fly Conversion:</strong> ALAC/M4A to WAV conversion for seamless streaming and one-shot playback.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Gapless & Crossfade:</strong> Configurable track crossfading and duration latching for absolute zero-silence transitions.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Optimized Sync:</strong> Ultra-precise 250ms position update intervals.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-6 tracking-wide text-white border-b border-white/10 pb-3">Library & Data Management</h3>
        <ul class="space-y-4">
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Smart Sync:</strong> Background auto-sync service with highly configurable scanning intervals.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Deep Metadata:</strong> ID3 and Vorbis comment extraction via the <code class="bg-white/10 px-1 py-0.5 rounded text-[11px]">lofty</code> crate.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Library Cleansing:</strong> Built-in duplicate track detection and batch removal utilities.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Advanced Playlists:</strong> Import/Export playlists as standard text files via the native document picker.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-6 tracking-wide text-white border-b border-white/10 pb-3">Interface & Interaction</h3>
        <ul class="space-y-4">
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Adaptive Theming:</strong> UI gradients and color palettes dynamically shift based on current album artwork.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Optimistic UI:</strong> Instantaneous visual feedback on user actions before database commits finish.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Advanced Navigation:</strong> Waveform seekbars, marquee text for long titles, and dynamic fast-index tokens.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>DAP Optimized:</strong> Fully responsive layouts engineered to scale cleanly down to smaller Digital Audio Players.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-6 tracking-wide text-white border-b border-white/10 pb-3">System Architecture</h3>
        <ul class="space-y-4">
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>State Management:</strong> Highly reduced widget rebuilds and cached image rendering for strict memory control.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Delta Tracking:</strong> Advanced listen-tracking algorithms engineered to prevent seek abuse and false scrobbles.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Concurrency Guards:</strong> Strict operation guards to prevent database locking during intensive background syncs.</span>
          </li>
          <li class="flex items-start text-sm text-gray-400 leading-relaxed">
            <svg class="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Developer Tools:</strong> Detailed debug logging and show/hide toggles for secure API secret input.</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>`;
}
