"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { ProductCard } from "@/components/product/ProductCard";
import { ProductListType } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

const breakpoints = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1280: {
    slidesPerView: 4,
  },
};

interface ButtonProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}

function Button({ direction, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className={`shadow-slideButton`}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className={`aspect-square h-[100%] w-[100%]  ${disabled ? "opacity-20" : "opacity-100"}`}
        data-testid="geist-icon"
        fill="none"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export const ProductSlides = ({ list }: { list: ProductListType }) => {
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  return (
    <>
      <div className="ml-auto hidden  h-[45px] w-[104px] justify-between md:flex">
        <Button
          direction="left"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          disabled={isBeginning}
        />
        <Button
          direction="right"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          disabled={isEnd}
        />
      </div>
      <div className="w-full py-4">
        <Swiper
          spaceBetween={16}
          breakpoints={breakpoints}
          className="!p-4"
          onSwiper={(swiper) => {
            console.log(swiper.isBeginning);
          }}
        >
          {list.map((product, index) => (
            <SwiperSlide key={index} className="!h-auto">
              {/* <div className="h-full bg-slate-500 ">
              {index % 2 === 0
                ? "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                : "is simply"}
            </div> */}
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
