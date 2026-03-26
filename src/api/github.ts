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
