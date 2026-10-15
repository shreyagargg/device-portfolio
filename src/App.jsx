import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage'

function App() {
  return (
    <BrowserRouter basename="/device-portfolio">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App