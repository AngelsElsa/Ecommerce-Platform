import HotDealsSection from "@/components/HotDealsSection/HotDealsSection";
import Image from "next/image";
import BannerSection from "../components/BannerSection/BannerSection";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <BannerSection />
      <HotDealsSection />
    </main>
  );
}
