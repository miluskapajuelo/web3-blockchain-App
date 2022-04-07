import { Nabvar, Welcome, Footer, Services, Transaccions} from './components'

import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
        <Nabvar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaccions/>
      <Footer/>
    </div>
  )
}

export default App