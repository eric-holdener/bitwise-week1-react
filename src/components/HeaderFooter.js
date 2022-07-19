export default function HeaderFooter(props) {
  return(
    <div>
      <h1>Movie Search App</h1>
      <div>{props.children}</div>
      <h2>Copyright Eric Holdener, 2022</h2>
    </div>
  )
}