import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.vermelho};
  padding: 30px;
  border-radius: 24px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
    gap: 12px;

    img {
      height: 32px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 16px;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;

    img {
      width: 20px;
      margin-left: 8px;
    }
  }
`
