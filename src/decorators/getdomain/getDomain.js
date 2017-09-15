import parseDomain from 'parse-domain'

function getDomain(url) {
  let d = parseDomain(url)
  return `${d.domain}.${d.tld}`
}

export default getDomain
