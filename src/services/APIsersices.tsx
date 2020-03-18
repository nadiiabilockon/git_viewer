import axios from "axios";

const githubAPI = "https://api.github.com/";

export function findUser(id: string) {
  return axios.get(`${githubAPI}users/${id}`);
}

export function getDetails(id: string, prop: string) {
  return axios.get(`${githubAPI}users/${id}/${prop}`);
}

export function getBranchDetails(id: string, branch: string) {
  return axios.get(`${githubAPI}repos/${id}/${branch}`);
}

export function getCommits(id: string, branch: string) {
  return axios.get(`${githubAPI}repos/${id}/${branch}/commits`);
}
