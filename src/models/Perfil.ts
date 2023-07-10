class Perfil {
  description: string
  image: string
  title: string
  id: number
  rating: string
  infos: string

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    rating: string,
    infos: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.rating = rating
    this.infos = infos
  }
}

export default Perfil
