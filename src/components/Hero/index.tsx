import * as S from './styles'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <S.Container>
    <S.Logo src={logo} alt="Efood" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </S.Container>
)

export default Banner
