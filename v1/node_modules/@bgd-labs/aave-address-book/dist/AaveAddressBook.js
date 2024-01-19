"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/AaveAddressBook.ts
var AaveAddressBook_exports = {};
__export(AaveAddressBook_exports, {
  AaveGovernanceV2: () => AaveGovernanceV2,
  AaveSafetyModule: () => AaveSafetyModule,
  AaveV2Avalanche: () => AaveV2Avalanche,
  AaveV2Ethereum: () => AaveV2Ethereum,
  AaveV2EthereumAMM: () => AaveV2EthereumAMM,
  AaveV2EthereumArc: () => AaveV2EthereumArc,
  AaveV2Fuji: () => AaveV2Fuji,
  AaveV2Goerli: () => AaveV2Goerli,
  AaveV2Mumbai: () => AaveV2Mumbai,
  AaveV2Polygon: () => AaveV2Polygon,
  AaveV3Arbitrum: () => AaveV3Arbitrum,
  AaveV3ArbitrumGoerli: () => AaveV3ArbitrumGoerli,
  AaveV3Avalanche: () => AaveV3Avalanche,
  AaveV3BNB: () => AaveV3BNB,
  AaveV3Base: () => AaveV3Base,
  AaveV3Ethereum: () => AaveV3Ethereum,
  AaveV3Fantom: () => AaveV3Fantom,
  AaveV3FantomTestnet: () => AaveV3FantomTestnet,
  AaveV3Fuji: () => AaveV3Fuji,
  AaveV3Gnosis: () => AaveV3Gnosis,
  AaveV3GoerliGho: () => AaveV3GoerliGho,
  AaveV3Harmony: () => AaveV3Harmony,
  AaveV3Metis: () => AaveV3Metis,
  AaveV3Mumbai: () => AaveV3Mumbai,
  AaveV3Optimism: () => AaveV3Optimism,
  AaveV3OptimismGoerli: () => AaveV3OptimismGoerli,
  AaveV3Polygon: () => AaveV3Polygon,
  AaveV3ScrollAlpha: () => AaveV3ScrollAlpha,
  AaveV3ScrollSepolia: () => AaveV3ScrollSepolia,
  AaveV3Sepolia: () => AaveV3Sepolia,
  AggregatorInterface_ABI: () => import_AggregatorInterface.AggregatorInterface_ABI,
  GovernanceV3Arbitrum: () => GovernanceV3Arbitrum,
  GovernanceV3Avalanche: () => GovernanceV3Avalanche,
  GovernanceV3BNB: () => GovernanceV3BNB,
  GovernanceV3Base: () => GovernanceV3Base,
  GovernanceV3Ethereum: () => GovernanceV3Ethereum,
  GovernanceV3Fuji: () => GovernanceV3Fuji,
  GovernanceV3Gnosis: () => GovernanceV3Gnosis,
  GovernanceV3Goerli: () => GovernanceV3Goerli,
  GovernanceV3Metis: () => GovernanceV3Metis,
  GovernanceV3Mumbai: () => GovernanceV3Mumbai,
  GovernanceV3Optimism: () => GovernanceV3Optimism,
  GovernanceV3Polygon: () => GovernanceV3Polygon,
  IAToken_ABI: () => import_IAToken.IAToken_ABI,
  IAaveGovernanceV2_ABI: () => import_IAaveGovernanceV2.IAaveGovernanceV2_ABI,
  IAaveOracle_ABI: () => import_IAaveOracle.IAaveOracle_ABI,
  ICollector_ABI: () => import_ICollector.ICollector_ABI,
  ICrossChainController_ABI: () => import_ICrossChainController.ICrossChainController_ABI,
  IDataWarehouse_ABI: () => import_IDataWarehouse.IDataWarehouse_ABI,
  IDefaultInterestRateStrategy_ABI: () => import_IDefaultInterestRateStrategy.IDefaultInterestRateStrategy_ABI,
  IERC20_ABI: () => import_IERC20.IERC20_ABI,
  IExecutorWithTimelock_ABI: () => import_IExecutorWithTimelock.IExecutorWithTimelock_ABI,
  IExecutor_ABI: () => import_IExecutor.IExecutor_ABI,
  IGovernanceCore_ABI: () => import_IGovernanceCore.IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI: () => import_IGovernanceDataHelper.IGovernanceDataHelper_ABI,
  IGovernancePowerStrategy_ABI: () => import_IGovernancePowerStrategy.IGovernancePowerStrategy_ABI,
  IMetaDelegateHelper_ABI: () => import_IMetaDelegateHelper.IMetaDelegateHelper_ABI,
  IOwnable_ABI: () => import_IOwnable.IOwnable_ABI,
  IPayloadsControllerCore_ABI: () => import_IPayloadsControllerCore.IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI: () => import_IPayloadsControllerDataHelper.IPayloadsControllerDataHelper_ABI,
  IRescuable_ABI: () => import_IRescuable.IRescuable_ABI,
  IUiPoolDataProvider_ABI: () => import_IUiPoolDataProvider.IUiPoolDataProvider_ABI,
  IVotingMachineDataHelper_ABI: () => import_IVotingMachineDataHelper.IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI: () => import_IVotingMachineWithProofs.IVotingMachineWithProofs_ABI,
  IVotingPortal_ABI: () => import_IVotingPortal.IVotingPortal_ABI,
  IVotingStrategy_ABI: () => import_IVotingStrategy.IVotingStrategy_ABI,
  IWithGuardian_ABI: () => import_IWithGuardian.IWithGuardian_ABI,
  MiscArbitrum: () => MiscArbitrum,
  MiscAvalanche: () => MiscAvalanche,
  MiscBNB: () => MiscBNB,
  MiscBase: () => MiscBase,
  MiscEthereum: () => MiscEthereum,
  MiscFantom: () => MiscFantom,
  MiscGnosis: () => MiscGnosis,
  MiscMetis: () => MiscMetis,
  MiscMumbai: () => MiscMumbai,
  MiscOptimism: () => MiscOptimism,
  MiscPolygon: () => MiscPolygon,
  MiscSepolia: () => MiscSepolia
});
module.exports = __toCommonJS(AaveAddressBook_exports);
var GovernanceV3Ethereum = __toESM(require("./GovernanceV3Ethereum.js"));
var GovernanceV3Arbitrum = __toESM(require("./GovernanceV3Arbitrum.js"));
var GovernanceV3Avalanche = __toESM(require("./GovernanceV3Avalanche.js"));
var GovernanceV3Fuji = __toESM(require("./GovernanceV3Fuji.js"));
var GovernanceV3Optimism = __toESM(require("./GovernanceV3Optimism.js"));
var GovernanceV3Polygon = __toESM(require("./GovernanceV3Polygon.js"));
var GovernanceV3Mumbai = __toESM(require("./GovernanceV3Mumbai.js"));
var GovernanceV3Goerli = __toESM(require("./GovernanceV3Goerli.js"));
var GovernanceV3Metis = __toESM(require("./GovernanceV3Metis.js"));
var GovernanceV3Base = __toESM(require("./GovernanceV3Base.js"));
var GovernanceV3BNB = __toESM(require("./GovernanceV3BNB.js"));
var GovernanceV3Gnosis = __toESM(require("./GovernanceV3Gnosis.js"));
var AaveV2EthereumAMM = __toESM(require("./AaveV2EthereumAMM.js"));
var AaveV2EthereumArc = __toESM(require("./AaveV2EthereumArc.js"));
var AaveV2Ethereum = __toESM(require("./AaveV2Ethereum.js"));
var AaveV2Polygon = __toESM(require("./AaveV2Polygon.js"));
var AaveV2Mumbai = __toESM(require("./AaveV2Mumbai.js"));
var AaveV2Goerli = __toESM(require("./AaveV2Goerli.js"));
var AaveV2Fuji = __toESM(require("./AaveV2Fuji.js"));
var AaveV2Avalanche = __toESM(require("./AaveV2Avalanche.js"));
var AaveV3Ethereum = __toESM(require("./AaveV3Ethereum.js"));
var AaveV3Sepolia = __toESM(require("./AaveV3Sepolia.js"));
var AaveV3GoerliGho = __toESM(require("./AaveV3GoerliGho.js"));
var AaveV3Polygon = __toESM(require("./AaveV3Polygon.js"));
var AaveV3Mumbai = __toESM(require("./AaveV3Mumbai.js"));
var AaveV3Avalanche = __toESM(require("./AaveV3Avalanche.js"));
var AaveV3Fuji = __toESM(require("./AaveV3Fuji.js"));
var AaveV3Base = __toESM(require("./AaveV3Base.js"));
var AaveV3Metis = __toESM(require("./AaveV3Metis.js"));
var AaveV3Gnosis = __toESM(require("./AaveV3Gnosis.js"));
var AaveV3BNB = __toESM(require("./AaveV3BNB.js"));
var AaveV3ArbitrumGoerli = __toESM(require("./AaveV3ArbitrumGoerli.js"));
var AaveV3Arbitrum = __toESM(require("./AaveV3Arbitrum.js"));
var AaveV3OptimismGoerli = __toESM(require("./AaveV3OptimismGoerli.js"));
var AaveV3Optimism = __toESM(require("./AaveV3Optimism.js"));
var AaveV3ScrollAlpha = __toESM(require("./AaveV3ScrollAlpha.js"));
var AaveV3ScrollSepolia = __toESM(require("./AaveV3ScrollSepolia.js"));
var AaveV3FantomTestnet = __toESM(require("./AaveV3FantomTestnet.js"));
var AaveV3Fantom = __toESM(require("./AaveV3Fantom.js"));
var AaveV3Harmony = __toESM(require("./AaveV3Harmony.js"));
var MiscArbitrum = __toESM(require("./MiscArbitrum.js"));
var MiscAvalanche = __toESM(require("./MiscAvalanche.js"));
var MiscBase = __toESM(require("./MiscBase.js"));
var MiscEthereum = __toESM(require("./MiscEthereum.js"));
var MiscFantom = __toESM(require("./MiscFantom.js"));
var MiscOptimism = __toESM(require("./MiscOptimism.js"));
var MiscPolygon = __toESM(require("./MiscPolygon.js"));
var MiscMetis = __toESM(require("./MiscMetis.js"));
var MiscGnosis = __toESM(require("./MiscGnosis.js"));
var MiscBNB = __toESM(require("./MiscBNB.js"));
var MiscSepolia = __toESM(require("./MiscSepolia.js"));
var MiscMumbai = __toESM(require("./MiscMumbai.js"));
var AaveGovernanceV2 = __toESM(require("./AaveGovernanceV2.js"));
var AaveSafetyModule = __toESM(require("./AaveSafetyModule.js"));
var import_IAaveGovernanceV2 = require("./abis/IAaveGovernanceV2.js");
var import_ICollector = require("./abis/ICollector.js");
var import_AggregatorInterface = require("./abis/AggregatorInterface.js");
var import_IPayloadsControllerCore = require("./abis/IPayloadsControllerCore.js");
var import_IVotingMachineWithProofs = require("./abis/IVotingMachineWithProofs.js");
var import_IGovernanceCore = require("./abis/IGovernanceCore.js");
var import_IVotingStrategy = require("./abis/IVotingStrategy.js");
var import_IVotingPortal = require("./abis/IVotingPortal.js");
var import_IGovernancePowerStrategy = require("./abis/IGovernancePowerStrategy.js");
var import_IDataWarehouse = require("./abis/IDataWarehouse.js");
var import_IExecutorWithTimelock = require("./abis/IExecutorWithTimelock.js");
var import_IERC20 = require("./abis/IERC20.js");
var import_IAToken = require("./abis/IAToken.js");
var import_IDefaultInterestRateStrategy = require("./abis/IDefaultInterestRateStrategy.js");
var import_IAaveOracle = require("./abis/IAaveOracle.js");
var import_IExecutor = require("./abis/IExecutor.js");
var import_ICrossChainController = require("./abis/ICrossChainController.js");
var import_IWithGuardian = require("./abis/IWithGuardian.js");
var import_IRescuable = require("./abis/IRescuable.js");
var import_IOwnable = require("./abis/IOwnable.js");
var import_IPayloadsControllerDataHelper = require("./abis/IPayloadsControllerDataHelper.js");
var import_IGovernanceDataHelper = require("./abis/IGovernanceDataHelper.js");
var import_IMetaDelegateHelper = require("./abis/IMetaDelegateHelper.js");
var import_IVotingMachineDataHelper = require("./abis/IVotingMachineDataHelper.js");
var import_IUiPoolDataProvider = require("./abis/IUiPoolDataProvider.js");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AaveGovernanceV2,
  AaveSafetyModule,
  AaveV2Avalanche,
  AaveV2Ethereum,
  AaveV2EthereumAMM,
  AaveV2EthereumArc,
  AaveV2Fuji,
  AaveV2Goerli,
  AaveV2Mumbai,
  AaveV2Polygon,
  AaveV3Arbitrum,
  AaveV3ArbitrumGoerli,
  AaveV3Avalanche,
  AaveV3BNB,
  AaveV3Base,
  AaveV3Ethereum,
  AaveV3Fantom,
  AaveV3FantomTestnet,
  AaveV3Fuji,
  AaveV3Gnosis,
  AaveV3GoerliGho,
  AaveV3Harmony,
  AaveV3Metis,
  AaveV3Mumbai,
  AaveV3Optimism,
  AaveV3OptimismGoerli,
  AaveV3Polygon,
  AaveV3ScrollAlpha,
  AaveV3ScrollSepolia,
  AaveV3Sepolia,
  AggregatorInterface_ABI,
  GovernanceV3Arbitrum,
  GovernanceV3Avalanche,
  GovernanceV3BNB,
  GovernanceV3Base,
  GovernanceV3Ethereum,
  GovernanceV3Fuji,
  GovernanceV3Gnosis,
  GovernanceV3Goerli,
  GovernanceV3Metis,
  GovernanceV3Mumbai,
  GovernanceV3Optimism,
  GovernanceV3Polygon,
  IAToken_ABI,
  IAaveGovernanceV2_ABI,
  IAaveOracle_ABI,
  ICollector_ABI,
  ICrossChainController_ABI,
  IDataWarehouse_ABI,
  IDefaultInterestRateStrategy_ABI,
  IERC20_ABI,
  IExecutorWithTimelock_ABI,
  IExecutor_ABI,
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IGovernancePowerStrategy_ABI,
  IMetaDelegateHelper_ABI,
  IOwnable_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IRescuable_ABI,
  IUiPoolDataProvider_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
  IVotingPortal_ABI,
  IVotingStrategy_ABI,
  IWithGuardian_ABI,
  MiscArbitrum,
  MiscAvalanche,
  MiscBNB,
  MiscBase,
  MiscEthereum,
  MiscFantom,
  MiscGnosis,
  MiscMetis,
  MiscMumbai,
  MiscOptimism,
  MiscPolygon,
  MiscSepolia
});
//# sourceMappingURL=AaveAddressBook.js.map