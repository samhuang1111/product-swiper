import { ProductListType } from "@/types";

export const PC_PRODUCT_LIST: ProductListType = [
  {
    type: "prebuilt",
    title: "RDY Y60 001",
    imageUrl: "/pc-image/gaming-pc-01-H7-Flow-Black-main-400.avif",
    specs: {
      os: "Windows 11 Home",
      cpu: "Intel Core i9-13900KF",
      gpu: "GeForce RTX 4070 TI-12GB",
      storage: "2TB M.2 NVMe SSD",
      ram: "32GB DDR5-6000MHZ RGB RAM",
    },
    pricing: {
      originalPrice: 3999,
      discountedPrice: 3599,
      savePrice: 400,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-01-01",
      },
    },
  },
  {
    type: "custom",
    title: "AMD Ryzen 9 Extreme Gaming PC",
    imageUrl: "/pc-image/gaming-pc-01-H7-Flow-white-main-400.avif",
    specs: {
      os: "Windows 11 Home",
      cpu: "AMD Ryzen 9 7950X3D",
      gpu: "NVIDIA GeForce RTX 4090 - 24GB",
      storage: "2TB WD M.2 NVMe SSD",
      ram: "32GB DDR5-6000MHz TEAMGROUP RAM",
    },
    pricing: {
      originalPrice: 4199,
      discountedPrice: 3949,
      savePrice: 250,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-02-22",
      },
    },
  },
  {
    type: "custom",
    title: "Intel Core 14th Gen Extreme Gaming PC",
    imageUrl: "/pc-image/gaming-pc-01-Lancool-216-white-main-400.avif",
    specs: {
      os: "Windows 11 Home",
      cpu: "Intel Core i9-14900KF",
      gpu: "NVIDIA GeForce RTX 4090 - 24GB",
      storage: "2TB WD M.2 NVMe SSD",
      ram: "32GB DDR5-6000MHz TEAMGROUP RAM",
    },
    pricing: {
      originalPrice: 3949,
      discountedPrice: 3649,
      savePrice: 300,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-03-03",
      },
    },
  },
  {
    type: "custom",
    title: "AMD Ryzen 9 Supreme Gaming PC",
    imageUrl: "/pc-image/gaming-pc-01-SLMBG221-KBM-400.avif",
    specs: {
      os: "Windows 11 Home",
      cpu: "AMD Ryzen 9 7900X",
      gpu: "AMD Radeon RX 79 XT - 24GB",
      storage: "2TB WD M.2 NVMe SSD",
      ram: "32GB DDR5-6000MHz TEAMGROUP RAM",
    },
    pricing: {
      originalPrice: 2579,
      discountedPrice: 2379,
      savePrice: 200,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-04-30",
      },
    },
  },
  {
    type: "prebuilt",
    title: "RDY Trace 7MP 003",
    imageUrl: "/pc-image/gaming-pc-01-Trace7MP003-main-KBM-400-.webp",
    specs: {
      os: "Windows 11 Home",
      cpu: "Intel Core i5-13400F",
      gpu: "GeForce RTX 4060 - 8GB",
      storage: "1TB M.2 NVMe SSD",
      ram: "16GB DDR5-5200MHz RAM",
    },
    pricing: {
      originalPrice: 1399,
      discountedPrice: 1049,
      savePrice: 350,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-12-31",
      },
    },
  },
  {
    type: "prebuilt",
    title: "Gaming RDY SLMRG213",
    rating: 4,
    imageUrl: "/pc-image/gaming-pc-01-SLMRR213-main-400-.webp",
    specs: {
      os: "Windows 11 Home",
      cpu: "AMD Ryzen 5",
      gpu: "GeForce RTX 4060 - 8GB",
      storage: "1TB M.2 NVMe SSD",
      ram: "16GB DDR4-3200 RGB RAM",
    },
    pricing: {
      originalPrice: 1199,
      discountedPrice: 1049,
      savePrice: 150,
      shippingInfo: {
        freeShipping: true,
        deliveryDate: "2022-8-20",
      },
    },
  },
];

export const BREAK_POINT = {
  "640": {
    slidesPerView: 1,
  },
  "768": {
    slidesPerView: 2,
  },
  "1024": {
    slidesPerView: 3,
  },
  "1280": {
    slidesPerView: 4,
  },
};