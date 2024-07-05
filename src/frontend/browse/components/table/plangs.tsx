// biome-ignore lint/style/useImportType: h is needed for JSX.
import { Fragment, h } from "preact";

import { useContext } from "preact/hooks";
import type { VID_Plang } from "src/schemas/entities";
import { Plangs } from "../../../shared/state/context";

import "./plangs.css";

type PlangsTableProps = {
  pl_ids: VID_Plang[];
  allRowsCount: number;
};

export function PlangsTable({ pl_ids, allRowsCount }: PlangsTableProps) {
  const pg = useContext(Plangs);
  if (!pg || pg === "error") return <></>;

  const rows: h.JSX.Element[] = [];

  for (const vid of pl_ids) {
    const pl = pg.v_plang.get(vid);
    if (!pl) {
      console.error("Missing plang", vid);
      continue;
    }

    const logo = pl.images?.find((img) => img.kind === "logo");
    const homepage = pl.websites?.find((site) => site.kind === "homepage");
    const wikipage = pl.websites?.find((site) => site.kind === "wikipedia");

    rows.push(
      <tr>
        <td>{logo ? <img src={logo.url} alt={pl.name} class="logo" /> : null}</td>
        <td>{pl.name}</td>
        <td>
          {!homepage ? null : (
            <a class="plang" href={homepage.href} key="homepage" target="_blank">
              home
            </a>
          )}
          {!wikipage ? null : (
            <a class="plang" href={wikipage.href} key="wikipedia" target="_blank">
              wiki
            </a>
          )}
        </td>
      </tr>,
    );
  }

  return (
    <table class="plangsTable">
      <caption>
        Showing {pl_ids.length} of {allRowsCount} languages.
      </caption>
      <thead>
        <tr>
          <th>Logo</th>
          <th>Lang</th>
          <th>Websites</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
