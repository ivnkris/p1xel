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
};
