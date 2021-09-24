let options = {
    validate: {
        "邮箱": email,
        "手机号": phone,
        "十八位身份证号": personNumber18,
        "十五位身份证号": personNumber15,
        "URL": url,
        "车牌号": carNumber,
        "包含中文": includeZn,
        "QQ号": qqNumber,
        "密码强度": password,
        "用户名规则": userName,
        "十六进制颜色": color,
        "分位符":handlerNumber,
        "去除所有空格":replaceSpace,
        "去除首尾空格":replaceTopAndEndSpace 
    },
    validateFn: function (type, val) {
        return this.validate[type](val)
    }
}
function email(val) {
    let ePattern = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return ePattern.test(val)
}
function phone(val) {
    let ePattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    return ePattern.test(val)
}
function personNumber18(val) {
    let ePattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return ePattern.test(val)

}
function personNumber15(val) {
    let ePattern = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
    return ePattern.test(val)
}
function url(val) {
    let ePattern = /(http|https):\/\/([\w.]+\/?)\S*/;
    return ePattern.test(val)
}
function carNumber(val) {
    let ePattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    return ePattern.test(val)
}
function includeZn(val) {
    let ePattern = /[u4E00-u9FA5]/;
    return ePattern.test(val)
}
function qqNumber(val) {
    let ePattern = /^[1-9][0-9]{4,10}$/;
    return ePattern.test(val)
}
function password(val) {
    let ePattern = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?\(\)]).*$/;
    if (!ePattern.test(val)) {
        return "密码以小写字母开头，中间至少一个大写字母,至少一个数字,至少一个特殊符号!@#%$"
    }
    return true
}
function userName(val) {
    let ePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if (!ePattern.test(val)) {
        return '用户名,4到16位（可以包含字母，数字，下划线，减号）'
    }
    return true
}
function color(val) {
    let ePattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return ePattern.test(val)
}
function handlerNumber(val){
        if(val.type==2){
            return (val.value).toString().replace(/(\d)(?=(\d{2})+$)/g,"$1,")
        }
        if(val.type==3){
            return (val.value).toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,")
        }
        if(val.type==4){
            return (val.value).toString().replace(/(\d)(?=(\d{4})+$)/g,"$1,")
        }
}
function replaceSpace(val){
    return val.replace(/\s*/g,"");
}
function replaceTopAndEndSpace(val){
    return val.replace(/^\s+|\s+$/g,"")
}
module.exports = options