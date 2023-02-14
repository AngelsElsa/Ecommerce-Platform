"use client";

import React from "react";
import BannerImg from "../../public/assets/banner-board.png";
import { PersonIcon } from "@/utils/MaterialIcons";

import Image from "next/image";

type Props = {};

const BannerSection = (props: Props) => {
  const BannerCategoryStyles =
    "w-full rounded-md flex-1 text-gray-600 pl-5 text-start text-black hover:bg-gray-200";

  return (
    <div className="flex h-120 w-full justify-evenly">
      {/* Desktop Category List */}
      <div className="hidden w-1/6 flex-col md:flex">
        <button className="w-full flex-1 rounded-md bg-[#E5F1FF] pl-5 text-start text-black">
          Automobiles
        </button>
        <button className={BannerCategoryStyles}>Clothes and wear</button>
        <button className={BannerCategoryStyles}>Home interiors</button>
        <button className={BannerCategoryStyles}>Computer and tech</button>
        <button className={BannerCategoryStyles}>Tools, equipments</button>
        <button className={BannerCategoryStyles}>Sports and outdoor</button>
        <button className={BannerCategoryStyles}>Animal and pets</button>
        <button className={BannerCategoryStyles}>Machinery tools</button>
        <button className={BannerCategoryStyles}>More category</button>
      </div>

      {/* Banner Image */}
      <div className="md:w-3/6">
        <h4 className="absolute ml-12 mt-16 text-xl">Latest Trending</h4>
        <h1 className="absolute ml-12 mt-24 text-3xl font-black tracking-widest">
          Electronic items
        </h1>
        <button className="absolute mt-36 ml-12 rounded-md bg-white px-4 py-2 tracking-wide hover:bg-gray-200">
          Learn more
        </button>
        <Image
          unoptimized={true}
          src={BannerImg}
          className="h-[100%] w-full object-cover"
          alt="banner"
        />
      </div>

      {/* Desktop Login Section */}
      <div className="relative bottom-2 hidden w-1/6 md:block">
        <div className="mb-2 h-1/2 flex-col justify-center rounded-md border-2 border-black bg-[#E3F0FF]">
          <div className="m-4 flex h-2/5 items-center justify-around">
            <PersonIcon className="h-12 w-12 rounded-full bg-[#C7E1FF] p-3 text-white xl:h-16 xl:w-16" />
            <p className="md:text-normal hidden pl-4 lg:block lg:text-lg xl:text-xl">
              Hi, user <br /> let's get started
            </p>
            <p className="pl-4 text-lg lg:hidden">
              Hi, <br />
              user
            </p>
          </div>

          <div className="flex h-2/5 w-full flex-wrap justify-center">
            <button className="mb-2 flex w-5/6 content-center justify-center rounded-lg bg-gradient-to-b from-[#127FFF] to-[#0067FF] py-2 text-white hover:bg-blue-600">
              Join now
            </button>
            <button className="w-5/6 rounded-lg border-2 border-[#DEE2E7] bg-white py-2 text-[#0067FF] hover:bg-gray-100">
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
