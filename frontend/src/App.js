import Home from "./Components/Pages/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductScreen from "./Components/Pages/Product/ProductScreen";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Pages/Signin/Signin";
import Register from "./Components/Pages/Register/Register";
import Shipping from "./Components/Pages/Shipping/Shipping";
import Payment from "./Components/Pages/Payment/Payment";
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder";
import Order from "./Components/Pages/Order/Order";
import OrderHistory from "./Components/Pages/Order/OrderHistory";
import Profile from "./Components/Pages/Profile/Profile";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import ProductList from "./Components/Pages/Product/ProductList";
import ProductEdit from "./Components/Pages/Product/ProductEdit";
import OrderList from "./Components/Pages/Order/OrderList";

function App() {
  	return (
    	<div>
      		<BrowserRouter>
        		<Switch>
          			<Route path="/cart/:id?" component={Cart} />
          			<Route path="/product/:id" exact component={ProductScreen}/>
          			<Route path="/" exact component={Home}/>
          			<Route path="/signin" component={Signin}/>
          			<Route path="/register" component={Register}/>
          			<Route path="/shipping" component={Shipping}/>
          			<Route path="/payment" component={Payment}/>
          			<Route path="/placeorder" component={PlaceOrder}/>
					<Route path="/order/:id" component={Order}/>
					<Route path="/orderhistory" component={OrderHistory}/>
					<Route path="/product/:id/edit" component={ProductEdit}/>
					<PrivateRoute path="/profile" component={Profile}/>
					<AdminRoute path="/productlist" component={ProductList}/>
					<AdminRoute path="/orderlist" component={OrderList}/>
        		</Switch>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
