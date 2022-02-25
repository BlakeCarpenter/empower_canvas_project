import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation/Navigation';
import ListCanvasResult from './page/ListCanvasResult';
import AddCanvasResult from './page/AddCanvasResult';

function App() {
  return (<>
    <Navigation/>
    <AddCanvasResult/>
    <ListCanvasResult/>
  </>);
}

export default App;
