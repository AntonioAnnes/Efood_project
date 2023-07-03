// import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import Backimage from '../../assets/images/fundo.png'
import { Hero, Imagem, Title } from './styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${Backimage})` }}>
    <div className="container">
      <Hero>
        <img src={logo} alt="EFOOD" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Hero>
    </div>
  </Imagem>
)
export default Header
