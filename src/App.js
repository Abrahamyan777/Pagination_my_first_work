import './App.css';
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import HiddenLogin from './components/hiddenLogin/hiddenLogin';
import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <HiddenLogin/>
      <Footer/>
    </div>
    
  );
}

export default App;
