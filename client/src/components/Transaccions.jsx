import React, {useContext} from 'react';
import {TransactionContext} from './../context/TransactionContext.jsx';
import dummyData from './../utils/dummyData';
import {shortenAdress} from './../utils/shortenAddress'

const Transaccions=()=> {
  const{currentAccount} = useContext(TransactionContext)
  const TransactionCard = ({id, url, message, timestamp, addressFrom, amount,addressTo})=>{
    return (
      <div className="bg-[#181918] m-4 flex flex-1 
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sml:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl">
        <div className="flex flex-col items-center w-full mt-3">
          <div className="flex justify-start w-full mb-6 p-2">
            <a className={`https://ropsen.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
              <p className="text-white text-base"> From: {shortenAdress(addressFrom)}</p>
            </a>
            <a className={`https://ropsen.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
              <p className="text-white text-base"> To: {shortenAdress(addressTo)}</p>
            </a>
             </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {/* latest transactions */}
        {/* conect your account to see your latest transactions */}
      {currentAccount?(
        <h3 className="text-white text-3xl text-center my-2">Latest transactions</h3>)
        :(<h3 className="text-white text-3xl text-center my-2">Conect your account to see your latest transactions </h3>)
      }
      <div className="flex flex-wrap justify-center item-center items-center mt-10 text-white">
        {dummyData.reverse().map((transaction, i) => <TransactionCard key={i} {...transaction}/>)}

      </div>
      </div>
    </div>
  )
}

export default Transaccions