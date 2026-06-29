import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { Container } from '../../styles'
import Header from '../Header'
import useRestaurante from '../../hooks/useRestaurante'
import { type Prato } from '../../hooks/useRestaurantes'
import closeImg from '../../assets/images/close.png'
import Hero from '../Hero'

const Cardapio = () => {
  const { id } = useParams<{ id: string }>()
  const { restaurante, loading, erro } = useRestaurante(id)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  if (loading) return <p>Carregando...</p>
  if (erro || !restaurante) return <p>{erro}</p>

  return (
    <>
      <Header />
      <Hero
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <Container>
        <S.Lista>
          {restaurante.cardapio.map((prato) => (
            <S.Card key={prato.id}>
              <S.Imagem src={prato.foto} alt={prato.nome} />
              <S.Infos>
                <S.Tituloprato>{prato.nome}</S.Tituloprato>
                <S.Descricao>{prato.descricao}</S.Descricao>
                <S.Botao onClick={() => setPratoSelecionado(prato)}>
                  Saiba mais
                </S.Botao>
              </S.Infos>
            </S.Card>
          ))}
        </S.Lista>
      </Container>

      {pratoSelecionado && (
        <S.ModalOverlay onClick={() => setPratoSelecionado(null)}>
          <S.Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <S.ModalFoto
              src={pratoSelecionado.foto}
              alt={pratoSelecionado.nome}
            />
            <S.ModalConteudo>
              <S.BotaoFechar
                src={closeImg}
                alt="Fechar"
                onClick={() => setPratoSelecionado(null)}
              />
              <S.ModalTitulo>{pratoSelecionado.nome}</S.ModalTitulo>
              <S.ModalDescricao>{pratoSelecionado.descricao}</S.ModalDescricao>
              <S.ModalPorcao>Porção: {pratoSelecionado.porcao}</S.ModalPorcao>
              <S.BotaoModal>
                Adicionar ao carrinho - R${' '}
                {pratoSelecionado.preco.toFixed(2).replace('.', ',')}
              </S.BotaoModal>
            </S.ModalConteudo>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </>
  )
}

export default Cardapio
