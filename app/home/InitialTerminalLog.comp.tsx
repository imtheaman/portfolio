import React, { Fragment, ReactNode } from "react";
import data from "../../data.json";

const HelpCommand: React.FC<{
  cmd: string;
  desc: string;
  children?: ReactNode;
  indent?: number;
}> = ({ cmd, desc, children = "", indent = 0 }) => {
  const marginLeft = indent*2;
  return (
    <Fragment key={cmd}>
      <p className={`flex justify-between w-[60rem]`} style={{marginLeft: `${marginLeft}rem`}}>
        <span>| {cmd}:</span> <span>{desc} |</span>
      </p>
      {children}
    </Fragment>
  );
};

const InitialTerminalLog = () => {
  return (
    <>
      <div className="text-3xl">
        Welcome {localStorage.getItem("username") || "User"},
      </div>
      <div className="w-[60rem]">
        You can use the terminal in such a way that each command typed by you
        will show you the related information. below are the commands available:
      </div>
      <div>
        {data.terminal.commands.map(({ name, desc, help }) => (
          <HelpCommand key={name} cmd={name} desc={desc}>
            {help &&
              Object.keys(help).map((key) => (
                // @ts-ignore
                <HelpCommand key={key} cmd={key} desc={help[key]} indent={1}>

                </HelpCommand>
              ))}
          </HelpCommand>
        ))}
        <p className="flex justify-between w-[60rem]">
          <span>| clear:</span> <span>To clear contents on the screen |</span>
        </p>
        <p className="flex justify-between w-[60rem]">
          <span>| exit:</span> <span>To exit the terminal mode |</span>
        </p>
      </div>
    </>
  );
};

export default InitialTerminalLog;
