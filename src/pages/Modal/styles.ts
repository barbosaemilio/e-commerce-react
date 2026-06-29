import styled from 'styled-components'

// ===== ESTILOS DA LISTA DE CARDS =====
export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 16px;
`

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  overflow: hidden;
`

export const Foto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const InfosCard = styled.div`
  padding: 16px;
`

export const TituloCard = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
  margin: 0 0 8px;
`

export const DescricaoCard = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 22px;
  margin: 0 0 16px;
`

export const BotaoCard = styled.button`
  width: 100%;
  height: 40px;
  background: #e66767;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #c0392b;
  }
`

// ===== ESTILOS DO MODAL =====
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 1024px;
  height: 344px;
  background: #e66767;
  display: flex;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  gap: 32px;
  border-radius: 8px;
`

export const FotoModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 4px;
`

export const InfosModal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 280px;
  justify-content: space-between;
`

export const TituloModal = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 16px;
`

export const DescricaoModal = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 22px;
  margin: 0;
`

export const BotaoModal = styled.button`
  width: 218px;
  height: 24px;
  background: #fff;
  color: #e66767;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
`

export const BotaoFechar = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 3;
`
