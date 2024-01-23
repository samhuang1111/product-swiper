export type ProductSpecs = {
  os: string;
  cpu: string;
  gpu: string;
  storage: string;
  ram: string;
};

export type PricingInfo = {
  originalPrice: number;
  discountedPrice: number;
  savePrice: number;
  shippingInfo: boolean;
};

export type ProductType = "prebuilt" | "custom";

export type ProductDetailsType = {
  title: string;
  rating?: number;
  imageUrl?: string;
  totalReviews?: number;
  type: ProductType;
  specs: ProductSpecs;
  pricing?: PricingInfo;
};
