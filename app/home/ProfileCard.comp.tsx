import React from "react";
import data from "../../data.json";
import CommandInput from "./CommandInput.comp";

const ProfileCard = () => {
  return (
    <div className="rounded-xl self-center w-full max-w-xl sm:mx-auto md:mx-16">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-3 text-[var(--green-two)]">
        {data.user.name}
        <span className="cyber-glitch-3">_</span>
      </h1>
      <h2 className="">{data.user.short_desc}</h2>
      <p className="mt-6 mb-3">
        Type commands followed by Enter to get more information about me (type{" "}
        <span className="underline">help</span> if you need help)...
      </p>
      <CommandInput />
    </div>
  );
};

export default ProfileCard;
