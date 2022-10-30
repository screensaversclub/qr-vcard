import { VCardQR } from "../dist";

const card = {
  firstName: "Tiong Hong",
  url: ["https://goodwork.sg"],
  lastName: "Siah",
  companyName: "Good Work Pte Ltd",
  title: "Technical Lead",
  role: "Technical Lead",
  address: {
    address: "",
    street_address: "80A Rifle Range Road",
    type: "work",
    locality: "Singapore",
    region: "Singapore",
    po_box: "",
  },
};

VCardQR(card).then((str) => console.log(str));
