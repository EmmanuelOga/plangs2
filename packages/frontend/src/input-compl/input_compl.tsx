import register from "preact-custom-element";

import "./input_compl.css";

export type InputComplProps = {
  name: string;

  /** Array of [data, label] elements. */
  complData: [string, string][];

  /** Setting this forces a render, without having to replace other data. */
  version: number;
};

export function InputCompl({ name, complData }: InputComplProps) {
  return (
    <>
      <input type="search" name={name} />
      <div class="list">
        {complData?.map(([data, label]) => (
          <div class="item" key={data}>{label}</div>
        ))}
      </div>
    </>
  );
}

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

register(InputCompl, "input-compl", ["name", "complData", "version"], { shadow: false });
