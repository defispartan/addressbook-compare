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

// src/ts/GovernanceV3Mumbai.ts
var GovernanceV3Mumbai_exports = {};
__export(GovernanceV3Mumbai_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_2,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
module.exports = __toCommonJS(GovernanceV3Mumbai_exports);
var CROSS_CHAIN_CONTROLLER = "0xe521cB5e23DbF8248c0B0C3C2503feA3C4c7Caff";
var VOTING_MACHINE = "0x05D0215cFC8D4B726085ADDb1ce43bC5C70f9D8f";
var PAYLOADS_CONTROLLER = "0x92041C9904d1F0b8100D1d7e01B760d2cF1Fb426";
var EXECUTOR_LVL_1 = "0x858859CCDDa608941bB64D260a836298c49Ff0C7";
var EXECUTOR_LVL_2 = "0x0000000000000000000000000000000000000000";
var VOTING_STRATEGY = "0x2FD0ea3cF58cB9cD25c2a186E643629198A37600";
var DATA_WAREHOUSE = "0x1F780a6E860792E59F2160b1E9E503bFF8c58Cb1";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE,
  EXECUTOR_LVL_1,
  EXECUTOR_LVL_2,
  PAYLOADS_CONTROLLER,
  VOTING_MACHINE,
  VOTING_STRATEGY
});
//# sourceMappingURL=GovernanceV3Mumbai.js.map