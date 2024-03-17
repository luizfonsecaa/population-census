import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomeView } from './pages/home/HomeView'
import { worker  } from './api/worker'
// Inicia o worker com uma configuração específica
await worker.start({
  onUnhandledRequest: 'bypass',
})

// Define a função para iniciar a aplicação
const initApplication = async () => {
  // Cria uma raiz React e renderiza o componente HomeView nela
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HomeView />
    </React.StrictMode>
  )
}

initApplication() 
