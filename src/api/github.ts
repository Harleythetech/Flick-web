import { animate, stagger } from "motion";

const REPO_OWNER = "ultraelectronica";
const REPO_NAME = "Flick";

export async function fetchLatestRelease() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
    );
    if (!res.ok) return;
    const release = await res.json();

    const tagName: string = release.tag_name;
    const apkAsset = release.assets?.find((a: { name: string }) =>
      a.name.endsWith(".apk"),
    );

    const versionTag = document.getElementById("version-tag");
    if (versionTag) {
      versionTag.textContent = `v${tagName} • Android APK`;
    }

    const downloadBtn = document.getElementById(
      "download-btn",
    ) as HTMLButtonElement | null;
    if (downloadBtn) {
      const downloadUrl =
        apkAsset?.browser_download_url ??
        `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/${encodeURIComponent(tagName)}`;
      downloadBtn.addEventListener("click", () => {
        window.open(downloadUrl, "_blank", "noopener");
      });
    }
  } catch {
    // Silently fail — keep the loading placeholder
  }
}

export async function fetchContributors() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors`,
    );
    if (!res.ok) return;
    const contributors = await res.json();
    if (!Array.isArray(contributors)) return;

    const grid = document.getElementById("contributors-grid");
    if (!grid) return;

    grid.innerHTML = contributors
      .map(
        (c: {
          login: string;
          avatar_url: string;
          html_url: string;
          contributions: number;
        }) => `
        <a
          href="${c.html_url}"
          target="_blank"
          rel="noopener"
          class="group flex flex-col items-center p-4 rounded-2xl border border-transparent hover:bg-[#1A1A1A] hover:border-white/5 transition-all duration-300 hover:-translate-y-1 w-28 sm:w-32 shrink-0"
        >
          <div class="relative mb-3">
            <img
              src="${c.avatar_url}&s=80"
              alt="${c.login}"
              class="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-white/5 group-hover:ring-white/30 transition-all duration-300 relative z-10"
            />
            <div class="absolute inset-0 rounded-full bg-white/0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 z-0"></div>
          </div>

          <span class="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors truncate w-full text-center tracking-tight">
            ${c.login}
          </span>

          <span class="text-[9px] sm:text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1 group-hover:text-gray-500 transition-colors">
            ${c.contributions} commits
          </span>
        </a>`,
      )
      .join("");

    const cards = Array.from(grid.children) as HTMLElement[];
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px) scale(0.9)";
    });
    animate(
      cards,
      { opacity: 1, y: 0, scale: 1 },
      { duration: 0.5, delay: stagger(0.05, { startDelay: 0.1 }), ease: [0.22, 1, 0.36, 1] },
    );
  } catch {
    // Silently fail
  }
}

export async function fetchLatestCommit() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=1`,
    );
    if (!res.ok) return;
    const commits = await res.json();
    if (!Array.isArray(commits) || commits.length === 0) return;

    const shortSha: string = commits[0].sha.substring(0, 7);

    const navVersionTag = document.getElementById("nav-version-tag");
    if (navVersionTag) {
      navVersionTag.textContent = shortSha;
    }
  } catch {
    // Silently fail — keep the placeholder
  }
}
