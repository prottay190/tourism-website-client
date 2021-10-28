import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';


function App() {
  return (
    <div className="App">
     <Router>
       <Route>
         <Header></Header>
       </Route>
       <Switch>
     
       </Switch>
     </Router>
    </div>
  );
}

export default App;
