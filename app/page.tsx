import { Slides as ProductSlides } from "@/components/product/Slides";

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
        <div className="ml-auto hidden  h-[45px] w-[104px] justify-between md:flex">
          <button className="shadow-[0_0_6px_#00000029]">
            <svg
              className="aspect-square h-[100%] w-[100%]"
              data-testid="geist-icon"
              fill="none"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="shadow-[0_0_6px_#00000029]">
            <svg
              className="aspect-square h-[100%] w-[100%]"
              data-testid="geist-icon"
              fill="none"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <ProductSlides />
      </div>
      {/* <div className="absolute left-1/2 top-1/2 flex h-[840px] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col md:w-[1640px] justify-center">
        <div className="hidden text-center font-bold md:block">
          <div className="text-[46px] leading-[51px]">
            Best Seller Gaming PC
          </div>
          <div className="text-[30px] leading-[33px]">Prebuilt & Custom</div>
        </div>
        <div className="relative left-0 right-[100%] hidden h-[45px]  w-[104px] justify-between md:flex">
          <button className="shadow-[0_0_6px_#00000029]">
            <svg
              className="aspect-square h-[100%] w-[100%]"
              data-testid="geist-icon"
              fill="none"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="shadow-[0_0_6px_#00000029]">
            <svg
              className="aspect-square h-[100%] w-[100%]"
              data-testid="geist-icon"
              fill="none"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <ProductSlides />
      </div> */}
    </main>
  );
}
