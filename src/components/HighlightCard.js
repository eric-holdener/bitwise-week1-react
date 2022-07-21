import React, { useEffect, useState } from "react";
import { GetMoviesByName, GetMovieDetailsById } from "./utils"
import styled from "styled-components";
import OpenModal from "./OpenModal";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";


export default function HighlightCard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("Star");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    GetMoviesByName(search, page).then((response) => {
      setData(response);
      setIsLoading(false);
    })
  }, [page, search]);

  function nextPage() {
    let curr = page;
    setIsLoading(true);
    setPage(curr+1);
  };

  function lastPage() {
    let curr = page;
    setIsLoading(true);
    setPage(curr-1);
  };

  function renderMovie(data) {
    if(data.Search.length > 0) {
      return(
        <div style={{ display: "flex", justifyContent: "center", gap: 30, flexWrap: "wrap", marginLeft:"10vw", marginRight:"10vw" }}>
          {data.Search.map((movie, idx) => (
            <div className={`movieCard${theme}`}>
              <img src={movie.Poster} className="movieCardPoster"></img>
              <OpenModal id={movie.imdbID}/>
            </div>
          ))}
        </div>
      )
     } else {
      return(<p>No movies found</p>)
     }
  }

  function nextButton() {
    return(
      <>
        <button onClick={() => {
          nextPage();
        }}>
          Next Page
        </button>
      </>
    )
  }

  function lastButton() {
    return(
      <>
        <button onClick={() => {
          lastPage();
        }}>
          Last Page
        </button>
      </>
    )
  }

  function buttonSelector() {
    if (page != 1) {
      return(
        <div style={{ display: "flex", justifyContent: "center"}}>
          {lastButton()}
          {nextButton()}
        </div>
      )
    } else {
      return(
        <div style={{ display: "flex", justifyContent: "center"}}>
          {nextButton()}
        </div>
      )
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchInput);
  }

  return (
    <div style={{ display:"flex", alignItems:"center", flexDirection:"column"}}>
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchBox">Search</label>
          <input name="searchBox" type="text" onChange={(e) => setSearchInput(e.target.value)}/>

          <button type="submit">Submit</button>
        </form>
      </>
      <>
        {!isLoading ? (
        <div >
          {renderMovie(data)}
          {buttonSelector()}
        </div>
        ) : (
          <p>Loading</p>
        )}
      </>
      <>
        <button onClick={() => toggleTheme()}>{theme}</button>
      </>
    </div>
  )
}