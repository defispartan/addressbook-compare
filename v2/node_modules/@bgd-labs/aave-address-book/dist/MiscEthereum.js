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

// src/ts/MiscEthereum.ts
var MiscEthereum_exports = {};
__export(MiscEthereum_exports, {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER: () => AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  AAVE_MERKLE_DISTRIBUTOR: () => AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE: () => AAVE_POL_ETH_BRIDGE,
  AAVE_SWAPPER: () => AAVE_SWAPPER,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  ECOSYSTEM_RESERVE: () => ECOSYSTEM_RESERVE,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  PROXY_ADMIN_LONG: () => PROXY_ADMIN_LONG,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscEthereum_exports);
var AAVE_ECOSYSTEM_RESERVE_CONTROLLER = "0x3d569673dAa0575c936c7c67c4E6AedA69CC630C";
var ECOSYSTEM_RESERVE = "0x25F2226B597E8F9514B3F68F00f494cF4f286491";
var PROXY_ADMIN_LONG = "0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517";
var AAVE_SWAPPER = "0x3ea64b1C0194524b48F9118462C8E9cd61a243c7";
var AAVE_POL_ETH_BRIDGE = "0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36";
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
var PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
var CREATE_3_FACTORY = "0xcc3C54B95f3f1867A43009B80ed4DD930E3cE2F7";
var PROTOCOL_GUARDIAN = "0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633";
var AAVE_MERKLE_DISTRIBUTOR = "0xa88c6D90eAe942291325f9ae3c66f3563B93FE10";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE,
  AAVE_SWAPPER,
  CREATE_3_FACTORY,
  ECOSYSTEM_RESERVE,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  PROXY_ADMIN_LONG,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscEthereum.js.map