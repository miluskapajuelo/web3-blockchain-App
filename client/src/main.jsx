import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// fourth step, import TransaccionProvider function 
import { TransaccionProvider} from './context/TransactionContext';

// fifth step use the provider imported in REACTDOM to share a value for all application
ReactDOM.render(
  <TransaccionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransaccionProvider>
  ,
  document.getElementById('root')
)
