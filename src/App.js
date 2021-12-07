import './App.css';
import Navbar from './general/Navbar';
import Home from './page1/Home';
import Footer from './page1/Footer';
import { BrowserRouter as Router , Route, Switch,} from 'react-router-dom';
import Playlist from './page2/Playlist';
import Create from './page3/Ceate';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/playlist'>
          <Playlist />
        </Route>
        <Route>
          <Create />
        </Route>
      </Switch>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
