import axios from "axios";

const githubAPI = "https://api.github.com/";

export function findUser(id) {
  return axios.get(`${githubAPI}users/${id}`);
}

export function getDetails(id, prop) {
  return axios.get(`${githubAPI}users/${id}/${prop}`);
}

export function getBranchDetails(id, branch) {
  return axios.get(`${githubAPI}repos/${id}/${branch}`);
}

export function getCommits(id, branch) {
  return axios.get(`${githubAPI}repos/${id}/${branch}/commits`);
}
