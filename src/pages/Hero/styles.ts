import styled from 'styled-components'
import heroBg from '../../assets/images/image.png'
import { cores } from '../../styles'

export const Hero = styled.div`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroBg});
  background-size: cover;
  background-position: center;
  margin-bottom: 60px;
`

export const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${cores.branco3};
    font-weight: 100;
    font-size: 32px;
  }

  h1 {
    color: ${cores.branco3};
    font-weight: 900;
    font-size: 32px;
  }
`
