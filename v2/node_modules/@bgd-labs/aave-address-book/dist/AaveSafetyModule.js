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

// src/ts/AaveSafetyModule.ts
var AaveSafetyModule_exports = {};
__export(AaveSafetyModule_exports, {
  STK_AAVE: () => STK_AAVE,
  STK_ABPT: () => STK_ABPT,
  STK_ABPT_ORACLE: () => STK_ABPT_ORACLE,
  STK_ABPT_V2_ORACLE: () => STK_ABPT_V2_ORACLE
});
module.exports = __toCommonJS(AaveSafetyModule_exports);
var STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
var STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
var STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
var STK_ABPT_V2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  STK_AAVE,
  STK_ABPT,
  STK_ABPT_ORACLE,
  STK_ABPT_V2_ORACLE
});
//# sourceMappingURL=AaveSafetyModule.js.map