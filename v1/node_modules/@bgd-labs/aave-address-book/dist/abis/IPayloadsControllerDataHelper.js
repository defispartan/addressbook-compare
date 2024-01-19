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

// src/ts/abis/IPayloadsControllerDataHelper.ts
var IPayloadsControllerDataHelper_exports = {};
__export(IPayloadsControllerDataHelper_exports, {
  IPayloadsControllerDataHelper_ABI: () => IPayloadsControllerDataHelper_ABI
});
module.exports = __toCommonJS(IPayloadsControllerDataHelper_exports);
var IPayloadsControllerDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getExecutorConfigs",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "enum PayloadsControllerUtils.AccessControl",
            name: "accessLevel",
            type: "uint8",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            name: "config",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "executor",
                type: "address",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "uint40[]",
        name: "payloadsIds",
        type: "uint40[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPayloadsData",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.Payload[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.Payload",
            name: "data",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "maximumAccessLevelRequired",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum IPayloadsControllerCore.PayloadState",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "createdAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "executedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelledAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "expirationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "gracePeriod",
                type: "uint40",
                components: []
              },
              {
                internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
                name: "actions",
                type: "tuple[]",
                components: [
                  {
                    internalType: "address",
                    name: "target",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "bool",
                    name: "withDelegateCall",
                    type: "bool",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "string",
                    name: "signature",
                    type: "string",
                    components: []
                  },
                  {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IPayloadsControllerDataHelper_ABI
});
//# sourceMappingURL=IPayloadsControllerDataHelper.js.map