import languishData from "./languish-data.json" with { type: "json" };
import type { LanguishData, LanguishKeys, LanguishWeights, YearQuarter } from "./types";

export const DEFAULT_WEIGHTS: LanguishWeights = { ghIssues: 1.0, ghPRs: 0, ghStars: 1.0, soQuestions: 1.0 };

/** Latest available ranking by the time we import it. */
export const LATEST_QUARTER = "2024Q4";

/** A Wrapper for all the data in Languish's keys.csv. */
export class Languish {
  #keysByName?: Map<string, LanguishKeys>;

  constructor(public readonly data: LanguishData) {}

  /** Returns a Map of LanguishItem by Github Plang Name. */
  get keysByName(): Map<string, LanguishKeys> {
    return (this.#keysByName ??= new Map(this.data.translations.rows.map(row => [row[0], row])));
  }

  /** Returns tuples [githubLangName, score], sorted by descending score (first item should be #1 in ranking). */
  scores(targetDate: YearQuarter, weights: LanguishWeights = DEFAULT_WEIGHTS): [string, number][] {
    type GHName = string;
    type Ranking = number;
    const scores: Map<GHName, Ranking> = new Map();

    const totals = this.data.sums.rows.find(row => row[0] === targetDate);

    if (!totals) throw new Error(`Missing sums for ${targetDate}`);

    for (const [name, date, issues, pulls, soQuestions, stars] of this.data.items.rows) {
      if (date !== targetDate) continue;

      const score =
        // GH Issues.
        (issues * weights.ghIssues) / totals[1] +
        // GH Pulls.
        (pulls * weights.ghPRs) / totals[2] +
        // GH Stars.
        (stars * weights.ghStars) / totals[3] +
        // SO Questions.
        (soQuestions * weights.soQuestions) / totals[4];

      scores.set(name, score);
    }

    type ScoreEntry = [GHName, Ranking];
    return [...scores.entries()].sort((a: ScoreEntry, b: ScoreEntry) => b[1] - a[1]);
  }

  /**
   * Obtain the languages by ranking, based on the given date and weights.
   * Returns an array of language names (github-linguist names) and the calculated ranking,
   * to allow for quick ranking lookup. The item with ranking #1 has the highest score, etc.
   */
  rankingsMap(targetDate: YearQuarter, weights: LanguishWeights = DEFAULT_WEIGHTS): Map<string, number> {
    const rankings = this.scores(targetDate, weights);
    const map = new Map<string, number>();
    let i = 1;
    for (const [name, _] of rankings) map.set(name, i++);
    return map;
  }

  rankings(): Rankings {
    const byKey = LG_LANGS.rankingsMap(LATEST_QUARTER);
    const byRanking: Map<number, string> = new Map();
    for (const [k, v] of byKey.entries()) byRanking.set(v, k);
    return { rankByGHName: byKey, ghNameByRank: byRanking };
  }
}

/** Maps to lookup language by ranking and ranking by language. */
export type Rankings = { rankByGHName: Map<string, number>; ghNameByRank: Map<number, string> };

export const LG_LANGS = new Languish(languishData as LanguishData);
