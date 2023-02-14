import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  discount: number;
}

const HotProduct: FC<Props> = ({ img, title, discount }) => {
  return (
    <div className="my-4 cursor-pointer rounded-xl p-4 hover:bg-gray-100">
      <Image src={img} alt="product" />
      <p className="mb-2 mt-4 text-center">{title}</p>
      <p className="flex justify-center rounded-xl bg-[#FFE3E3] text-center font-bold text-red-500">
        -{discount}%
      </p>
    </div>
  );
};

export default HotProduct;
