type ProductDetails = {
  Type: "custom" | "prebuilt";
  Title: string;
  Spec: {
    OS: string;
    CPU: string;
    GPU: string;
    DISK: string;
    DRAM: string;
  };
};

type PurchaseDetails = {
  OriginPrice: number;
  SaveAmount: number;
  CurrentPrice: number;
  MonthlyPayment: number;
  DeliveryDate: string;
};
