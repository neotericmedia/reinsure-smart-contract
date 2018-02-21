import * as path from 'path';
import * as Web3 from 'web3';
import * as BigNumber from 'bignumber.js';
import DumbContract from "../contracts/DumbContract";

const dumbContractAddress = "0x67f3070fa6bb04f7b16824d6e39c03302c236fd5";
const accountAddress = "0xb97afc79ffd912ee7e49f6a487863e7b413b7b34";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const dumbContract = await DumbContract.createAndValidate(web3, dumbContractAddress);
  
  await dumbContract.countupTx({ from: accountAddress });
  console.log("Counter: ", (await dumbContract.counter).toString());
  console.log("counterWithOffset: ", (await dumbContract.counterWithOffset(new (web3 as any).BigNumber(5))).toString());
}

main().catch(console.error);