import React from "react";

import HotProduct from "./HotProduct/HotProduct";

import {
  Watch,
  Laptop,
  Camera,
  Headphone1,
  Phone1,
  Phone2,
  Headphone2,
} from "../../utils/CategoryAssets";

type Props = {};

const HotDealsSection = (props: Props) => {
  return (
    <>
      <div className="mx-10 hidden items-center justify-around rounded-md border-2 bg-white md:flex lg:mx-20">
        {/* Desktop Timer Section */}
        <div className="w-1/4 text-center">
          <h4 className="text-sm font-semibold tracking-wide md:text-xl lg:text-2xl">
            Deals and offers
          </h4>
          <h6 className="text-light mb-4 text-xs text-[#8B96A5] md:text-sm lg:text-base">
            Hygiene equipment
          </h6>

          <div className="flex w-full justify-center">
            <div className="mr-2 flex h-fit w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
              <div>
                <h6 className="text-xl font-extrabold">04</h6>
                <p className="text-xs lg:text-base">Days</p>
              </div>
            </div>

            <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
              <div>
                <h6 className="text-xl font-extrabold">12</h6>
                <p className="text-xs lg:text-base">Hour</p>
              </div>
            </div>

            <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
              <div>
                <h6 className="text-xl font-extrabold">34</h6>
                <p className="text-xs lg:text-base">Min</p>
              </div>
            </div>

            <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
              <div>
                <h6 className="text-xl font-extrabold">56</h6>
                <p className="text-xs lg:text-base">Sec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hot Products Section */}
        <div className="hidden w-3/4 justify-around sm:flex">
          <HotProduct
            styles="w-1/4 lg:w-1/5"
            img={Watch}
            title="Watches"
            discount={25}
          />
          <HotProduct
            styles="w-1/4 lg:w-1/5"
            img={Laptop}
            title="Laptops"
            discount={25}
          />
          <HotProduct
            styles="w-1/4 lg:w-1/5"
            img={Camera}
            title="Cameras"
            discount={25}
          />
          <HotProduct
            styles="w-1/4 lg:w-1/5"
            img={Headphone1}
            title="Headphones"
            discount={25}
          />
          <HotProduct
            styles="w-1/4 lg:w-1/5 hidden lg:block"
            img={Phone1}
            title="Mobiles"
            discount={25}
          />
        </div>
      </div>

      {/* Mobile Timer Section */}
      <div className="flex w-full bg-white py-5 md:hidden">
        <div className="w-1/2 text-center">
          <h4 className="text-xl font-semibold tracking-wide">
            Deals and offers
          </h4>
          <h6 className="text-light text-[#8B96A5]">Hygiene equipment</h6>
        </div>

        <div className="flex w-full justify-around">
          <div className="flex w-1/6 items-center justify-center rounded-md bg-gray-200 text-center text-[#8B96A5]">
            <div>
              <h6 className="text-xl font-extrabold">04</h6>
              <p className="text-base">Days</p>
            </div>
          </div>

          <div className="flex w-1/6 items-center justify-center rounded-md bg-gray-200 text-center text-[#8B96A5]">
            <div>
              <h6 className="text-xl font-extrabold">12</h6>
              <p className="text-base">Hour</p>
            </div>
          </div>

          <div className="flex w-1/6 items-center justify-center rounded-md bg-gray-200 text-center text-[#8B96A5]">
            <div>
              <h6 className="text-xl font-extrabold">34</h6>
              <p className="text-base">Min</p>
            </div>
          </div>

          <div className="flex w-1/6 items-center justify-center rounded-md bg-gray-200 text-center text-[#8B96A5]">
            <div>
              <h6 className="text-xl font-extrabold">56</h6>
              <p className="text-base">Sec</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hot Products Section */}
      <div className="flex w-full justify-around md:hidden">
        <HotProduct
          styles="md:w-1/5 lg:w-1/6 w-1/3 border-y-4"
          img={Watch}
          title="Watches"
          discount={25}
        />
        <HotProduct
          styles="md:w-1/5 lg:w-1/6 w-1/3 border-y-4"
          img={Headphone2}
          title="Headphones"
          discount={25}
        />
        <HotProduct
          styles="md:w-1/5 lg:w-1/6 w-1/3 border-y-4"
          img={Laptop}
          title="Laptops"
          discount={25}
        />
      </div>
    </>
  );
};

export default HotDealsSection;
