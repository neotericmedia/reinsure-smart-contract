import * as path from 'path';
import * as Web3 from 'web3';
import * as BigNumber from 'bignumber.js';
import DumbContract from "../contracts/DumbContract";

import test from "../contracts/test";

import HelloWorld from "../contracts/hw";
import HealthContract from "../contracts/HealthContract";
import CounterContract from "../contracts/CounterContract";

const helloWorldAddress = "0x8da918b7d079ef112cb03fb2d44625370e654095";
const dumbContractAddress = "0x51fd3fb82ce91903cf8700554fb1ed56d6914a91";
const accountAddress = "0x94dc5c72fa7f101a68da27be4de17f43c9ec64cc";
const healthContractAddress = "0xbbbb67ac04670a34a4b23836c8ea404e0487d533"
const counterContractAddress = "0x48c9becc4761be0504d490b9b812f6244e003077"

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  //const t = await test.createAndValidate(web3, dumbContractAddress);
  const dumbContract = await DumbContract.createAndValidate(web3, dumbContractAddress);
  const helloWorld = await HelloWorld.createAndValidate(web3, helloWorldAddress);
  const healthContract = await HealthContract.createAndValidate(web3, healthContractAddress);
  const counterContract = await CounterContract.createAndValidate(web3, counterContractAddress);

  //await dumbContract.countupTx({ from: accountAddress });

  console.log("Counter: ", (await dumbContract.counter).toString());
  console.log("counterWithOffset: ", (await dumbContract.counterWithOffset(new (web3 as any).BigNumber(5))).toString());
  console.log("hi: ", (await helloWorld.sayHelloTx));


  //console.log("test: ", (await t.test).toString());




  //hw.sayHello.call()




  //await healthContract.getTrailCountTx({ from: accountAddress });
  //console.log(await healthContract.getTrailCountTx({ from: accountAddress }, (new (web3 as any).BigNumber(5))

  // if (healthContract.getLocationTx === undefined) {
  //   console.log('uts')
  // }

  //HealthContract.deployed().then(function(deployed){hc=deployed;});



//   const deployed;
//   healthContract.deployed().then(function(instance) {
//   var deployed = instance;
//   return instance.someFunction(5);
// }).then(function(result) {
//   // Do something with the result or continue with more transactions.
// });


  //console.log(await healthContract.getLocationTx(new (web3 as any).BigNumber(0)));
  //public getLocationTx(trailNo: BigNumber, params?: ITxParams): Promise<[string, BigNumber, BigNumber, BigNumber, string]> { return promisify(this.rawWeb3Contract.getLocation, [trailNo, params ]); };






  //console.log(await healthContract.getLocationTx(new ().BigNumber(0))).toString());
  //console.log("health: ", (await healthContract.getLocationTx));



  // create new instance of contract wrapper and assert that contract exists on blockchain (useful during development)
// call getter
//await counterContract.counter;
// call constant method
//console.log(await counterContract.counterWithOffset(new (web3 as any).BigNumber(2)))
// create transaction
// await counterContract.countupTx(new (web3 as any).BigNumber(2).send({ 
//   from: accounts[0],
//   gas: 10000,
// }));
// you can easily get tx data
//await counterContract.countupTx(new (web3 as any).BigNumber(2).getData());

  //hc.getLocation.call(0).then(function(retval){console.log(retval);});


}

main().catch(console.error);