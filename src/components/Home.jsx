import React, { useState } from "react";
import MainPage from "./MainPage";
import { apiGet } from "../misc/Config";
import ShowGrid from "./Shows/ShowGrid"
import ActorGrid from "./Actor/Actorgrid"

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]); 
  const [searchOption,setSearchOption ]=useState("shows");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const Search = () => {
          apiGet(`search/${searchOption}?q=${input}`).then(result=> setResults(result) )
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
          return results[0].show
          ?<ShowGrid data={results}/>
          :<ActorGrid data={results}/>
          

      }
      return null;
  }

const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value);
  }
  console.log(searchOption)

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
        </button><br/>
        <label htmlFor="shows-search">
          <input id="shows-search" type="radio" name="search-select" value="shows"  onChange={onRadioChange} defaultChecked="true"></input>
          Shows
        </label>

        <label htmlFor="actor-search">
          <input id="actor-search" type="radio" name="search-select" value="people" onChange={onRadioChange}></input>
          Actors
        </label>
        
        {renderResults()}
      </MainPage>
    </>
  );
};
export default Home;
