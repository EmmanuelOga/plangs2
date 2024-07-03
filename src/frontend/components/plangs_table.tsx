// biome-ignore lint/style/useImportType: h is needed for JSX.
import { Fragment, h } from "preact";

import "./plangs_table.css";
import { useContext } from "preact/hooks";
import { Plangs } from "../state/plangsContext";

export function PlangsTable() {
  const pg = useContext(Plangs);
  if (!pg || pg === "error") return <></>;

  const rows: h.JSX.Element[] = [];

  for (const [vid, pl] of pg.v_plang) {
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
