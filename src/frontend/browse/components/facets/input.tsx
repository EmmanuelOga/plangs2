import "./input.css";

export type InputFacetProps = {
  title: string;
  onChange?: (query: string) => void;
};

export function InputFacet({ title, onChange }: InputFacetProps) {
  const handle = (ev: { currentTarget: { value: string } }) => onChange?.(ev.currentTarget.value);

  return (
    <div class="browse-facet input-facet">
      <div class="title">{title}</div>
      <input type="search" onKeyUp={handle} onInput={handle} placeholder="Language..." />
    </div>
  );
}
