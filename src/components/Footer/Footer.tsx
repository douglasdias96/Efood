import Logo from '../../assets/images/logo.png'
import { DivLogo, FooterStyle, TagFoot } from './styles'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <FooterStyle>
      <img src={Logo} alt="Logo Loja" />
      <DivLogo>
        <InstagramIcon sx={{ color: '#E66767', fontSize: 24}}/>
        <FacebookIcon sx={{ color: '#E66767', marginLeft:1, marginRight:1}}/>
        <TwitterIcon sx={{ color: '#E66767', fontSize: 24}}/>
      </DivLogo>

      <TagFoot>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
      </TagFoot>
    </FooterStyle>
  )
}

export default Footer