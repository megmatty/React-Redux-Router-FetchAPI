import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import FetchData from '../getData';

const App = () => (
  <div>
    <header className='navbar'>
      <Link to="/" className='navlink'>Home</Link>
      <Link to="/about-us" className='navlink'>About</Link>
      <Link to="/fetch-data" className='navlink'>Get Data</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/fetch-data" component={FetchData} />
    </main>
  </div>
)

export default App
