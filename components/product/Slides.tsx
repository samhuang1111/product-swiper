"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card as ProductCard } from "./Card";

import "swiper/css";
import "swiper/css/pagination";
import { PC_PRODUCT_LIST } from "@/constants";

export const Slides = () => {
  return (
    <div className="w-full py-4">
      <Swiper
        spaceBetween={16}
        breakpoints={{
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
        }}
        className="!p-4 flex"
      >
        {PC_PRODUCT_LIST.map((product) => (
          <SwiperSlide>
            <ProductCard product={product}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
