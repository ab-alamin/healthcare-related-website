
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
  
    </div>
  );
}

export default App;
