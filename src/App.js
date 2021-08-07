import React, { Component } from 'react'
//import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
//import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Movie from './components/home/Movie';
// import Navbar from './components/layout/Navbar';
//import MoviesContainer from './components/home/MoviesContainer';
class App extends Component {
  render() {
    return( 
      <div>
        <BrowserRouter>
        {/* <Switch>   */}
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Route path="/movie/:imbdID"  component={Movie} />
          <Footer />
        {/* </Switch> */}
        </BrowserRouter>
      </div>)
  }
    // <Navbar />
    // <Landing />
    // <Footer />
    
  
}

export default App;