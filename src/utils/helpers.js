const moment = require("moment");

module.exports = {
  formatIgdbUrl: (url) => {
    if (url) {
      return (url = url.replace("thumb", "1080p"));
    }
  },
  formatRatings: (rating) => {
    if (rating) {
      return rating.toFixed(2);
    }
  },
  formattedDate: (date) => {
    if (date) {
      date = date * 1000;
      return moment(date).format("DD/MM/YYYY");
    }
  },
};
