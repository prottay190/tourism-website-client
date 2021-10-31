import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddServices from './Pages/AddService/AddServices';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Details from './Pages/Details/Details';
import Orders from './Pages/Orders/Orders';
import SingIn from './Pages/SingIn/SingIn';
import AuthProvider from './contaxt/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Shipping from './Pages/Shipping/Shipping';
import MoreService from './Pages/MoreService/MoreService';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Route>
            <Header></Header>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/detail/:serviceId">
              <Details></Details>
            </Route>
            <Route path="/order">
              <Orders></Orders>
            </Route>
            <Route path="/login">
              <SingIn></SingIn>
            </Route>
            <Route path="/shipping">
              <Shipping></Shipping>
            </Route>
            <Route path="/moreservice">
              <MoreService></MoreService>
            </Route>
            <Route path="*">
             <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
