declare const IAaveGovernanceV2_ABI: readonly [{
    readonly type: "function";
    readonly name: "__abdicate";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "authorizeExecutors";
    readonly inputs: readonly [{
        readonly name: "executors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "cancel";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "create";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly internalType: "contract IExecutorWithTimelock";
    }, {
        readonly name: "targets";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "values";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "signatures";
        readonly type: "string[]";
        readonly internalType: "string[]";
    }, {
        readonly name: "calldatas";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }, {
        readonly name: "withDelegatecalls";
        readonly type: "bool[]";
        readonly internalType: "bool[]";
    }, {
        readonly name: "ipfsHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "getGovernanceStrategy";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getGuardian";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalById";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IAaveGovernanceV2.ProposalWithoutVotes";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "creator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "contract IExecutorWithTimelock";
        }, {
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "signatures";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "withDelegatecalls";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "startBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "endBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executionTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "forVotes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "againstVotes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executed";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "canceled";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "ipfsHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalState";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IAaveGovernanceV2.ProposalState";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalsCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVoteOnProposal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IAaveGovernanceV2.Vote";
        readonly components: readonly [{
            readonly name: "support";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "votingPower";
            readonly type: "uint248";
            readonly internalType: "uint248";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVotingDelay";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isExecutorAuthorized";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "queue";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setGovernanceStrategy";
    readonly inputs: readonly [{
        readonly name: "governanceStrategy";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setVotingDelay";
    readonly inputs: readonly [{
        readonly name: "votingDelay";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVoteBySignature";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "unauthorizeExecutors";
    readonly inputs: readonly [{
        readonly name: "executors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "ExecutorAuthorized";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ExecutorUnauthorized";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "GovernanceStrategyChanged";
    readonly inputs: readonly [{
        readonly name: "newStrategy";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "initiatorChange";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalCanceled";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalCreated";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "creator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "contract IExecutorWithTimelock";
    }, {
        readonly name: "targets";
        readonly type: "address[]";
        readonly indexed: false;
        readonly internalType: "address[]";
    }, {
        readonly name: "values";
        readonly type: "uint256[]";
        readonly indexed: false;
        readonly internalType: "uint256[]";
    }, {
        readonly name: "signatures";
        readonly type: "string[]";
        readonly indexed: false;
        readonly internalType: "string[]";
    }, {
        readonly name: "calldatas";
        readonly type: "bytes[]";
        readonly indexed: false;
        readonly internalType: "bytes[]";
    }, {
        readonly name: "withDelegatecalls";
        readonly type: "bool[]";
        readonly indexed: false;
        readonly internalType: "bool[]";
    }, {
        readonly name: "startBlock";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "endBlock";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "strategy";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "ipfsHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalExecuted";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "initiatorExecution";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalQueued";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "executionTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "initiatorQueueing";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteEmitted";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "votingPower";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VotingDelayChanged";
    readonly inputs: readonly [{
        readonly name: "newVotingDelay";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "initiatorChange";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}];

export { IAaveGovernanceV2_ABI };
