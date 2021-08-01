import Home from "./Components/Pages/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductScreen from "./Components/Pages/Product/ProductScreen";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Pages/Signin/Signin";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/product/:id" exact component={ProductScreen}/>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" exact component={Signin}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
