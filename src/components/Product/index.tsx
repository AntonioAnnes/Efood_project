import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  ContainerRating,
  Rating,
  RatingDiv,
  DivBorder
} from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rating: number
}

const Product = ({ title, description, infos, image, rating }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <DivBorder>
      <Titulo>{title}</Titulo>
      <ContainerRating>
        <RatingDiv>
          <Rating>{rating}</Rating>
          <img src={estrela} alt="estrela" />
        </RatingDiv>
      </ContainerRating>
      <Descricao> {description}</Descricao>
      <Button />
    </DivBorder>
  </Card>
)

export default Product
