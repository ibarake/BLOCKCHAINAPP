//https://eth-goerli.alchemyapi.io/v2/MfP31O9xITIJxO3-viT3exd5FNzZnrpB

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/MfP31O9xITIJxO3-viT3exd5FNzZnrpB',
      accounts: [ '655af2028379e69fede82e01bb2b9a49316e298b33f9ac0e9147f195ee720a2d' ]
    }
  }
}
