import axios from "axios";
import {
  User,
  ServerResponse,
  UserDetails,
  Commit,
  Branch
} from "../models/interfaces";

const githubAPI = "https://api.github.com/";

export function findUser(id: string): Promise<ServerResponse<User>> {
  return axios.get(`${githubAPI}users/${id}`);
}

export function getDetails(
  id: string,
  prop: string
): Promise<ServerResponse<Array<UserDetails>>> {
  return axios.get(`${githubAPI}users/${id}/${prop}`);
}

export function getReposDetails(
  id: string,
  repo: string
): Promise<ServerResponse<Array<Object>>> {
  return axios.get(`${githubAPI}repos/${id}/${repo}`);
}

export function getCommits(
  id: string,
  repo: string
): Promise<ServerResponse<Array<Commit>>> {
  return axios.get(`${githubAPI}repos/${id}/${repo}/commits`);
}

export function getBranches(
  id: string,
  repo: string
): Promise<ServerResponse<Array<Branch>>> {
  return axios.get(`${githubAPI}repos/${id}/${repo}/branches`);
}

export function getBranchesDiff(
  id: string,
  repo: string,
  firstBranch: string,
  secondBranch: string
): Promise<ServerResponse<Object>> {
  return axios.get(`${githubAPI}repos/${id}/${repo}/compare/${firstBranch}...${secondBranch}`);
}