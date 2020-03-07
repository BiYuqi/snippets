const fetch = require('node-fetch')

const GITHUB_ISSUE_API = ({owner, repo, token}) => {
  return `https://api.github.com/repos/${owner}/${repo}/issues${generateQuery({owner, token})}`
}

const generateQuery = ({owner, token}) => {
  return `?creator=${owner}&per_page=1000&access_token=${token.join('')}`
}

const REDIRECT_URL = ({owner, repo}) => {
  return `https://github.com/${owner}/${repo}/issues`;
}

const CONFIG = {
  owner: process.env.GITHUB_LOGIN,
  repo: process.env.GITHUB_REPO,
  token: ['07413d81b67fcb2cc', 'b0376044c9d52f9640863d8']
}
console.log(CONFIG)

module.exports = () => {
  console.log(GITHUB_ISSUE_API(CONFIG))
  return new Promise((resolve, reject) => {
    fetch(GITHUB_ISSUE_API(CONFIG))
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(e => {
        reject(e)
      })
  })
}