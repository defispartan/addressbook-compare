const {
  MiscBase,
  MiscEthereum,
  AaveSafetyModule,
  AaveV3Ethereum,
  GovernanceV3Arbitrum,
  GovernanceV3Avalanche,
  GovernanceV3Base,
  GovernanceV3Ethereum,
  GovernanceV3Gnosis,
  GovernanceV3Metis,
  GovernanceV3Optimism,
  GovernanceV3Polygon,
  AaveV2Avalanche,
  AaveV2Ethereum,
  AaveV2EthereumAMM,
  AaveV2Fuji,
  AaveV2Goerli,
  AaveV2Mumbai,
  AaveV2Polygon,
  AaveV3Arbitrum,
  AaveV3ArbitrumGoerli,
  AaveV3Avalanche,
  AaveV3Base,
  AaveV3Fantom,
  AaveV3FantomTestnet,
  AaveV3Fuji,
  AaveV3Gnosis,
  AaveV3Harmony,
  AaveV3Metis,
  AaveV3Mumbai,
  AaveV3Optimism,
  AaveV3OptimismGoerli,
  AaveV3Polygon,
  AaveV3ScrollSepolia,
  AaveV3Sepolia,
} = require("@bgd-labs/aave-address-book");

const result = {
  AaveV3Ethereum_ASSETS_AAVE_A_TOKEN: AaveV3Ethereum.ASSETS.AAVE.A_TOKEN,
  AaveV3Ethereum_ASSETS_AAVE_UNDERLYING: AaveV3Ethereum.ASSETS.AAVE.UNDERLYING,
  MiscBase_PARASWAP_FEE_CLAIMER: MiscBase.PARASWAP_FEE_CLAIMER,
  MiscEthereum_PARASWAP_FEE_CLAIMER: MiscEthereum.PARASWAP_FEE_CLAIMER,
  AaveSafetyModule_STK_AAVE: AaveSafetyModule.STK_AAVE,
  GovernanceV3Ethereum_VOTING_PORTAL_ETH_ETH:
    GovernanceV3Ethereum.VOTING_PORTAL_ETH_ETH,
  GovernanceV3Ethereum_VOTING_MACHINE: GovernanceV3Ethereum.VOTING_MACHINE,
  GovernanceV3Ethereum_VOTING_PORTAL_ETH_POL:
    GovernanceV3Ethereum.VOTING_PORTAL_ETH_POL,
  GovernanceV3Polygon_VOTING_MACHINE: GovernanceV3Polygon.VOTING_MACHINE,
  GovernanceV3Ethereum_PC_DATA_HELPER: GovernanceV3Ethereum.PC_DATA_HELPER,
  GovernanceV3Polygon_PC_DATA_HELPER: GovernanceV3Polygon.PC_DATA_HELPER,
  GovernanceV3Avalanche_PC_DATA_HELPER: GovernanceV3Avalanche.PC_DATA_HELPER,
  GovernanceV3Optimism_PC_DATA_HELPER: GovernanceV3Optimism.PC_DATA_HELPER,
  GovernanceV3Gnosis_PC_DATA_HELPER: GovernanceV3Gnosis.PC_DATA_HELPER,
  GovernanceV3Arbitrum_PC_DATA_HELPER: GovernanceV3Arbitrum.PC_DATA_HELPER,
  GovernanceV3Base_PC_DATA_HELPER: GovernanceV3Base.PC_DATA_HELPER,
  GovernanceV3Metis_PC_DATA_HELPER: GovernanceV3Metis.PC_DATA_HELPER,
  AaveV3Ethereum_GOVERNANCE: AaveV3Ethereum.GOVERNANCE,
  AaveV3Ethereum_GOV_DATA_HELPER: AaveV3Ethereum.GOV_DATA_HELPER,
  AaveV3Ethereum_WALLET_BALANCE_PROVIDER:
    AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
  GovernanceV3Ethereum_META_DELEGATE_HELPER:
    GovernanceV3Ethereum.META_DELEGATE_HELPER,
  AaveV3Ethereum_POOL_ADDRESSES_PROVIDER:
    AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
  AaveV3Ethereum_POOL: AaveV3Ethereum.POOL,
  AaveV3Ethereum_WETH_GATEWAY: AaveV3Ethereum.WETH_GATEWAY,
  AaveV3Ethereum_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Ethereum_SWAP_COLLATERAL_ADAPTER:
    AaveV3Ethereum.SWAP_COLLATERAL_ADAPTER,
  AaveV3Ethereum_UI_POOL_DATA_PROVIDER: AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
  AaveV3Ethereum_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Ethereum_COLLECTOR: AaveV3Ethereum.COLLECTOR,
  AaveV3Ethereum_GHO_UNDERLYING: AaveV3Ethereum.ASSETS.GHO.UNDERLYING,
  AaveV3Ethereum_UI_GHO_DATA_PROVIDER: AaveV3Ethereum.UI_GHO_DATA_PROVIDER,
  AaveV3Ethereum_WITHDRAW_SWAP_ADAPTER: AaveV3Ethereum.WITHDRAW_SWAP_ADAPTER,
  AaveV3Ethereum_DEBT_SWAP_ADAPTER: AaveV3Ethereum.DEBT_SWAP_ADAPTER,
  AaveV2Avalanche_POOL_ADDRESSES_PROVIDER:
    AaveV2Avalanche.POOL_ADDRESSES_PROVIDER,
  AaveV2Avalanche_POOL: AaveV2Avalanche.POOL,
  AaveV2Avalanche_WETH_GATEWAY: AaveV2Avalanche.WETH_GATEWAY,
  AaveV2Avalanche_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV2Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV2Avalanche_SWAP_COLLATERAL_ADAPTER:
    AaveV2Avalanche.SWAP_COLLATERAL_ADAPTER,
  AaveV2Avalanche_UI_POOL_DATA_PROVIDER: AaveV2Avalanche.UI_POOL_DATA_PROVIDER,
  AaveV2Avalanche_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2Avalanche.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Avalanche_COLLECTOR: AaveV2Avalanche.COLLECTOR,
  AaveV2Avalanche_WITHDRAW_SWAP_ADAPTER: AaveV2Avalanche.WITHDRAW_SWAP_ADAPTER,
  AaveV2Avalanche_DEBT_SWAP_ADAPTER: AaveV2Avalanche.DEBT_SWAP_ADAPTER,
  AaveV2Ethereum_POOL_ADDRESSES_PROVIDER:
    AaveV2Ethereum.POOL_ADDRESSES_PROVIDER,
  AaveV2Ethereum_POOL: AaveV2Ethereum.POOL,
  AaveV2Ethereum_WETH_GATEWAY: AaveV2Ethereum.WETH_GATEWAY,
  AaveV2Ethereum_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV2Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV2Ethereum_SWAP_COLLATERAL_ADAPTER:
    AaveV2Ethereum.SWAP_COLLATERAL_ADAPTER,
  AaveV2Ethereum_UI_POOL_DATA_PROVIDER: AaveV2Ethereum.UI_POOL_DATA_PROVIDER,
  AaveV2Ethereum_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2Ethereum.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Ethereum_COLLECTOR: AaveV2Ethereum.COLLECTOR,
  AaveV2Ethereum_WITHDRAW_SWAP_ADAPTER: AaveV2Ethereum.WITHDRAW_SWAP_ADAPTER,
  AaveV2Ethereum_DEBT_SWAP_ADAPTER: AaveV2Ethereum.DEBT_SWAP_ADAPTER,
  AaveV2EthereumAMM_POOL_ADDRESSES_PROVIDER:
    AaveV2EthereumAMM.POOL_ADDRESSES_PROVIDER,
  AaveV2EthereumAMM_POOL: AaveV2EthereumAMM.POOL,
  AaveV2EthereumAMM_WETH_GATEWAY: AaveV2EthereumAMM.WETH_GATEWAY,
  AaveV2EthereumAMM_UI_POOL_DATA_PROVIDER:
    AaveV2EthereumAMM.UI_POOL_DATA_PROVIDER,
  AaveV2EthereumAMM_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2EthereumAMM.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2EthereumAMM_COLLECTOR: AaveV2EthereumAMM.COLLECTOR,
  AaveV2EthereumAMM_DEBT_SWAP_ADAPTER: AaveV2EthereumAMM.DEBT_SWAP_ADAPTER,
  AaveV2Fuji_POOL_ADDRESSES_PROVIDER: AaveV2Fuji.POOL_ADDRESSES_PROVIDER,
  AaveV2Fuji_POOL: AaveV2Fuji.POOL,
  AaveV2Fuji_WETH_GATEWAY: AaveV2Fuji.WETH_GATEWAY,
  AaveV2Fuji_UI_POOL_DATA_PROVIDER: AaveV2Fuji.UI_POOL_DATA_PROVIDER,
  AaveV2Fuji_UI_INCENTIVE_DATA_PROVIDER: AaveV2Fuji.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Fuji_COLLECTOR: AaveV2Fuji.COLLECTOR,
  AaveV2Goerli_POOL_ADDRESSES_PROVIDER: AaveV2Goerli.POOL_ADDRESSES_PROVIDER,
  AaveV2Goerli_POOL: AaveV2Goerli.POOL,
  AaveV2Goerli_WETH_GATEWAY: AaveV2Goerli.WETH_GATEWAY,
  AaveV2Goerli_UI_POOL_DATA_PROVIDER: AaveV2Goerli.UI_POOL_DATA_PROVIDER,
  AaveV2Goerli_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2Goerli.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Goerli_COLLECTOR: AaveV2Goerli.COLLECTOR,
  AaveV2Mumbai_POOL_ADDRESSES_PROVIDER: AaveV2Mumbai.POOL_ADDRESSES_PROVIDER,
  AaveV2Mumbai_POOL: AaveV2Mumbai.POOL,
  AaveV2Mumbai_WETH_GATEWAY: AaveV2Mumbai.WETH_GATEWAY,
  AaveV2Mumbai_UI_POOL_DATA_PROVIDER: AaveV2Mumbai.UI_POOL_DATA_PROVIDER,
  AaveV2Mumbai_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2Mumbai.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Mumbai_COLLECTOR: AaveV2Mumbai.COLLECTOR,
  AaveV2Polygon_POOL_ADDRESSES_PROVIDER: AaveV2Polygon.POOL_ADDRESSES_PROVIDER,
  AaveV2Polygon_POOL: AaveV2Polygon.POOL,
  AaveV2Polygon_WETH_GATEWAY: AaveV2Polygon.WETH_GATEWAY,
  AaveV2Polygon_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV2Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV2Polygon_SWAP_COLLATERAL_ADAPTER: AaveV2Polygon.SWAP_COLLATERAL_ADAPTER,
  AaveV2Polygon_UI_POOL_DATA_PROVIDER: AaveV2Polygon.UI_POOL_DATA_PROVIDER,
  AaveV2Polygon_UI_INCENTIVE_DATA_PROVIDER:
    AaveV2Polygon.UI_INCENTIVE_DATA_PROVIDER,
  AaveV2Polygon_COLLECTOR: AaveV2Polygon.COLLECTOR,
  AaveV2Polygon_WITHDRAW_SWAP_ADAPTER: AaveV2Polygon.WITHDRAW_SWAP_ADAPTER,
  AaveV2Polygon_DEBT_SWAP_ADAPTER: AaveV2Polygon.DEBT_SWAP_ADAPTER,
  AaveV3Arbitrum_POOL_ADDRESSES_PROVIDER:
    AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER,
  AaveV3Arbitrum_POOL: AaveV3Arbitrum.POOL,
  AaveV3Arbitrum_WETH_GATEWAY: AaveV3Arbitrum.WETH_GATEWAY,
  AaveV3Arbitrum_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Arbitrum.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Arbitrum_SWAP_COLLATERAL_ADAPTER:
    AaveV3Arbitrum.SWAP_COLLATERAL_ADAPTER,
  AaveV3Arbitrum_UI_POOL_DATA_PROVIDER: AaveV3Arbitrum.UI_POOL_DATA_PROVIDER,
  AaveV3Arbitrum_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Arbitrum.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Arbitrum_COLLECTOR: AaveV3Arbitrum.COLLECTOR,
  AaveV3Arbitrum_WITHDRAW_SWAP_ADAPTER: AaveV3Arbitrum.WITHDRAW_SWAP_ADAPTER,
  AaveV3Arbitrum_DEBT_SWAP_ADAPTER: AaveV3Arbitrum.DEBT_SWAP_ADAPTER,
  AaveV3Sepolia_POOL_ADDRESSES_PROVIDER: AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
  AaveV3Sepolia_POOL: AaveV3Sepolia.POOL,
  AaveV3Sepolia_WETH_GATEWAY: AaveV3Sepolia.WETH_GATEWAY,
  AaveV3Sepolia_UI_POOL_DATA_PROVIDER: AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
  AaveV3Sepolia_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Sepolia.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Sepolia_COLLECTOR: AaveV3Sepolia.COLLECTOR,
  AaveV3ArbitrumGoerli_POOL_ADDRESSES_PROVIDER:
    AaveV3ArbitrumGoerli.POOL_ADDRESSES_PROVIDER,
  AaveV3ArbitrumGoerli_POOL: AaveV3ArbitrumGoerli.POOL,
  AaveV3ArbitrumGoerli_WETH_GATEWAY: AaveV3ArbitrumGoerli.WETH_GATEWAY,
  AaveV3ArbitrumGoerli_UI_POOL_DATA_PROVIDER:
    AaveV3ArbitrumGoerli.UI_POOL_DATA_PROVIDER,
  AaveV3ArbitrumGoerli_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3ArbitrumGoerli.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3ArbitrumGoerli_COLLECTOR: AaveV3ArbitrumGoerli.COLLECTOR,
  AaveV3Avalanche_POOL_ADDRESSES_PROVIDER:
    AaveV3Avalanche.POOL_ADDRESSES_PROVIDER,
  AaveV3Avalanche_POOL: AaveV3Avalanche.POOL,
  AaveV3Avalanche_WETH_GATEWAY: AaveV3Avalanche.WETH_GATEWAY,
  AaveV3Avalanche_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Avalanche_SWAP_COLLATERAL_ADAPTER:
    AaveV3Avalanche.SWAP_COLLATERAL_ADAPTER,
  AaveV3Avalanche_UI_POOL_DATA_PROVIDER: AaveV3Avalanche.UI_POOL_DATA_PROVIDER,
  AaveV3Avalanche_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Avalanche.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Avalanche_COLLECTOR: AaveV3Avalanche.COLLECTOR,
  AaveV3Avalanche_WITHDRAW_SWAP_ADAPTER: AaveV3Avalanche.WITHDRAW_SWAP_ADAPTER,
  AaveV3Avalanche_DEBT_SWAP_ADAPTER: AaveV3Avalanche.DEBT_SWAP_ADAPTER,
  AaveV3Base_POOL_ADDRESSES_PROVIDER: AaveV3Base.POOL_ADDRESSES_PROVIDER,
  AaveV3Base_POOL: AaveV3Base.POOL,
  AaveV3Base_WETH_GATEWAY: AaveV3Base.WETH_GATEWAY,
  AaveV3Base_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Base.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Base_SWAP_COLLATERAL_ADAPTER: AaveV3Base.SWAP_COLLATERAL_ADAPTER,
  AaveV3Base_UI_POOL_DATA_PROVIDER: AaveV3Base.UI_POOL_DATA_PROVIDER,
  AaveV3Base_UI_INCENTIVE_DATA_PROVIDER: AaveV3Base.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Base_COLLECTOR: AaveV3Base.COLLECTOR,
  AaveV3Base_WITHDRAW_SWAP_ADAPTER: AaveV3Base.WITHDRAW_SWAP_ADAPTER,
  AaveV3Base_DEBT_SWAP_ADAPTER: AaveV3Base.DEBT_SWAP_ADAPTER,
  AaveV3Fantom_POOL_ADDRESSES_PROVIDER: AaveV3Fantom.POOL_ADDRESSES_PROVIDER,
  AaveV3Fantom_POOL: AaveV3Fantom.POOL,
  AaveV3Fantom_WETH_GATEWAY: AaveV3Fantom.WETH_GATEWAY,
  AaveV3Fantom_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Fantom.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Fantom_SWAP_COLLATERAL_ADAPTER: AaveV3Fantom.SWAP_COLLATERAL_ADAPTER,
  AaveV3Fantom_UI_POOL_DATA_PROVIDER: AaveV3Fantom.UI_POOL_DATA_PROVIDER,
  AaveV3Fantom_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Fantom.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Fantom_COLLECTOR: AaveV3Fantom.COLLECTOR,
  AaveV3Fantom_WITHDRAW_SWAP_ADAPTER: AaveV3Fantom.WITHDRAW_SWAP_ADAPTER,
  AaveV3Fantom_DEBT_SWAP_ADAPTER: AaveV3Fantom.DEBT_SWAP_ADAPTER,
  AaveV3FantomTestnet_POOL_ADDRESSES_PROVIDER:
    AaveV3FantomTestnet.POOL_ADDRESSES_PROVIDER,
  AaveV3FantomTestnet_POOL: AaveV3FantomTestnet.POOL,
  AaveV3FantomTestnet_WETH_GATEWAY: AaveV3FantomTestnet.WETH_GATEWAY,
  AaveV3FantomTestnet_UI_POOL_DATA_PROVIDER:
    AaveV3FantomTestnet.UI_POOL_DATA_PROVIDER,
  AaveV3FantomTestnet_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3FantomTestnet.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3FantomTestnet_COLLECTOR: AaveV3FantomTestnet.COLLECTOR,
  AaveV3Fuji_POOL_ADDRESSES_PROVIDER: AaveV3Fuji.POOL_ADDRESSES_PROVIDER,
  AaveV3Fuji_POOL: AaveV3Fuji.POOL,
  AaveV3Fuji_WETH_GATEWAY: AaveV3Fuji.WETH_GATEWAY,
  AaveV3Fuji_UI_POOL_DATA_PROVIDER: AaveV3Fuji.UI_POOL_DATA_PROVIDER,
  AaveV3Fuji_UI_INCENTIVE_DATA_PROVIDER: AaveV3Fuji.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Fuji_COLLECTOR: AaveV3Fuji.COLLECTOR,
  AaveV3Gnosis_POOL_ADDRESSES_PROVIDER: AaveV3Gnosis.POOL_ADDRESSES_PROVIDER,
  AaveV3Gnosis_POOL: AaveV3Gnosis.POOL,
  AaveV3Gnosis_WETH_GATEWAY: AaveV3Gnosis.WETH_GATEWAY,
  AaveV3Gnosis_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Gnosis.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Gnosis_SWAP_COLLATERAL_ADAPTER: AaveV3Gnosis.SWAP_COLLATERAL_ADAPTER,
  AaveV3Gnosis_UI_POOL_DATA_PROVIDER: AaveV3Gnosis.UI_POOL_DATA_PROVIDER,
  AaveV3Gnosis_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Gnosis.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Gnosis_COLLECTOR: AaveV3Gnosis.COLLECTOR,
  AaveV3Gnosis_WITHDRAW_SWAP_ADAPTER: AaveV3Gnosis.WITHDRAW_SWAP_ADAPTER,
  AaveV3Gnosis_DEBT_SWAP_ADAPTER: AaveV3Gnosis.DEBT_SWAP_ADAPTER,
  AaveV3Harmony_POOL_ADDRESSES_PROVIDER: AaveV3Harmony.POOL_ADDRESSES_PROVIDER,
  AaveV3Harmony_POOL: AaveV3Harmony.POOL,
  AaveV3Harmony_WETH_GATEWAY: AaveV3Harmony.WETH_GATEWAY,
  AaveV3Harmony_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Harmony.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Harmony_SWAP_COLLATERAL_ADAPTER: AaveV3Harmony.SWAP_COLLATERAL_ADAPTER,
  AaveV3Harmony_UI_POOL_DATA_PROVIDER: AaveV3Harmony.UI_POOL_DATA_PROVIDER,
  AaveV3Harmony_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Harmony.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Harmony_COLLECTOR: AaveV3Harmony.COLLECTOR,
  AaveV3Harmony_WITHDRAW_SWAP_ADAPTER: AaveV3Harmony.WITHDRAW_SWAP_ADAPTER,
  AaveV3Harmony_DEBT_SWAP_ADAPTER: AaveV3Harmony.DEBT_SWAP_ADAPTER,
  AaveV3Metis_POOL_ADDRESSES_PROVIDER: AaveV3Metis.POOL_ADDRESSES_PROVIDER,
  AaveV3Metis_POOL: AaveV3Metis.POOL,
  AaveV3Metis_WETH_GATEWAY: AaveV3Metis.WETH_GATEWAY,
  AaveV3Metis_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Metis.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Metis_SWAP_COLLATERAL_ADAPTER: AaveV3Metis.SWAP_COLLATERAL_ADAPTER,
  AaveV3Metis_UI_POOL_DATA_PROVIDER: AaveV3Metis.UI_POOL_DATA_PROVIDER,
  AaveV3Metis_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Metis.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Metis_COLLECTOR: AaveV3Metis.COLLECTOR,
  AaveV3Metis_WITHDRAW_SWAP_ADAPTER: AaveV3Metis.WITHDRAW_SWAP_ADAPTER,
  AaveV3Metis_DEBT_SWAP_ADAPTER: AaveV3Metis.DEBT_SWAP_ADAPTER,
  AaveV3Mumbai_POOL_ADDRESSES_PROVIDER: AaveV3Mumbai.POOL_ADDRESSES_PROVIDER,
  AaveV3Mumbai_POOL: AaveV3Mumbai.POOL,
  AaveV3Mumbai_WETH_GATEWAY: AaveV3Mumbai.WETH_GATEWAY,
  AaveV3Mumbai_UI_POOL_DATA_PROVIDER: AaveV3Mumbai.UI_POOL_DATA_PROVIDER,
  AaveV3Mumbai_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Mumbai.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Mumbai_COLLECTOR: AaveV3Mumbai.COLLECTOR,
  AaveV3Optimism_POOL_ADDRESSES_PROVIDER:
    AaveV3Optimism.POOL_ADDRESSES_PROVIDER,
  AaveV3Optimism_POOL: AaveV3Optimism.POOL,
  AaveV3Optimism_WETH_GATEWAY: AaveV3Optimism.WETH_GATEWAY,
  AaveV3Optimism_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Optimism.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Optimism_SWAP_COLLATERAL_ADAPTER:
    AaveV3Optimism.SWAP_COLLATERAL_ADAPTER,
  AaveV3Optimism_UI_POOL_DATA_PROVIDER: AaveV3Optimism.UI_POOL_DATA_PROVIDER,
  AaveV3Optimism_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Optimism.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Optimism_COLLECTOR: AaveV3Optimism.COLLECTOR,
  AaveV3Optimism_WITHDRAW_SWAP_ADAPTER: AaveV3Optimism.WITHDRAW_SWAP_ADAPTER,
  AaveV3Optimism_DEBT_SWAP_ADAPTER: AaveV3Optimism.DEBT_SWAP_ADAPTER,
  AaveV3OptimismGoerli_POOL_ADDRESSES_PROVIDER:
    AaveV3OptimismGoerli.POOL_ADDRESSES_PROVIDER,
  AaveV3OptimismGoerli_POOL: AaveV3OptimismGoerli.POOL,
  AaveV3OptimismGoerli_WETH_GATEWAY: AaveV3OptimismGoerli.WETH_GATEWAY,
  AaveV3OptimismGoerli_UI_POOL_DATA_PROVIDER:
    AaveV3OptimismGoerli.UI_POOL_DATA_PROVIDER,
  AaveV3OptimismGoerli_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3OptimismGoerli.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3OptimismGoerli_COLLECTOR: AaveV3OptimismGoerli.COLLECTOR,
  AaveV3Polygon_POOL_ADDRESSES_PROVIDER: AaveV3Polygon.POOL_ADDRESSES_PROVIDER,
  AaveV3Polygon_POOL: AaveV3Polygon.POOL,
  AaveV3Polygon_WETH_GATEWAY: AaveV3Polygon.WETH_GATEWAY,
  AaveV3Polygon_REPAY_WITH_COLLATERAL_ADAPTER:
    AaveV3Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
  AaveV3Polygon_SWAP_COLLATERAL_ADAPTER: AaveV3Polygon.SWAP_COLLATERAL_ADAPTER,
  AaveV3Polygon_UI_POOL_DATA_PROVIDER: AaveV3Polygon.UI_POOL_DATA_PROVIDER,
  AaveV3Polygon_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3Polygon.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3Polygon_COLLECTOR: AaveV3Polygon.COLLECTOR,
  AaveV3Polygon_WITHDRAW_SWAP_ADAPTER: AaveV3Polygon.WITHDRAW_SWAP_ADAPTER,
  AaveV3Polygon_DEBT_SWAP_ADAPTER: AaveV3Polygon.DEBT_SWAP_ADAPTER,
  AaveV3ScrollSepolia_POOL_ADDRESSES_PROVIDER:
    AaveV3ScrollSepolia.POOL_ADDRESSES_PROVIDER,
  AaveV3ScrollSepolia_POOL: AaveV3ScrollSepolia.POOL,
  AaveV3ScrollSepolia_WETH_GATEWAY: AaveV3ScrollSepolia.WETH_GATEWAY,
  AaveV3ScrollSepolia_UI_POOL_DATA_PROVIDER:
    AaveV3ScrollSepolia.UI_POOL_DATA_PROVIDER,
  AaveV3ScrollSepolia_UI_INCENTIVE_DATA_PROVIDER:
    AaveV3ScrollSepolia.UI_INCENTIVE_DATA_PROVIDER,
  AaveV3ScrollSepolia_COLLECTOR: AaveV3ScrollSepolia.COLLECTOR,
};

console.log(JSON.stringify(result, null, 2));
