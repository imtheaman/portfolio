"use client";
import React, { useReducer, useState } from "react";
import Button from "../../components/button/Button.comp";
import Input from "../../components/input/Input.comp";
import TextArea from "@/components/input/Textarea.comp";
import MainLayout from "@/components/layout/MainLayout.comp";

export interface IData {
  name: string;
  contact: string;
  message: string;
}

const reducer = (data: IData, action: { type: keyof IData; value: string }) => {
  switch (action.type) {
    case "name":
      return { ...data, name: action.value };
    case "contact":
      return { ...data, contact: action.value };
    case "message":
      return { ...data, message: action.value };
  }
};

const init = { name: "", contact: "", message: "" };

const Business = () => {
  const [data, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <MainLayout
      heading={
        <span>
          Have any business deal?
          <br />
          <span className="text-lg font-normal">Let&apos;s connect</span>
        </span>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[40rem] w-full self-center space-y-6">
        <Input
          value={data.name}
          onChange={(value) => dispatch({ type: "name", value })}
          placeholder="Name"
        />
        <Input
          value={data.contact}
          onChange={(value) => dispatch({ type: "contact", value })}
          placeholder="Contact"
        />
        <TextArea
          value={data.message}
          onChange={(value) => dispatch({ type: "message", value })}
          placeholder="Message"
        />
        <Button className="hover-animate self-end" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </MainLayout>
  );
};

export default Business;
