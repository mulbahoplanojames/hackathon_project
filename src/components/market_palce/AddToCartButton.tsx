"use client";

import { cn } from "@/lib/utils";
import { Products } from "../../../sanity.types";
import { Button } from "@/components/ui/button";
import PriceFormatter from "./PriceFormatter";
import QuantityButton from "./QuantityButton";
import { toast } from "react-hot-toast";
import useCartStore from "@/ProductStore";

interface AddToCardButtonProps {
  product: Products;
  className?: string;
}
const AddToCardButton = ({ product, className }: AddToCardButtonProps) => {
  const isoutOfStock = product?.stock === 0;
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  // console.log(itemCount);

  const addToCart = () => {
    addItem(product);
    toast.success(
      `${product?.name?.substring(0, 12)} added to cart successfully`
    );
  };

  return (
    <>
      <div className="w-full px-1">
        {itemCount ? (
          <div className="w-full text-sm">
            <div className="flex items-center justify-between py-1">
              <span>Quantity</span>
              <QuantityButton product={product} />
            </div>
            <div className="flex items-center justify-between border-t py-1">
              <span>Subtotal</span>
              <PriceFormatter
                amount={product?.price ? product?.price * itemCount : 0}
              />
            </div>
          </div>
        ) : (
          <Button
            disabled={isoutOfStock}
            className={cn(
              "w-full bg-transparent border border-primary_Clr text-primary_Clr hover:bg-primary_Clr hover:text-white",
              className
            )}
            onClick={addToCart}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </>
  );
};

export default AddToCardButton;
