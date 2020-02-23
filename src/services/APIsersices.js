import axios from "axios";

const githubAPI = "https://api.github.com/users/";

export function findUser(id) {
  return axios.get(`${githubAPI}${id}`);
}

export function getDetails(id, prop) {
  return axios.get(`${githubAPI}${id}/${prop}`);
}
