import { Container, FooterSocialMedia, FooterTitle } from './styles'
import Backimagem from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={Backimagem} alt="" />
      <FooterSocialMedia>
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </FooterSocialMedia>
      <FooterTitle>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterTitle>
    </div>
  </Container>
)

export default Footer
