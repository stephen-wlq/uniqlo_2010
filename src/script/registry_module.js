define([], function() {
    return {
        init: function() {
            //1.表单验证。
            let $form = $('#registry'); //form表单。
            let $username = $('[name=username]'); //用户名。
            let $email = $('[name=email]'); //邮箱
            let $password = $('[name=password]'); //密码
            let $tel = $('[name=tel]'); //手机号码
            let $span = $('#registry span'); //4个span
            let $input = $('#input');
            let $sub = $('.reg-sub');


            // 定义检测标记
            $userflag = true;
            $passflag = true;
            $emailflag = true;
            $telflag = true;
            $inflag = true;

            //用户名检测
            $username.on('focus', function() {
                $span.eq(0).html('中英文均可，最长14个英文或7个汉字').css('color', '#989A98');
            });

            $username.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $strLen = $value.replace(/[\u4e00-\u9fa5]/g, '**').length; //中文当做两个字符
                    if ($strLen > 0 && $strLen <= 14) {
                        let $reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                        if ($reg.test($value)) {
                            $span.eq(0).html('√').css('color', 'green');
                            $userflag = true;

                            //用户名格式没有问题，将用户名传给后端。
                            $.ajax({
                                type: 'post',
                                url: 'http://10.31.161.128/dashboard/js%E9%A1%B9%E7%9B%AE%E8%80%83%E8%AF%95/uniqlo_2010/php/reg.php',
                                data: {
                                    username: $username.val()
                                }
                            }).done(function(data) {
                                if (!data) { //不存在
                                    $span.eq(0).html('√').css('color', 'green');
                                } else { //存在
                                    $span.eq(0).html('该用户名已存在').css('color', 'red');
                                }
                            });


                        } else {
                            $span.eq(0).html('用户名格式有误').css('color', 'red');
                            $userflag = false;
                        }
                    } else {
                        $span.eq(0).html('用户名长度有误').css('color', 'red');
                        $userflag = false;
                    }
                } else {
                    $span.eq(0).html('用户名不能为空').css('color', 'red');
                }
            });
            // 密码
            $password.on('focus', function() {
                $span.eq(1).html('请输入密码 长度为6-14个字符').css('color', '#989A98');
            });
            $password.on('input', function() {
                let $value = $(this).val();
                if ($value.length >= 6 && $value.length <= 14) {
                    let $regnum = /\d+/;
                    let $regxzm = /[a-z]+/;
                    let $regdzm = /[A-Z]+/;
                    let $regzf = /[\W_]+/;
                    let $nnum = 0;
                    if ($regnum.test($value)) {
                        $nnum++;
                    }
                    if ($regxzm.test($value)) {
                        $nnum++;
                    }
                    if ($regdzm.test($value)) {
                        $nnum++;
                    }
                    if ($regzf.test($value)) {
                        $nnum++;
                    }
                    switch ($nnum) {
                        case 1:
                            $span.eq(1).html('弱').css('color', 'red');
                            $passflag = false;
                            break;
                        case 2:
                        case 3:
                            $span.eq(1).html('中').css('color', 'blue');
                            $passflag = true;
                            break;
                        case 4:
                            $span.eq(1).html('强').css('color', 'green');
                            $passflag = true;
                    }
                } else {
                    $span.eq(1).html('密码长度不行').css('color', 'red');
                    $passflag = true;
                }

            });
            $password.on('blur', function() {
                let $value = $(this).val();
                if ($value !== '') {
                    if ($passflag = true) {
                        $span.eq(1).html('√').css('color', 'green');
                        $passflag = true;
                    }
                } else {
                    $span.eq(1).html('密码不能为空').css('color', 'red');
                    $passflag = false;
                }
            });
            $email.on('focus', function() {
                $span.eq(2).html('请输入电子邮箱').css('color', '#989A98');
            });
            $email.on('blur', function() {
                let $value = $(this).val();
                if ($value !== '') {
                    let $reg1 =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                    if ($reg1.test($value)) {
                        $span.eq(2).html('√').css('color', 'green');
                        $emailflag = true;
                    } else {
                        $span.eq(2).html('电子邮箱格式有误').css('color', 'red');
                        $emailflag = false;
                    }
                } else {
                    $span.eq(2).html('电子邮箱不能为空').css('color', 'red');
                    $emailflag = false;
                }
            })

            //手机
            $tel.on('focus', function() {
                $span.eq(3).html('请输入11位正确的手机号码').css('color', '#989A98');
            });

            $tel.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^1[3|5|8]\d{9}$/;
                    if ($reg.test($value)) {
                        $span.eq(3).html('√').css('color', 'green');
                        $telflag = true;
                    } else {
                        $span.eq(3).html('手机号码格式有误').css('color', 'red');
                        $telflag = false;
                    }
                } else {
                    $span.eq(3).html('手机号码不能为空').css('color', 'red');
                    $telflag = false;
                }
            });
            if (!($input.is(":checked"))) {
                $input.on('click', function() {
                    $span.eq(4).html(' ').css('color', 'red');
                    $inflag = true;
                })
            };

            //阻止表单的直接跳转。
            $form.on('submit', function() {
                if ($username.val() === '') {
                    $span.eq(0).html('用户名不能为空').css('color', 'red');
                    $userflag = false;
                }
                if ($tel.val() === '') {
                    $span.eq(3).html('手机号码不能为空').css('color', 'red');
                    $telflag = false;
                }
                if ($password.val() === '') {
                    $span.eq(1).html('密码不能为空').css('color', 'red');
                    $passflag = false;
                }
                if ($email.val() === '') {
                    $span.eq(2).html('邮箱不能为空').css('color', 'red');
                    $emailflag = false;
                }
                if (!($input.is(":checked"))) {
                    $span.eq(4).html('请勾选我已阅读并同意').css('color', 'red');
                    $inflag = false;

                }

                if (!$userflag || !$telflag || !$passflag || !$emailflag || !$inflag) {
                    return false;
                }
            });
            // 判断复选框是否选中
            if (!($input.is(":checked"))) {
                $input.on('click', function() {
                    $span.eq(4).html(' ').css('color', 'red');
                    $inflag = true;
                })
            };

        }
    }
});