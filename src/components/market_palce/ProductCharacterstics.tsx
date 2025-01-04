import { Products } from "../../../sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ProductCharacterstics = ({ product }: { product: Products }) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{product?.name}: Characteristics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1">
            <p className="flex justify-between items-center ">
              Brand:
              <span className="font-semibold tracking-wide">Unknown</span>
            </p>
            <p className="flex justify-between items-center ">
              Type:
              <span className="font-semibold tracking-wide">
                {product?.variant}
              </span>
            </p>
            <p className="flex justify-between items-center ">
              Stock:
              <span className="font-semibold tracking-wide">
                {product?.stock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            {/* <p className="flex justify-between items-center ">
              intro:
              <span className="font-semibold tracking-wide">
                {product?._createdAt}
              </span>
            </p> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProductCharacterstics;
