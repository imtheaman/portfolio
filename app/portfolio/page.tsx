"use client";
import MainLayout from "@/components/layout/MainLayout.comp";
import HorizontalScrollLayout from "@/components/layout/horizontal-scroll/HorizontalScrollLayout.comp";
import React from "react";
import PortfolioCard from "./PortfolioCard.comp";
import data from "../../data.json";
import Tag from "./Tag.comp";

const Portfolio = () => {
  return (
    <MainLayout heading="Portfolio">
      <div className="px-8 w-full">
        <div className="flex justify-center space-x-8 mb-12 -mt-8 items-center">
          {data.portfolio.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <HorizontalScrollLayout slidesToShow={1}>
          {data.portfolio.data.map((work) => (
            <PortfolioCard {...work} />
          ))}
        </HorizontalScrollLayout>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
