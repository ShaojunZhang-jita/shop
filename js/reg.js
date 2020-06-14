window.onload = function() {
    var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; // 手机号码的正则表达式
    // 省略 后期补充 注意函数一样且重复需要封装函数
    var regcode = /^[a-zA-Z]\w{5,17}$/; // 手机密码的正则表达式
    var tel = this.document.querySelector('#tel'); // 获取表单元素
    var code = this.document.querySelector('.inp'); // 获取密码表单
    // 当表单失去焦点（注册失焦函数）
    tel.onblur = function() {
        if (regtel.test(this.value)) {
            // 如果输入的符合手机号码 就将input的兄弟即span修改样式即可。
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确   ';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>手机号码格式不正确， 请从新输入 ';
        }
    }
}