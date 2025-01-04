import { cn } from "@/lib/utils";

interface PriceFormatterProps {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "RWF",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <span className={(cn("text-sm text-black"), className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
