import type { ComponentChildren } from "preact";

export function Table({ headers, children }: { headers: string[]; children: ComponentChildren }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
