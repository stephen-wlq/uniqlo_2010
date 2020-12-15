! function($) {
    const $username = $('#username');
    const $span = $('span');

    $username.on('blur', function() {
        $.ajax({
            type: 'post',
            url: 'http://10.31.161.128/dashboard/js%e9%a1%b9%e7%9b%ae%e8%80%83%e8%af%95/uniqlo_2010/php/reg.php',
            data: {
                xingming: $username.val()
            }
        }).done(function(data) { //data就是后端返回的结果
            if (!data) { //不存在
                $span.css('color', 'green').html('√');
            } else { //存在
                $span.css('color', 'red').html('该用户名已存在');
            }
        });
    });

}(jQuery);