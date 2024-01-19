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

// src/ts/AaveV2EthereumArc.ts
var AaveV2EthereumArc_exports = {};
__export(AaveV2EthereumArc_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER,
  ASSETS: () => ASSETS,
  CHAIN_ID: () => CHAIN_ID,
  COLLECTOR: () => COLLECTOR,
  DEFAULT_INCENTIVES_CONTROLLER: () => DEFAULT_INCENTIVES_CONTROLLER,
  EMERGENCY_ADMIN: () => EMERGENCY_ADMIN,
  EMISSION_MANAGER: () => EMISSION_MANAGER,
  LENDING_POOL_COLLATERAL_MANAGER: () => LENDING_POOL_COLLATERAL_MANAGER,
  LENDING_RATE_ORACLE: () => LENDING_RATE_ORACLE,
  ORACLE: () => ORACLE,
  PERMISSION_MANAGER: () => PERMISSION_MANAGER,
  POOL: () => POOL,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER,
  POOL_ADMIN: () => POOL_ADMIN,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR
});
module.exports = __toCommonJS(AaveV2EthereumArc_exports);
var POOL_ADDRESSES_PROVIDER = "0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00";
var POOL = "0x37D7306019a38Af123e4b245Eb6C28AF552e0bB0";
var POOL_CONFIGURATOR = "0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA";
var ORACLE = "0xB8a7bc0d13B1f5460513040a97F404b4fea7D2f3";
var LENDING_RATE_ORACLE = "0xfA3c34d734fe0106C87917683ca45dffBe3b3B00";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x71B53fC437cCD988b1b89B1D4605c3c3d0C810ea";
var POOL_ADMIN = "0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218";
var EMERGENCY_ADMIN = "0x33B09130b035d6D7e57d76fEa0873d9545FA7557";
var COLLECTOR = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";
var DEFAULT_INCENTIVES_CONTROLLER = "0x0000000000000000000000000000000000000000";
var EMISSION_MANAGER = "0x0000000000000000000000000000000000000000";
var LENDING_POOL_COLLATERAL_MANAGER = "0x837696219C9a3775a856BEBC02DB1fA918C8a46e";
var PERMISSION_MANAGER = "0xF4a1F5fEA79C3609514A417425971FadC10eCfBE";
var CHAIN_ID = 1;
var ASSETS = {};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ASSETS,
  CHAIN_ID,
  COLLECTOR,
  DEFAULT_INCENTIVES_CONTROLLER,
  EMERGENCY_ADMIN,
  EMISSION_MANAGER,
  LENDING_POOL_COLLATERAL_MANAGER,
  LENDING_RATE_ORACLE,
  ORACLE,
  PERMISSION_MANAGER,
  POOL,
  POOL_ADDRESSES_PROVIDER,
  POOL_ADMIN,
  POOL_CONFIGURATOR
});
//# sourceMappingURL=AaveV2EthereumArc.js.map