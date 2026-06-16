import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const Container = styled.div`
  width: 100vw;
  height: 384px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${fundo});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 48px;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 40px;

  h1 {
    color: ${cores.vermelho};
    font-size: 36px;
    text-align: center;
    max-width: 600px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    height: 280px;
    padding: 24px 0 32px;

    h1 {
      font-size: 24px;
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    height: 220px;

    h1 {
      font-size: 20px;
    }
  }
`

export const Logo = styled.img`
  height: 56px;

  @media (max-width: 768px) {
    height: 40px;
  }
`
