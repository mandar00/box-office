import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Stared from './components/Stared';
import Error from './components/Error';
import Show from './components/Show';

function App() {
  return (
    < >
      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route exact  path="/stared" element={<Stared/>} />
        <Route path="/*" element={<Error/>}></Route>
        <Route exact path="/shows/:id" element={<Show/>}/>
      </Routes>
    </>
  );
}

export default App;
