import { ProductSlides } from "@/components/product/ProductSlides";
import { PC_PRODUCT_LIST } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex max-w-[90%] flex-col items-center min-[1920px]:max-w-[1640px]">
        <div className="hidden text-center font-bold md:block">
          <div className="text-[46px] leading-[51px]">
            Best Seller Gaming PC
          </div>
          <div className="text-[30px] leading-[33px]">Prebuilt & Custom</div>
        </div>
        <ProductSlides list={PC_PRODUCT_LIST} />
        {/* <ProductSlides list={PC_PRODUCT_LIST.slice(0,1)} /> */}
        {/* <ProductSlides list={PC_PRODUCT_LIST.slice(0,3)} /> */}
      </div>
    </main>
  );
}
