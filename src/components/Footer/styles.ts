import styled from 'styled-components'
import fundo from '../../assets/images/footer.png'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1366px;
  height: 198px;
  margin: 0 auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 42px;
  margin-bottom: 42px;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 16px;
  }
`

export const Logo = styled.img`
  margin-top: 24px;

  @media (max-width: 480px) {
    height: 32px;
    margin-top: 0;
  }
`

export const RedesSociais = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 14px;
`

export const RedeSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icone = styled.img`
  width: 32px;
  height: 32px;
`

export const Texto = styled.p`
  font-size: 12px;
  color: ${cores.vermelho};
  text-align: center;
  max-width: 740px;
  margin-top: 32px;
  margin-bottom: 24px;
  line-height: 1.4;

  @media (max-width: 480px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
