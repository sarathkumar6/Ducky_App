// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
	verbose: true,
	moduleFileExtensions: [ ...defaults.moduleFileExtensions, 'test.js' ]
};
