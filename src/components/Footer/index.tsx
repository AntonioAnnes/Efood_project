import logo from '../../assets/images/logo.png'
import Backimagem from '../../assets/images/fundo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'
import { FundoFooter, Logo, RedesSociais, TextoFooter } from './styles'

const Footer = () => (
  <FundoFooter style={{ backgroundImage: `url(${Backimagem})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <RedesSociais>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </RedesSociais>
      <TextoFooter>
        A efood é uma plataforma para divulgação de estabelicementos, a
        responsabilidade pela entrega,qualidade dos produtos é toda do
        estabelicimento contratado
      </TextoFooter>
    </div>
  </FundoFooter>
)

export default Footer
