import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.Header>
    <S.Inner>
      <S.Link as={Link} to="/">
        Restaurante
      </S.Link>
      <S.Logo src={logo} alt="Logo" />
      <S.Carrinho>0 produto(s) no carrinho</S.Carrinho>
    </S.Inner>
  </S.Header>
)

export default Header
