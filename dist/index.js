"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VCardQR = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const VCardQR = (vcard, options) => {
    return qrcode_1.default.toString(`BEGIN:VCARD
VERSION:3.0
N:${vcard.lastName};${vcard.firstName}
FN:${vcard.firstName} ${vcard.lastName}
ORG:${vcard.companyName}
ROLE:${vcard.title}
${Array.isArray(vcard.url) && vcard.url.map((url) => `URL:${url}\n`)}
ADR:;${Object.keys(vcard.address)
        .map((component) => `${vcard.address[component]};`)
        .join()}
END:VCARD`, options);
};
exports.VCardQR = VCardQR;
exports.default = VCardQR;
