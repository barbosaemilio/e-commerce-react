import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as S from './styles'
import useRestaurante from '../../hooks/useRestaurante'
import { type Prato } from '../../hooks/useRestaurantes'
import Header from '../Header'
import closeImg from '../../assets/images/close.png'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()
  const { restaurante, loading, erro } = useRestaurante(id)
  const [, setPratoSelecionado] = useState<Prato | null>(null)
  const navigate = useNavigate()

  if (loading) return <p>Carregando...</p>
  if (erro || !restaurante) return <p>{erro}</p>

  return (
    <div>
      <Header />
      <S.Overlay onClick={() => navigate('/Cardapio')} />
      {restaurante.cardapio.map((prato, index) => (
        <S.Container key={prato.id}>
          {index === 0 && (
            <S.BotaoFechar
              src={closeImg}
              alt="Fechar"
              onClick={() => navigate('/Cardapio')}
            />
          )}
          <S.Foto src={prato.foto} alt={prato.nome} />
          <S.Infos>
            <div>
              <S.Titulo>{prato.nome}</S.Titulo>
              <S.Descricao>{prato.descricao}</S.Descricao>
            </div>
            <S.Botao onClick={() => setPratoSelecionado(prato)}>
              Adicionar ao carrinho - R${' '}
              {prato.preco.toFixed(2).replace('.', ',')}
            </S.Botao>
          </S.Infos>
        </S.Container>
      ))}
    </div>
  )
}

export default Restaurante
