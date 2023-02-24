import { FC, ReactElement } from "react";

interface Props {
  text1: string;
  text2: string;
  icon: ReactElement;
}

const DownloadButton: FC<Props> = ({ text1, text2, icon }) => {
  return (
    <button className="mb-2 ml-2 flex items-center justify-between rounded-lg border-2 border-black bg-white text-black transition-all hover:border-white hover:bg-blue-600 hover:text-white md:ml-0 md:p-2 lg:px-4 lg:py-2">
      <div className="p-2 md:pl-1">{icon}</div>
      <div className="">
        <p className="hidden text-left text-xs xl:block">{text1}</p>
        <h4 className="pr-2 text-center text-sm font-bold md:p-0 md:text-left lg:font-bold ">
          {text2}
        </h4>
      </div>
    </button>
  );
};

export default DownloadButton;
