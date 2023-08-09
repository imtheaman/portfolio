import Link from "next/link";
import React, { HTMLAttributeAnchorTarget, MouseEvent, MouseEventHandler, ReactNode } from "react";

const LinkAsBtn: React.FC<{
  target?: HTMLAttributeAnchorTarget
  href: string;
  className?: string;
  children: ReactNode;
}> = ({ href, className, children, target}) => {
  // const classnames = reverted
  //   ? "bg-transparent border border-transparent hover:border-[var(--green-two)] hover:text-black hover:drop-shadow-2xl hover:bg-[var(--green-two)]"
  //   : "hover:bg-transparent border border-transparent hover:border-[var(--green-two)] text-black hover:text-[var(--green-two)] drop-shadow-2xl bg-[var(--green-two)]";
  return (
    // <div className={`-skew-x-12 cursor-pointer ${classnames}`}>
    <Link
      href={href}
      target={target || '_self'}
      className={`cyber-button-small bg-green fg-gray ${className || ''}`}
    >
      {children}
      <span className="glitchtext">{children}</span>
      <span className="tag">R25</span>
    </Link>
    // </div>
  );
};

export default LinkAsBtn;

// <div className={`-skew-x-12 cursor-pointer ${classnames}`}>
//  <button style={{
//  clipPath: 'polygon(10% 0px, 100% 0px, 100% 80%, 90% 100%, 0px 100%, 0px 20%)',
// }} className={`px-3 py-1 ${classnames} ${className}`} onClick={onClick}>{children}</button>
// </div>
