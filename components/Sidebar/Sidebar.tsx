import React, { FC } from "react";

import SideBarButton from "./SideBarButton/SideBarButton";
import {
  HomeOutlinedIcon,
  FormatListBulletedOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  Inventory2OutlinedIcon,
  HeadsetMicOutlinedIcon,
  BusinessOutlinedIcon,
  LanguageOutlinedIcon,
  AccountCircleIcon,
} from "@/utils/MaterialIcons";

interface Props {
  handleSidebarFromChild: (name: boolean) => void;
}

const Sidebar: FC<Props> = ({ handleSidebarFromChild }) => {
  const styleSideBarButton = "mr-5 ml-2 text-4xl text-[#8B96A5]";

  return (
    <>
      <div className="sidebar fixed top-0 z-50 h-screen w-full bg-[#636363] md:hidden">
        <div className="h-screen w-3/4 bg-white p-5">
          <button
            onClick={() => handleSidebarFromChild(false)}
            className="flex h-8 w-8 justify-center rounded-full text-2xl hover:bg-gray-200"
          >
            ⨉
          </button>
          <div>
            <AccountCircleIcon className="mb-2 text-7xl text-[#BDC4CD]" />
            <div className="mb-5 flex text-2xl">
              <button>Sign in</button>&nbsp;&nbsp;|&nbsp;&nbsp;
              <button>Register</button>
            </div>
          </div>

          <div>
            <SideBarButton
              title="Home"
              icon={<HomeOutlinedIcon className={styleSideBarButton} />}
            />
            <SideBarButton
              title="Categories"
              icon={
                <FormatListBulletedOutlinedIcon
                  className={styleSideBarButton}
                />
              }
            />
            <SideBarButton
              title="Favorites"
              icon={
                <FavoriteBorderOutlinedIcon className={styleSideBarButton} />
              }
            />
            <SideBarButton
              title="My orders"
              icon={<Inventory2OutlinedIcon className={styleSideBarButton} />}
            />
            <br />
            <SideBarButton
              title="English | USD"
              icon={<LanguageOutlinedIcon className={styleSideBarButton} />}
            />
            <SideBarButton
              title="Contact us"
              icon={<HeadsetMicOutlinedIcon className={styleSideBarButton} />}
            />

            <SideBarButton
              title="About"
              icon={<BusinessOutlinedIcon className={styleSideBarButton} />}
            />
            <br />
            <p className="ml-10 py-4 text-xl">User agreement</p>
            <p className="ml-10 py-4 text-xl">Partnership</p>
            <p className="ml-10 py-4 text-xl">Privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
