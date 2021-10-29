import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Router>
       <Route>
         <Header></Header>
       </Route>
       <Switch>
     
       </Switch>
       <Route>
         <Footer></Footer>
       </Route>
     </Router>
    </div>
  );
}

export default App;
