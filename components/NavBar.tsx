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

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <nav className="hidden w-full justify-around md:flex">
        {/* Brand Logo */}
        <div className="md:1/4 flex w-1/4 items-center justify-evenly bg-red-400 md:justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D6EFD]">
            <LocalMallIcon className="text-white" />
          </span>
          <h1 className="px-4 text-3xl font-bold text-[#8CB7F5]">Brand</h1>
        </div>

        {/* Search Bar */}
        <div className="flex w-1/4 items-center justify-evenly bg-red-400 md:justify-center lg:w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full rounded-l-md border-2 border-[#0D6EFD] pl-3 outline-none"
          />
          <button className="rounded-r-md bg-gradient-to-b from-[#127FFF] to-[#0067FF] p-2 text-white">
            Search
          </button>
        </div>

        {/* Buttons Desktop*/}
        <div className="flex w-1/2 items-center justify-center bg-red-400 lg:w-1/4">
          <NavBarButton title="Profile" icon={<PersonIcon />} />
          <NavBarButton title="Message" icon={<MessageIcon />} />
          <NavBarButton title="Orders" icon={<FavoriteIcon />} />
          <NavBarButton title="Cart" icon={<ShoppingCartIcon />} />
        </div>
      </nav>

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
    </>
  );
};

export default NavBar;
