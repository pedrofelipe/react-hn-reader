import moment from 'moment'

import relativeTime from './relativeTime';

// Get a date object for the current time
let d = new Date();

// Set it to one month ago
d.setMonth(d.getMonth() - 1);

// Zero the hours
d.setHours(0, 0, 0);

// Zero the milliseconds
d.setMilliseconds(0);

// Get the time value in milliseconds and convert to seconds
let timestamp = d/1000|0;

it('returns a relative time', () => {
  expect(relativeTime(timestamp)).toEqual('a month ago');
});
