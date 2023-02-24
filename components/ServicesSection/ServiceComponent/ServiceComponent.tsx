"use client";

import React, { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  text1: string;
  text2: string;
  img: StaticImageData;
  icon: ReactElement;
}

const ServiceComponent: FC<Props> = ({ text1, text2, img, icon }) => {
  return (
    <div className="mb-5 h-full w-5/12 rounded-lg md:w-1/5">
      <div className="h-2/3 w-full">
        <Image
          src={img}
          className="w-full rounded-t-lg bg-black"
          alt="services"
        />
      </div>

      <div className="flex h-20 items-center justify-between rounded-b-lg border-2 px-2 md:h-20 lg:h-24 lg:px-5">
        <h6 className="py-4 text-xs font-normal tracking-wide md:text-sm lg:text-base xl:text-lg">
          {text1}
          <br />
          {text2}
        </h6>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#8B96A5] bg-[#fff] text-gray-400 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-12 xl:w-12">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
