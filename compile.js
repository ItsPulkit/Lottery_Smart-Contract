const solc = require('solc');
const path = require('path');
const fs = require('fs');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// var input = {
//   language: 'Solidity',
//   sources: {
//     'inbox.sol': {
//       content: source,
//     },
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*'],
//       },
//     },
//   },
// };

// var input = {
//   language: 'Solidity',
//   sources: { 'inbox.sol': { content: source } },
//   settings: { outputSelection: { '*': { '*': ['*'] } } },
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));
// for (var contractName in output.contracts['inbox.sol']) {
//   console.log('contractName: ', contractName);
//   console.log(
//     'bytecode: ',
//     output.contracts['inbox.sol'][contractName].evm.bytecode.object
//   );
//   console.log('abi :', output.contracts['inbox.sol'][contractName].abi);
// }

//const output = JSON.parse(solc.compile(JSON.stringify(input)));
//const contractFile = tempFile.contracts['inbox.sol']['inbox'];
//module.exports = contractFile;
//module.exports = output;
// var input = {
//   language: 'Solidity',
//   sources: {
//     'inbox.sol': {
//       content: source,
//     },
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*'],
//       },
//     },
//   },
// };

//console.log(solc.compile(JSON.stringify(input)));
//console.log(solc.compile(JSON.stringify(input)));
//console.log(JSON.parse(solc.compile(JSON.stringify(input)).toString()));
//exports = solc.compile(source, 1).contracts[':inbox'];
//exports = solc.compile(JSON.stringify(input)).contracts[':inbox'];
//module.exports = solc.compile(JSON.stringify(input)).contracts[':inbox'];
console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Lottery'];

// if (output.errors) {
//   output.errors.forEach((err) => {
//     console.log(err);
//   });
// } else {
//   const bytecode = output.contracts['Inbox.sol:Inbox'].bytecode;
//   const abi = output.contracts['Inbox.sol:Inbox'].interface;
//   console.log(`bytecode: ${bytecode}`);
//   console.log(`abi: ${JSON.stringify(JSON.parse(abi), null, 2)}`);
// }
