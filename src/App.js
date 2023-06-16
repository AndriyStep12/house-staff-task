import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import GoodsContainer from "./components/Goods/GoodsContainer";
import Rules from './components/Rules/Rules';
import SaleCont from './components/saleGoods/sale';

function App() {
  return (
    <div className="wrap">
      <Header/>
      <GoodsContainer/>
      <SaleCont/>
      <Rules/>
      <Footer/>
    </div>
  );
}

export default App;
