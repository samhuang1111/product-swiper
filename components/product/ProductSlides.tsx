"use client";

import React, {  useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { ProductCard } from "@/components/product/ProductCard";
import { ProductListType } from "@/types";
import { BREAK_POINT } from "@/constants";

import "swiper/css";

interface ButtonProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}

function useProductSlides(list: ProductListType) {
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [visibleSlidesCount, setVisibleSlidesCount] = useState<number>(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const onBreakpoint = (swiper: SwiperType) => {
    const key: keyof typeof BREAK_POINT = swiper.currentBreakpoint;
    if (BREAK_POINT[key]) {
      console.log(BREAK_POINT[key]["slidesPerView"]);
      return BREAK_POINT[key]["slidesPerView"];
    }
    return 1;
  };

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
      setVisibleSlidesCount(onBreakpoint(swiperRef.current));
    }
    /**
     * 根據 swiper 的滑動方向更新狀態變數 `isBeginning` 和 `isEnd`。
     * 如果滑動方向為 "next"，且 swiper 處於開始位置，則將 `isBeginning` 設為 `true`，否則設為 `false`。
     * 如果滑動方向為 "prev"，且 swiper 處於結束位置，則將 `isEnd` 設為 `true`，否則設為 `false`。
     **/
    const sliderMove = (swiper: SwiperType) => {
      if (swiper.swipeDirection === "next") {
        if (swiper.isBeginning) {
          setIsBeginning(true);
        } else {
          setIsBeginning(false);
        }
      } else if (swiper.swipeDirection === "prev") {
        if (swiper.isEnd) {
          setIsEnd(true);
        } else {
          setIsEnd(false);
        }
      }
    };
    const slideChange = (swiper: SwiperType) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    const toEdge = slideChange;
    const breakpoint = (swiper: SwiperType) => {
      setVisibleSlidesCount(onBreakpoint(swiper));
    };
    swiperRef.current?.on("sliderMove", sliderMove);
    swiperRef.current?.on("slideChange", slideChange);
    swiperRef.current?.on("toEdge", toEdge);
    swiperRef.current?.on("breakpoint", breakpoint);
    return () => {
      swiperRef.current?.off("sliderMove", sliderMove);
      swiperRef.current?.off("slideChange", slideChange);
      swiperRef.current?.off("toEdge", toEdge);
      swiperRef.current?.off("breakpoint", breakpoint);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      if (swiperRef.current.isBeginning) {
        setIsBeginning(true);
        setIsEnd(list.length <= visibleSlidesCount);
      }
      if (swiperRef.current.isEnd) {
        setIsBeginning(list.length <= visibleSlidesCount);
        setIsEnd(true);
      }
    }
  }, [list, visibleSlidesCount]);

  return {
    swiperRef,
    isBeginning,
    isEnd,
  };
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
  const { swiperRef, isBeginning, isEnd } = useProductSlides(list);
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
          breakpoints={BREAK_POINT}
          className="!p-4"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {list.map((product, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
