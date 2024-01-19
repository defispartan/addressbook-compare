// src/ts/AaveAddressBook.ts
import * as GovernanceV3Ethereum from "./GovernanceV3Ethereum.mjs";
import * as GovernanceV3Arbitrum from "./GovernanceV3Arbitrum.mjs";
import * as GovernanceV3Avalanche from "./GovernanceV3Avalanche.mjs";
import * as GovernanceV3Fuji from "./GovernanceV3Fuji.mjs";
import * as GovernanceV3Optimism from "./GovernanceV3Optimism.mjs";
import * as GovernanceV3Polygon from "./GovernanceV3Polygon.mjs";
import * as GovernanceV3Mumbai from "./GovernanceV3Mumbai.mjs";
import * as GovernanceV3Goerli from "./GovernanceV3Goerli.mjs";
import * as GovernanceV3Metis from "./GovernanceV3Metis.mjs";
import * as GovernanceV3Base from "./GovernanceV3Base.mjs";
import * as GovernanceV3BNB from "./GovernanceV3BNB.mjs";
import * as GovernanceV3Gnosis from "./GovernanceV3Gnosis.mjs";
import * as AaveV2EthereumAMM from "./AaveV2EthereumAMM.mjs";
import * as AaveV2EthereumArc from "./AaveV2EthereumArc.mjs";
import * as AaveV2Ethereum from "./AaveV2Ethereum.mjs";
import * as AaveV2Polygon from "./AaveV2Polygon.mjs";
import * as AaveV2Mumbai from "./AaveV2Mumbai.mjs";
import * as AaveV2Goerli from "./AaveV2Goerli.mjs";
import * as AaveV2Fuji from "./AaveV2Fuji.mjs";
import * as AaveV2Avalanche from "./AaveV2Avalanche.mjs";
import * as AaveV3Ethereum from "./AaveV3Ethereum.mjs";
import * as AaveV3Sepolia from "./AaveV3Sepolia.mjs";
import * as AaveV3GoerliGho from "./AaveV3GoerliGho.mjs";
import * as AaveV3Polygon from "./AaveV3Polygon.mjs";
import * as AaveV3Mumbai from "./AaveV3Mumbai.mjs";
import * as AaveV3Avalanche from "./AaveV3Avalanche.mjs";
import * as AaveV3Fuji from "./AaveV3Fuji.mjs";
import * as AaveV3Base from "./AaveV3Base.mjs";
import * as AaveV3Metis from "./AaveV3Metis.mjs";
import * as AaveV3Gnosis from "./AaveV3Gnosis.mjs";
import * as AaveV3BNB from "./AaveV3BNB.mjs";
import * as AaveV3ArbitrumGoerli from "./AaveV3ArbitrumGoerli.mjs";
import * as AaveV3Arbitrum from "./AaveV3Arbitrum.mjs";
import * as AaveV3OptimismGoerli from "./AaveV3OptimismGoerli.mjs";
import * as AaveV3Optimism from "./AaveV3Optimism.mjs";
import * as AaveV3ScrollAlpha from "./AaveV3ScrollAlpha.mjs";
import * as AaveV3ScrollSepolia from "./AaveV3ScrollSepolia.mjs";
import * as AaveV3FantomTestnet from "./AaveV3FantomTestnet.mjs";
import * as AaveV3Fantom from "./AaveV3Fantom.mjs";
import * as AaveV3Harmony from "./AaveV3Harmony.mjs";
import * as MiscArbitrum from "./MiscArbitrum.mjs";
import * as MiscAvalanche from "./MiscAvalanche.mjs";
import * as MiscBase from "./MiscBase.mjs";
import * as MiscEthereum from "./MiscEthereum.mjs";
import * as MiscFantom from "./MiscFantom.mjs";
import * as MiscOptimism from "./MiscOptimism.mjs";
import * as MiscPolygon from "./MiscPolygon.mjs";
import * as MiscMetis from "./MiscMetis.mjs";
import * as MiscGnosis from "./MiscGnosis.mjs";
import * as MiscBNB from "./MiscBNB.mjs";
import * as MiscSepolia from "./MiscSepolia.mjs";
import * as MiscMumbai from "./MiscMumbai.mjs";
import * as AaveGovernanceV2 from "./AaveGovernanceV2.mjs";
import * as AaveSafetyModule from "./AaveSafetyModule.mjs";
import { IAaveGovernanceV2_ABI } from "./abis/IAaveGovernanceV2.mjs";
import { ICollector_ABI } from "./abis/ICollector.mjs";
import { AggregatorInterface_ABI } from "./abis/AggregatorInterface.mjs";
import { IPayloadsControllerCore_ABI } from "./abis/IPayloadsControllerCore.mjs";
import { IVotingMachineWithProofs_ABI } from "./abis/IVotingMachineWithProofs.mjs";
import { IGovernanceCore_ABI } from "./abis/IGovernanceCore.mjs";
import { IVotingStrategy_ABI } from "./abis/IVotingStrategy.mjs";
import { IVotingPortal_ABI } from "./abis/IVotingPortal.mjs";
import { IGovernancePowerStrategy_ABI } from "./abis/IGovernancePowerStrategy.mjs";
import { IDataWarehouse_ABI } from "./abis/IDataWarehouse.mjs";
import { IExecutorWithTimelock_ABI } from "./abis/IExecutorWithTimelock.mjs";
import { IERC20_ABI } from "./abis/IERC20.mjs";
import { IAToken_ABI } from "./abis/IAToken.mjs";
import { IDefaultInterestRateStrategy_ABI } from "./abis/IDefaultInterestRateStrategy.mjs";
import { IAaveOracle_ABI } from "./abis/IAaveOracle.mjs";
import { IExecutor_ABI } from "./abis/IExecutor.mjs";
import { ICrossChainController_ABI } from "./abis/ICrossChainController.mjs";
import { IWithGuardian_ABI } from "./abis/IWithGuardian.mjs";
import { IRescuable_ABI } from "./abis/IRescuable.mjs";
import { IOwnable_ABI } from "./abis/IOwnable.mjs";
import { IPayloadsControllerDataHelper_ABI } from "./abis/IPayloadsControllerDataHelper.mjs";
import { IGovernanceDataHelper_ABI } from "./abis/IGovernanceDataHelper.mjs";
import { IMetaDelegateHelper_ABI } from "./abis/IMetaDelegateHelper.mjs";
import { IVotingMachineDataHelper_ABI } from "./abis/IVotingMachineDataHelper.mjs";
import { IUiPoolDataProvider_ABI } from "./abis/IUiPoolDataProvider.mjs";
export {
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
};
//# sourceMappingURL=AaveAddressBook.mjs.map