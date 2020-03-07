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
  token: [d2f398601e81a5cf, 5649f2ec1dd3ed65e2335768]
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
