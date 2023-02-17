import React, { FC } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import CategoryItem from "./CategoryItem/CategoryItem";

interface Props {
  categoryTitle1: string;
  categoryTitle2: string;
  buttonTitle: string;
  categoryImg: StaticImageData;

  productImg1: StaticImageData;
  productImg2: StaticImageData;
  productImg3: StaticImageData;
  productImg4: StaticImageData;
  productImg5: StaticImageData;
  productImg6: StaticImageData;
  productImg7: StaticImageData;
  productImg8: StaticImageData;

  productTitle1: string;
  productTitle2: string;
  productTitle3: string;
  productTitle4: string;
  productTitle5: string;
  productTitle6: string;
  productTitle7: string;
  productTitle8: string;

  productPrice1: number;
  productPrice2: number;
  productPrice3: number;
  productPrice4: number;
  productPrice5: number;
  productPrice6: number;
  productPrice7: number;
  productPrice8: number;
}

const CategorySection: FC<Props> = ({
  categoryTitle1,
  categoryTitle2,
  buttonTitle,
  categoryImg,

  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,

  productTitle1,
  productTitle2,
  productTitle3,
  productTitle4,
  productTitle5,
  productTitle6,
  productTitle7,
  productTitle8,

  productPrice1,
  productPrice2,
  productPrice3,
  productPrice4,
  productPrice5,
  productPrice6,
  productPrice7,
  productPrice8,
}) => {
  return (
    <div className="mx-10 my-10 hidden rounded-md border-2 bg-white md:flex lg:mx-20">
      <div className="flex w-1/5">
        <h1 className="absolute mt-2 ml-2 text-base font-bold lg:ml-6 lg:mt-6 lg:text-lg xl:mt-10 xl:ml-10 xl:text-2xl">
          {categoryTitle1} <br />
          {categoryTitle2}
        </h1>
        <button className="absolute mt-20 ml-2 rounded-md bg-white px-2 py-1 tracking-wide shadow-lg hover:bg-gray-200 md:text-xs lg:ml-5 lg:mt-28 lg:py-1 lg:px-3 lg:text-sm xl:ml-10 xl:mt-36 xl:px-3 xl:py-1 xl:text-lg">
          {buttonTitle}
        </button>
        <Image
          src={categoryImg}
          className="h-full w-full object-fill"
          alt="category"
        />
      </div>

      <div className="flex w-4/5">
        <div className="w-1/4">
          <CategoryItem
            productImg1={productImg1}
            productImg2={productImg2}
            productTitle1={productTitle1}
            productTitle2={productTitle2}
            productPrice1={productPrice1}
            productPrice2={productPrice2}
          />
        </div>

        <div className="w-1/4">
          <CategoryItem
            productImg1={productImg3}
            productImg2={productImg4}
            productTitle1={productTitle3}
            productTitle2={productTitle4}
            productPrice1={productPrice3}
            productPrice2={productPrice4}
          />
        </div>

        <div className="w-1/4">
          <CategoryItem
            productImg1={productImg5}
            productImg2={productImg6}
            productTitle1={productTitle5}
            productTitle2={productTitle6}
            productPrice1={productPrice5}
            productPrice2={productPrice6}
          />
        </div>

        <div className="w-1/4">
          <CategoryItem
            productImg1={productImg7}
            productImg2={productImg8}
            productTitle1={productTitle7}
            productTitle2={productTitle8}
            productPrice1={productPrice7}
            productPrice2={productPrice8}
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
