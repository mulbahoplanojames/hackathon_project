import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter";

interface PriceViewProps {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className={className} />
        {price && discount && (
          <PriceFormatter
            amount={price + (price * discount) / 100}
            className={cn("line-through")}
          />
        )}
      </div>
    </>
  );
};

export default PriceView;
