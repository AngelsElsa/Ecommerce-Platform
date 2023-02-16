import CategorySection from "@/components/CategorySection/CategorySection";
import HotDealsSection from "@/components/HotDealsSection/HotDealsSection";
import RecommendSection from "@/components/RecommendSection/RecommendSection";
import SendQuoteSection from "@/components/SendQuoteSection/SendQuoteSection";
import BannerSection from "../components/BannerSection/BannerSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import SupplierRegionSection from "@/components/SupplierRegionSection/SupplierRegionSection";

import {
  CategoryImg1,
  CategoryImg2,
  Sofa,
  SoftChair,
  Chair,
  Pot,
  Mixer,
  Blender,
  Appliance,
  Plant,
  Watch,
  Camera,
  Headphone1,
  Headphone2,
  Kettle,
  Laptop,
  Tablet,
  Phone2,
} from "../utils/CategoryAssets";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <BannerSection />
      <HotDealsSection />
      <CategorySection
        categoryTitle1="Home and"
        categoryTitle2="outdoor"
        buttonTitle="Source now"
        categoryImg={CategoryImg1}
        productImg1={SoftChair}
        productImg2={Sofa}
        productImg3={Chair}
        productImg4={Pot}
        productImg5={Mixer}
        productImg6={Blender}
        productImg7={Appliance}
        productImg8={Plant}
        productTitle1="Soft chairs"
        productTitle2="Sofa & beds"
        productTitle3="Picnic tools"
        productTitle4="Cooking baskets"
        productTitle5="Kitchen tools"
        productTitle6="Blenders"
        productTitle7="Home appliance"
        productTitle8="Flower plants"
        productPrice1={19}
        productPrice2={19}
        productPrice3={19}
        productPrice4={19}
        productPrice5={19}
        productPrice6={19}
        productPrice7={19}
        productPrice8={19}
      />
      <CategorySection
        categoryTitle1="Consumer &"
        categoryTitle2="electronics"
        buttonTitle="Source now"
        categoryImg={CategoryImg2}
        productImg1={Watch}
        productImg2={Camera}
        productImg3={Headphone2}
        productImg4={Kettle}
        productImg5={Headphone1}
        productImg6={Laptop}
        productImg7={Tablet}
        productImg8={Phone2}
        productTitle1="Smart watches"
        productTitle2="Cameras"
        productTitle3="Headphones"
        productTitle4="Electronics"
        productTitle5="Gaming Set"
        productTitle6="Laptop & PC"
        productTitle7="Tablets"
        productTitle8="Smart phones"
        productPrice1={19}
        productPrice2={19}
        productPrice3={19}
        productPrice4={19}
        productPrice5={19}
        productPrice6={19}
        productPrice7={19}
        productPrice8={19}
      />
      <SendQuoteSection />
      <RecommendSection />
      <ServicesSection />
      <SupplierRegionSection />
    </main>
  );
}
