import React from "react";

const Tag: React.FC<{ tag: string; }> = ({
  tag,
  ...others
}) => {
  return (
    <span>
      <input name={tag} id={tag} type="checkbox" {...others} />
      <label
        htmlFor={tag}
        className="text-[var(--green-one)] capitalize hover:text-[var(--green-two)] cursor-pointer"
      >
        {tag}
      </label>
    </span>
  );
};

export default Tag;
