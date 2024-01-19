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

// src/ts/GovernanceV3Avalanche.ts
var GovernanceV3Avalanche_exports = {};
__export(GovernanceV3Avalanche_exports, {
  CL_EMERGENCY_ORACLE: () => CL_EMERGENCY_ORACLE,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_2,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER,
  VM_DATA_HELPER: () => VM_DATA_HELPER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
module.exports = __toCommonJS(GovernanceV3Avalanche_exports);
var CROSS_CHAIN_CONTROLLER = "0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928";
var CL_EMERGENCY_ORACLE = "0x41185495Bc8297a65DC46f94001DC7233775EbEe";
var VOTING_MACHINE = "0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F";
var PAYLOADS_CONTROLLER = "0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80";
var PC_DATA_HELPER = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var VM_DATA_HELPER = "0x77976B51569896523EE215962Ee91ff236Fa50E8";
var EXECUTOR_LVL_1 = "0x3C06dce358add17aAf230f2234bCCC4afd50d090";
var EXECUTOR_LVL_2 = "0x0000000000000000000000000000000000000000";
var VOTING_STRATEGY = "0x690C218668B440204F369Af1541245d367cc805C";
var DATA_WAREHOUSE = "0x9626F9d60CC0B7e1c9a0A47b7f0bd618fb6f40ff";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CL_EMERGENCY_ORACLE,
  CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE,
  EXECUTOR_LVL_1,
  EXECUTOR_LVL_2,
  PAYLOADS_CONTROLLER,
  PC_DATA_HELPER,
  VM_DATA_HELPER,
  VOTING_MACHINE,
  VOTING_STRATEGY
});
//# sourceMappingURL=GovernanceV3Avalanche.js.map