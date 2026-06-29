import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Hero = ({ tipo, titulo, capa }: Props) => (
  <S.Hero $capa={capa}>
    <S.Inner>
      <p>{tipo}</p>
      <h1>{titulo}</h1>
    </S.Inner>
  </S.Hero>
)

export default Hero
