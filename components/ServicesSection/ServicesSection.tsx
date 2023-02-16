"use client";

import React from "react";
import ServiceComponent from "./ServiceComponent/ServiceComponent";

import {
  SearchIcon,
  Inventory2OutlinedIcon,
  SendOutlinedIcon,
  SecurityOutlinedIcon,
} from "../../utils/MaterialIcons";

import {
  Service1,
  Service2,
  Service3,
  Service4,
} from "../../utils/CategoryAssets";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <div className="mx-10 mb-5">
      <h4 className="mb-5 text-2xl font-bold tracking-wide md:text-xl lg:text-3xl">
        Our extra services
      </h4>

      <div className="flex flex-wrap justify-between">
        <ServiceComponent
          img={Service1}
          text1="Source from"
          text2="Industry Hubs"
          icon={<SearchIcon className="text-2xl font-bold lg:text-3xl" />}
        />

        <ServiceComponent
          img={Service2}
          text1="Customize Your"
          text2="Products"
          icon={
            <Inventory2OutlinedIcon className="text-2xl font-bold lg:text-3xl" />
          }
        />

        <ServiceComponent
          img={Service3}
          text1="Fast, reliable shipping"
          text2="by ocean or air"
          icon={<SendOutlinedIcon className="text-2xl font-bold lg:text-3xl" />}
        />

        <ServiceComponent
          img={Service4}
          text1="Product monitoring"
          text2="and inspection"
          icon={
            <SecurityOutlinedIcon className="text-2xl font-bold lg:text-3xl" />
          }
        />
      </div>
    </div>
  );
};

export default ServicesSection;
