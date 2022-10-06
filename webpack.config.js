const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js', // 入口
  output: {
    // 出口路径文件夹的名字
    // __dirname 可以获取到大文件夹的名称 = webpack的基本使用
    // webpack基本使用/dist
    path: path.resolve(__dirname, 'dist'),
    // 文件夹名
    filename: 'bundle.js', // 打包的最终文件
  },
  // html自动打包到dist文件夹下
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  module: {
    // 规则
    // css
    rules: [
      {
        test: /\.css$/i, // 匹配.css结尾的文件
        use: ['style-loader', 'css-loader'], // 使用配置(顺序是固定的)
        // css-loader:webpack解析css文件-把css文件一起打包到js中
        // style-loader:css代码插入到DOM上(style标签)
      },
      // less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 图片
      {
        test: /\.(gif|png|jpg|jpeg|webp)$/,
        type: 'asset',
      },
      // 字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource', // 所有的字体图标都,都输出到dist文件夹下
        // 自定义文件名
        generator: {
          filename: 'fonts/[name].[hash:6][ext]',
        },
      },
    ],
  },
}
