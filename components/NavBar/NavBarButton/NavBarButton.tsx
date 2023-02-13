import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement;
}
const NavBarButton: FC<Props> = ({ title, icon }) => {
  return (
    <div>
      <button className="text-[#979797] px-3">
        {icon}
        <p>{title}</p>
      </button>
    </div>
  );
};

export default NavBarButton;
