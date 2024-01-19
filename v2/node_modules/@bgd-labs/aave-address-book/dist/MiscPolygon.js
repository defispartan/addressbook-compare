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

// src/ts/MiscPolygon.ts
var MiscPolygon_exports = {};
__export(MiscPolygon_exports, {
  AAVE_MERKLE_DISTRIBUTOR: () => AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE: () => AAVE_POL_ETH_BRIDGE,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscPolygon_exports);
var AAVE_POL_ETH_BRIDGE = "0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36";
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
var PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
var CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
var PROTOCOL_GUARDIAN = "0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58";
var AAVE_MERKLE_DISTRIBUTOR = "0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE,
  CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscPolygon.js.map