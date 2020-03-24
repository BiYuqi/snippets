interface IssueContent {
  content: string
  htmlUrl: string
}

interface Labels {
  id: string
  name: string
  [propName: string]: any
}

export interface Issues {
  title: string
  html_url: string
  labels?: Labels[]
  body: string
  [propName: string]: any
}

const extractLinkReg: RegExp = /via Instapaper\s*(.*)/gim
const defaultLabel: Labels = {
  id: '2020-03-08',
  name: '未分类'
}

function extractUrl(issueContent: IssueContent) {
  const match = issueContent.content.match(extractLinkReg)
  if (match) {
    return match[1]
  }
  return issueContent.htmlUrl
}

export function simplifyIssue(issues: Array<Issues>) {
  if (!issues || issues.length <= 0) {
    console.log('SimplifyIssue got an error. Could not find any data!!')
    process.exit(1)
  }

  return issues.map(({ title, html_url, labels, body }) => {
    const baseIssue = {
      name: title,
      issueUrl: html_url,
      pageUrl: extractUrl({
        content: body,
        htmlUrl: html_url
      })
    }

    return labels.length > 0
      ? {
          ...baseIssue,
          labels: labels[0]
        }
      : {
          ...baseIssue,
          labels: defaultLabel
        }
  })
}
