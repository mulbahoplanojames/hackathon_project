"use client";

import { Search } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import PriceView from "./PriceView";
import { Products } from "../../../sanity.types";
import AddToCardButton from "./AddToCartButton";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);

    try {
      const query = `*[_type == "products" && name match $search] | order(name asc)`;
      const params = { search: `*${search}*` };
      const response = await client.fetch(query, params);
      setProducts(await response);
      // console.log(await response);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }, [search]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, fetchProducts]);

  return (
    <>
      <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
        <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
          <Search className="w-6 h-6 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Product Searchbar</DialogTitle>
            <form className="relative">
              <Input
                className="flex-1 py-5 rounded-md"
                placeholder="Search for products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full w-10 bg-black text-white flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-primary_Clr hover:text-white">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </DialogHeader>
          <div className="h-full w-full overflow-y-scroll border-black/90 border-2 rounded-md">
            <div className="">
              {loading ? (
                <p>Loading products...</p>
              ) : products.length ? (
                <div className="">
                  {products.map((product: Products) => (
                    <div
                      className="flex items-center p-1 border-b-black border last:border-b-0 gap-2 md:gap-4"
                      key={product._id}
                    >
                      <Link
                        className="w-20 h-20 md:h-24 md:w-24 flex-shrink-0 overflow-hidden rounded-md"
                        href={`/product/${product?.slug?.current}`}
                      >
                        {product?.images && (
                          <Image
                            width={200}
                            height={200}
                            src={urlFor(product.images[0]).url()}
                            alt={`${product.name}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </Link>
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        className="flex-grow py-3 px-5"
                      >
                        <p className="font-semibold md:text-lg text-sm text-slate-700 line-clamp-1 ">
                          {product?.name}
                        </p>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {product?.intro}
                        </p>
                        <PriceView
                          price={product?.price}
                          discount={product?.discount}
                          className="text-lg "
                        />
                      </Link>
                      <div className="w-60 mt-5">
                        <AddToCardButton product={product} className="w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center tracking-wide">
                  {search ? (
                    <p>
                      Nothing Match for the search <span>{search}</span>, Please
                      try something else
                    </p>
                  ) : (
                    <p>Search and Explore more products on our store</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
