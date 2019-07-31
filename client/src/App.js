import React from 'react';
import Navbar from './components/navbar'
import Jumbo from './components/Jumbo'
import Search from './components/search'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Jumbo />
      <Search />
      <Footer />
    </>
  );
}

export default App;
