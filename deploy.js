const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  'upset inmate snake small deal begin champion purity flight notice token barrel',
  'https://linea-goerli.infura.io/v3/7c919b5145584f0d9b7151458cb9dde5'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to Deploy from account ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    .send({ gas: '1000000', from: accounts[0] });
  console.log(interface);
  console.log(result);
  console.log('Contract Deployed  to  account', result.options.address);
};

deploy();
//1000000
