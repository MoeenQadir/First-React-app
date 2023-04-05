const path = require('path');

module.exports = {
    // ... your existing webpack configuration ...
    resolve: {
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'),
        },
    },
};
