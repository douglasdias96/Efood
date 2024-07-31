
import { HeroContainer } from './styles'

import Logo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <HeroContainer>

      <img src={Logo} alt='Logo Loja'/>
      <p>Viva experiências gastronômicas<br/> no conforto da sua casa</p>

    </HeroContainer>
  )
}

export default Hero