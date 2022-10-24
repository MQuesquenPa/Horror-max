import React from 'react'
import { AllCards } from './components/Blog_Articles/AllCards';
import { AllButtons } from './components/Buttons/AllButtons';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <h1 style={{fontFamily: 'Nightscary'}}>HORROR HISTORY</h1>
      {/* <AllButtons /> */}
      <AllCards />
      <Footer />
    </>
  );
}

export default App;
