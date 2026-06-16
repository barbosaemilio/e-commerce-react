import { Routes, Route } from 'react-router-dom'

import Banner from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Cardapio from './pages/Cardapio'

import { GlobalCss } from './styles'

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
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
