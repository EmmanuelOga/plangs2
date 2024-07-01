import { Fragment, h } from "preact";

export type OptionsFacetProps = {
  title: string;
  options: string[];
};

export function OptionsFacet({ title, options }: OptionsFacetProps) {
  return <>{title}</>;
}
