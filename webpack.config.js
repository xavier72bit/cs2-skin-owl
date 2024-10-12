const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const host = process.env.HOST || "localhost";

module.exports = function (env, argv) {
    const mode = argv.mode || "development";
    return {
        mode: mode,
        entry: "./src/main.js",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    /* DEV NOTE
                    在进行css文件的打包时, 按照use Array中的顺序传递文件进行打包:
                    1. style-loader: 将JS字符串生成为style节点, 主要是支持在js中导入css的行为
                    2. css-loader: 将CSS转化成CommonJS模块
                    3. postcss-loader: 进一步处理CSS, 比如添加浏览器前缀, 压缩CSS等
                    4. sass-loader: 将Sass编译成CSS
                    */
                    use: [
                      "style-loader",
                      "css-loader",
                      "postcss-loader",
                      "sass-loader",
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, "public"),
            },
            compress: true,
            hot: true,
            host,
            port: 3000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve(__dirname, "public/index.html"),
            }),
        ],
    };
};