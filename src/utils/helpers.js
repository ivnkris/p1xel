module.exports = {
  formatIgdbUrl: (url) => {
    if (url) {
      return (url = url.replace("thumb", "1080p"));
    }
  },
};
