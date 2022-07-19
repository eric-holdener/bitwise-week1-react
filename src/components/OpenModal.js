import ReactModal from "react-modal"
import { useEffect, useState } from "react";

export default function OpenModal(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {console.log(props)}
      <button onClick={() => setOpen(true)}>Open</button>
      <ReactModal isOpen={open}>
        <div>
          <img src={props.movie.Poster} className="movieCard-poster" />
          <h3 className="movieCard-header">{props.movie.Title}</h3>
          <p className="movieCard-year">{props.movie.Year}</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </ReactModal>
    </div>
  )
}