export type ProductSpecsType = {
  os: string;
  cpu: string;
  gpu: string;
  storage: string;
  ram: string;
};

type ShippingInfoType = {
  freeShipping: boolean;
  deliveryDate: string;
};

export type ProductPricingType = {
  originalPrice: number;
  discountedPrice: number;
  savePrice: number;
  shippingInfo: ShippingInfoType;
};

export type ProductCategoryType = "prebuilt" | "custom";

export type ProductItemType = {
  title: string;
  rating?: number;
  imageUrl?: string;
  itemUrl?: string;
  totalReviews?: number;
  type: ProductCategoryType;
  specs: ProductSpecsType;
  pricing: ProductPricingType;
};

export type ProductListType = ProductItemType[];