export default {
  // Returns a string with current date formatted as YYYY/MM/DD HH:MM:SS
  getFormattedTimestamp: () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  },
};
