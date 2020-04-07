                                                                                                                
                                                                                                                                                                                                                                             
module.exports = {                                                                                                       
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true
    },
    alastria: {
      host: "10.141.8.11", // Random IP for example purposes (do not use)
      port: 8545,
      network_id: "*",        // Ethereum public network
      // optional config values:
      gas: 0xffffff,
      gasPrice: 0x0,
      from: "0xbc869c21d631e122d35789942a573241ec04d2e4", //- default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
    }
  },
      // Set default mocha options here, use special reporters etc.
      mocha: {
        // timeout: 100000
      },
    
      // Configure your compilers
      compilers: {
        solc: {
           version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
          // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
          // settings: {          // See the solidity docs for advice about optimization and evmVersion
          //  optimizer: {
          //    enabled: false,
          //    runs: 200
          //  },
          //  evmVersion: "byzantium"
          // }
        }
      }
    }
