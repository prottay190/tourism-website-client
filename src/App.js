import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddServices from './Pages/AddService/AddServices';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Details from './Pages/Details/Details';
import Orders from './Pages/Orders/Orders';




function App() {
  return (
    <div className="App">
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
       </Switch>
       <Route>
         <Footer></Footer>
       </Route>
     </Router>
    </div>
  );
}

export default App;
