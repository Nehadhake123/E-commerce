import { Routes, Route, Router } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { About} from './pages/About';
import { Product } from './pages/Product';
import  Cart  from './pages/Cart';
import SingleProduct from './SingleProduct';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Home } from './Home';
import { GlobalStyle } from './GlobalStyle';
import { Contact } from './Contact';
import  Footer from './component/Footer';
import ErrorPage from './ErrorPage';
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar></Navbar>
      <GlobalStyle/> 
      <Routes>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/singleproduct/:id' element={<SingleProduct></SingleProduct>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}/>
      </Routes>
      <Footer></Footer>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
