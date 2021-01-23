import './App.css';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/searchPage/SearchPage'

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
