declare const IGovernanceDataHelper_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "enum PayloadsControllerUtils.AccessControl[]";
        readonly name: "accessLevels";
        readonly type: "uint8[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getConstants";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Constants";
        readonly name: "";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly internalType: "struct IGovernanceDataHelper.VotingConfig[]";
            readonly name: "votingConfigs";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct IGovernanceCore.VotingConfig";
                readonly name: "config";
                readonly type: "tuple";
                readonly components: readonly [{
                    readonly internalType: "uint24";
                    readonly name: "coolDownBeforeVotingStart";
                    readonly type: "uint24";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint24";
                    readonly name: "votingDuration";
                    readonly type: "uint24";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "yesThreshold";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "yesNoDifferential";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint56";
                    readonly name: "minPropositionPower";
                    readonly type: "uint56";
                    readonly components: readonly [];
                }];
            }];
        }, {
            readonly internalType: "uint256";
            readonly name: "precisionDivider";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "cooldownPeriod";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "expirationTime";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "cancellationFee";
            readonly type: "uint256";
            readonly components: readonly [];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "from";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "to";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "pageSize";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Proposal[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "votingChainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IGovernanceCore.Proposal";
            readonly name: "proposalData";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "enum IGovernanceCore.State";
                readonly name: "state";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "creationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint24";
                readonly name: "votingDuration";
                readonly type: "uint24";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "votingActivationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "queuingTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "cancelTimestamp";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "address";
                readonly name: "creator";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "address";
                readonly name: "votingPortal";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "snapshotBlockHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "ipfsHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "forVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint128";
                readonly name: "againstVotes";
                readonly type: "uint128";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint256";
                readonly name: "cancellationFee";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct PayloadsControllerUtils.Payload[]";
                readonly name: "payloads";
                readonly type: "tuple[]";
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "chain";
                    readonly type: "uint256";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "address";
                    readonly name: "payloadsController";
                    readonly type: "address";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint40";
                    readonly name: "payloadId";
                    readonly type: "uint40";
                    readonly components: readonly [];
                }];
            }];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGovernanceCore";
        readonly name: "govCore";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "wallet";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256[]";
        readonly name: "chainIds";
        readonly type: "uint256[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getRepresentationData";
    readonly outputs: readonly [{
        readonly internalType: "struct IGovernanceDataHelper.Representatives[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "address";
            readonly name: "representative";
            readonly type: "address";
            readonly components: readonly [];
        }];
    }, {
        readonly internalType: "struct IGovernanceDataHelper.Represented[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "address[]";
            readonly name: "votersRepresented";
            readonly type: "address[]";
            readonly components: readonly [];
        }];
    }];
}];

export { IGovernanceDataHelper_ABI };
