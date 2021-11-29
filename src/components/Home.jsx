import React, { useState } from "react";
import MainPage from "./MainPage";
import { apiGet } from "../misc/Config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const Search = () => {
          apiGet(`search/shows?q=${input}`).then(result=> setResults(result) )
          //from apiget function we will get response which is a json format of api 
  };

  const onKeyDown = (ev) => {
    if(ev.keyCode===13){
        Search();
    }
  };

  const renderResults=()=>{
      if(results && results.length===0){
          return(<div> No Results Found</div>)
      }
      if(results && results.length>0){
          return(<div>{results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>)
      }
      return null;
  }
  return (
    <>
      <MainPage>
        <input
          type="text"
          placeholder="Search"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <button type="button" onClick={Search}>
          Search
        </button>
        {renderResults()}
      </MainPage>
    </>
  );
};
export default Home;
