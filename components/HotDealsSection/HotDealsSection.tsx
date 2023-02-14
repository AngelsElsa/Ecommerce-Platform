import React from "react";
import HotProduct from "./HotProduct/HotProduct";

import Watch from "../../public/assets/watch.png";

type Props = {};

const HotDealsSection = (props: Props) => {
  return (
    <div className="flex items-center justify-around rounded-md border-2 bg-white">
      <div className="w-1/4 text-center">
        <h4 className="text-sm font-semibold tracking-wide md:text-xl lg:text-2xl">
          Deals and offers
        </h4>
        <h6 className="text-light mb-4 text-xs text-[#8B96A5] md:text-sm lg:text-base">
          Hygiene equipment
        </h6>

        {/* Timer Section */}
        <div className="flex w-full justify-center">
          <div className="mr-2 flex h-fit w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
            <div>
              <h6 className="text-xl font-extrabold">04</h6>
              <p className="text-base">Days</p>
            </div>
          </div>

          <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
            <div>
              <h6 className="text-xl font-extrabold">12</h6>
              <p className="text-base">Hour</p>
            </div>
          </div>

          <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
            <div>
              <h6 className="text-xl font-extrabold">34</h6>
              <p className="text-base">Min</p>
            </div>
          </div>

          <div className="mr-2 flex w-1/6 items-center justify-center rounded-md bg-[#606060] text-center text-white">
            <div>
              <h6 className="text-xl font-extrabold">56</h6>
              <p className="text-base">Sec</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-3/4 justify-around sm:flex">
        <HotProduct img={Watch} title="Smart watches" discount={25} />
        <HotProduct img={Watch} title="Smart watches" discount={25} />
        <HotProduct img={Watch} title="Smart watches" discount={25} />
        <HotProduct img={Watch} title="Smart watches" discount={25} />
        <HotProduct img={Watch} title="Smart watches" discount={25} />
        <HotProduct img={Watch} title="Smart watches" discount={25} />
      </div>
    </div>
  );
};

export default HotDealsSection;
