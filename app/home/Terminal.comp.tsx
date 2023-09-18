import TerminalLayout from "@/components/layout/TerminalLayout.comp";
import React, { ReactNode, useRef, useState } from "react";
import InitialTerminalLog from "./InitialTerminalLog.comp";
import ContainContent from "@/components/container/ContainContent.comp";
import data from "../../data.json";
import Link from "next/link";
import ContactInput from "@/components/contact-input/ContactInput.comp";

interface ItermLog { log: ReactNode; path: string; command: string }

const Terminal: React.FC<{ showTerminal: Function, initValue: string }> = ({
  showTerminal,
  ...others
}) => {
  const [value, setValue] = useState("");
  const [path, setPath] = useState("/");
  const showForm = useRef<false | "business" | "contact">(false);
  const [terminalLog, setTerminalLog] = useState<ItermLog[]>(
    localStorage.getItem("username")
      ? []
      : [{ log: <InitialTerminalLog />, path: "/", command: "help" }]
  );

  const commandPressHandler = (key: string) => {
    if (key !== "Enter") return;
    switch (value.trim().toLowerCase()) {
      case "clear":
        setTerminalLog([]);
        setValue("");
        return;
      case "help":
        if (path === "/")
          setTerminalLog((prevLog) => [
            ...prevLog,
            { log: <InitialTerminalLog />, path, command: value },
          ]);
          else {
            const x = data.terminal.commands.find((cmd) => cmd.name === path)
            // @ts-ignore
            x?.help && setTerminalLog((prevLog) => [...prevLog, {log: Object.keys(x.help).map(key => <div className="" key={key}><span>{key}</span><span>{x.help[key]}</span></div>), path, command: value}])
          }
        setValue("");
        return;
      case "portfolio":
        setPath("/portfolio");
        setValue("");
        setTerminalLog((prevLog) => [
          ...prevLog,
          { log: "", path, command: value },
        ]);
        return;
      case "services":
        setPath("/services");
        setValue("");
        setTerminalLog((prevLog) => [
          ...prevLog,
          { log: "", path, command: value },
        ]);
        return;
      case "about":
        setTerminalLog((prevLog) => [
          ...prevLog,
          {
            log: <p>{data.user.long_desc || data.user.short_desc}</p>,
            path,
            command: value,
          },
        ]);
        setValue("");
        return;
      case "socials":
        setTerminalLog((prevLog) => [
          ...prevLog,
          {
            log: data.user.socials.map(({ name, profile_url }) => (
              <p className="w-[40rem] flex justify-between" key={profile_url}>
                <span>{name}</span>
                <Link href={profile_url} target="_blank">
                  {profile_url}
                </Link>
              </p>
            )),
            path,
            command: value,
          },
        ]);
        setValue("");
        return;
      case "blog":
        setPath("/blog");
        setValue("");
        return;
      case "business":
        setPath("/business");
        setValue("");
        showForm.current = "business";
        return;
      case "contact":
        setPath("/contact");
        setValue("");
        showForm.current = "contact";
        return;
      case "set-name":
        setTerminalLog((prevLog) => [
          ...prevLog,
          {
            log: (
              <p>
                Please attach name string with set-name command. i.e. set-name
                John Paul
              </p>
            ),
            path,
            command: value,
          },
        ]);
        return;
      case "exit":
        showTerminal(false);
        return;
      default:
        if (value.includes("set-name")) {
          const name = value.replace("set-name", "").trim();
          if (name === 'reset') localStorage.removeItem('username');
          else localStorage.setItem("username", name);
          setValue("");
          setTerminalLog((prevLog) => [
            ...prevLog,
            { log: <p>Name {name === 'reset' ? 'reset' : 'set'} successfully</p>, path, command: value },
          ]);
        } else if (value.includes("cd")) {
          let dir = value.replace("cd", "").replace('..', '').replace('/', '').toLowerCase().trim();
          const dirArr = [
            "",
            "portfolio",
            "services",
            "blog",
            "business",
            "contact",
          ];
          if (dirArr.includes(dir)) {
            setPath(`/${dir}`);
            setTerminalLog((prevLog) => [
              ...prevLog,
              { log: "", path: path, command: value },
            ]);
          } else
            setTerminalLog((prevLog) => [
              ...prevLog,
              {
                log: (
                  <p>
                    {dir} is not a valid directory. Valid directories are{" "}
                    {dirArr.join(", ")}
                  </p>
                ),
                path,
                command: value,
              },
            ]);
          setValue("");
        } else {
          setTerminalLog((prevLog) => [
            ...prevLog,
            {
              log: <p>`{value}` is not a valid command</p>,
              path,
              command: value,
            },
          ]);
          setValue("");
        }
    }
  };

  return (
    <TerminalLayout {...others}>
      <ul className="text-lg space-y-3">
        {terminalLog.map(({ log, path, command }, index) => (
          <li key={index}>
            <ContainContent path={path}>{command}</ContainContent>
            {log}
          </li>
        ))}
      </ul>
      <ContainContent path={path}>
        {showForm.current === "business" ? (
          <ContactInput type="formal" />
        ) : showForm.current === "contact" ? (
          <ContactInput type="casual" />
        ) : (
          <input
            type="text"
            className="border-none outline-none pb-4 w-full bg-transparent"
            autoFocus
            spellCheck={false}
            value={value}
            onKeyDown={(e) => commandPressHandler(e.key)}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </ContainContent>
    </TerminalLayout>
  );
};

export default Terminal;
