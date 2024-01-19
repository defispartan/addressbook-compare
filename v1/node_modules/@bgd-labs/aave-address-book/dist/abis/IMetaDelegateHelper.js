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

// src/ts/abis/IMetaDelegateHelper.ts
var IMetaDelegateHelper_exports = {};
__export(IMetaDelegateHelper_exports, {
  IMetaDelegateHelper_ABI: () => IMetaDelegateHelper_ABI
});
module.exports = __toCommonJS(IMetaDelegateHelper_exports);
var IMetaDelegateHelper_ABI = [
  {
    inputs: [
      {
        internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]",
        name: "delegateParams",
        type: "tuple[]",
        components: [
          {
            internalType: "contract IGovernancePowerDelegationToken",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "enum IMetaDelegateHelper.DelegationType",
            name: "delegationType",
            type: "uint8",
            components: []
          },
          {
            internalType: "address",
            name: "delegator",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "batchMetaDelegate",
    outputs: []
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IMetaDelegateHelper_ABI
});
//# sourceMappingURL=IMetaDelegateHelper.js.map