import * as S from './styles'
import Hero from '../Hero'

import card1 from '../../assets/images/card1.jpg'
import card2 from '../../assets/images/card2.jpg'
import card3 from '../../assets/images/card3.jpg'
import card4 from '../../assets/images/card4.jpg'
import card5 from '../../assets/images/card5.png'
import card6 from '../../assets/images/card6.jpg'
import { Container } from '../../styles'
import Header from '../Header'

const pratos = [
  {
    id: 1,
    titulo: 'Cookie de Nutella',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card1
  },
  {
    id: 2,
    titulo: 'Farfalle e Mignon ao Molho',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card2
  },
  {
    id: 3,
    titulo: 'Picanha Gaúcha',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card3
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card4
  },
  {
    id: 5,
    titulo: 'Pizza Gorgonzola',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card5
  },
  {
    id: 6,
    titulo: 'Pão Baguete',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed corporis.',
    imagem: card6
  }
]

const Cardapio = () => (
  <>
    <Header />
    <Hero />
    <Container>
      <S.Lista>
        {pratos.map((prato) => (
          <S.Card key={prato.id}>
            <S.Imagem src={prato.imagem} alt={prato.titulo} />
            <S.Infos>
              <S.Tituloprato>{prato.titulo}</S.Tituloprato>
              <S.Descricao>{prato.descricao}</S.Descricao>
              <S.Botao>Adicionar ao carrinho</S.Botao>
            </S.Infos>
          </S.Card>
        ))}
      </S.Lista>
    </Container>
  </>
)

export default Cardapio
