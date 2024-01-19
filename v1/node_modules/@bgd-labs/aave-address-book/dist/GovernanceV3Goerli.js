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

// src/ts/GovernanceV3Goerli.ts
var GovernanceV3Goerli_exports = {};
__export(GovernanceV3Goerli_exports, {
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_2,
  GOVERNANCE: () => GOVERNANCE,
  GOVERNANCE_POWER_STRATEGY: () => GOVERNANCE_POWER_STRATEGY,
  GOV_DATA_HELPER: () => GOV_DATA_HELPER,
  META_DELEGATE_HELPER: () => META_DELEGATE_HELPER,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER,
  VM_DATA_HELPER: () => VM_DATA_HELPER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_PORTAL_ETH_ETH: () => VOTING_PORTAL_ETH_ETH,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
module.exports = __toCommonJS(GovernanceV3Goerli_exports);
var GOVERNANCE = "0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F";
var VOTING_MACHINE = "0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89";
var PAYLOADS_CONTROLLER = "0x064361B3761CcDd17300146bf58a79d1E570382E";
var VOTING_PORTAL_ETH_ETH = "0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF";
var VM_DATA_HELPER = "0xe10617A1ea760E174E82fBeb38a540d8ACe566f5";
var PC_DATA_HELPER = "0xbd2db358f3C82F2883132A6584e22F38A979e768";
var META_DELEGATE_HELPER = "0x1966133c190475E8385Dc1b4150B5f81c70DC578";
var GOV_DATA_HELPER = "0x160e2d1456B815d6a3d281218538dd6E2e3C841f";
var GOVERNANCE_POWER_STRATEGY = "0x1ba21Fb1bDF4234CAe0AD1e02cF6750d7938E358";
var EXECUTOR_LVL_1 = "0xb7Ea453180e3c7856b341199269c6ca78658c2b2";
var EXECUTOR_LVL_2 = "0x78350567D0598F84091318769c5b66dcbB811524";
var VOTING_STRATEGY = "0x2e5a80Be4EA93225f0D9bFE1f8aC6470f54acDb9";
var DATA_WAREHOUSE = "0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DATA_WAREHOUSE,
  EXECUTOR_LVL_1,
  EXECUTOR_LVL_2,
  GOVERNANCE,
  GOVERNANCE_POWER_STRATEGY,
  GOV_DATA_HELPER,
  META_DELEGATE_HELPER,
  PAYLOADS_CONTROLLER,
  PC_DATA_HELPER,
  VM_DATA_HELPER,
  VOTING_MACHINE,
  VOTING_PORTAL_ETH_ETH,
  VOTING_STRATEGY
});
//# sourceMappingURL=GovernanceV3Goerli.js.map