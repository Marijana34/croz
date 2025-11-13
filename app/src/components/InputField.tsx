import type { ChangeEvent } from "react";
import "../components/InputField.css";

interface InputFieldProps {
  label: string;
  name: string;
  className?: string;
  error?: string;
}

export default function InputField({ label, name, className, error }: InputFieldProps) {
  return (
    <div className={`container ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
