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

// src/ts/abis/IVotingMachineDataHelper.ts
var IVotingMachineDataHelper_exports = {};
__export(IVotingMachineDataHelper_exports, {
  IVotingMachineDataHelper_ABI: () => IVotingMachineDataHelper_ABI
});
module.exports = __toCommonJS(IVotingMachineDataHelper_exports);
var IVotingMachineDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IVotingMachineWithProofs",
        name: "votingMachine",
        type: "address",
        components: []
      },
      {
        internalType: "struct IVotingMachineDataHelper.InitialProposal[]",
        name: "initialProposals",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "bytes32",
            name: "snapshotBlockHash",
            type: "bytes32",
            components: []
          }
        ]
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IVotingMachineDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
                components: []
              },
              {
                internalType: "bool",
                name: "sentToGovernance",
                type: "bool",
                components: []
              },
              {
                internalType: "uint40",
                name: "startTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "endTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingClosedAndSentTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "creationBlockNumber",
                type: "uint256",
                components: []
              },
              {
                internalType: "uint256",
                name: "votingClosedAndSentBlockNumber",
                type: "uint256",
                components: []
              }
            ]
          },
          {
            internalType: "struct IVotingMachineDataHelper.VotedInfo",
            name: "votedInfo",
            type: "tuple",
            components: [
              {
                internalType: "bool",
                name: "support",
                type: "bool",
                components: []
              },
              {
                internalType: "uint248",
                name: "votingPower",
                type: "uint248",
                components: []
              }
            ]
          },
          {
            internalType: "contract IVotingStrategy",
            name: "strategy",
            type: "address",
            components: []
          },
          {
            internalType: "contract IDataWarehouse",
            name: "dataWarehouse",
            type: "address",
            components: []
          },
          {
            internalType: "address[]",
            name: "votingAssets",
            type: "address[]",
            components: []
          },
          {
            internalType: "bool",
            name: "hasRequiredRoots",
            type: "bool",
            components: []
          },
          {
            internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
            name: "voteConfig",
            type: "tuple",
            components: [
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "bytes32",
                name: "l1ProposalBlockHash",
                type: "bytes32",
                components: []
              }
            ]
          },
          {
            internalType: "enum IVotingMachineWithProofs.ProposalState",
            name: "state",
            type: "uint8",
            components: []
          }
        ]
      }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IVotingMachineDataHelper_ABI
});
//# sourceMappingURL=IVotingMachineDataHelper.js.map