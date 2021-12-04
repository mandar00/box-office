import React, { useState } from "react";
import MainPage from "./MainPage";
import { apiGet } from "../misc/Config";
import ShowGrid from "./Shows/ShowGrid"
import ActorGrid from "./Actor/Actorgrid"
import { useLastQuery } from "../misc/CustomHooks"; 

const Home = () => {
  const [input, setInput] = useLastQuery();
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


      <div className="searchAreaDiv">
        <input
        className="mainSearchBar"
          type="text"
          placeholder="Search"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <button className="mainSearchButton" type="button" onClick={Search}>
          Search
        </button><br/>
        </div>


        <div className="mainSelectDiv">
        <label className="shows-search" htmlFor="shows-search">
          <input className="showSelect" id="shows-search" type="radio" name="search-select" value="shows"  onChange={onRadioChange} defaultChecked="true"></input>
          Shows
        </label>

        <label className="actor-search" htmlFor="actor-search">
          <input className="actorSelect" id="actor-search" type="radio" name="search-select" value="people" onChange={onRadioChange}></input>
          Actors
        </label>
        </div>
        
        {renderResults()}
      </MainPage>
    </>
  );
};
export default Home;
