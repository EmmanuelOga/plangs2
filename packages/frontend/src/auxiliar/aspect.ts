/**
 * Compute an approximate aspect ratio that is the closest to the current one.
 * This avoids displaying less intelligible aspect ratios like 999:577, etc.
 */
function approxRatio(x: number, y: number): string {
  const targetRatio = x / y;
  let bestDiff = Number.POSITIVE_INFINITY;
  let bestRatio: [number, number] = [1, 1];
  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      const currentRatio = a / b;
      const diff = Math.abs(targetRatio - currentRatio);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestRatio = [a, b];
      }
    }
  }
  return `${bestRatio[0]}:${bestRatio[1]}`;
}

/** Appends a div with id "debug" that will contain aspec ratio info. */
export function debugAspectRatio() {
  const debugDiv = document.createElement("div");
  debugDiv.id = "debug";
  debugDiv.classList.add("absolute", "text-white", "bg-red-500/50", "bottom-0", "right-0");

  const updater = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    debugDiv.textContent = `Aspect Ratio: ${aspectRatio.toFixed(2)} ~(${approxRatio(width, height)}) `;
  };

  window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(debugDiv);
    window.addEventListener("resize", updater);
    updater();
  });
}
