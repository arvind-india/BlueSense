const autoprefixer = require('autoprefixer');

module.exports = ctx => ({
  plugins: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ]
});
