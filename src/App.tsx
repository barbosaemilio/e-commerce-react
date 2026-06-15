import { Routes, Route } from 'react-router-dom'

import Banner from './components/Banner'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Cardapio from './pages/Cardapio'

import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
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
      </Container>
    </>
  )
}
export default App
