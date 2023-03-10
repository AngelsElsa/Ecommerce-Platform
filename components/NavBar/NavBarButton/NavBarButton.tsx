import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement;
}

const NavBarButton: FC<Props> = ({ title, icon }) => {
  return (
    <div>
      <button className="px-3 text-[#8B96A5] transition-all hover:rounded-full hover:text-[#0D6EFD] xl:px-4">
        {icon}
        <p className="xl:text-base">{title}</p>
      </button>
    </div>
  );
};

export default NavBarButton;
