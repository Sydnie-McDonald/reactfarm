import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
//Importing background to set background image// 
import background from './background.png';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className='animal'>
        <Header />
        <Main>

        </Main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
