define([], function() {
    return {
        init: function() {
            const $username = $('#username');
            const $password = $('#password');
            const $login = $('#submit'); //登录按钮

            $login.on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.161.128/dashboard/js%e9%a1%b9%e7%9b%ae%e8%80%83%e8%af%95/uniqlo_2010/php/login.php',
                    data: {
                        user: $username.val(),
                        pass: $password.val()
                    }
                }).done(function(data) {
                    if (!data) { //登录失败
                        alert('用户名或者密码有误!');
                        $password.val(''); //密码清空
                    } else { //登录成功
                        location.href = 'index.html'; //前端和前端进行页面的通信，相对路径即可，如果是前后端的通信一定是觉对路径。
                        //存储用户名，方便首页获取。
                        localStorage.setItem('loginname', $username.val());
                    }
                })
            });
        }
    }
})