// import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import { Issues } from "./simplifyIssue";

interface Config {
  owner: string
  repo: string
  token: string
}

export function fetchIssues(): Promise<Array<Issues>> {
  return new Promise((resolve, reject) => {
    resolve([])
  })
}