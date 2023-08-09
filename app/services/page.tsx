"use client";
import HorizontalScrollLayout from "@/components/layout/horizontal-scroll/HorizontalScrollLayout.comp";
import MainLayout from "@/components/layout/MainLayout.comp";
import React from "react";
import data from '../../data.json'
import ServiceCard from "./ServiceCard.comp";

const Services = () => {
  return (
    <MainLayout heading="Services That I Offer">
      <div className="px-8 w-full">
        <HorizontalScrollLayout className="items-stretch" slidesToShow={3}>
          {data.services.map(service => <ServiceCard {...service} />)}
        </HorizontalScrollLayout>
      </div>
    </MainLayout>
  );
};

export default Services;
