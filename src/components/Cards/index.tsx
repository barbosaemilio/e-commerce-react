import * as S from './styles'
import image1 from '../../assets/images/image 1.png'
import image2 from '../../assets/images/imagem (1).png'
import image3 from '../../assets/images/drink.jpg'
import image4 from '../../assets/images/hamburger.jpg'

const Cards = () => (
  <S.Container>
    <S.Card>
      <S.Imagem src={image1} alt="Prato 1" />
      <S.Infos>
        <S.Titulo>La Dolce Vita Trattoria </S.Titulo>
        <S.Descricao>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          debitis fuga labore alias? Amet nulla optio nobis, magnam veniam
          reprehenderit! Vero distinctio odio quod ducimus. Sequi provident
          repudiandae neque velit?{' '}
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>
    <S.Card>
      <S.Imagem src={image2} alt="Prato 2" />
      <S.Infos>
        <S.Titulo>Hioki Sushi </S.Titulo>
        <S.Descricao>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos earum fugiat
          labore alias inventore ab facilis repellendus voluptates in!
          Architecto, corrupti officia.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>
    <S.Card>
      <S.Imagem src={image3} alt="Prato 3" />
      <S.Infos>
        <S.Titulo>Sobremesas </S.Titulo>
        <S.Descricao>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos earum fugiat
          labore alias inventore ab facilis repellendus voluptates in!
          Architecto, corrupti officia.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>
    <S.Card>
      <S.Imagem src={image4} alt="Prato 2" />
      <S.Infos>
        <S.Titulo>Hamburguer Artesal </S.Titulo>
        <S.Descricao>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos earum fugiat
          labore alias inventore ab facilis repellendus voluptates in!
          Architecto, corrupti officia.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>
  </S.Container>
)

export default Cards
