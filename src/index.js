import x from'./x.js'

console.log(x)
import './style.less'
import './z.styl'

import png from './1.jpg'
const app = document.getElementById('app')
app.innerHTML = `
<img src=${png}>
`
//开始写懒加载了~
const button = 
document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy.js')
    promise.then((f)=>{
        const fn = f.default
        fn()
    },()=>{console.log('模块加载错误')})
}
app.appendChild(button)