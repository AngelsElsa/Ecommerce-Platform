"use client";

import React from "react";
import Link from "next/link";
import DownloadButton from "./DownloadButton/DownloadButton";

import {
  LocalMallIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  RedditIcon,
  AppleIcon,
  ShopIcon,
  KeyboardArrowUpIcon,
} from "@/utils/MaterialIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="my-10 mx-10 flex items-center justify-around md:ml-16 md:mr-10 lg:ml-20 lg:mr-16 xl:ml-28 xl:mr-12">
        <div className="w-1/2 md:w-2/6">
          <Link className="flex" href="">
            <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D6EFD]">
              <LocalMallIcon className="text-white" />
            </span>
            <h1 className="text-3xl font-bold text-[#8CB7F5]">Brand</h1>
          </Link>

          <p className="my-5 w-full text-sm text-[#505050] md:w-2/3">
            Brand - The Leading Ecommerce platform to buy & sell any product.
          </p>
          <div className="hidden justify-start md:flex">
            <FacebookIcon className="mr-2 cursor-pointer rounded-full text-2xl text-[#BDC4CD] transition-all hover:text-gray-500 md:text-3xl lg:text-4xl " />
            <TwitterIcon className="mr-2 cursor-pointer rounded-full text-2xl text-[#BDC4CD] transition-all hover:text-gray-500 md:text-3xl lg:text-4xl " />
            <LinkedInIcon className="mr-2 cursor-pointer rounded-full text-2xl text-[#BDC4CD] transition-all hover:text-gray-500 md:text-3xl lg:text-4xl " />
            <RedditIcon className="mr-2 cursor-pointer rounded-full text-2xl text-[#BDC4CD] transition-all hover:text-gray-500 md:text-3xl lg:text-4xl " />
          </div>
        </div>

        <div className="hidden w-1/5 md:block">
          <h4 className="mb-2 text-lg font-semibold">About</h4>
          <p className="text-light text-[#8B96A5]">About Us</p>
          <p className="text-light text-[#8B96A5]">Find store</p>
          <p className="text-light text-[#8B96A5]">Categories</p>
          <p className="text-light text-[#8B96A5]">Blogs</p>
        </div>

        <div className="hidden w-1/5 md:block">
          <h4 className="mb-2 text-lg font-semibold">Partnership</h4>
          <p className="text-light text-[#8B96A5]">About Us</p>
          <p className="text-light text-[#8B96A5]">Find store</p>
          <p className="text-light text-[#8B96A5]">Categories</p>
          <p className="text-light text-[#8B96A5]">Blogs</p>
        </div>

        <div className="hidden w-1/5 lg:block">
          <h4 className="mb-2 text-lg font-semibold">Information</h4>
          <p className="text-light text-[#8B96A5]">Help Center</p>
          <p className="text-light text-[#8B96A5]">Money Refund</p>
          <p className="text-light text-[#8B96A5]">Shipping</p>
          <p className="text-light text-[#8B96A5]">Contact us</p>
        </div>

        <div className="hidden w-1/5 md:block">
          <h4 className="mb-2 text-lg font-semibold">For users</h4>
          <p className="text-light text-[#8B96A5]">Logic</p>
          <p className="text-light text-[#8B96A5]">Register</p>
          <p className="text-light text-[#8B96A5]">Settings</p>
          <p className="text-light text-[#8B96A5]">My Orders</p>
        </div>

        <div className="flex w-1/2 justify-end md:w-1/5">
          <div className="md:block">
            <h4 className="mb-2 hidden text-xl font-semibold md:text-lg lg:block">
              Get app
            </h4>

            <DownloadButton
              text1="Download on"
              text2="App Store &nbsp;"
              icon={<AppleIcon className="text-4xl" />}
            />

            <DownloadButton
              text1="Download on"
              text2="Google Play"
              icon={<ShopIcon className="text-3xl" />}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#E0E0E0] px-10 py-2 text-[#606060]">
        <p className="text-lg">© 2023 Brand Store.</p>
        <h4 className="cursor-pointer rounded-lg border-2 border-transparent px-5 py-2 outline-none transition-all hover:border-blue-600">
          English <KeyboardArrowUpIcon />
        </h4>
      </div>
    </>
  );
};

export default Footer;
