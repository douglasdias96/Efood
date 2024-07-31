
import Footer from "./components/Footer/Footer";
import Rotas from "./routes";
import { GlobalStyle } from "./style";

import { BrowserRouter, Outlet} from 'react-router-dom';





export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
      <Footer />
    </div>
  )
}

