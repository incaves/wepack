### 
```javascript
初始化  
yarn init 
```
###
###
```javascript
安装依赖  
yarn add webpack webpack-cli
```
###
###
```javascript
需要打包的文件必须在src文件夹下  
在package.json中配置了打包命令
yarn build 执行打包  
dist文件夹是打包后的文件
```
###
###
```javascript
后期代码新增了,如何打包呢?  
直接执行 yarn build 打包命令即可会重新打包
```
###
###
```javascript
webpack打包的默认入口是src文件夹下的index.js  
webpack打包的默认出口是dist文件夹(main.js)
是可以修改的  
新建webpack.config.js
entry 入口(以修改为main.js)  
output 出口(文件名改为bundle.js)
```
###
###
```javascript
执行yarn build发生了什么呢？  
先找配置文件的打包命令,找入口文件,构建关系依赖图,构建完成,开始压缩,开始打包,输出到指定位置文件上,完成打包
```
###
###
```javascript
让打包的文件在网页上运行
yarn add jquery  
在public/index.html 准备了标签
入口文件引入jquery 
在入口文件编写jquery程序  
复制一份public/index.html到dist目录下
<script src="./bundle.js"></script> 引入打包后的文件
直接打开即可
```
###
###
```javascript
刚刚是手动引入  
自动引入到dist文件夹下需要进行配置
需要下载一个插件 yarn add html-webpack-plugin -D
在webpack.config.js下配置
// 引入
const HtmlWebpackPlugin = require('html-webpack-plugin'
// 配置
plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 路径
    }),
],
yarn build 进行打包
```
###   
```javascript
打包CSS文件
在src文件夹下创建css文件  
引入到入口文件,执行打包命令  
发现会有报错
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. 
See https://webpack.js.org/concepts#loaders
webpack默认只能处理js类型文件,不能打包css文件  
需要安装插件
css-loader 让webpack能处理css类型文件  
style-loader 把css插入到DOM中  
yarn add css-loader style-loader -D
在webpack.config.js下配置
  module: {
    // 规则
    rules: [
      {
        test: /\.css$/i, // 匹配.css结尾的文件
        use: ['style-loader', 'css-loader'], // 使用配置(顺序是固定的,从右向左)
        // css-loader:webpack解析css文件-把css文件一起打包到js中
        // style-loader:css代码插入到DOM上(style标签)
      },
    ],
  },
```
###
###
```javascript
webpack处理less文件
创建less文件,并且在入口(main.js)中引入
下载插件yarn add less-loader -D
在webpack.config.js中配置
rules规则  
{
   test: /\.less$/i,
   use: ['style-loader', 'css-loader', 'less-loader'], // 使用配置(顺序是固定的,从右向左)
},
发生了报错  
yarn add less --save-dev 安装了less解决  
```
###
###
```javascript
webpack处理图片
less文件中使用了一份
入口文件使用了一份(通过创建标签的形式)  
如果没有配置会报错(适用与webpack5版本)
在webpack.config.js下的rules规则下配置
{
    test: /\.(gif|png|jpg|jpeg|webp)$/,
    type: 'asset', // 固定写法(注意没有s)
}, 
如果设置的是asset模式
会以8KB大小区分图片文件
小于8KB的,把图片文件转base64,打包进js中
大于8KB的,直接把图片文件输出到dist文件夹下(此时的文件中就存在大于8KB)
```
###
###
```javascript
图片转base64打包进js的优点与缺点  
优点是减少浏览器发送的请求次数,读取图片速度快
缺点是如果图片过大,转base64占空间会多30%左右
```
###
###
```javascript
webpack处理字体图标
首先再入口文件下引入字体图标
在webpack.config.js下的rules规则下配置
{
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    type: 'asset/resource', // 所有的字体图标都,都输出到dist文件夹下
    // 自定义文件名
    generator: {
      filename: 'fonts/[name].[hash:6][ext]',
    }
},
iconfont.hash(随机6位).ext(后缀)
hash:6 = 随机生成
ext会替换成 .eot/.woff的后缀名
```
###