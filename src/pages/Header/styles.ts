import styled from 'styled-components'
import { cores } from '../../styles'
import headerBg from '../../assets/images/fundo.png'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${headerBg});
  background-size: cover;
  background-position: center;

  media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 100px;
`
export const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`

export const Logo = styled.img`
  height: 60px;

  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`

export const Carrinho = styled.span`
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
`

export const Link = styled.a`
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
