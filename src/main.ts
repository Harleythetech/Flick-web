import "./style.css";
import { Navbar, initNavbarScroll } from "./components/navbar";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Specs } from "./components/specs";
import { Footer } from "./components/footer";
import { fetchLatestRelease, fetchLatestCommit } from "./api/github";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${Features()}
  ${Specs()}
  ${Footer()}
`;

initNavbarScroll();
fetchLatestRelease();
fetchLatestCommit();
