"use client";

import EmptyCart from "@/components/market_palce/EmptyCart";
import PriceFormatter from "@/components/market_palce/PriceFormatter";
import QuantityButton from "@/components/market_palce/QuantityButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCartStore from "@/ProductStore";
import { urlFor } from "@/sanity/lib/image";
import { getCookie } from "cookies-next";
import { Heart, ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  console.log("currentUser", currentUser);

  const [loading, setLoading] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getSubTotalPrice,
    getItemCount,
    resetCart,
    getGroupedItem,
  } = useCartStore();

  const cartProducts = getGroupedItem();

  const handleDeleteProduct = (productId: string) => {
    deleteCartProduct(productId);
    toast.success("Product removed from cart successfully");
  };

  const handleResetCart = () => {
    const confirm = window.confirm("Are you sure you want to clear your cart?");
    if (confirm) {
      resetCart();
      toast.success("Cart cleared successfully");
    }
  };

  const handleCheckOut = () => {
    setLoading(true);
    try {
    } catch (error) {
      console.log("Error creating Checkout", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="px-4 py-6 ">
        {cartProducts.length ? (
          <>
            <div className="flex items-center gap-2 text-xl  dark:text-white">
              <ShoppingBag />
              <h1 className=" font-bold ">Your Shopping Cart</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
              <div className="lg:col-span-2 border rounded-md bg-white p-4 ">
                {cartProducts.map((product) => {
                  const itemCount = getItemCount(product.product._id);
                  return (
                    <div
                      className="flex border-b last:border-b-0 gap-8  justify-between items-center"
                      key={product?.product._id}
                    >
                      <div className="flex flex-1 items-center h-36 md:h-44  gap-1">
                        {product.product.images && (
                          <Link
                            href={`/product/${product?.product?.slug?.current}`}
                            className="overflow-hidden p-0.5 md:p-1 border rounded-md mr-2"
                          >
                            <Image
                              src={urlFor(product?.product.images[0]).url()}
                              width={500}
                              height={500}
                              alt={`${product.product.name}`}
                              loading="lazy"
                              className="md:w-40 w-32 md:h-40 h-32 object-cover"
                            />
                          </Link>
                        )}
                        <div className="h-full flex flex-1 flex-col items-start justify-between py-1 text-black">
                          <div className="space-y-1">
                            <h2 className="font-semibold line-clamp-1">
                              {product?.product?.name}
                            </h2>
                            <p className="text-sm font-medium text-slate-600">
                              {product?.product?.intro}
                            </p>
                            <p className="text-sm capitalize text-slate-600">
                              Variant: &nbsp;
                              <span className="font-semibold text-black">
                                {product?.product?.variant}
                              </span>
                            </p>
                            <p className="text-sm capitalize text-slate-600">
                              Status:&nbsp;
                              <span className="font-semibold text-black">
                                {product?.product?.status}
                              </span>
                            </p>
                          </div>
                          <div className="space-x-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Heart className="md:w-5 md:h-5 w-4 h-4 hover:text-green-600" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  Add to favourite
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Trash
                                    onClick={() =>
                                      handleDeleteProduct(product.product._id)
                                    }
                                    className="md:w-5 md:h-5 w-4 h-4 hover:text-red-600"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>Add to trash</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-between h-3/6 md:h-44 p-0.5 md:p-1">
                          <PriceFormatter
                            amount={
                              (product?.product?.price as number) * itemCount
                            }
                            className="text-lg font-bold"
                          />
                          <QuantityButton
                            product={product?.product}
                            className="text-black"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Button
                  onClick={handleResetCart}
                  variant="destructive"
                  className="mt-2"
                >
                  Reset Cart
                </Button>
              </div>
              <div className="lg:col-span-1  md:inline-block bg-white border rounded-md p-4 h-fit text-black">
                <h2 className="text-xl font-bold pb-4">Order Summary</h2>
                <div className="space-y-2 mb-2">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <PriceFormatter amount={getSubTotalPrice()} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Discount</span>
                    <PriceFormatter
                      amount={getSubTotalPrice() - getTotalPrice()}
                    />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center mt-2">
                  <span>Subtotal</span>
                  <PriceFormatter
                    amount={getSubTotalPrice()}
                    className="font-bold"
                  />
                </div>
                <Button
                  className="w-full tracking-wide rounded-full font-semibold my-3 dark:bg-black dark:text-white"
                  variant="default"
                  onClick={handleCheckOut}
                  size="lg"
                >
                  {loading ? "Loading..." : "Proceed to Checkout"}
                </Button>
                <Link
                  href="/"
                  className="flex items-center justify-center py-2 border border-black/50  rounded-full"
                >
                  Paypal Checkout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
};

export default CartPage;
