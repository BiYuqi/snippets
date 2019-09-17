function camelize (str) {
  return str.replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : ''
  })
}

console.log('result:', camelize('__--hello--_--world--'))