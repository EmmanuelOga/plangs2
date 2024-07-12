import register from "preact-custom-element";

export type InputComplProps = {
  complData: [string, string][];
}

export function InputCompl({ complData }: InputComplProps) {
  return <div>Input: {JSON.stringify(complData)}</div>;
}

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

register(InputCompl, "input-compl", ["complData"], { shadow: false });