import moment from 'moment'

function relativeTime(timestamp) {
  return moment.unix(timestamp).fromNow()
}

export default relativeTime
