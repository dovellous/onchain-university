import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

interface SolidityTypes {
	compilers: any,
	overrides: any,
	optimizer: any
}

const SOLIDITY: SolidityTypes = {
	compilers: [
		{
			version: process.env.SOLC_VERSION,
			settings: {
				optimizer: {
					enabled: process.env.OPTIMIZER_ENABLED === '1',
					runs: process.env.OPTIMIZER_RUNS,
				},
			},
		},
	],
	overrides: {
		"./src/contracts/ERC1155SmartContract.sol": {
			version: process.env.SOLC_VERSION,
			settings: {
				optimizer: {
					enabled: process.env.OPTIMIZER_ENABLED === '1',
					runs: process.env.OPTIMIZER_RUNS,
				},
			},
		},
	},
	optimizer: {
		enabled: process.env.OPTIMIZER_ENABLED === '1',
		runs: process.env.OPTIMIZER_RUNS,
	},
};

interface PathsTypes {
	sources: any,
	tests: any,
	cache: any,
	artifacts: any
}

const PATHS: PathsTypes = {
	sources: process.env.CONTRACT_DIR_SOURCES+"/"+process.env.CONTRACT_NAME+"/",
	tests: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_TESTS,
	cache: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_CACHE,
	artifacts: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_ARTIFACTS,
};

interface EtherscanTypes {
	apiKey: string | any
}

const ETHERSCAN: EtherscanTypes = {
	apiKey:
		process.env.BLOCKCHAIN === "ETH"
			? process.env.ETHERSCAN_API_KEY
			: process.env.BLOCKCHAIN === "BSC"
			? process.env.BSCSCAN_API_KEY
			: process.env.POLYGON_API_KEY
}

interface MochaType {
	timeout: any
}

const MOCHA: MochaType = {
	timeout: process.env.MOCHA_TIMEOUT
}

interface GasReporterTypes {
	enabled: any,
	currency: any
}

const GAS_REPORTER: GasReporterTypes = {
	enabled: process.env.REPORT_GAS !== undefined,
	currency: process.env.REPORT_GAS_CURRENCY,
}

const NETWORKS: any = {
		localhost: {
			url: process.env.URL_LOCAL_HOST_URL + ":" + process.env.URL_LOCAL_PORT,
		},
		goerli: {
			url: process.env.URL_ETH_GOERLI + process.env.INFURA_API_KEY || "",
			chainId: 3,
			accounts:
				process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
					? [process.env.DEPLOYMENT_ACCOUNT_KEY]
					: [],
		},
		mainnet: {
			url: process.env.URL_ETH_MAINNET + process.env.INFURA_API_KEY || "",
			chainId: 1,
			accounts:
				process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
					? [process.env.DEPLOYMENT_ACCOUNT_KEY]
					: [],
		},
		bsc_testnet: {
			url: process.env.URL_BSC_TESTNET,
			chainId: 97,
			gasPrice: 20000000000,
			accounts: { mnemonic: process.env.MNEMONIC },
		},
		bsc_mainnet: {
			url: process.env.URL_BSC_MAINNET,
			chainId: 56,
			gasPrice: 20000000000,
			accounts: { mnemonic: process.env.MNEMONIC },
		},
	};

const CONFIG: HardhatUserConfig = {
	defaultNetwork: process.env.NETWORK,
	networks: NETWORKS,
	gasReporter: GAS_REPORTER,
	solidity: SOLIDITY,
	paths: PATHS,
	mocha : MOCHA,
	etherscan: ETHERSCAN,
};

module.exports = CONFIG;