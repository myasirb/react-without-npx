const path = require('path');

module.exports = {
    // Specify mode, by default it is production
    mode: "development",

    // Specify Entry point
    entry: "./index.js",

    // specify output file name and path
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "output")
    },

    // Creating dev server
    devServer:{
        // mention port at which to load
        port: "3000",

        // specify static directory
        static:["./public"],

        // open the browser after the server starts?
        open: true,

        // live reload option
        liveReload: true
    },

    // If multiple files share same name, this will help pick file with extension first in the list
    // So we do not have to mention extension of components or files while importing
    resolve:{
        extensions: ['.js', '.jsx', '.json']
    },

    // use babel to convert js modules into Es5
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            }
        ]
    }
}