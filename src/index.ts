import type { VCardQR as TVCardQR } from "./vcard-qr";
import QRCode from "qrcode";

const VCardQR: TVCardQR = (vcard) => {
  return QRCode.toString(
    `BEGIN:VCARD
VERSION:3.0
N:${vcard.lastName};${vcard.firstName}
FN:${vcard.firstName} ${vcard.lastName}
ORG:${vcard.companyName}
ROLE:${vcard.title}
${Array.isArray(vcard.url) && vcard.url.map((url) => `URL:${url}\n`)}
ADR:;${Object.keys(vcard.address)
      .map((component) => `${vcard.address[component]};`)
      .join()}
END:VCARD`
  );
};

export default VCardQR;
export { VCardQR };
