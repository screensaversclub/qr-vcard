import type { VCardQR } from "./vcard-qr";
import QRCode from "qrcode";

const VCardQR: VCardQR = (vcard) => {
  return QRCode.toString(
    `BEGIN:VCARD
VERSION:3.0
N:${vcard.lastName};${vcard.firstName}
FN:${vcard.firstName} ${vcard.lastName}
ORG:${vcard.companyName}
ROLE:${vcard.title}
${vcard.url.map((url) => `URL:${url}\n`)}
ADR:;;;;;;
END:VCARD`
  );
};

export default VCardQR;
export { VCardQR };
