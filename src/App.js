import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Stared from './components/Stared';
import Error from './components/Error';

function App() {
  return (
    < >
      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route exact  path="/stared" element={<Stared/>} />
        <Route path="/*" element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
