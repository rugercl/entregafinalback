import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import ErrorPages from './Pages/ErrorPages'
import LoginPages from './Pages/LoginPages'
import Carrito from './Pages/CartPages'
import ProductPages from './Pages/ProductPages'
import AdminPages from './Pages/AdminPages'
import StorageRoute from './Components/StorageRoute'
import { Footer } from './Pages/FooterPages'

function App() {
  return (
    <Router>
      <Switch>
        <StorageRoute path="/admin" role={'admin'} component={AdminPages} />
        <Route path="/producto/:id" exact component={ProductPages} />
        <Route path="/carrito" exact component={Carrito} />
        <Route path="/loginUser" exact component={LoginPages} />
        <Route path="/" exact component={HomePages} />
        <Route path="/" component={ErrorPages} />
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
