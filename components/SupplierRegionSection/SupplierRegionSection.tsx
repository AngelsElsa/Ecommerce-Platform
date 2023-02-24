import React from "react";
import SupplierRegion from "./SupplierRegion/SupplierRegion";

import {
  FlagUAE,
  FlagAUS,
  FlagDK,
  FlagFR,
  FlagGB,
  FlagIT,
  FlagRU,
  FlagUS,
  FlagCN,
} from "@/utils/CategoryAssets";

type Props = {};

const SupplierRegionSection = () => {
  return (
    <div className="mx-10 pb-5">
      <h4 className="mb-5 text-lg font-extrabold tracking-wide md:text-lg lg:text-xl xl:text-2xl">
        Suppliers by region
      </h4>

      <div className="flex flex-wrap justify-evenly">
        <SupplierRegion
          country="Arabic Emirates"
          url="brandstore.ae"
          img={FlagUAE}
        />
        <SupplierRegion country="Australia" url="brandstore.au" img={FlagAUS} />
        <SupplierRegion
          country="United States"
          url="brandstore.us"
          img={FlagUS}
        />
        <SupplierRegion country="Russia" url="brandstore.ru" img={FlagRU} />

        <SupplierRegion country="Italy" url="brandstore.it" img={FlagIT} />

        <SupplierRegion country="Denmark" url="brandstore.dk" img={FlagDK} />
        <SupplierRegion country="France" url="brandstore.fr" img={FlagFR} />
        <SupplierRegion country="Quatar" url="brandstore.qa" img={FlagUAE} />

        <SupplierRegion country="China" url="brandstore.ch" img={FlagCN} />

        <SupplierRegion
          country="Great Britain"
          url="brandstore.gb"
          img={FlagGB}
        />
      </div>
    </div>
  );
};

export default SupplierRegionSection;
