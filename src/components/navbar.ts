import flicklogo from "../assets/flicklogo_transparent.png";

export function Navbar(): string {
  return `
<nav id="main-nav" class="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-8 lg:px-16 py-4 md:py-6 z-50 transition-all duration-300">
  
  <div class="flex items-center space-x-4">
    <img src="${flicklogo}" alt="Flick Logo" class="h-8 w-8 md:h-10 md:w-10 opacity-90">
  </div>
  
  <div class="flex items-center space-x-4">
    <a 
      href="https://github.com/ultraelectronica/Flick" 
      target="_blank"
      class="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#2A2A2A]/80 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:bg-[#333333] transition-all cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-white">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.775 2.774c.645-.215 1.383-.068 1.893.442.708.708.708 1.853 0 2.56-.708.708-1.853.708-2.56 0-.504-.504-.649-1.241-.448-1.89L12.8 8.78v5.535c.22.215.353.5.353.805 0 .708-.542 1.277-1.233 1.277-.692 0-1.233-.569-1.233-1.277 0-.304.133-.59.353-.805V8.718c-.22-.215-.353-.5-.353-.805 0-.336.142-.642.368-.85L8.436 4.442 1.452 11.426c-.603.604-.603 1.586 0 2.189l10.48 10.48c.603.605 1.585.605 2.188 0l9.426-9.425c.605-.604.605-1.585 0-2.19z"/>
      </svg>
      <span id="nav-version-tag" class="text-white font-medium text-[13px] md:text-[15px] tracking-wide mt-[1px]">
        ...
      </span>
    </a>
  </div>
</nav>`;
}

export function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add(
        "bg-[#101010]/70",
        "backdrop-blur-xl",
        "border-b",
        "border-white/5",
      );
    } else {
      nav.classList.remove(
        "bg-[#101010]/70",
        "backdrop-blur-xl",
        "border-b",
        "border-white/5",
      );
    }
  });
}
