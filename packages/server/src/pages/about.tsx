export function About() {
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate.",
    "Velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in.",
    "Culpa qui officia deserunt mollit anim id est laborum.",
  ];

  function para(n: number, j = 0) {
    return Array.from({ length: n }, (_, i) => {
      return text[(i + j) % text.length];
    }).join(" ");
  }

  return (
    <>
      <div />
      <article id="about" class="common-content">
        {Array.from({ length: 5 }, (_, i) => (
          <>
            <h2>{para(1, i)}</h2>
            <p>{para(20 + Math.abs(Math.sin(i) * 20))}</p>
          </>
        ))}
      </article>
      <div />
    </>
  );
}
