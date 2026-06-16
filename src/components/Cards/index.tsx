import * as S from './styles'
import image1 from '../../assets/images/image 1.png'
import image2 from '../../assets/images/imagem (1).png'
import image3 from '../../assets/images/drink.jpg'
import image4 from '../../assets/images/hamburger.jpg'

const Cards = () => (
  <S.Container>
    <S.Card>
      <S.Imagem src={image1} alt="Prato 1" />
      <S.Tag>Italiano</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
          <S.Avaliacao>
            <span>4.5</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          debitis fuga labore alias? Amet nulla optio nobis.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>

    <S.Card>
      <S.Imagem src={image2} alt="Prato 2" />
      <S.Tag>Japonês</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>Hioki Sushi</S.Titulo>
          <S.Avaliacao>
            <span>4.8</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>

    <S.Card>
      <S.Imagem src={image3} alt="Prato 3" />
      <S.Tag>Sobremesas</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>Sobremesas</S.Titulo>
          <S.Avaliacao>
            <span>4.2</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>

    <S.Card>
      <S.Imagem src={image4} alt="Prato 4" />
      <S.Tag>Hamburger</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>Hamburguer Artesanal</S.Titulo>
          <S.Avaliacao>
            <span>4.7</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>

    <S.Card>
      <S.Imagem src={image1} alt="Prato 1" />
      <S.Tag>Italiano</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
          <S.Avaliacao>
            <span>4.5</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          debitis fuga labore alias? Amet nulla optio nobis.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>

    <S.Card>
      <S.Imagem src={image2} alt="Prato 2" />
      <S.Tag>Japonês</S.Tag>
      <S.Infos>
        <S.TopRow>
          <S.Titulo>Hioki Sushi</S.Titulo>
          <S.Avaliacao>
            <span>4.8</span>
            <S.Estrela>★</S.Estrela>
          </S.Avaliacao>
        </S.TopRow>
        <S.Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
          corporis, cumque facere autem dolores neque dignissimos.
        </S.Descricao>
        <S.Botao href="#">Saiba mais</S.Botao>
      </S.Infos>
    </S.Card>
  </S.Container>
)
export default Cards
