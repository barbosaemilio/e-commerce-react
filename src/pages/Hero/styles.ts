import styled from 'styled-components'
import heroBg from '../../assets/images/apresentacao.png'

export const Hero = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;

  @media (max-width: 1366px) {
    width: 100%;
  }
`
