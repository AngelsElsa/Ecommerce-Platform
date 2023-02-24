import React from "react";

type Props = {};

const SendQuoteSection = (props: Props) => {
  return (
    <div className="mx-0 my-5 block items-center justify-between rounded-none bg-gradient-to-r from-[#2C7CF1] to-[#00d1ff80] pb-5 md:my-10 md:mx-10 md:flex md:h-96 md:rounded-md md:pb-0">
      <div className="w-full p-4 text-center text-white md:w-3/5 lg:mx-10 lg:py-2 lg:px-4 lg:text-left xl:mx-20">
        <h4 className="my-2 text-2xl font-bold md:my-5 md:text-3xl lg:text-4xl xl:text-5xl">
          An easy way to send requests to all suppliers
        </h4>
        <p className="hidden tracking-wide md:block lg:text-sm lg:font-normal xl:font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="mx-4 hidden w-2/5 rounded-lg bg-white p-2 md:block lg:mx-10 lg:py-2 lg:px-4 xl:mx-20">
        <h4 className="mb-5 text-lg font-bold md:text-xl xl:text-xl">
          Send quote to suppliers
        </h4>
        <input
          type="text"
          className="w-full rounded-lg border-2 py-2 pl-2 text-gray-600 placeholder-gray-400 outline-none focus:border-blue-600"
          placeholder="What item you need?"
        />
        <textarea
          name=""
          placeholder="Type more details..."
          className="my-2 w-full resize-none rounded-lg border-2 pl-2 pt-2 text-gray-600 outline-none focus:border-blue-600 lg:my-5"
          rows={2}
          id=""
        ></textarea>

        <div className="flex justify-between">
          <input
            type="number"
            className="w-6/12 rounded-lg border-2 py-2 pl-2 text-gray-600 outline-none"
            placeholder="Price"
          />
          <select
            name="pieces"
            className="w-5/12 rounded-lg border-2 bg-white py-2 px-2 text-gray-400 outline-none focus:border-blue-600"
            defaultValue="pieces"
            id="pieces"
          >
            <option value="pieces">Pcs</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="100">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
        <button className="my-4 w-full rounded-lg bg-gradient-to-b from-[#127FFF] to-[#0067FF] px-2 py-3 text-white">
          Send inquiry
        </button>
      </div>

      <button className="mx-auto flex w-1/3 justify-center rounded-lg bg-gradient-to-b from-[#127FFF] to-[#0067FF] px-2 py-2 font-semibold tracking-wider text-white transition-all duration-700 hover:-translate-y-2 md:hidden md:py-2">
        Send inquiry
      </button>
    </div>
  );
};

export default SendQuoteSection;
