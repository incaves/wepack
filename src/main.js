// webpack打包的入口
import { add } from './add/add'
console.log(add(3, 6))
import { SumArr } from './tool/tool'
console.log(SumArr([2, 3, 6, 9]))
import $ from 'jquery'
// 编写各行变色
$('#myUl>li:odd').css('color', 'red') // 偶数
$('#myUl>li:even').css('color', 'green') // 单数
import './css/style.css' // css
import './less/index.less' // less
import image from './assets/1.webp'
// 创建标签
let thimg = document.createElement('img')
thimg.src = image
// 插入到body中
document.body.appendChild(thimg)
// 字体图标
import './assets/fonts/iconfont.css'
let theIcon = document.createElement('i')
theIcon.classList = 'iconfont icon-qq'
document.body.appendChild(theIcon)
