import fetch from 'node-fetch'
import { Issues } from './simplifyIssue'

const COS_ENV = process.argv.slice(2)
const [GITHUB_SNIPPET] = COS_ENV

interface EnvConfig {
  owner: string
  repo: string
  token: string
}

const EnvConfig: EnvConfig = {
  owner: 'BiYuqi',
  repo: 'snippets',
  token: GITHUB_SNIPPET || ''
}

function githubIssueApi({ owner, repo, token }): string {
  return `https://api.github.com/repos/${owner}/${repo}/issues${generateQuery({ owner, token })}`
}

function generateQuery({ owner, token }): string {
  if (!token) {
    return '?&per_page=30'
  }
  return `?creator=${owner}&per_page=1000&access_token=${token}`
}

// const REDIRECT_URL = ({owner, repo}) => {
//   return `https://github.com/${owner}/${repo}/issues`;
// }

export function fetchIssues(): Promise<Array<Issues>> {
  return new Promise((resolve, reject) => {
    fetch(githubIssueApi(EnvConfig))
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(e => {
        reject(e)
      })
  })
}
