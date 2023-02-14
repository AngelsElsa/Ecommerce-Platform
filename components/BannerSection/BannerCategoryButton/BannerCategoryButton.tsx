import { FC } from "react";

interface Props {
  styles: string;
  title: string;
}

const BannerCategoryButton: FC<Props> = ({ styles, title }) => {
  return <button className={styles}>{title}</button>;
};

export default BannerCategoryButton;
