import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 1024px;
  height: 344px;
  background: #e66767;
  display: flex;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  gap: 32px;
  margin: 0 auto 24px;
  margin-top: 60px;
`

export const Foto = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 280px;
  justify-content: space-between;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 22px;
  margin: 0;
`

export const Botao = styled.button`
  width: 218px;
  height: 24px;
  background: #fff;
  color: #e66767;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`
export const BotaoFechar = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`
