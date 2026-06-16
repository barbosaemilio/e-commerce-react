import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.Header>
    <S.Inner>
      <S.Link href="#">Restaurante</S.Link>
      <Link to="/">
        <S.Logo src={logo} alt="Logo" />
      </Link>
      <S.Carrinho>0 produto(s) no carrinho</S.Carrinho>
    </S.Inner>
  </S.Header>
)

export default Header
