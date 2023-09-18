import React, { ReactNode } from "react";

const ContainContent: React.FC<{ children: ReactNode; path: string }> = ({
  children,
  path,
}) => {
  const user =
    localStorage.getItem("username")?.split(" ")[0].toLowerCase() || "user";
  return (
    <div className="relative text-lg">
      <span className="select-none leading-none font-semibold font-sans text-[var(--green-two)]">
        ┌──({user}@web) ─{" "}
      </span>
      <span className="select-none font-semibold text-white font-sans">
        [~{path}]
      </span>
      <div className="leading-none">
        <span className="select-none font-sans text-[var(--green-two)]">
          └─$
        </span>
        <div className="ml-3 inline-block">{children}</div>
      </div>
    </div>
  );
};

export default ContainContent;
