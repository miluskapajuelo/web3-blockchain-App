// SPDX-License-Identifier: UNLICENSED

pragma solidity  ^0.8.0;
/* import "../node_modules/hardhat/console.sol"; */

contract Transactions {

    // varible'type and variable'name
    uint256 transactionCount;

    event Transfer( address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // like and object
    // its like interface in Angular
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // transactions is an array of element with TransferStruct structure 
    TransferStruct[] transactions;

    //everybody can access to this function
    // it doesnt return nothing
    // parameters are going to be address payable receiver
    // msg.sender will be in all blockchain because it is stored there

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver,amount,message,block.timestamp, keyword ));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

     function getAllTransactions() public view returns (TransferStruct[] memory){
         // return transactions
         return transactions;
    }

     function getTransactionCount() public view returns (uint256){
         //return transactions count
         return transactionCount;
    }


}
