export let movies = [
  {
    id: 0,
    name: "IronMan",
    score: 99
  },
  {
    id: 1,
    name: "CapntainAmerica",
    score: 97
  },
  {
    id: 2,
    name: "Thor",
    score: 98
  },
  {
    id: 3,
    name: "Avengers",
    score: 100
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.fliter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
