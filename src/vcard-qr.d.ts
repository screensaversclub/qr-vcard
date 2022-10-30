export type VCardQR = (vCard: VCard) => void;

export type VCardAddress = {
  type: "work" | "home";
  address: string;
  street_address: string;
  locality: string;
  region?: string;
  po_box?: string;
  postal_code?: string;
  country: string;
};

export type VCard = {
  firstName: string;
  lastName: string;
  companyName: string;
  title: string;
  role: string;
  url: string[];
  address: VcardAddress;
};
