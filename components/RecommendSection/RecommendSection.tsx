import React from "react";
import RecommendItem from "./RecommendItem/RecommendItem";

import { Shirt } from "@/utils/CategoryAssets";

type Props = {};

const RecommendSection = (props: Props) => {
  return (
    <div className="mx-10">
      <h4 className="mb-5 text-2xl font-bold tracking-wide md:text-xl lg:text-3xl">
        Recommended items
      </h4>

      <div className="flex flex-wrap justify-between">
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />

        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
        <RecommendItem
          img={Shirt}
          price={10.35}
          description="Lorem ipsum dolor sit deftou amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default RecommendSection;
