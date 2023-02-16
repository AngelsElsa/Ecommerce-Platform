import React from "react";

type Props = {};

const NewsletterSection = (props: Props) => {
  return (
    <div className="bg-[#E0E0E0] py-20 ">
      <h4 className="py-0 text-center text-2xl font-bold tracking-wide md:py-1 md:text-3xl">
        Subscribe on our newsletter
      </h4>
      <p className="mt-1 mb-5 text-center text-base text-[#606060] md:text-lg">
        Get daily news on upcoming offers from many suppliers all over the
        world!
      </p>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="@ Email"
          className="w-2/5 rounded-lg p-2"
        />

        <button className="ml-2 flex w-1/6 items-center justify-center rounded-lg bg-gradient-to-b from-[#127FFF] to-[#0067FF] p-0 px-2 text-center text-lg text-base font-semibold tracking-wider text-white transition-all duration-700 hover:-translate-y-2 md:ml-5 md:p-2 md:text-xl lg:ml-10 lg:p-3">
          Send inquiry
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
