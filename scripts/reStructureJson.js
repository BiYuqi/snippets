const exactRealLink = /via Instapaper\s*(.*)/gmi

const exactUrl = (content, html_url) => {
  const match = content.match(exactRealLink)
  if (match) {
    return match[1]
  }
  return html_url
}

const dataReduction = (issues) => {
  if (!issues || issues.length <= 0) {
    console.log('dataReduction error')
    process.exit(1)
  }

  return issues.map(({ title, html_url, labels, body }) => {
    // skip unmark label link
    if (labels.length > 0) {
      return {
        name: title,
        issueUrl: html_url,
        labels: labels[0],
        pageUrl: exactUrl(body, html_url)
      }
    }
  })
}

 module.exports = (issues) => {
  return dataReduction(issues).reduce((result, current) => {
    const {id, name} = current.labels
    current.displayLabel = name
    result[id] ? result[id].push(current) : result[id] = [current]
    return result
  }, {})

}