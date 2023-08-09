import React, { MouseEvent, MouseEventHandler, ReactNode } from "react";

const Button: React.FC<{
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  reverted?: boolean;
  children: ReactNode;
}> = ({ onClick, reverted = false, className, children}) => {
  const classnames = reverted
    ? "bg-transparent border border-transparent hover:border-[var(--green-two)] hover:text-black hover:drop-shadow-2xl hover:bg-[var(--green-two)]"
    : "hover:bg-transparent border border-transparent hover:border-[var(--green-two)] text-black hover:text-[var(--green-two)] drop-shadow-2xl bg-[var(--green-two)]";
  return (
    // <div className={`-skew-x-12 cursor-pointer ${classnames}`}>
    <button
      className={`cyber-button-small bg-green fg-gray ${className}`}
      onClick={onClick}
    >
      {children}
      <span className="glitchtext">{children}</span>
      <span className="tag">R25</span>
    </button>
    // </div>
  );
};

export default Button;

// <div className={`-skew-x-12 cursor-pointer ${classnames}`}>
//  <button style={{
//  clipPath: 'polygon(10% 0px, 100% 0px, 100% 80%, 90% 100%, 0px 100%, 0px 20%)',
// }} className={`px-3 py-1 ${classnames} ${className}`} onClick={onClick}>{children}</button>
// </div>
