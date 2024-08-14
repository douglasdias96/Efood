
import { useDispatch, useSelector } from 'react-redux'
import { ButtonCart, CartContainer, CartItem, Overlay, Prices, Quantity, SideBar } from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const calcularTotal = () => {
    return items.reduce((acc, item) => acc + item.avaliacao, 0);
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.capa} alt={item.titulo} />
              <div>
                <h3>{item.titulo}</h3>
                <h4>{item.avaliacao}</h4>
                
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Produtos(s) no carrinho</Quantity>
        <Prices>
          Total de R$ {calcularTotal().toFixed(2)}
        </Prices>
        <ButtonCart title='Finalizar a compra' > Finalizar a compra </ButtonCart>
        
        
      </SideBar>
    </CartContainer>
  )
}

export default Cart