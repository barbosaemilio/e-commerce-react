import * as S from './styles'
import { Container } from '../../styles'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import useRestaurantes from '../../hooks/useRestaurantes'

const Cardapio = () => {
  const { restaurantes, loading, erro } = useRestaurantes()
  const navigate = useNavigate()

  if (loading) return <p>Carregando...</p>
  if (erro) return <p>{erro}</p>

  return (
    <>
      <Header />
      <Container>
        <S.Lista>
          {restaurantes.map((restaurante) => (
            <S.Card key={restaurante.id}>
              <S.Imagem src={restaurante.capa} alt={restaurante.titulo} />
              <S.Infos>
                <S.Tituloprato>{restaurante.titulo}</S.Tituloprato>
                <S.Descricao>{restaurante.descricao}</S.Descricao>
                <S.Botao
                  onClick={() => navigate(`/restaurante/${restaurante.id}`)}
                >
                  Ver cardápio
                </S.Botao>
              </S.Infos>
            </S.Card>
          ))}
        </S.Lista>
      </Container>
    </>
  )
}

export default Cardapio
