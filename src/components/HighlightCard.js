import { useEffect, useState } from "react";
import { GetMoviesByName, GetMovieDetailsById } from "./utils"
import styled from "styled-components";

const MovieCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2vh;
  justify-content: space-between;
  padding: 2vh 1vw 2vh 1vw;
  box-shadow: 2px 2px;
  align-self: center;
`;

const MoviePoster = styled.img`

`;

export default function HighlightCard() {
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
            <MovieCard className="movieCard">
              <MoviePoster src={movie.Poster} className="movieCard-poster"></MoviePoster>
              <h3 className="movieCard-header">{movie.Title}</h3>
              <p className="movieCard-year">{movie.Year}</p>
            </MovieCard>
          ))}
        </div>
      )
     } else {
      return(<p>No movies found</p>)
     }
  }

  function nextButton() {
    return(
      <div>
        <button onClick={() => {
          nextPage();
        }}>
          Next Page
        </button>
      </div>
    )
  }

  function lastButton() {
    return(
      <div>
        <button onClick={() => {
          lastPage();
        }}>
          Last Page
        </button>
      </div>
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
        <div>
          {nextButton()}
        </div>
      )
    }
  }
  return (
    <div>
      <div>
        <label htmlFor="searchBox">Search</label>
        <input name="searchBox" type="text" onChange={(e) => setSearchInput(e.target.value)}/>

        <button onClick={() => setSearch(searchInput)}>Submit</button>
      </div>
      <div>
        {!isLoading ? (
        <div >
          {renderMovie(data)}
          {buttonSelector()}
        </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  )
}