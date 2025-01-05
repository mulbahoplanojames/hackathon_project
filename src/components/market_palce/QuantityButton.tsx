import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Products } from "../../../sanity.types";
import useCartStore from "@/ProductStore";
import toast from "react-hot-toast";

interface QuantityButtonProps {
  product: Products;
  className?: string;
}

const QuantityButton = ({ product, className }: QuantityButtonProps) => {
  // const isoutOfStock = product?.stock === 0;
  const { addItem, getItemCount, removeItem } = useCartStore();
  const itemCount = getItemCount(product?._id);
  // console.log(itemCount);

  const addToCart = () => {
    addItem(product);
    toast.success(
      `${product?.name?.substring(0, 12)} added to cart successfully`
    );
  };

  const removeItemFromCart = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decrease from cart successfully");
    } else {
      toast.success(
        `${product?.name?.substring(0, 12)} removed from cart successfully`
      );
    }
  };

  return (
    <>
      <div className={cn("flex items-center gap-2 text-sm", className)}>
        <Button
          variant="outline"
          size="icon"
          className="w-5 h-5"
          onClick={removeItemFromCart}
        >
          <Minus />
        </Button>
        <span>{itemCount}</span>
        <Button
          variant="outline"
          size="icon"
          className="w-5 h-5"
          onClick={addToCart}
        >
          <Plus />
        </Button>
      </div>
    </>
  );
};

export default QuantityButton;
