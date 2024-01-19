declare const STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
declare const STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
declare const STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
declare const STK_ABPT_V2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";

declare const AaveSafetyModule_STK_AAVE: typeof STK_AAVE;
declare const AaveSafetyModule_STK_ABPT: typeof STK_ABPT;
declare const AaveSafetyModule_STK_ABPT_ORACLE: typeof STK_ABPT_ORACLE;
declare const AaveSafetyModule_STK_ABPT_V2_ORACLE: typeof STK_ABPT_V2_ORACLE;
declare namespace AaveSafetyModule {
  export { AaveSafetyModule_STK_AAVE as STK_AAVE, AaveSafetyModule_STK_ABPT as STK_ABPT, AaveSafetyModule_STK_ABPT_ORACLE as STK_ABPT_ORACLE, AaveSafetyModule_STK_ABPT_V2_ORACLE as STK_ABPT_V2_ORACLE };
}

export { AaveSafetyModule as A, STK_AAVE as S, STK_ABPT as a, STK_ABPT_ORACLE as b, STK_ABPT_V2_ORACLE as c };
