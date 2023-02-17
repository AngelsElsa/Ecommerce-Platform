import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  country: string;
  url: string;
  img: StaticImageData;
}

const SupplierRegion: FC<Props> = ({ img, country, url }) => {
  return (
    <div className="mx-auto mb-8 flex w-2/5 items-center justify-start md:mx-8 md:w-auto md:justify-around lg:mx-12 xl:mx-16">
      <div className="mr-5 md:mr-5">
        <Image src={img} className="w-10" alt="flag" />
      </div>
      <div>
        <h6 className="font-semibold md:text-lg lg:text-xl xl:text-xl">
          {country}
        </h6>
        <p className="text-sm  text-[#8B96A5]">{url}</p>
      </div>
    </div>
  );
};

export default SupplierRegion;
