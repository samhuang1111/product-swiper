import Link from "next/link";
import Image from "next/image";
import React from "react";

import { ProductDetailsType } from "@/types";

type ProductCardProps = {
  product: ProductDetailsType;
};

export const Card = ({ product }: ProductCardProps) => {
  console.log(Object.values(product.specs));
  return (
    <div className="flex h-full flex-col justify-between rounded-[15px] shadow-[0_0_20px_#00000029] ">
      <div className="relative flex h-full flex-col gap-2 !p-5">
        {/* type image */}
        <span className="absolute">
          <div className="h-[18px] w-[66px] sm:h-[22px] sm:w-[83px]">
            <Image
              src={
                product.type === "custom"
                  ? "/custom_badge.svg"
                  : "/prebuild_badge.svg"
              }
              fill={true}
              alt={""}
              loading="lazy"
            />
          </div>
        </span>
        {/* pc image */}
        <div className="flex justify-center">
          <div className="relative h-[172px] w-[172px] sm:h-[230px] sm:w-[230px]">
            <Link href={""}>
              <Image
                src="/gaming-pc-01-SLMBG221-KBM-400.avif"
                alt={""}
                loading="lazy"
                fill={true}
              />
            </Link>
          </div>
          {/* <Link href={"/"}></Link> */}
        </div>
        <div className="flex flex-col gap-2">
          {/* pc title */}
          <Link href="/">
            <h4 className="min-h-[26px] text-[16px] font-bold leading-[18px] sm:text-[20px] sm:leading-[22px]">
              {product.title}
            </h4>
          </Link>
          {/* review star */}
          <span className="h-2 sm:h-4"></span>
          {/* pc spec */}
          <ul className="flex overflow-hidden flex-col gap-2 text-[12px] leading-[20px] sm:text-[16px] sm:leading-[20px]">
            {Object.values(product.specs).map((text) => (
              <li className="whitespace-normal">{text}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* payment info */}
      <div className="flex flex-col justify-between bg-[#F2F6FA] px-5 pb-5 pt-3">
        {/* save price */}
        <div className="flex w-min gap-1 rounded-full bg-[#FF1B1B] px-2 py-1 text-[10px] leading-[11px] text-white sm:text-[12px] sm:leading-[13px]">
          <span>SAVE</span>
          <span>${product.pricing?.savePrice}</span>
        </div>
        {/* price */}
        <div className="mt-1 flex h-fit items-end gap-3">
          <p className="text-[20px] font-bold leading-[22px] sm:text-[30px] sm:leading-[33px]">
            $3,549
          </p>
          <p className="relative text-[12px] leading-[13px] text-gray-400 line-through sm:text-[16px] sm:leading-[18px]">
            $3,999
          </p>
        </div>
        {/* monthly price */}
        <button className="mt-1">
          <p className="flex items-center text-[12px] leading-[20px] tracking-normal  sm:text-[14px] ">
            Starting at &nbsp;
            <span className="text-[#004CFF]">${172.07}/mo</span>&nbsp; with
          </p>
        </button>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-around">
            <span className="text-[12px] font-bold leading-[24px] sm:text-[14px]">
              Free Shipping
            </span>
            <span className="text-[12px] leading-[20px] sm:text-[14px]">
              Delivery By Wednesday, Jan 24
            </span>
          </div>
          <div className="shrink-0">
            <Link href="/">
              <button
                className="box-border rounded-full border-2 border-[#FF1B1B] px-[12px] py-[4px] text-[14px] leading-[23px] tracking-[-0.21px] text-[#FF1B1B] sm:text-[16px]"
                type="button"
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
