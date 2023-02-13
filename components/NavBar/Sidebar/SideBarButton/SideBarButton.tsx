import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement;
}

const SideBarButton: FC<Props> = ({ icon, title }) => {
  return (
    <div>
      <button className="flex w-full items-center rounded-full py-4 text-xl transition-all hover:bg-gray-200">
        {icon}
        <p>{title}</p>
      </button>
    </div>
  );
};

export default SideBarButton;
