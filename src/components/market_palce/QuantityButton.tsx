import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Products } from "../../../sanity.types";

interface QuantityButtonProps {
  product: Products;
  className?: string;
}

const QuantityButton = ({ product, className }: QuantityButtonProps) => {
  return (
    <>
      <div className={cn("flex items-center gap-2 text-sm", className)}>
        <Button variant="outline" size="icon" className="w-5 h-5">
          <Minus />
        </Button>
        <span>4</span>
        <Button variant="outline" size="icon" className="w-5 h-5">
          <Plus />
        </Button>
      </div>
    </>
  );
};

export default QuantityButton;
