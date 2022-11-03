"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VCardQR = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const EmptyIfUndefined = (str) => str || "";
/*
https://www.rfc-editor.org/rfc/rfc6350#section-6.3.1
Special notes:  The structured type value consists of a sequence of
address components.  The component values MUST be specified in
their corresponding position.  The structured type value
corresponds, in sequence, to
     the post office box;
     the extended address (e.g., apartment or suite number);
     the street address;
     the locality (e.g., city);
     the region (e.g., state or province);
     the postal code;
     the country name (full name in the language specified in
     Section 5.1).
 */
const vCardAddressKeys = [
    /*
      Experience with vCard 3 has shown that the first two components
      (post office box and extended address) are plagued with many
      interoperability issues.  To ensure maximal interoperability,
      their values SHOULD be empty.
      */
    // "po_box",
    // "address",
    "street_address",
    "locality",
    "region",
    "postal_code",
    "country",
    "type",
];
const VCardQR = async (vcard, options, type = "canvas") => {
    const string = `BEGIN:VCARD
VERSION:3.0
N:${EmptyIfUndefined(vcard.lastName)};${EmptyIfUndefined(vcard.firstName)}
FN:${EmptyIfUndefined(vcard.firstName)} ${EmptyIfUndefined(vcard.lastName)}
ORG:${EmptyIfUndefined(vcard.companyName)}
ROLE:${EmptyIfUndefined(vcard.title)}
${Array.isArray(vcard.phone) &&
        vcard.phone.map((p) => `TEL;TYPE=${p.type}:${p.number}`).join("\n")}
${Array.isArray(vcard.url) && vcard.url.map((url) => `URL:${url}`).join("\n")}
${vcard.address !== undefined &&
        `ADR;GEO=;TYPE=${vcard.address.type};LABEL="":;;${Object.keys(vcard.address)
            .sort((a, b) => vCardAddressKeys.indexOf(a) - vCardAddressKeys.indexOf(b))
            .filter((c) => c !== "type")
            .map((component) => {
            return `${vcard.address[component]}`;
        })
            .join(";")}`}
END:VCARD`;
    try {
        //(text: string | QRCodeSegment[], options?: QRCodeToStringOptions): Promise<string>
        const qrToCanvasPromise = qrcode_1.default.toCanvas;
        const qrToSvgPromise = qrcode_1.default.toString;
        const raw = qrcode_1.default.create(string);
        if (type === "canvas") {
            const canvas = await qrToCanvasPromise(string, options);
            return Promise.resolve({ type, canvas, raw });
        }
        else {
            const svg = await qrToSvgPromise(string, options);
            return Promise.resolve({ type, svg, raw });
        }
    }
    catch (err) {
        throw err;
    }
};
exports.VCardQR = VCardQR;
exports.default = VCardQR;
