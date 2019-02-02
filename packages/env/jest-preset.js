// https://github.com/facebook/jest/tree/master/examples/babel-7
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  setupFiles: [require.resolve("./jest.init")],
  transform: {
    "^.+\\.js$": require.resolve("./jest.transform")
  }
};
