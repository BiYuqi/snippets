class PageVisible {
  constructor() {
    this.visible = false
    this.hidden = 'hidden'
    this.visibilityChange = 'visibilitychange'
    this.visibilitySupported()
    this.onVisible()
  }

  visibilitySupported() {
    if (typeof document.hidden !== 'undefined') {    // Opera 12.10 and Firefox 18 and later support 
      this.hidden = 'hidden'
      this.visibilityChange = 'visibilitychange'
    } else if (typeof document.msHidden !== 'undefined') {
      this.hidden = 'msHidden'
      this.visibilityChange = 'msvisibilitychange'
    } else if (typeof document.webkitHidden !== 'undefined') {
      this.hidden = 'webkitHidden'
      this.visibilityChange = 'webkitvisibilitychange'
    }

    if (typeof document.addEventListener === 'undefined' || typeof document[this.hidden] === 'undefined') {
      this.visible = false
    }
    this.visible = true
  }

  onVisible(callback) {
    document.addEventListener(this.visibilityChange, () => {
      if (document[this.hidden]) {
        callback && callback('hidden')
      } else {
        callback && callback('visible')
      }
    }, false)
  }
}

new PageVisible().onVisible((state) => {
  switch (state) {
    case 'hidden':
      document.title = '我被隐藏了'
      break;
    case 'visible':
      document.title = '哈哈，请继续浏览'
    break
    default:
      break;
  }
})