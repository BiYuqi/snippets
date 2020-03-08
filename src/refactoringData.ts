import { simplifyIssue, Issues } from './simplifyIssue'

export function refactoringData(issues: Array<Issues>) {
  return simplifyIssue(issues).reduce((result, issue) => {
    const {id, name} = issue.labels
    issue['displayLabel'] = name
    result[id] ? result[id].push(issue) : result[id] = [issue]
    return result
  }, {})
}