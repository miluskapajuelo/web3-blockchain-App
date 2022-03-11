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

    return transaccionContract
}

//initialState
const initialFormDara={
    adressTo:'', 
    amount:'',
    keyword:'',
    message:''
}

// second step  create a TransaccionProvider with a children, and using method Provider, we pass a value
export const TransaccionProvider = ({children})=>{

    const [ currentAccount, setCurrentAccount]=useState('')
    const [ formData, setFormData]=useState(initialFormDara)
    const [ isLoading, setIsLoading]=useState(false)
    const [ transactionCount, setTransactionCount]=useState(localStorage.getItem('transactionCount'))

    //function to catch values from form
    const handleChange=(e,name)=>{
        //react provides prevState
        setFormData((prevState)=>({...prevState, [name]:e.target.value}))
    }
    const isWalletConnected = async ()=>{

        try {
            if(!ethereum) return alert('please install Metamask')

            //get metamask connected account
            const accounts = await ethereum.request({method: 'eth_accounts'});

            if(accounts.length){
                setCurrentAccount(accounts[0])
    
                //getAllTransactions()
            }
            else{
                console.log('not accounts found')
            }
        } catch (error) {
            console.log('not accounts found')

            throw new Error("No etherium found")
        }
       

    }

    const connectWallet = async ()=>{
        try{
            if(!ethereum) return alert('please install Metamask')

            // accounts able to choose to connect
            // open Metamask
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            console.log(accounts)
        }
        catch(error){
            console.log(error)
            throw new Error('no etherium object')
        }
    }

    const sendTransaction = async ()=>{
        try {
            if(!ethereum) return alert('please install Metamask')

            //get data from the form
            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            //question about the convertions envié 0.0005 y me llegó 0.001 ETH
            const parseAmount = ethers.utils.parseEther(amount)

            //then of it, we ll send coins
            //hex decimal https://www.rapidtables.com/convert/number/hex-to-decimal.html
            //https://eth-converter.com/
            //conversiones de etherium.....
            await ethereum.request({
                method:'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas:'0x5208', //21000 GWeI (from hexadecimal to decimal) or 0.000021 Ether
                    value: parseAmount._hex,  // hexadecimal number 0.00001
                }]})

                const transactionHash = await transactionContract.addToBlockchain(addressTo, parseAmount, message, keyword)
                // it will take time
                setIsLoading(true)
                console.log(`Loading ${transactionHash.hash}`);
                await transactionHash.wait();
                setIsLoading(false);
                console.log(`Success ${transactionHash.hash}`);

                const transactionsCount = await transactionContract.getTransactionCount();

                setTransactionCount(transactionsCount.toNumber())
            
        } catch (error) {
            console.log(error)
            throw new Error('no etherium object')
        }
    }

    useEffect(()=>{
        isWalletConnected()
    },[]);

    return (
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData, handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}