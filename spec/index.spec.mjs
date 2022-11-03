import { VCardQR } from "../dist/index.js";

const card = {
  firstName: "Tiong Hong",
  url: ["https://goodwork.sg", "https://github.com"],
  lastName: "Siah",
  companyName: "Good Work Pte Ltd",
  title: "Technical Lead",
  role: "Technical Lead",
  phone: [
    { type: "WORK", number: "+65 9380 2809" },
    { type: "HOME", number: "+65 93842834" },
  ],
  address: {
    type: "home",
    street_address: "80A Rifle Range Road",
    locality: "Singapore",
    region: "Bukit Timah",
    postal_code: "588386",
    country: "Singapore",
  },
};

VCardQR(card, undefined, "svg").then((str) => console.log(str));
