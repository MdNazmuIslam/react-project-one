import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './component/HeaderMenu';
import Ads from './component/ads';
import Form from './component/Form';
import TerminalSection from './component/Terminal';
import Adslong from './component/adslong';
import CtLink from './component/contactlink';

function App() {
  return (
    <>
      <HeaderMenu />
      <Ads />
      <Form />
      <TerminalSection />
      <Adslong />
      <CtLink />
   
    </>
  );
};





export default App;
