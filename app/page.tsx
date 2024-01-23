import Product from "./Product";

export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <div className="mx-auto flex max-w-[90%] flex-col items-center min-[1920px]:max-w-[1640px] max-h-full overflow-y-visible">
        <div className="hidden text-center font-bold md:block">
          <div className="text-[46px] leading-[51px]">
            Best Seller Gaming PC
          </div>
          <div className="text-[30px] leading-[33px]">Prebuilt & Custom</div>
        </div>
        <Product />
      </div>
    </main>
  );
}
