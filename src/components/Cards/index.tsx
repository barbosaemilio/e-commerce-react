import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import useRestaurantes from '../../hooks/useRestaurantes'
import estrelaImg from '../../assets/images/estrela.png'

const Cards = () => {
  const { restaurantes, loading, erro } = useRestaurantes()
  const navigate = useNavigate()

  if (loading) return <p>Carregando...</p>
  if (erro) return <p>{erro}</p>

  return (
    <S.Container>
      {restaurantes.map((restaurante) => (
        <S.Card key={restaurante.id}>
          <S.Imagem src={restaurante.capa} alt={restaurante.titulo} />
          <S.Tag>{restaurante.tipo}</S.Tag>
          <S.Infos>
            <S.TopRow>
              <S.Titulo>{restaurante.titulo}</S.Titulo>
              <S.Avaliacao>
                <span>{restaurante.avaliacao}</span>
                <S.Estrela src={estrelaImg} alt="Avaliação" />
              </S.Avaliacao>
            </S.TopRow>
            <S.Descricao>{restaurante.descricao}</S.Descricao>
            <S.Botao onClick={() => navigate(`/cardapio/${restaurante.id}`)}>
              Saiba mais
            </S.Botao>
          </S.Infos>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default Cards
