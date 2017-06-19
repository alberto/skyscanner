// Custom Jest transform implementation that wraps babel-jest and injects our
// babel presets, so we don't have to use .babelrc.

var babelConfig = require('../babel.dev.js');
module.exports = require('babel-jest').createTransformer(babelConfig);
