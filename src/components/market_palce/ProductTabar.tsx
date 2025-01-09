import { productTabData } from "@/data/marketplaceData";
import { Repeat } from "lucide-react";
import React from "react";

interface HomeProductTabarProps {
  selectedTab: string;
  onSelectedTab: (tab: string) => void;
}

const ProductTabar: React.FC<HomeProductTabarProps> = ({
  selectedTab,
  onSelectedTab,
}) => {
  return (
    <>
      <section className="text-sm font-semibold w-full">
        <div className="flex md:gap-5 gap-2 items-center justify-center flex-wrap">
          {productTabData.map((tab) => (
            <button
              key={tab?.label}
              onClick={() => onSelectedTab(tab?.label)}
              className={`border border-primary_Clr px-4 py-1.5  md:px-6 md:py-2 rounded-full hover:bg-primary_Clr hover:text-white ${
                selectedTab === tab?.label && "bg-primary_Clr text-white"
              }`}
            >
              {tab?.label}
            </button>
          ))}
          <button
            className={`border border-black px-4 py-1.5  md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white`}
          >
            <Repeat />
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductTabar;
