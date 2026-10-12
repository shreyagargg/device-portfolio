// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { BrowserRouter } from 'react-router-dom'

<BrowserRouter basename="/device-portfolio">
  <App />
</BrowserRouter>