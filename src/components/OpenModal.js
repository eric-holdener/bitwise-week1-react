import ReactModal from "react-modal"
import { useEffect, useState } from "react";
import { GetMovieDetailsById } from "./utils";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function OpenModal(props) {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  useEffect(() => {
    if(selectedMovieID) {
      GetMovieDetailsById(props.id).then((response) => {
        setData(response);
        setIsLoading(false);
      })
    }
  }, [selectedMovieID]);

  return (
    <div>
      <button onClick={() => {setOpen(true); setSelectedMovieID(props.id)}}>Open</button>
      <ReactModal isOpen={open}>
          {!isLoading ? (
          <div>
            <img src={data.Poster} className="movieCard-poster" />
            <h3 className="movieCard-header">{data.Title}</h3>
            <p className="movieCard-rated">{data.Rated}</p>
            <p className="movieCard-plot">{data.Plot}</p>
            <button onClick={() => {setOpen(false); setSelectedMovieID(null)}}>Close</button>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </ReactModal>
    </div>
  )
}