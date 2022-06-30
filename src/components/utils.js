import { useState, useEffect } from "react";

const APIKey = "42556459";



let GetMoviesByName = async (name) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://www.omdbapi.com/?apikey=${APIKey}&s=${name}`;
  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {setData(actualData); setError(null)})
    .catch((err) => {
      setError(err.message);
      setData(null);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return data.Search;
};

let GetMovieDetailsById = async(id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`;
  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {setData(actualData); setError(null)})
    .catch((err) => {
      setError(err.message);
      setData(null);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return data.Search;
}

export { GetMoviesByName, GetMovieDetailsById };