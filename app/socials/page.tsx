import MainLayout from "@/components/layout/MainLayout.comp";
import React from "react";
import data from '../../data.json';
import SocialCard from "./SocialCard.comp";

const Socials = () => {
  return (
    <MainLayout heading="Socials">
      <div className="flex space-x-8 justify-center items-center">
        {data.user.socials.map((social, index) => <SocialCard key={index} {...social} />)}
      </div>
    </MainLayout>
  );
};

export default Socials;
