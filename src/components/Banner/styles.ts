import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const Container = styled.div`
  width: 100%;
  height: 384px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${fundo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 8px;

  h1 {
    color: ${cores.vermelho};
    font-size: 56px;
    text-align: center;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    height: 280px;
    margin-bottom: 24px;

    h1 {
      font-size: 36px;
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    height: 220px;

    h1 {
      font-size: 28px;
      padding: 0 16px;
    }
  }
`
