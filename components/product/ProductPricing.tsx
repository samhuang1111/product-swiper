import React from "react";
import Image from "next/Image";
import Link from "next/link";

import { ProductPricingType } from "@/types";
import { format } from "date-fns";
import affirmIcon from "@/public/icon-affirm.svg";

export const ProductPricing = ({
  pricing,
}: {
  pricing: ProductPricingType;
}) => {
  return (
    <div className="flex flex-col justify-between rounded-[15px] bg-[#F2F6FA] px-5 pb-5 pt-3">
      {/* save price */}
      <div className="bg-iBuyColor flex w-min gap-1 rounded-full px-2 py-1 text-[10px] leading-[11px] text-white sm:text-[12px] sm:leading-[13px]">
        <span>SAVE</span>
        <span>${pricing.savePrice}</span>
      </div>
      {/* price */}
      <div className="mt-1 flex h-fit items-end gap-3">
        <p className="text-[20px] font-bold leading-[22px] sm:text-[30px] sm:leading-[33px]">
          ${pricing.discountedPrice.toLocaleString()}
        </p>
        <p className="relative text-[12px] leading-[13px] text-gray-400 line-through sm:text-[16px] sm:leading-[18px]">
          ${pricing.originalPrice.toLocaleString()}
        </p>
      </div>
      {/* monthly price */}
      <button className="mt-1">
        <p className="flex text-[12px] leading-[20px] tracking-normal items-end sm:text-[14px] ">
          Starting at &nbsp;
          <span className="text-[#004CFF]">
            ${(pricing.originalPrice / 12).toLocaleString()}
          </span>
          /mo with
          <span>
            <Image priority src={affirmIcon} height={28} alt="Follow us on Twitter" />
            {/* <Image src="/icon-affirm.svg" width={80} height={20}  alt={""} /> */}
          </span>
        </p>
      </button>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-col items-start justify-around">
          <span className="text-[12px] font-bold leading-[24px] sm:text-[14px]">
            {pricing.shippingInfo.freeShipping ? "Free Shipping" : ""}
          </span>
          <span className="text-[12px] leading-[20px] sm:text-[14px]">
            Delivery By{" "}
            {format(new Date(pricing.shippingInfo.deliveryDate), "EEEE, MMM d")}
          </span>
        </div>
        <div className="shrink-0">
          <Link href="/">
            <button
              className="border-iBuyColor text-iBuyColor box-border rounded-full border-2 px-[12px] py-[4px] text-[14px] leading-[23px] tracking-[-0.21px] sm:text-[16px]"
              type="button"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
