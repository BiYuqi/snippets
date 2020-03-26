class Snippets {
  Github_Issues: object
  defautlLabel: string
  defautlId: string
  labelsWrapper: HTMLDivElement
  listsWrapper: HTMLDivElement
  constructor() {
    this.Github_Issues = window['Github_Issues'] || {}
    this.defautlLabel = '面试'
    this.defautlId = '1897007925'
    this.labelsWrapper = document.querySelector('.snippets-label')
    this.listsWrapper = document.querySelector('.snippets-list')
  }

  renderTab() {
    const labels = []
    Object.keys(this.Github_Issues).forEach(id => {
      const issue = this.Github_Issues[id]
      const displayLabel = issue[0].displayLabel
      const activeClassName = this.defautlLabel === displayLabel ? 'class="active"' : ''
      const articleAmount = issue.length > 99 ? '99+' : issue.length

      labels.push(
        `<span data-id="${id}" data-display="${displayLabel}" ${activeClassName}>${displayLabel}<i>${articleAmount}</i></span>`
      )
    })
    return labels
  }

  renderList(id) {
    const issueList = this.Github_Issues[id]
    const list = []
    issueList.forEach(({ issueUrl, name }) => {
      list.push(`<li><a href="${issueUrl}">${name}</a></li>`)
    })
    return list
  }

  switchTab() {
    this.labelsWrapper.addEventListener('click', (e: any) => {
      if (e.target.nodeName === 'SPAN') {
        const id = e.target.getAttribute('data-id')
        const label = e.target.getAttribute('data-display')
        this.defautlLabel = label
        this.defautlId = id
        this.render()
      }
    })
  }

  createTag(tag = 'div'): HTMLElement {
    return document.createElement(tag)
  }

  render() {
    this.labelsWrapper.innerHTML = this.renderTab().join('')
    this.listsWrapper.innerHTML = this.renderList(this.defautlId).join('')
    return this
  }
}
new Snippets().render().switchTab()
