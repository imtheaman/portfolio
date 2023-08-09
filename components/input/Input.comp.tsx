import React, {
  DetailedHTMLProps,
  Dispatch,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import "./index.css";

interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  value: string;
  onChange: Dispatch<any>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  reverted?: boolean;
  autoFocus?: boolean;
}

const Input: React.FC<IInput> = ({
  value,
  onChange,
  type = "text",
  reverted = false,
  placeholder,
  autoFocus = false,
  ...others
}) => {
  const classname1 = reverted
    ? "bg-[var(--green-one-dark)]"
    : "bg-[var(--green-two)]";
  const classname2 = reverted ? "bg-[var(--green-one-dark)]" : "bg-black";
  return (
    <div className={`input p-[0.1rem] ${classname1} w-full`}>
      <input
        placeholder={placeholder || ""}
        autoFocus={autoFocus}
        {...others}
        className={`input py-4 text-xl pl-5 ${classname2} placeholder:text-inherit w-full focus:outline-none`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
