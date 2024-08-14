
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./style";

import { Outlet} from 'react-router-dom';





export default function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <Footer />
      <Cart />
    </>
  )
}

