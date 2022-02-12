import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import logo from './../images/logo.png'
const NabvarItem =({title, classProps})=>{
  return(
    <li className={`mx-4 cursor-pointer $(classProps)`}></li>
  )
}

const Nabvar=()=> {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hiddent list-none flex-row justify-content item-center flex-init">

      </ul>
    </nav>
  )
}

export default Nabvar