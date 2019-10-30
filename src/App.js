import React from 'react';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Home from './pages/Homepage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <ul id="menu">
            <NavLink to="/"><li className="menuicon fa fa-bolt"/></NavLink>
            <NavLink to="page1"><li className="menuicon fas fa-keyboard"/></NavLink>
            <NavLink to="page2"><li className="menuicon fas fa-rocket"/></NavLink>
          </ul>
          <Route path='/' component={Home}/>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
