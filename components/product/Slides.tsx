"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card as ProductCard } from "./Card";

import "swiper/css";
import "swiper/css/pagination";

export const Slides = () => {
  return (
    <div className="w-full py-4">
      <Swiper
        spaceBetween={16}
        breakpoints={{
          // when window width is >= 320px
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
          },
        }}
        className="!p-4"
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
