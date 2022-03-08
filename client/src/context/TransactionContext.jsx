import React, { useEffect, useState} from "react";
import {ethers} from 'ethers';

import {contractABI, contractAdress} from '../utils/constants';

//react context
// first step to use useContext assign React.createContext() to a variable calls TransactionContext
export const TransactionContext = React.createContext();

const {ethereum} = window

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    // ingredients to get contractAdress
    const transaccionContract = new ethers.Contract(contractAdress, contractABI, signer)

    console.log({
        provider, signer, transaccionContract
    })
}

// second step  create a TransaccionProvider with a children, and using method Provider, we pass a value
export const TransaccionProvider = ({children})=>{
    return (
        <TransactionContext.Provider value={{value:'test'}}>
            {children}
        </TransactionContext.Provider>
    )
}