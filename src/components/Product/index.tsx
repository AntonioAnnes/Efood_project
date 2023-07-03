import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao> {description}</Descricao>
  </Card>
)

export default Product