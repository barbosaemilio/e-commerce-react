import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
`

export const Card = styled.div`
  position: relative;
  width: 472px;
  background-color: ${cores.cinza};
  border-right: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 472px;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;

  @media (max-width: 520px) {
    height: 160px;
  }
`

export const Tag = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Infos = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  color: ${cores.vermelho};
  font-size: 16px;
  line-height: 1.2;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;

  span {
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
  }
`

export const Estrela = styled.span`
  color: #f5a623;
  font-size: 16px;
  line-height: 1;
`

export const Descricao = styled.p`
  color: ${cores.vermelho};
  font-size: 12px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Botao = styled.a`
  display: inline-block;
  text-align: center;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  width: 82px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  align-self: flex-start;
`
