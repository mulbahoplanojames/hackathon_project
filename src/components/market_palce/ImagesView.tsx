"use client";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "../../../sanity.types";

interface ImagesViewProps {
  images: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}
const ImagesView = ({ images = [] }: ImagesViewProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <>
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={activeImage._key}
            transition={{ duration: 0.5 }}
            className="w-full max-h-[550px] min-h-[540px] overflow-hidden border-2 border-black rounded-s-md group"
          >
            <Image
              src={urlFor(activeImage).url()}
              alt="product image"
              width={700}
              height={700}
              priority
              className="w-full max-h-[550px] min-h-[500px] object-contain group-hover:scale-105 transition-transform duration-300 rounded-md"
            />
          </motion.div>
        </AnimatePresence>
        <div className="grid grid-cols-5 gap-6 h-20 md:h-28">
          {images.map((image) => (
            <button
              className={`border rounded-md overflow-hidden ${activeImage._key === image._key ? "ring-1 ring-black" : ""}`}
              key={image._key}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={urlFor(image).url()}
                alt="product image"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesView;
