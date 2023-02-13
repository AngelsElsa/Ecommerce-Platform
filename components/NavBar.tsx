"use client";
import {
  LocalMallIcon,
  PersonIcon,
  MessageIcon,
  FavoriteIcon,
  ShoppingCartIcon,
  MenuIcon,
  PersonOutlineOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "@/utils/MaterialIcons";
import NavBarButton from "./NavBar/NavBarButton/NavBarButton";
import Sidebar from "./NavBar/Sidebar/Sidebar";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <nav className="my-2 hidden w-full justify-around md:flex">
        {/* Brand Logo */}
        <div className="flex w-1/5 items-center justify-evenly pl-10 md:justify-start">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D6EFD]">
            <LocalMallIcon className="text-white" />
          </span>
          <h1 className="pl-2 text-2xl font-bold text-[#8CB7F5] lg:text-3xl">
            Brand
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-evenly md:justify-center lg:w-1/5 xl:w-2/5">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full rounded-l-md border-2 border-[#0D6EFD] pl-3 text-[#8B96A5] caret-[#8B96A5] outline-none"
          />
          <button className="rounded-r-md bg-gradient-to-b from-[#127FFF] to-[#0067FF] p-2 text-white">
            Search
          </button>
        </div>

        {/* Buttons*/}
        <div className="flex w-2/5 items-center justify-end pr-10 lg:w-1/4">
          <NavBarButton title="Profile" icon={<PersonIcon />} />
          <NavBarButton title="Message" icon={<MessageIcon />} />
          <NavBarButton title="Orders" icon={<FavoriteIcon />} />
          <NavBarButton title="Cart" icon={<ShoppingCartIcon />} />
        </div>
      </nav>

      {/* Mobile NavBar */}
      <div>
        <nav className="m-2 flex items-center justify-around md:hidden md:w-0">
          <div className="flex w-1/2">
            <MenuIcon className="mr-5 h-10 w-10 justify-center text-[#1C1C1C] md:hidden" />
            <span className="mr-3 flex h-10 w-10  items-center justify-center rounded-lg bg-[#0D6EFD]">
              <LocalMallIcon className="text-white" />
            </span>
            <h1 className="text-3xl font-bold text-[#8CB7F5]">Brand</h1>
          </div>

          <div className="">
            <button className="mr-5">
              <ShoppingCartOutlinedIcon className="h-8 w-8" />
            </button>

            <button className="">
              <PersonOutlineOutlinedIcon className="h-8 w-8" />
            </button>
          </div>
        </nav>

        <div className="flex justify-center md:hidden">
          <input
            type="text"
            placeholder="Search here..."
            className="h-12 w-4/5 rounded-lg border-2 border-[#DEE2E7] bg-[#F7FAFC] pl-4 text-xl text-[#8B96A5] caret-[#8B96A5] outline-none"
          />
        </div>
    
        <Sidebar />
      </div>
    </>
  );
};

export default NavBar;
