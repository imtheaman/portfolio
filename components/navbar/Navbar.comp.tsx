import React from "react";
import LinkAsBtn from "../button/LinkAsBtn.comp";

const Navbar: React.FC<{ navs: Object; className?: string }> = ({
  navs,
  className,
}) => {
  return (
    <nav
      className={`flex w-full px-12 py-8 items-center justify-between ${
        className || ""
      }`}
    >
      <ul className="flex space-x-6">
        {Object.keys(navs).map((navUrl) => (
          <li key={navUrl}>
            <LinkAsBtn href={navUrl}>
              {
                //@ts-ignore
                navs[navUrl]
              }
            </LinkAsBtn>
          </li>
        ))}
      </ul>
      <LinkAsBtn className="active" href="/business">
        Connect Now
      </LinkAsBtn>
    </nav>
  );
};

export default Navbar;
