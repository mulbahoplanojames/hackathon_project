import { marketplaceHeaderCardData } from "@/data/marketplaceData";
import Image from "next/image";
import { Card } from "../ui/card";

const HeaderCards = () => {
  return (
    <>
      <section className="mt-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2  gap-4">
          {marketplaceHeaderCardData.map((card) => (
            <Card key={card.id} className="rounded-3xl p-4">
              <div className="w-10 h-10  bg-black rounded-full p-1 flex items-center justify-center mb-2">
                {card.icon && <card.icon className=" text-white" />}
              </div>
              <div className="flex justify-between items-end md:flex-nowrap flex-wrap">
                <div>
                  <p className=" text-lg text-slate-500">{card.title}</p>
                  <p className=" font-bold text-2xl">{card.count}</p>
                </div>
                <div className="">
                  {card.image && (
                    <Image
                      src={card.image!}
                      alt={card.title}
                      width={80}
                      height={60}
                    />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeaderCards;
