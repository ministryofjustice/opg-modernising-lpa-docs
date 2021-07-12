var dayjs = require("dayjs")

module.exports = (date) => {
  return `${dayjs(date).format("d MMMM YYYY")}`;
};
