import { Header } from "./styles";
import Logo from '../../assets/images/logo.png';
import Banner from "../Banner/Banner";
import { useParams } from 'react-router-dom';

const HeaderCardapio = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Erro: ID do restaurante não fornecido</div>;
  }


  return (
    <>
      <Header>
        <h3>Restaurantes</h3>
        <img src={Logo} />
        <a>0 - produtos no carrinho</a>
      </Header>
      <Banner id={parseInt(id, 10)} />
    </>
  );
}

export default HeaderCardapio;
