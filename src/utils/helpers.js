// importing dependencies
const moment = require("moment");

module.exports = {
  // requires picture resolution to be high-def
  formatIgdbUrl: (url) => {
    if (url) {
      return (url = url.replace("thumb", "1080p"));
    }
  },
  // formats ratings
  formatRatings: (rating) => {
    if (rating) {
      return rating.toFixed(2);
    }
  },
  // formats date
  formattedDate: (date) => {
    if (date) {
      date = date * 1000;
      return moment(date).format("DD/MM/YYYY");
    }
  },
  // checks if achievements is obtained
  checkIfAchievement: (achievement) => {
    if (achievement === 1) {
      return true;
    } else if (achievement === 0) {
      return false;
    }
  },
  // replacing all underscore with spaces
  changeUnderscoreToSpace: (achievement) => {
    if (achievement) {
      return achievement.split("_").join(" ");
    }
  },

  trimSummary: (summary) => {
    if (summary) {
      let newSummary = summary.slice(0, 512);
      newSummary = newSummary + "[...]";
      return newSummary;
    }
  },

  checkIfData: (data) => {
    if (!data) {
      return (data = false);
    }
  },
};
