
import logo from './../images/logo.png' 
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const NabvarItem =({title, classProps})=>{
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
} 

const Nabvar=()=> {

  const [togleMenu, setTogleMenu]= useState(false)
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-content item-center flex-initial">
        {["market", "exchange", "tutorials", "wallets"].map((item, index)=>(
          <NabvarItem key={item+index} title={item} />
  ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
        
      </ul>
      <div className="flex relative ">
        {togleMenu ? <AiOutlineClose fontSize={28} text-white md-hidden cursor-pointer onClick={() => setTogleMenu(false)}/> : <HiMenuAlt4 fontSize={28} text-white md-hidden cursor-pointer onClick={() => setTogleMenu(true)}/>}
        {togleMenu && (
          <ul className="z-10 fixed top-0 right-2 p-3">
            <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() =>setTogleMenu(false)}/>
            </li>
            {["market", "exchange", "tutorials", "wallets"].map((item, index)=>(
          <NabvarItem key={item+index} title={item} />
  ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Nabvar