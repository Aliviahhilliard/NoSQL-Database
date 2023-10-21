const userData = 




const addZero = (num) => (num < 10 ? `0${num}` : num);

// Format a timestamp as 'YYYY-MM-DD HH:MM:SS'
const dateFormat = (timestamp) => {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = addZero(dateObj.getMonth() + 1);
  const day = addZero(dateObj.getDate());
  const hours = addZero(dateObj.getHours());
  const minutes = addZero(dateObj.getMinutes());
  const seconds = addZero(dateObj.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = dateFormat;
