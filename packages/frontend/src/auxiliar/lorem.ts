export function randomWord() {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const wordLength = Math.floor(Math.random() * 7) + 3; // Random word length between 3 and 9

  return Array.from({ length: wordLength })
    .map(() => (Math.random() > 0.4 ? pick(consonants) : pick(vowels)))
    .join("");
}

export function loremIpsum(words: number): string {
  return Array.from({ length: words })
    .map(() => randomWord())
    .join(" ");
}
