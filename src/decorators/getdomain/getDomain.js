import parseDomain from 'parse-domain'

export const getDomain = (url) => {
  const d = parseDomain(url)
  return `${d.domain}.${d.tld}`
}
