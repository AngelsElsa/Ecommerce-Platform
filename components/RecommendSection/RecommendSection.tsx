import { FC } from "react";
import RecommendItem from "./RecommendItem/RecommendItem";

import { Shirt } from "@/utils/CategoryAssets";

interface Props {
  title: string;
}

const RecommendSection: FC<Props> = ({ title }) => {
  return (
    <div className="mx-10">
      <h4 className="mb-5 text-2xl font-bold tracking-wide md:text-xl lg:text-3xl">
        {title}
      </h4>

      <div className="flex flex-wrap justify-around">
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
