import type { VID_Plang } from "@plangs/graph/schema";

export type PlangInfoProps = {
  vid?: VID_Plang;
};

/** Display a PL information, if the vid is known. */
export function PlangInfo({ vid }: PlangInfoProps) {
  if (!vid) {
    return <p>Select a language to show more information.</p>;
  }

  return <div>TODO: {vid}</div>;
}
