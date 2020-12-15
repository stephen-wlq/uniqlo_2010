var username = document.querySelector('#username');
var password = document.querySelector('.password');
var Emily = document.querySelector('.Emily');
var telphone = document.querySelector('.telphone');
var span = document.querySelectorAll('#registry span');
var registry = document.querySelector('#registry');
var userflag = true;
var telpflag = true;
var pssflag = true;
var Emflag = true;

username.onfocus = function() {
    span[0].innerHTML = "中英文可，最长14个英文或汉字";
    span[0].style.color = "#ccc";
}
username.onblur = function() {
    if (this.value !== '') {
        var strleng = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length;
        if (strleng > 0 && strleng <= 14) {
            var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
            if (reg.test(this.value)) {
                span[0].innerHTML = '√';
                span[0].style.color = 'green';
                userflag = true;

            } else {
                span[0].innerHTML = '用户名格式有误';
                span[0].style.color = 'red';
                userflag = false;
            }

        } else {
            span[0].innerHTML = '用户名长度有误';
            span[0].style.color = 'red';
            userflag = false;
        }

    } else {
        span[0].innerHTML = '用户名不能为空';
        span[0].style.color = 'red';
        userflag = false;
    }
};

password.onfocus = function() {
    span[1].innerHTML = '请输入密码 长度为6-14个字符';
    span[1].style.color = '#ccc';
}
password.oninput = function() {

    if (this.value.length >= 6 && this.value.length <= 14) {
        var regnum = /\d+/;
        var regxzm = /[a-z]+/;
        var regdzm = /[A-Z]+/;
        var regzf = /[\W_]+/;
        var nnum = 0;
        if (regnum.test(this.value)) {
            nnum++;
        }
        if (regxzm.test(this.value)) {
            nnum++;
        }
        if (regdzm.test(this.value)) {
            nnum++;
        }
        if (regzf.test(this.value)) {
            nnum++;
        }

        switch (nnum) {
            case 1:
                span[1].innerHTML = '弱';
                span[1].style.color = 'red';
                pssflag = false;
                break;
            case 2:
            case 3:
                span[1].innerHTML = '中';
                span[1].style.color = 'blue';
                pssflag = true;
                break;
            case 4:
                span[1].innerHTML = '强';
                span[1].style.color = 'green';
                pssflag = true;
                break;

        }


    } else {
        span[1].innerHTML = '密码长度不行';
        span[1].style.color = 'red';
        pssflag = false;
    }

}
password.onblur = function() {
    if (this.value !== '') {
        if (pssflag = ture) {
            span[1].innerHTML = '√';
            span[1].style.color = 'green';
            pssflag = true;

        }

    } else {
        span[1].innerHTML = '密码不能为空';
        span[1].style.color = 'red';
        pssflag = false;
    }
}
Emily.onfocus = function() {
    span[2].innerHTML = '请填写正确的电子邮箱';
    span[2].style.color = '#ccc';
}
Emily.onblur = function() {
    if (this.value !== '') {
        var  reg1  =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (reg1.test(this.value)) {
            span[2].innerHTML = '√';
            span[2].style.color = 'green';
            Emflag = true;
        } else {
            span[2].innerHTML = '电子邮箱格式有误';
            span[2].style.color = 'red';
            Emflag = false;
        }

    } else {
        span[2].innerHTML = '电子邮箱不能为空';
        span[2].style.color = 'red';
        Emflag = false;

    }
}
telphone.onfocus = function() {
    span[3].innerHTML = '请输入正确的11位手机号码';
    span[3].style.color = '#ccc';
}
telphone.onblur = function() {
    if (this.value !== '') {
        var reg = /^1[3568]\d{9}$/;
        if (reg.test(this.value)) {
            span[3].innerHTML = '√';
            span[3].style.color = 'green';
            telpflag = true;


        } else {
            span[3].innerHTML = '手机号码格式有误';
            span[3].style.color = 'red';
            telpflag = false;
        }

    } else {
        span[3].innerHTML = '手机号码不能为空';
        span[3].style.color = 'red';
        telpflag = false;


    }
}
registry.onsubmit = function() {
    if (username.value === '') {
        span[0].innerHTML = '用户名不能为空';
        span[0].style.color = 'red';
        userflag = false;
    }
    if (telphone.value === '') {
        span[3].innerHTML = '手机号码不能为空';
        span[3].style.color = 'red';
        telpflag = false;
    }
    if (password.value === '') {
        span[1].innerHTML = '密码不能为空';
        span[1].style.color = 'red';
        pssflag = false;
    }
    if (Emily.value === '') {
        span[2].innerHTML = '电子邮箱不能为空';
        span[2].style.color = 'red';
        Emflag = false;
    }
    if (!userflag || !telpflag || !pssflag || !Emflag) {
        return false;
    }

}