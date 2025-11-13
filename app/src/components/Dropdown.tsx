import type { ChangeEvent } from "react";

interface DropdownProps {
  value: string;
  onValueChange: (value: string) => void;
  items: { value: string; label: string }[]; //Lista objekata koji imaju te parametre
}

export default function Dropdown({ items, value, onValueChange }: DropdownProps) {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <select value={value} onChange={onChange}>
      {items.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
