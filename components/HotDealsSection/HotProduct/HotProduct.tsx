import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  discount: number;
  styles?: string;
}

const HotProduct: FC<Props> = ({ img, title, discount, styles }) => {
  return (
    <div
      className={`cursor-pointer border-l-2 p-4 hover:bg-gray-100 ${styles}`}
    >
      <Image className="mx-auto h-16 w-16" src={img} alt="product" />
      <p className="mb-2 mt-4 text-center">{title}</p>
      <p className="mx-auto flex w-12 justify-center rounded-xl bg-[#FFE3E3] text-center font-bold text-red-500 lg:w-16">
        -{discount}%
      </p>
    </div>
  );
};

export default HotProduct;
