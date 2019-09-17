const flatten = (arr, max = 1) => 
  arr.reduce((initial, curr, index) => 
  Array.isArray(curr) ? initial.concat(flatten(curr)) : initial.concat(curr), [])

const parseQuery = (query) => {
  // need to double check this regular
  const regexp = /(\w+)=([^&]+)/g
  const result = {}
  let match

  while(match = regexp.exec(query)) {
    let key = match[1], value = match[2].replace(/\n/g, '')
    result[key] ? result[key] = flatten([result[key], value]) : result[key] = value
  }

  return result
}
const query = `
https://www.baidu.com/s?ie=utf8&f=8&f=90&rsv_bp=1&rsv_idx=1&rsv_bp=1&tn=baidu&wd=%E6%B0%B4%E7%94%B5%E8%B4%B9&rsv_pq=c7797024000434a8&rsv_t=b786FJnGwOOxPk7E7gsn1VbYHpmSP93UpP1470GL9ajYJkd09MOyBzSTsVk&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=4&rsv_sug7=101&rsv_bp=234&rsv_sug2=0&inputT=1760&rsv_sug4=2010&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcm9tX3VzZXIiOiJCIiwidGFyZ2V0X3VzZXIiOiJBIn0.rSWamyAYwuHCo7IFAgd1oRpSP7nzL7BF5t7ItqpKViM
`.split('?')[1]

console.log(parseQuery(query))

// { ie: 'utf8',
//   f: [ '8', '90' ],
//   rsv_bp: [ '1', '1', '234' ],
//   rsv_idx: '1',
//   tn: 'baidu',
//   rsv_pq: 'c7797024000434a8',
//   rsv_t: 'b786FJnGwOOxPk7E7gsn1VbYHpmSP93UpP1470GL9ajYJkd09MOyBzSTsVk',
//   rqlang: 'cn',
//   rsv_enter: '1',
//   rsv_dl: 'tb',
//   rsv_sug3: '5',
//   rsv_sug1: '4',
//   rsv_sug7: '101',
//   rsv_sug2: '0',
//   inputT: '1760',
//   rsv_sug4: '2010' 
// }