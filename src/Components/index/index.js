import React , { Component } from 'react';

import Home from '../Home';
import Work from '../Work';
import Portfolio from '../portfolio';
import Profile from '../Profile';
import About from '../About';
import Social from '../Social';
import Footer from '../Footer';


class index extends Component{
  render(){
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <Social />
      <Footer />
    </div>
  );
}
};



export default index ;