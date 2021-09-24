### front-end-common-regular
1. 安装
```
npm i  front-end-common-regular -S
```
2. 开始使用
```
const validate=require('front-end-common-regular')
//or
import validate from 'front-end-common-regular'
//import {validateFn} from 'front-end-common-regular'
//example
const a=validate.validateFn('车牌号','粤B39006')
//const a=validateFn('车牌号','粤B39006')
console.log(a)
//输出true
```
* validateFn(type,value)

| type | value |  返回值|
| :------| ------: | :------: |
| 邮箱 | string | boolean |
| 手机号 | number/string | boolean |
| 十八位身份证号 | string | boolean |
| 十五位身份证号 | string | boolean |
| URL | string | boolean |
| 包含中文 | string | boolean |
| QQ号 | number/string | boolean |
| 密码强度 | string | boolean |
| 用户名规则 | string | boolean |
| 十六进制颜色 | string | boolean |
| 分位符 | object | boolean |
| 去除所有空格 | string | string |
| 去除首尾空格 | string | string |
>只有validateFn(type,value)的传参type是分位符的时候，value是object且必须要包含两个键值
```
//example 分位符
let a=validate.validateFn('分位符',{value:10000,type:2})
console.log(a) //百分位1,00,00
a=validate.validateFn('分位符',{value:10000,type:3})
console.log(a) //千分位10,000
a=validate.validateFn('分位符',{value:10000,type:4})
console.log(a) //万分位 1,0000
```

