import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { myAPi } from './redux/api/api.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={myAPi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApiProvider>
   
  
  </React.StrictMode>,
)
