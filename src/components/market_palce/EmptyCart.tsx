import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components//ui/button";
import Link from "next/link";
import Image from "next/image";

const EmptyCart = () => {
  return (
    <>
      <section className="flex items-center justify-center w-full md:py-20 py-16">
        <Card className="w-full max-w-md text-center md:p-6 p-4">
          <CardHeader className="h-48 bg-black rounded-md mb-3 relative p-0">
            <Image
              src="/Shopping_Cart.png"
              alt="empty cart image"
              fill
              className="object-contain"
            />
          </CardHeader>
          <CardTitle className="text-2xl font-bold pb-3">
            Your cart feel lonely
          </CardTitle>
          <CardDescription className="flex flex-col gap-4">
            <p>
              It looks like you haven&apos;t added anything to your cart.
              Let&apos;s search and add some amazing products for you!
            </p>
            <Link
              href="/market-place"
              className="block w-full bg-black py-1.5 px-3 text-base text-white rounded-md hover:opacity-80 "
            >
              Discover Products
            </Link>
          </CardDescription>
        </Card>
      </section>
    </>
  );
};

export default EmptyCart;
