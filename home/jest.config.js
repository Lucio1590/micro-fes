const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  ...defaults,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
};

module.exports = config;