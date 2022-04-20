/** Variables available in all js files:
 * all the exported constants from globals.js
 */

/** Directories available as aliases
 * all the paths within Dir in globals.js
 */
import $ from "jquery";
import { ethers } from "ethers";
import * as ethcall from "ethcall";

//import dompurify from 'dompurify'

import 'picturefill'
import 'utils/errors'
import 'utils/validation'
import 'utils/quick';
import "core-js/stable";
import "regenerator-runtime/runtime";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

window.$ = $;
window.ethers = ethers;
window.ethcall = ethcall;
window.asciichart = require("asciichart");
window.AsciiTable = require("./ascii-table");
window.Diff = require("diff");
window.ETHEREUM_NODE_URL = 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9hNmYzNmI4OWM0OGM0ZmE4YjE0NjYwNWY2ZDdhNWI2Zg==';
window.NETWORKS = {
  ETHEREUM: {
    "chainId": '0x1',
    "chainName": "Ethereum Mainnet",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://mainnet.infura.io/v3/a73252b329b64b70a9b342b308d9e26f",
      "wss://mainnet.infura.io/ws/v3/a73252b329b64b70a9b342b308d9e26f",
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com"
    ],
    "blockExplorerUrls": [
      "https://etherscan.io"
    ]
  },
  ARBITRUM: {
    "chainId": "0xa4b1",
    "chainName": "Arbitrum Mainnet",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://arb1.arbitrum.io/rpc"
    ],
    "blockExplorerUrls": [
      "https://explorer.arbitrum.io"
    ]
  },
  ASTAR: {
    "chainId": "0x250",
    "chainName": "Astar Network",
    "nativeCurrency": {
      "name": "Astar",
      "symbol": "ASTR",
      "decimals": 18
    },
    "rpcUrls": [
      "https://astar.api.onfinality.io/public"
    ],
    "blockExplorerUrls": [
      "https://blockscout.com/astar/"
    ]
  },
  MOONRIVER: {
    "chainId": "0x505",
    "chainName": "Moonriver",
    "nativeCurrency": {
      "name": "moonriver",
      "symbol": "MOVR",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.moonriver.moonbeam.network"
    ],
    "blockExplorerUrls": [
      "https://moonbeam.network/networks/moonriver/"
    ]
  },
  MOONBEAM: {
    "chainId": "0x504",
    "chainName": "Moonbeam",
    "nativeCurrency": {
      "name": "moonbeam",
      "symbol": "GLMR",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.api.moonbeam.network"
    ],
    "blockExplorerUrls": [
      "https://moonscan.io/"
    ]
  },
  OPTIMISM: {
    "chainId": "0xA",
    "chainName": "Optimistic Ethereum",
    "nativeCurrency": {
      "name": "ethereum",
      "symbol": "OETH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://mainnet.optimism.io/"
    ],
    "blockExplorerUrls": [
      "https://optimistic.etherscan.io/"
    ]
  },
  EMERALD: {
    "chainId": "0xA516",
    "chainName": "Emerald Paratime Mainnet",
    "nativeCurrency": {
      "name": "oasis-network",
      "symbol": "ROSE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://emerald.oasis.dev"
    ],
    "blockExplorerUrls": [
      "https://explorer.emerald.oasis.dev"
    ]
  },
  DFK: {
    "chainId": "0xD2AF",
    "chainName": "DFK Chain",
    "nativeCurrency": {
      "name": "defi-kingdoms",
      "symbol": "JEWEL",
      "decimals": 18
    },
    "rpcUrls": [
      "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
    ],
    "blockExplorerUrls": [
      "https://explorer.dfkchain.com"
    ]
  },
  BINANCE_SMART_CHAIN: {
    "chainId": "0x38",
    "chainName": "Binance Smart Chain Mainnet",
    "nativeCurrency": {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    "rpcUrls": [
      "https://bsc-dataseed.binance.org",
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org:443"
    ],
    "blockExplorerUrls": [
      "https://bscscan.com"
    ],
  },
  HECO: {
    "chainId": "0x80",
    "chainName": "Huobi ECO Chain Mainnet",
    "nativeCurrency": {
      "name": "Huobi ECO Chain Native Token",
      "symbol": "HT",
      "decimals": 18
    },
    "rpcUrls": [
      "https://http-mainnet.hecochain.com",
      "https://http-mainnet-node.huobichain.com",
      "wss://ws-mainnet.hecochain.com"
    ],
    "blockExplorerUrls": [
      "https://hecoinfo.com"
    ]
  },
  POLYGON: {
    "chainId": "0x89",
    "chainName": "Matic Mainnet",
    "nativeCurrency": {
      "name": "Matic",
      "symbol": "MATIC",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
      "https://matic-mainnet-archive-rpc.bwarelabs.com",
      "wss://ws-mainnet.matic.network",
      "wss://rpc-mainnet.matic.network",
      "wss://ws-matic-mainnet.chainstacklabs.com",
      "wss://rpc-mainnet.maticvigil.com/ws",
      "wss://rpc-mainnet.matic.quiknode.pro",
      "wss://matic-mainnet-full-ws.bwarelabs.com",
      "wss://matic-mainnet-archive-ws.bwarelabs.com"
    ],
    "blockExplorerUrls": [
      "https://polygonscan.com",
      "https://polygon-explorer-mainnet.chainstacklabs.com",
      "https://explorer-mainnet.maticvigil.com",
      "https://explorer.matic.network",
      "https://backup-explorer.matic.network"
    ]
  },
  GNOSIS: {
    "chainId": "0x64",
    "chainName": "xDAI Chain",
    "nativeCurrency": {
      "name": "xDAI",
      "symbol": "xDAI",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.xdaichain.com",
      "https://xdai.poanetwork.dev",
      "wss://rpc.xdaichain.com/wss",
      "wss://xdai.poanetwork.dev/wss",
      "http://xdai.poanetwork.dev",
      "https://dai.poa.network",
      "ws://xdai.poanetwork.dev:8546"
    ],
    "blockExplorerUrls": [
      "https://blockscout.com/xdai/mainnet"
    ]
  },
  AVALANCHE: {
    "chainId": "0xA86A",
    "chainName": "Avalanche Mainnet",
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "rpcUrls": [
      "https://api.avax.network/ext/bc/C/rpc"
    ],
    "blockExplorerUrls": [
      "https://explorer.avax.network",
      "https://cchain.explorer.avax.network"
    ]
  },
  FANTOM: {
    "chainId": "0xFA",
    "chainName": "Fantom Opera",
    "nativeCurrency": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpcapi.fantom.network"
    ],
    "blockExplorerUrls": [
      "https://ftmscan.com"
    ],
  },
  VELAS: {
    "chainId": "0x6A",
    "chainName": "Velas EVM",
    "nativeCurrency": {
      "name": "Velas",
      "symbol": "VLX",
      "decimals": 18
    },
    "rpcUrls": [
      "https://evmexplorer.velas.com/rpc"
    ],
    "blockExplorerUrls": [
      "https://evmexplorer.velas.com"
    ],
  },
  AURORA: {
    "chainId": "0x4E454152",
    "chainName": "Aurora MainNet",
    "nativeCurrency": {
      "name": "aave-eth-v1",
      "symbol": "aETH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://mainnet.aurora.dev"
    ],
    "blockExplorerUrls": [
      "https://evmexplorer.velas.com"
    ],
  },
  BOBA: {
    "chainId": "0x120",
    "chainName": "Boba Network",
    "nativeCurrency": {
      "name": "ethereum",
      "symbol": "ETH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://mainnet.boba.network/"
    ],
    "blockExplorerUrls": [
      "https://blockexplorer.boba.network"
    ],
  },
  HARMONY_S0: {
    "chainId": "0x63564C40",
    "chainName": "Harmony Mainnet Shard 0",
    "nativeCurrency": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://api.harmony.one"
    ],
    "blockExplorerUrls": [
      "https://explorer.harmony.one"
    ]
  },
  HARMONY_S1: {
    "chainId": "0x63564C41",
    "chainName": "Harmony Mainnet Shard 1",
    "nativeCurrency": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://s1.api.harmony.one"
    ],
    "blockExplorerUrls": [
      "https://explorer.harmony.one"
    ]
  },
  HARMONY_S2: {
    "chainId": "0x63564C42",
    "chainName": "Harmony Mainnet Shard 2",
    "nativeCurrency": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://s2.api.harmony.one"
    ],
    "blockExplorerUrls": [
      "https://explorer.harmony.one"
    ]
  },
  HARMONY_S3: {
    "chainId": "0x63564C43",
    "chainName": "Harmony Mainnet Shard 3",
    "nativeCurrency": {
      "name": "ONE",
      "symbol": "ONE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://s3.api.harmony.one"
    ],
    "blockExplorerUrls": [
      "https://explorer.harmony.one"
    ]
  },
  FUSE: {
    "chainId": "0x7a",
    "chainName": "Fuse Mainnet",
    "nativeCurrency": {
      "name": "FUSE",
      "symbol": "FUSE",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.fuse.io"
    ],
    "blockExplorerUrls": [
      "https://explorer.fuse.io"
    ]
  },
  CRONOS: {
    "chainId": "0x19",
    "chainName": "Cronos Mainnet",
    "nativeCurrency": {
      "name": "CRO",
      "symbol": "CRO",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.crodex.app/"
    ],
    "blockExplorerUrls": [
      "https://cronos.crypto.org/explorer"
    ]
  },
  THUNDERCORE: {
    "chainId": "0x6c",
    "chainName": "ThunderCore",
    "nativeCurrency": {
      "name": "Thunder Token",
      "symbol": "TT",
      "decimals": 18
    },
    "rpcUrls": [
        "https://mainnet-rpc.thundercore.com",
        "https://mainnet-rpc.thundertoken.net",
        "https://mainnet-rpc.thundercore.io",
        "wss://mainnet-ws.thundercore.com"
    ],
    "blockExplorerUrls": [
        "https://scan.thundercore.com/",
        "https://viewblock.io/thundercore"
    ],
  },
  OKEX: {
    "chainId": "0x42",
    "chainName": "OKExChain Mainnet",
    "nativeCurrency": {
      "name": "okexchain",
      "symbol": "OKT",
      "decimals": 18
    },
    "rpcUrls": [
        "https://exchainrpc.okex.org"
    ],
    "blockExplorerUrls": [
        "https://www.oklink.com/okexchain"
    ],
  },
  KCC: {
    "chainId": "0x141",
    "chainName": "KuCoin Community Chain Mainnet",
    "nativeCurrency": {
      "name": "KuCoin Token",
      "symbol": "KCS",
      "decimals": 18
    },
    "rpcUrls": [
        "https://rpc-mainnet.kcc.network"
    ],
    "blockExplorerUrls": [
        "https://explorer.kcc.io/en"
    ],
  },
  CELO: {
    "chainId": "0xA4EC",
    "chainName": "Celo Mainnet",
    "nativeCurrency": {
      "name": "celo",
      "symbol": "CELO",
      "decimals": 18
    },
    "rpcUrls": [
        "https://forno.celo.org"
    ],
    "blockExplorerUrls": [
        "https://explorer.celo.org"
    ],
  },
  IOTEX: {
    "chainId": "0x1251",
    "chainName": "IoTeX Mainnet",
    "nativeCurrency": {
      "name": "IoTeX",
      "symbol": "IOTX",
      "decimals": 18
    },
    "rpcUrls": [
      "https://babel-api.mainnet.iotex.io"
    ],
    "blockExplorerUrls": [
      "https://iotexscan.io"
    ],
  },
  SMARTBCH: {
    "chainId": "0x2710",
    "chainName": "Smart Bitcoin Cash Mainnet",
    "nativeCurrency": {
      "name": "Bitcoin Cash",
      "symbol": "BCH",
      "decimals": 18
    },
    "rpcUrls": [
      "https://global.uat.cash"
    ],
    "blockExplorerUrls": [
      "https://smartscan.cash"
    ],
  },
  POLIS: {
    "chainId": "0x518AF",
    "chainName": "Polis Olympus Chain",
    "nativeCurrency": {
      "name": "Polis",
      "symbol": "POLIS",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.polis.tech"
    ],
    "blockExplorerUrls": [
      "https://explorer.polis.tech"
    ],
  },
  METIS: {
    "chainId": "0x440",
    "chainName": "Metis Mainnet",
    "nativeCurrency": {
      "name": "Metis",
      "symbol": "METIS",
      "decimals": 18
    },
    "rpcUrls": [
      "https://andromeda.metis.io/?owner=1088"
    ],
    "blockExplorerUrls": [
      "https://andromeda-explorer.metis.io/"
    ],
  },
  METER: {
    "chainId": "0x52",
    "chainName": "Meter Mainnet",
    "nativeCurrency": {
      "name": "Meter token",
      "symbol": "MTR",
      "decimals": 18
    },
    "rpcUrls": [
      "https://rpc.meter.io"
    ],
    "blockExplorerUrls": [
      "https://scan.meter.io"
    ],
  },
  TELOS: {
    "chainId": "0x28",
    "chainName": "Telos EVM Mainnet",
    "nativeCurrency": {
      "name": "Telos",
      "symbol": "TLOS",
      "decimals": 18
    },
    "rpcUrls": [
      "https://mainnet.telos.net/evm"
    ],
    "blockExplorerUrls": [
      "https://teloscan.io"
    ],
  },
}

const infuraId = atob(window.ETHEREUM_NODE_URL).split('/').pop()

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: infuraId,
      rpc: {
        56: "https://bsc-dataseed1.binance.org",
        108: 'https://mainnet-rpc.thundercore.com',
        128: "https://http-mainnet.hecochain.com",
        137: "https://rpc-mainnet.matic.network",
        100: "https://rpc.xdaichain.com",
        43114: "https://api.avax.network/ext/bc/C/rpc",
        250: "https://rpcapi.fantom.network",
        42161: "https://arb1.arbitrum.io/rpc",
        1666600000: "https://api.harmony.one",
        1666600001: "https://s1.api.harmony.one",
        1666600002: "https://s2.api.harmony.one",
        1666600003: "https://s3.api.harmony.one",
        122: "https://rpc.fuse.io",
        66: "https://exchainrpc.okex.org",
        4689: "https://babel-api.mainnet.iotex.io",
        321: "https://rpc-mainnet.kcc.network",
        10000: "https://global.uat.cash",
        333999: "https://rpc.polis.tech",
        25: "https://rpc.crodex.app/",
        82: "https://rpc.meter.io",
        40: "https://mainnet.telos.net/evm"
      }
    }
  }
};

window.web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
});

// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
