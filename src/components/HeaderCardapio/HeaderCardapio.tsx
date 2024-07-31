import { Banner, Header } from "./styles"

import Logo from '../../assets/images/logo.png'



const HeaderCardapio = () => {
  return (
    <>
      <Header>
        <h3>Restaurantes</h3>
        <img src={Logo} />
        <a>0 - produtos no carrinho</a>
      </Header>
      <Banner >
      </Banner>
    </>
  )
}

export default HeaderCardapio