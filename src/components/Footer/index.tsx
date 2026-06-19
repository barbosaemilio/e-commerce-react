import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/face.png'
import twitter from '../../assets/images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <Link to="/">
      <S.Logo src={logo} alt="eFood" />
    </Link>
    <S.RedesSociais>
      <S.RedeSocialLink
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <S.Icone src={facebook} alt="Facebook" />
      </S.RedeSocialLink>
      <S.RedeSocialLink
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <S.Icone src={instagram} alt="Instagram" />
      </S.RedeSocialLink>
      <S.RedeSocialLink
        href="https://www.x.com/"
        target="_blank"
        rel="noreferrer"
      >
        <S.Icone src={twitter} alt="Twitter" />
      </S.RedeSocialLink>
    </S.RedesSociais>
    <S.Texto>
      A eFood é uma plataforma para divulgação de estabelecimentos, página
      desenvolvida para fins pedagógicos.
    </S.Texto>
  </S.FooterContainer>
)

export default Footer
