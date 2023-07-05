const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

//{}
//const output = require('../compile');
//const contractFile = require('../compile');
// const abi = output.contracts['inbox.sol']['Inbox'].abi;
// const bytecode = output.contracts['inbox.sol']['Inbox'].evm.bytecode.object;
//const contract = new Contract(ABI);

//const bytecode = contractFile.evm.bytecode.object;
//const abi = contractFile.abi;

//{}

//Code Begins ....
let accounts;
let inbox;
const initial_message = 'Hi Mark!';
const Modified_message = 'Welcome back Mark!';
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [initial_message],
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox ', () => {
  it('Deploys a contract', () => {
    assert.ok(inbox.options.address);
    //console.log(inbox);
  });

  it('Display default message', async () => {
    const default_message = await inbox.methods.message().call();
    assert.equal(default_message, initial_message);
  });

  it('Can change the message', async () => {
    await inbox.methods
      .setMessage(Modified_message)
      .send({ from: accounts[0] });
    const default_message = await inbox.methods.message().call();
    assert.equal(default_message, Modified_message);
  });
});
