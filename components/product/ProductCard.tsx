"use client";
import Link from "next/link";
import Image from "next/image";

import React from "react";

import { ProductItemType } from "@/types";
import { ProductPricing } from "@/components/product/ProductPricing";

export const ProductCard = ({ product }: { product: ProductItemType }) => {
  return (
    <div className="shadow-productCard flex h-full flex-col items-stretch justify-between rounded-[15px]">
      <div className="relative flex h-full flex-col justify-between gap-2 rounded-[15px] p-5">
        {/* type image */}
        <span className="absolute h-[18px] w-[66px] sm:h-[22px] sm:w-[83px]">
          <Image
            src={
              product.type === "custom"
                ? "/custom_badge.svg"
                : "/prebuild_badge.svg"
            }
            fill={true}
            alt={""}
          />
        </span>
        {/* product image */}
        <div className="flex justify-center">
          <div className="relative h-[172px] w-[172px] sm:h-[230px] sm:w-[230px]">
            <Image
              src={product?.imageUrl || ""}
              alt={""}
              fill={true}
              priority={true}
              sizes="230px"
            />
          </div>
          {/* <Link href={"/"}></Link> */}
        </div>
        <div className="flex h-full flex-col justify-between gap-2">
          {/* product title */}
          <Link href="/">
            <h4 className="min-h-[26px] text-[16px] font-bold leading-[18px] sm:text-[20px] sm:leading-[22px]">
              {product.title}
            </h4>
          </Link>
          {/* product review star */}
          <span className="h-2 sm:h-4"></span>
          {/* product spec */}
          <ul className="flex flex-col gap-2 overflow-hidden text-[12px] leading-[20px] sm:text-[16px] sm:leading-[20px]">
            {Object.values(product.specs).map((text, index) => (
              <li key={index} className="whitespace-normal">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProductPricing pricing={product.pricing} />
    </div>
  );
};
