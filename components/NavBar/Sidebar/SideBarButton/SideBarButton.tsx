import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement;
}

const SideBarButton: FC<Props> = ({ icon, title }) => {
  return (
    <div>
      <button className="flex items-center py-4 text-xl">
        {icon}
        <p>{title}</p>
      </button>
    </div>
  );
};

export default SideBarButton;
