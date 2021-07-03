const MyVuePlugin = {}

MyVuePlugin.install = function (Vue, options) {
    // 添加两个全局指令
    //添加两个全局指令
    Vue.directive('upper-text', function (el, bingding) {
        el.innerText = bingding.value.toUpperCase()
    })
    Vue.directive('lower-text', function (el, bingding) {
        el.innerText = bingding.value.toLowerCase()
    })

    // 给Vue自身添加属性
    Vue.projectName = "你好"
    Vue.MyVersion = '1.0'
    Vue.showInfo = function () {
        console.log("展示信息");
    }

    //给Vue原型上添加数据，供vm使用
    Vue.prototype.$random = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}