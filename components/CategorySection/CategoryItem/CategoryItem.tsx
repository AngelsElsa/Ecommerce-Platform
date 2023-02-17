import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  productImg1: StaticImageData;
  productImg2: StaticImageData;
  productTitle1: string;
  productTitle2: string;
  productPrice1: number;
  productPrice2: number;
}

const CategoryItem: FC<Props> = ({
  productImg1,
  productImg2,
  productTitle1,
  productTitle2,
  productPrice1,
  productPrice2,
}) => {
  return (
    <>
      <div className="flex h-1/2 items-center justify-around border-b-2 border-l-2 hover:cursor-pointer hover:bg-gray-200">
        <div className="flex h-full w-2/3 items-center">
          <div className="pl-2 lg:pl-5">
            <h1 className="text-xs font-semibold italic md:text-xs lg:text-sm xl:text-lg">
              {productTitle1}
            </h1>
            <p className="text-lg text-[#8B96A5] md:text-xs lg:text-sm xl:text-base">
              From <br /> USD {productPrice1}
            </p>
          </div>
        </div>
        <div className="flex w-1/3 justify-around pr-2 lg:pr-5">
          <Image src={productImg1} className="h-full" alt="category" />
        </div>
      </div>

      <div className="flex h-1/2 items-center justify-around border-l-2 hover:cursor-pointer hover:bg-gray-200">
        <div className="flex h-full w-2/3 items-center">
          <div className="pl-2 lg:pl-5">
            <h1 className="text-xs font-semibold italic md:text-xs lg:text-sm xl:text-lg">
              {productTitle2}
            </h1>
            <p className="text-lg text-[#8B96A5] md:text-xs lg:text-sm xl:text-base">
              From <br /> USD {productPrice2}
            </p>
          </div>
        </div>
        <div className="flex w-1/3 justify-around pr-2 lg:pr-5">
          <Image src={productImg2} className="h-full" alt="category" />
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
