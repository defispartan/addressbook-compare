declare const IPayloadsControllerDataHelper_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IPayloadsController";
        readonly name: "payloadsController";
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
    readonly name: "getExecutorConfigs";
    readonly outputs: readonly [{
        readonly internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            readonly name: "accessLevel";
            readonly type: "uint8";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IPayloadsControllerCore.ExecutorConfig";
            readonly name: "config";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "executor";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "delay";
                readonly type: "uint40";
                readonly components: readonly [];
            }];
        }];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IPayloadsController";
        readonly name: "payloadsController";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint40[]";
        readonly name: "payloadsIds";
        readonly type: "uint40[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getPayloadsData";
    readonly outputs: readonly [{
        readonly internalType: "struct IPayloadsControllerDataHelper.Payload[]";
        readonly name: "";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "struct IPayloadsControllerCore.Payload";
            readonly name: "data";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "creator";
                readonly type: "address";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                readonly name: "maximumAccessLevelRequired";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "enum IPayloadsControllerCore.PayloadState";
                readonly name: "state";
                readonly type: "uint8";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "createdAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "queuedAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "executedAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "cancelledAt";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "expirationTime";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "delay";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "uint40";
                readonly name: "gracePeriod";
                readonly type: "uint40";
                readonly components: readonly [];
            }, {
                readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
                readonly name: "actions";
                readonly type: "tuple[]";
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "bool";
                    readonly name: "withDelegateCall";
                    readonly type: "bool";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "string";
                    readonly name: "signature";
                    readonly type: "string";
                    readonly components: readonly [];
                }, {
                    readonly internalType: "bytes";
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly components: readonly [];
                }];
            }];
        }];
    }];
}];

export { IPayloadsControllerDataHelper_ABI };
