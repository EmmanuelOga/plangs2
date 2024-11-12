import languishData from "./languish-data.json" with { type: "json" };
import type { LanguishData, LanguishItem, LanguishKeys, LanguishWeights, YearQuarter } from "./types";

export const DEFAULT_WEIGHTS: LanguishWeights = { ghIssues: 1.0, ghPRs: 0, ghStars: 1.0, soQuestions: 1.0 };

/** A Wrapper for all the data in Languish's keys.csv. */
export class Languish {
  #keysByName?: Map<string, LanguishKeys>;

  constructor(public readonly data: LanguishData) {}

  /** Returns a Map of LanguishItem by Github Plang Name. */
  get keysByName(): Map<string, LanguishKeys> {
    return (this.#keysByName ??= new Map(this.data.translations.rows.map(row => [row[0], row])));
  }

  /** Returns tuples [githubLangName, score], sorted by descending score (first item should be #1 in ranking). */
  weights(targetDate: YearQuarter, weights: LanguishWeights = DEFAULT_WEIGHTS): [string, number][] {
    type GHName = string;
    type Ranking = number;
    const rankings: Map<GHName, Ranking> = new Map();

    for (const [name, date, issues, pulls, soQuestions, stars] of this.data.items.rows) {
      if (date !== targetDate) continue;
      const ranking = issues * weights.ghIssues + pulls * weights.ghPRs + soQuestions * weights.soQuestions + stars * weights.ghStars;
      rankings.set(name, ranking);
    }

    type RankingEntry = [GHName, Ranking];
    return [...rankings.entries()].sort((a: RankingEntry, b: RankingEntry) => b[1] - a[1]);
  }

  /**
   * Obtain the languages by ranking, based on the given date and weights.
   * Returns an array of language names (github-linguist names) and the calculated ranking,
   * to allow for quick ranking lookup. The item with ranking #1 has the highest score, etc.
   */
  rankingsMap(targetDate: YearQuarter, weights: LanguishWeights = DEFAULT_WEIGHTS): Map<string, number> {
    const rankings = this.weights(targetDate, weights);
    const map = new Map<string, number>();
    let i = 1;
    for (const [name, _] of rankings) map.set(name, i++);
    return map;
  }
}

export const LG_LANGS = new Languish(languishData as LanguishData);
