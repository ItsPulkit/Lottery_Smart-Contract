const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  '-- private key --',
  '-- infura api key for test network --'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to Deploy from account ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi , Pulkit !'],
    })
    .send({ gas: '10000000', from: accgitounts[0] });
  console.log(result);
  console.log('Contract Deployed  to  account', result.options.address);
};

deploy();
//1000000
