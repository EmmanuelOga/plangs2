// This is a global variable that is set by the build system.
declare const PLANGS_ENV: "dev" | "prod";

// Declare some globals that are called as the page is being loaded
// to avoid flashing the wrong content.
//
// This causes some layout shift during the page load, which may
// add a few ms to the page load time, but it's worth it to avoid
// the flicker.
interface Window {
  fragment: FragmentTracker;
  restoreFilters: () => void;
  restoreHamburguer: () => void;
  restoreLightMode: () => void;
  restoreVertexInfo: () => void;
}
