// Restaurante.jsx
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import useRestaurante from '../../hooks/useRestaurante'
import { type Prato } from '../../hooks/useRestaurantes'
import Header from '../Header'
import closeImg from '../../assets/images/close.png'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()
  const { restaurante, loading, erro } = useRestaurante(id)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  if (loading) return <p>Carregando...</p>
  if (erro || !restaurante) return <p>{erro}</p>

  return (
    <>
      <Header />
      <S.ListaContainer>
        {restaurante.cardapio.map((prato) => (
          <S.Card key={prato.id}>
            <S.Foto src={prato.foto} alt={prato.nome} />
            <S.InfosCard>
              <S.TituloCard>{prato.nome}</S.TituloCard>
              <S.DescricaoCard>{prato.descricao}</S.DescricaoCard>
              <S.BotaoCard onClick={() => setPratoSelecionado(prato)}>
                Saiba mais
              </S.BotaoCard>
            </S.InfosCard>
          </S.Card>
        ))}
      </S.ListaContainer>

      {pratoSelecionado && (
        <>
          <S.Overlay onClick={() => setPratoSelecionado(null)} />
          <S.ModalContainer>
            <S.BotaoFechar
              src={closeImg}
              alt="Fechar"
              onClick={() => setPratoSelecionado(null)}
            />
            <S.FotoModal
              src={pratoSelecionado.foto}
              alt={pratoSelecionado.nome}
            />
            <S.InfosModal>
              <div>
                <S.TituloModal>{pratoSelecionado.nome}</S.TituloModal>
                <S.DescricaoModal>
                  {pratoSelecionado.descricao}
                </S.DescricaoModal>
              </div>
              <S.BotaoModal>
                Adicionar ao carrinho - R${' '}
                {pratoSelecionado.preco.toFixed(2).replace('.', ',')}
              </S.BotaoModal>
            </S.InfosModal>
          </S.ModalContainer>
        </>
      )}
    </>
  )
}

export default Restaurante
