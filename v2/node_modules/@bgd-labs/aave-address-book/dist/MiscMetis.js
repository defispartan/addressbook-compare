"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/MiscMetis.ts
var MiscMetis_exports = {};
__export(MiscMetis_exports, {
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscMetis_exports);
var TRANSPARENT_PROXY_FACTORY = "0x1dad86dC5990BCE5bFe3A150A4E0ece990d6EBcB";
var PROXY_ADMIN = "0x1CabD986cBAbDf12E00128DFf03C80ee62C4fd97";
var CREATE_3_FACTORY = "0x2e649f6b54B07E210b31c9cC2eB8a0d5997c3D4A";
var PROTOCOL_GUARDIAN = "0xF6Db48C5968A9eBCB935786435530f28e32Cc501";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CREATE_3_FACTORY,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscMetis.js.map