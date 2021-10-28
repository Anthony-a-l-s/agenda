import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro'
import Edit from './pages/edit/edit'
import Home from './pages/home/home'
import LerMais from './pages/lerMais/lerMais'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return(
   <Router>
      <Switch>
          <Route exact path='/' component= {Home} />
          <Route path='/cadastro' component= {Cadastro} />
          <Route path='/edit/:id' component= {Edit} />
          <Route path='/lerMais/:id' component= {LerMais} />
      </Switch>
   </Router>
  )
}

export default App;
