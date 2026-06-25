import { Routes, Route } from 'react-router-dom'

import Banner from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'

import { GlobalCss } from './styles'
import Cardapio from './pages/Cardapio'
import Restaurante from './pages/Restaurante'

function App() {
  return (
    <>
      <GlobalCss />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Cards />
            </>
          }
        />
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
