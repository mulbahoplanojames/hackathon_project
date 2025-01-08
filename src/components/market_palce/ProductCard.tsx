import Link from "next/link";
import Image from "next/image";
import { Products } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import PriceView from "./PriceView";
import AddToCardButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <>
      <section className="pt-3">
        <Card className="w-full">
          <CardContent className="p-0 w-full pb-2">
            <CardHeader className="bg-gray-200 group p-3">
              {product?.images && (
                <Link href={`/market-place/product/${product?.slug?.current}`}>
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={urlFor(product.images[0]).url()}
                      alt="Product Image"
                      fill
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardDescription className="py-2 px-1">
              <p className="truncate font-semibold pb-1.5 text-lg text-black dark:text-white">
                {product?.name}
              </p>
              <p className="pb-1 text-black dark:text-white text-base truncate">
                {product?.intro}
              </p>
              <PriceView
                className="text-lg  text-black dark:text-white"
                price={product?.price}
                discount={product?.discount}
              />
            </CardDescription>
            <AddToCardButton product={product} />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default ProductCard;
