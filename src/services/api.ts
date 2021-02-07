import axios from "axios";
import KEY from "./key";

export async function searchByQuery(query: string) {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${KEY}&query=${query}&page=1`
    )
    .then((r) => {
      console.log('r.data.results', r.data.results);
      return r.data.results;
    });
}

export async function searchRandom(query: string) {
    return axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${KEY}&query=${query}&page=1`
      )
      .then((r) => {
        console.log(r.status);
        return r.request.response;
      });
  }
