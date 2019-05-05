import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (parent, { limit, rating }) => getMovies(limit, rating),
    movie: (parent, { id }) => getMovie(id),
    suggestions: (parent, { id }) => getSuggestions(id)
  }
};

export default resolvers;
