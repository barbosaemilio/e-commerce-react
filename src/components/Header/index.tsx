import { HeaderBar, Links, LinkItem, LinkCart } from './style'

import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/shopping-cart 1.svg'
import { Link } from 'react-router-dom'

export const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <Links>
        <LinkItem>
          <Link to="/cardapio">Cardapio</Link>
        </LinkItem>
      </Links>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
