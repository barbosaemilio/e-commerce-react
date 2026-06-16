import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Banner = () => (
  <S.Container>
    <Link to="/cardapio">
      <S.Logo src={logo} alt="Efood" />
    </Link>
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </S.Container>
)

export default Banner
