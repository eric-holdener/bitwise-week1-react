let getMoviesByName = async (name) => {
  const url = `http://www.omdbapi.com/?apikey=${APIKey}&t=${name}`;

  const response = await fetch(url);
  const data = await response.json;

  console.log(data);

  return data;
};

let getMovieDetailsById = async(id) => {
  const url = `http://www.omdbapi.com/?apikey=[42556459]&t=${id}`;

  const response = await fetch(url);
  const data = await response.json;

  console.log(data);

  return data;
}

export { getMoviesByName, getMovieDetailsById };