import * as path from 'path'
import * as fs from 'fs'

function replacePlaceholderAndFillHtml(): void {
  const RegRule: RegExp = /<<<PLACEHOLDER>>>/
  const template = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html')).toString()
  const newData = template.replace(RegRule, generateRenderLogic())
  fs.writeFileSync(path.resolve(process.cwd(), 'dist/index.html'), newData)
}

function generateRenderLogic() {
  const Github_Issues = fs.readFileSync(path.resolve(process.cwd(), 'dist/snippets.json'), {
    encoding: 'utf8'
  })

  return `
    <script>window.Github_Issues = ${Github_Issues}</script>
    <script src="/snippets.js"></script>
  `
}
replacePlaceholderAndFillHtml()
