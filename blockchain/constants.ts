export const supportedChains: Array<number> = [1, 4];

export const rpcUrls = {
  1: 'https://mainnet.infura.io/v3/fc002c44103245e0810806af484c7d8a',
  4: 'https://rinkeby.infura.io/v3/fc002c44103245e0810806af484c7d8a',
  5: 'https://goerli.infura.io/v3/fc002c44103245e0810806af484c7d8a',
  42: 'https://kovan.infura.io/v3/fc002c44103245e0810806af484c7d8a'
}

export const networkNames = {
  1: 'Ethereum Mainnet',
  4: 'Rinkeby Test Network',
  5: 'Goerli Test Network',
  42: 'Kovan Test Network'
}

export const putinBountyToken = {
  Contract: {
    1: '0xaf5fc45258b5d0af72031ab154bf6dfcfec74b99',
    5: '0xdfB4f93170BE0BB9c611079626e580B3c15eFF0d',
  },
}

export const guardianToken = {
  Contract: {
    5: '0xb71A9711217ebCA3C91C466b54a2816c774A5255',
  },
}

export const stakingAddress = { // PBTY staking contract address
  stakingPBTY: {
    5: '0xD1B3c689A90AB6077ef3DF29c60744b1135FB242',
  },
  stakingGUARD: {
    5: '0xB51acFB250d8dD67c89ec9Cdb30B40962a0d551e',
  },
}

export const chainIdList = {
  chainIds: {
    'ethereum' : 1,
    'rinkeby' : 4,
    'goerli' : 5,
    'kovan' : 42
  }
}