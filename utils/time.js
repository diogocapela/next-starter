export default {
  // Returns a string with current date formatted as YYYY/MM/DD HH:MM:SS
  getFormattedTimestamp: () => {
    const dt = new Date();
    const year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    let day = dt.getDate();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  },
};
