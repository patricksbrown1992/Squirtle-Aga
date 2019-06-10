const path = require('path');
module.exports = {
    context: __dirname,
    entry: './squirtle-aga.js',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
};