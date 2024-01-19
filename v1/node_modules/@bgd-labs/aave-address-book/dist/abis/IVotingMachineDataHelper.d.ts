declare const IVotingMachineDataHelper_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVotingMachineWithProofs";
        readonly name: "votingMachine";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "struct IVotingMachineDataHelper.InitialProposal[]";
        readonly name: "initialProposals";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "bytes32";
            readonly name: "snapshotBlockHash";
            readonly type: "bytes32";
            readonly components: readonly [];
        }];
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IVotingMachineDataHelper.Proposal[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes";
            readonly name: "proposalData";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "bool";
                readonly name: "sentToGovernance";
                readonly type: "bool";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "startTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "endTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "votingClosedAndSentTimestamp";
                readonly type: "uint40";
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
                readonly name: "creationBlockNumber";
                readonly type: "uint256";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint256";
                readonly name: "votingClosedAndSentBlockNumber";
                readonly type: "uint256";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "struct IVotingMachineDataHelper.VotedInfo";
            readonly name: "votedInfo";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "support";
                readonly type: "bool";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint248";
                readonly name: "votingPower";
                readonly type: "uint248";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "contract IVotingStrategy";
            readonly name: "strategy";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "contract IDataWarehouse";
            readonly name: "dataWarehouse";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "address[]";
            readonly name: "votingAssets";
            readonly type: "address[]";
            readonly components: readonly [];
        }, {
            readonly internalType: "bool";
            readonly name: "hasRequiredRoots";
            readonly type: "bool";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration";
            readonly name: "voteConfig";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "votingDuration";
                readonly type: "uint24";
                readonly components: readonly [];
            }, {
                readonly internalType: "bytes32";
                readonly name: "l1ProposalBlockHash";
                readonly type: "bytes32";
                readonly components: readonly [];
            }];
        }, {
            readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
            readonly name: "state";
            readonly type: "uint8";
            readonly components: readonly [];
        }];
    }];
}];

export { IVotingMachineDataHelper_ABI };
