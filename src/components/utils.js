const APIKey = process.env.REACT_APP_MOVIES_API_KEY;

let GetMoviesByName = async (name, page) => {
  const url = `https://www.omdbapi.com/?apikey=${APIKey}&s=${name}&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

let GetMovieDetailsById = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { GetMoviesByName, GetMovieDetailsById };