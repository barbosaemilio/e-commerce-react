import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: ${cores.cinza};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 472px;
  }
`

export const Imagem = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Infos = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h3`
  color: ${cores.vermelho};
  font-size: 24px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Descricao = styled.p`
  color: ${cores.vermelho};
  font-size: 14px;
  flex: 1;
`

export const Botao = styled.a`
  display: inline-block;
  text-align: center;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  text-decoration: none;
  font-weight: bold;
  padding: 8px 0;
  border-radius: 8px;
  margin-top: 16px;
`
