// import ProductCharacterstics from "@/components/ProductCharacterstics";
import AddToCardButton from "@/components/market_palce/AddToCartButton";
import ImagesView from "@/components/market_palce/ImagesView";
import PriceView from "@/components/market_palce/PriceView";
import ProductCharacterstics from "@/components/market_palce/ProductCharacterstics";
import { getProductBySlug } from "@/sanity/helpers/queries";
import {
  BoxIcon,
  CircleArrowLeft,
  FileQuestion,
  Heart,
  ListOrderedIcon,
  Share,
} from "lucide-react";
import Link from "next/link";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  //   console.log(product);

  return (
    <section className="md:px-20 px-4 md:pt-12 pt-8 ">
      <Link href="/market-place">
        <CircleArrowLeft className=" md:size-10 size-8 md:mb-6 mb-4" />
      </Link>
      <div className="flex flex-col gap-10 md:flex-row pb-12">
        {product?.images && <ImagesView images={product.images} />}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-3xl md:text-3xl font-bold pb-2">
            {product?.name}
          </h2>
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-lg font-bold"
          />
          {product?.stock && (
            <p className="text-sm text-green-600 bg-teal-100 text-center py-1.5 rounded-lg font-semibold">
              In Stock
            </p>
          )}
          <p className="tracking-wide text-sm text-gray-600">
            {product?.description}
          </p>
          <div className="flex items-center gap-2.5 md:gap-5">
            <AddToCardButton
              product={product}
              className="bg-black/80 text-white hover:opacity-85 transition-all duration-100 ease-out w-full"
            />
            <button className="border-2 border-black/80  text-black/70 py-1.5 px-2.5 rounded-md">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          <ProductCharacterstics product={product} />
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-1 text-sm text-black hover:text-green-600 cursor-pointer">
              <BoxIcon className="w-5 h5" />
              <p>Compare Color</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-black hover:text-green-600 cursor-pointer">
              <FileQuestion className="w-5 h5" />
              <p>Ask Question</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-black hover:text-green-600 cursor-pointer">
              <ListOrderedIcon className="w-5 h5" />
              <p>Delivery && Returns</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-black hover:text-green-600 cursor-pointer">
              <Share className="w-5 h5" />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
