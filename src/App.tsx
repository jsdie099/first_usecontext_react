import React from 'react';
import './App.css';
import Count from './components/Count';
import CountProvider from './context/CountContext';
import Mirror from './components/Mirror';
function App() {
  return (
    <CountProvider>
      <Count/>
      <hr/>
      <Mirror/>
    </CountProvider>
  );
}

export default App;
