import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  margin-top: 80px;

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
  border-radius: 2px;
  margin-top: 16px;
  cursor: pointer;
`
export const BotaoModal = styled(Botao)`
  width: 210px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const Modal = styled.div`
  background: ${cores.vermelho};
  display: flex;
  max-width: 960px;
  width: 90%;
  position: relative;
`

export const ModalFoto = styled.img`
  width: 280px;
  object-fit: cover;
`

export const ModalConteudo = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`

export const BotaoFechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  cursor: pointer;
`

export const ModalTitulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.branco};
`

export const ModalDescricao = styled.p`
  font-size: 14px;
  color: ${cores.branco};
`

export const ModalPorcao = styled.p`
  font-size: 14px;
  font-style: italic;
  color: ${cores.branco};
`
