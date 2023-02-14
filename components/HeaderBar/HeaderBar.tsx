"use client";

import React from "react";
import { MenuIcon } from "@/utils/MaterialIcons";

type Props = {};

const HeaderBar = (props: Props) => {
  return (
    <>
      {/* Desktop */}
      <div className="my-5 hidden w-full justify-around border-t-2 border-b-2 border-[#E0E0E0] py-2 md:flex">
        <div className="flex w-3/4 items-center justify-around">
          <button className=" flex items-center">
            <MenuIcon className="mr-2" />
            All Category
          </button>
          <button>Hot Offers</button>
          <button>Gift Boxes</button>
          <button>Projects</button>
          <button>Menu Item</button>
          <button>Help</button>
        </div>

        <div className="flex w-1/4 items-center justify-around">
          <button>English, USD</button>
          <button>Ship to 🇱🇰</button>
        </div>
      </div>

      {/* Mobile */}
      <div className="m-4 flex justify-around text-[#0D6EFD] md:hidden">
        <button className="rounded-md bg-gray-200 px-2 py-1">
          All category
        </button>
        <button className="rounded-md bg-gray-200 px-2 py-1">Gadgets</button>
        <button className="rounded-md bg-gray-200 px-2 py-1">Clothes</button>
        <button className="rounded-md bg-gray-200 px-2 py-1">
          Accessories
        </button>
      </div>
    </>
  );
};

export default HeaderBar;
