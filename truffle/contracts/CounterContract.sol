pragma solidity ^0.4.4;

contract CounterContract {
  uint public counter;
  function dumbContract() public {
    counter = 0;
  }
  function counterWithOffset(uint offset) public constant returns (uint sum) {
    return counter + offset;
  }
  function countup(uint by) public {
    counter += by;
  }
}