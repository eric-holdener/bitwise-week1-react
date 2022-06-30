import HighlightCard from "./HighlightCard";
import { GetMoviesByName, GetMovieDetailsById } from "./utils"

export default function Home() {
  let data = GetMoviesByName("Star");
  console.log(data)


  return (
    <div>
      <h1 className="homeHeader">Header</h1>
      <h2 style={{ fontStyle: "italic", marginTop: 40 }}>Movies and more</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 30}}>
        <HighlightCard Header="Box1"/>
        <HighlightCard Header="Box2"/>
        <HighlightCard Header="Box3"/>
      </div>
    </div>
  )
};

function formatResponse() {

};