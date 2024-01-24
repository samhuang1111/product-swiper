"use client";

import { ProductSlides } from "@/components/product/ProductSlides";
import { PC_PRODUCT_LIST } from "@/constants";
import React from "react";

export const Product = () => {
  const [testAction, setTestAction] = React.useState<boolean>(false);

  return (
    <>
      <ProductSlides list={PC_PRODUCT_LIST} />
      <button
        className="absolute top-0 right-0 rounded-lg bg-blue-500 px-2 py-1 text-[12px] text-white"
        onClick={() => {
          setTestAction(!testAction);
        }}
      >
        點擊測試 不同數量的資料
      </button>
      {testAction && (
        <>
          <ProductSlides list={PC_PRODUCT_LIST.slice(0, 1)} />
          <ProductSlides list={PC_PRODUCT_LIST.slice(0, 4)} />
          <ProductSlides list={PC_PRODUCT_LIST.slice(0, 5)} />
          <ProductSlides list={[]} />
        </>
      )}
    </>
  );
};

export default Product;
