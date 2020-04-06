import Moment from 'moment';

export const TimeAgo = (date, showMaxDays = true) => {
  if (!date) {
    return '';
  }

  let tDate;
  if (typeof date === 'string' || typeof date === 'number') {
    tDate = new Date(date);
  }
  else if (typeof date.getTime === 'function') {
    tDate = date;
  }

  if (!tDate) {
    return '';
  }

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const today = new Date();
  const elapsed = today.getTime() - tDate.getTime();

  if (elapsed < msPerMinute) {
    return 'Less than a minute';
  } else if (elapsed < msPerHour) {
    const mins = Math.round(elapsed / msPerMinute);
    return `${mins} minute${mins > 1 ? 's' : ''} ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (showMaxDays) {
    return formatDate(tDate);
  } else if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (elapsed > msPerYear) {
    const years = Math.round(elapsed / msPerYear);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

export const DATE_FORMAT = 'd MMM YYYY';

const formatDate = (date,  format = DATE_FORMAT, timezone , locale) => {
  if (!date) {
    return '';
  }
  Moment.locale(locale);
  return Moment(date).format(DATE_FORMAT)
};