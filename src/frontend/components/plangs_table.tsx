// biome-ignore lint/style/useImportType: h is needed for JSX.
import { Fragment, h } from "preact";

import "./plangs_table.css";
import { useContext } from "preact/hooks";
import type { VID_Plang } from "src/schemas/entities";
import { Plangs } from "../state/plangs_context";

export function PlangsTable({ pl_ids }: { pl_ids: VID_Plang[] }) {
  const pg = useContext(Plangs);
  if (!pg || pg === "error") return <></>;

  const rows: h.JSX.Element[] = [];

  for (const vid of pl_ids) {
    const pl = pg.v_plang.get(vid);

    if (!pl) {
      console.error("Missing plang", vid);
      continue;
    }

    const logo = pg.plangLogo(vid);
    rows.push(
      <tr>
        <td>{logo ? <img src={logo.url} alt={pl.name} class="lang-logo" /> : null}</td>
        <td>{pl.name}</td>
      </tr>,
    );
  }

  return (
    <table class="plangsTable">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Lang</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
