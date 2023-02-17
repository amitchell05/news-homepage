const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "main.js",
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./docs"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
}