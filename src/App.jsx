import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';


function App() { 
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
