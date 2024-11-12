import languishData from "./languish-data.json" with { type: "json" };
import type { LanguishData, LanguishWeights, YearQuarter } from "./types";

export const DEFAULT_WEIGHTS: LanguishWeights = { ghIssues: 1.0, ghPRs: 0, ghStars: 1.0, soQuestions: 1.0 };

/** A Wrapper for all the data in Languish's keys.csv. */
export class Languish {
  constructor(public readonly data: LanguishData) {}

  /**
   * Obtain the languages by ranking, based on the given date and weights.
   * Returns an array of language names (github-linguist names) and the calculated ranking.
   */
  byRanking(targetDate: YearQuarter, weights: LanguishWeights = DEFAULT_WEIGHTS): [string, number][] {
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
}

export const LG_LANGS = new Languish(languishData as LanguishData);
