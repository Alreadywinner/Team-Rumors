//import logo from './logo.svg';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path='/services' component={Services} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
