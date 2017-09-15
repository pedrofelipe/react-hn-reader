import moment from 'moment'

export const relativeTime = (timestamp) => {
  return moment.unix(timestamp).fromNow()
}
