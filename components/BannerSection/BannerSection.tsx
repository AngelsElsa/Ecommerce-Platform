"use client";

import React from "react";
import BannerImg from "../../public/assets/banner-board.png";
import { PersonIcon } from "@/utils/MaterialIcons";

import Image from "next/image";
import BannerCategoryButton from "./BannerCategoryButton/BannerCategoryButton";

type Props = {};

const BannerSection = (props: Props) => {
  const BannerCategoryStyles =
    "w-full rounded-lg text-sm lg:text-base flex-1 text-gray-600 pl-5 text-start text-black hover:bg-gray-200";

  const categoryItemsArray = [
    "Clothes and wear",
    "Home interiors",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="flex h-60 w-full justify-evenly md:h-120 md:py-10">
      {/* Desktop Category List */}
      <div className="hidden w-1/6 flex-col md:flex">
        <button className="w-full flex-1 rounded-lg bg-[#E5F1FF] pl-5 text-start font-semibold text-black">
          Automobiles
        </button>
        {categoryItemsArray.map((title) => {
          return (
            <BannerCategoryButton
              key={title}
              title={title}
              styles={BannerCategoryStyles}
            />
          );
        })}
      </div>

      {/* Banner Image */}
      <div className="w-full text-black md:w-3/6">
        <h4 className="absolute ml-12 mt-16 text-xl">Latest Trending</h4>
        <h1 className="absolute ml-12 mt-24 text-3xl font-bold tracking-wide">
          Electronic items
        </h1>
        <button className="absolute mt-36 ml-12 rounded-md bg-white px-4 py-2 tracking-wide shadow-lg hover:bg-gray-200">
          Learn more
        </button>
        <Image
          priority={true}
          unoptimized={true}
          src={BannerImg}
          className="h-60 w-full sm:h-[100%] sm:object-cover"
          alt="banner"
        />
      </div>

      {/* Desktop Login Section */}
      <div className="relative bottom-2 hidden w-1/6 md:block">
        <div className="mb-2 h-1/2 flex-col justify-center rounded-md border-2 bg-[#E3F0FF] shadow-lg shadow-gray-400">
          <div className="m-4 flex h-2/5 items-center justify-around">
            <PersonIcon className="h-12 w-12 rounded-full bg-[#C7E1FF] p-3 text-white xl:h-16 xl:w-16" />
            <p className="md:text-normal hidden pl-4 lg:block lg:text-lg xl:text-xl">
              Hi&apos; user <br /> let&#39;s get started
            </p>
            <p className="pl-4 text-lg lg:hidden">
              Hi&apos; <br />
              user
            </p>
          </div>

          <div className="flex h-2/5 w-full flex-wrap items-center justify-center">
            <button className="mb-1 flex w-5/6 content-center justify-center rounded-lg bg-gradient-to-b from-[#127FFF] to-[#0067FF] py-1 text-white hover:bg-blue-600">
              Join now
            </button>
            <button className="w-5/6 rounded-lg border-2 border-[#DEE2E7] bg-white py-1 text-[#0067FF] hover:bg-gray-100">
              Log in
            </button>
          </div>
        </div>

        <div className="h-1/2 w-full text-white">
          <div className="mb-2 flex h-1/2 items-center rounded-xl bg-[#F38332] text-start">
            <p className="px-10 md:px-5 md:text-base lg:text-xl">
              Get US $10 off with a new supplier
            </p>
          </div>
          <div className="flex h-1/2 items-center rounded-xl bg-[#55BDC3] text-start">
            <p className="px-10 md:px-5 md:text-base lg:text-xl">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
