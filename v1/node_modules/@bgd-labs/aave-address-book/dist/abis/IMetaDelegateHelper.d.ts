declare const IMetaDelegateHelper_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]";
        readonly name: "delegateParams";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "contract IGovernancePowerDelegationToken";
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "enum IMetaDelegateHelper.DelegationType";
            readonly name: "delegationType";
            readonly type: "uint8";
            readonly components: readonly [];
        }, {
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
            readonly components: readonly [];
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
            readonly components: readonly [];
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
            readonly components: readonly [];
        }];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "batchMetaDelegate";
    readonly outputs: readonly [];
}];

export { IMetaDelegateHelper_ABI };
