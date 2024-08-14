import { Header, Links } from "./styles";
import Logo from '../../assets/images/logo.png';
import Banner from "../Banner/Banner";
import { useParams } from 'react-router-dom';

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const HeaderCardapio = () => {
  const {items} = useSelector((state: RootReducer) =>state.cart)
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch()
  const openCart = () =>{
    dispatch(open())
  }

  if (!id) {
    return <div>Erro: ID do restaurante não fornecido</div>;
  }


  return (
    <>
      <Header>
        <Links to={'/Efood'}>Restaurantes</Links>
        <img src={Logo} />
        <a onClick={openCart}> {items.length} - produtos no carrinho</a>
      </Header>
      <Banner />
    </>
  );
}

export default HeaderCardapio;
