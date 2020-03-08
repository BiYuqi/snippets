import * as fs from 'fs'
import { refactoringData } from './refactoringData'
import { fetchIssues } from './fetchIssues'
import { Issues } from './simplifyIssue'

const DefaultReadme: string = '<h1 align="center">日常技术摘录 👋</h1>'
const RemoveSpace: RegExp = /^\s{5}/gmi

export async function generateReadme() {
  const README = []
  const issues: Array<Issues> = await fetchIssues()
  
  if (!issues) {
    console.log('Get the issue faild. Please check.')
    process.exit(1)
  }

  const result = refactoringData(issues)
  README.push(DefaultReadme)

  Object.keys(result).forEach(cateGory => {
    const cateGoryData = result[cateGory]
    const readme = []
    const name = cateGoryData[0].displayLabel

    cateGoryData.forEach(data => {
      readme.push(`
        - [${data.name}](${data.issueUrl})
      `)
    })
    
    const template = `
      <details>
        <summary>${name}<sup>${cateGoryData.length}</sup></summary>
        ${readme.join('')}
      </details>
    `

    README.push(template)
  })

  fs.mkdirSync('./dist')
  fs.writeFileSync('./dist/README.md', README.join('\n').replace(RemoveSpace, ''))
}