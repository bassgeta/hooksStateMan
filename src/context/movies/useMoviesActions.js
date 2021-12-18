import { useMoviesState } from ".";
import {
  SET_MOVIES_LOADING,
  SET_MOVIES_LIST,
  SET_MOVIES_ERROR,
} from "./actionTypes";

const apiKey = process.env.API_KEY;
const url = "https://the-one-api.dev/v2";

export function useMoviesActions() {
  const { dispatch } = useMoviesState();

  return {
    fetchMovies: async () => {
      dispatch({ type: SET_MOVIES_LOADING, payload: true });
      try {
        const response = await fetch(`${url}/movie`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        const json = await response.json();
        dispatch({ type: SET_MOVIES_LIST, payload: json.docs });
      } catch (err) {
        console.error("Error while fetching movies", err);
        dispatch({ type: SET_MOVIES_ERROR, paylod: err });
      }
    },
  };
}
