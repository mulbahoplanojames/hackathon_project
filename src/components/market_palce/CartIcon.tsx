"use client";

import useCartStore from "@/ProductStore";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useCartStore();

  return (
    <>
      <Link href="/market-place/cart" className="cursor-pointer relative">
        <ShoppingBag className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-black text-white text-xs font-semibold rounded-full flex justify-center items-center">
          {items.length ? items.length : 0}
        </span>
      </Link>
    </>
  );
};

export default CartIcon;
