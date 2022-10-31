import { QRCodeToStringOptions } from "qrcode";

export type VCardQR = (vCard: VCard, options: QRCodeOptions) => void;

export type VCardAddress = {
  type: "work" | "home" | "dom" | "intl" | "postal" | "parcel";
  street_address: string;
  locality: string;
  region?: string;
  postal_code?: string;
  country: string;
};

export type VCardPhone = {
  type:
    | "PREF"
    | "WORK"
    | "HOME"
    | "VOICE"
    | "FAX"
    | "MSG"
    | "CELL"
    | "PAGER"
    | "BBS"
    | "MODEM"
    | "CAR"
    | "ISDN"
    | "VIDEO";
  number: string;
};

export type VCard = {
  firstName: string;
  lastName: string;
  companyName: string;
  title: string;
  role: string;
  url: string[];
  phone: VCardPhone[];
  address: VCardAddress;
  email: string;
};
