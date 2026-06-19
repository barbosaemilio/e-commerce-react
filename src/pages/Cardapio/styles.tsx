import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Card = styled.div`
  width: 304px;
  background-color: ${cores.vermelho};
  border: 10px solid ${cores.vermelho};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 304px;
  }
`

export const Imagem = styled.img`
  width: 304px;
  height: 164px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Infos = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Tituloprato = styled.h3`
  color: ${cores.branco};
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  flex: 1;
`

export const Botao = styled.button`
  display: inline-block;
  text-align: center;
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
`
