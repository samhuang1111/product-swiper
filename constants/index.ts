import { type ProductDetailsType } from "@/types";

export const PC_PRODUCT_LIST: ProductDetailsType[] = [
  {
    type: "prebuilt",
    title: "RDY Y60 001",
    imageUrl:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26900/gaming-pc-01-Lancool-216-white-main-400,,,.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
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
      shippingInfo: true,
    },
  },
  {
    type: "custom",
    title: "AMD Ryzen 9 Extreme Gaming PC",
    imageUrl:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25755/gaming-pc-01-H7-Flow-Black-main-400.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
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
      shippingInfo: true,
    },
  },
  {
    type: "custom",
    title: "Intel Core 14th Gen Extreme Gaming PC",
    imageUrl:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25756/gaming-pc-01-H7-Flow-white-main-400.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
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
      shippingInfo: true,
    },
  },
  {
    type: "custom",
    title: "AMD Ryzen 9 Supreme Gaming PC",
    imageUrl:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25756/gaming-pc-01-H7-Flow-white-main-400.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
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
      shippingInfo: true,
    },
  },
];
