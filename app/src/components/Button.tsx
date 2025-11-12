import "./Button.css";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <div>
      <button className="button">{label}</button>
    </div>
  );
}
