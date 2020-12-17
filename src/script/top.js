const $box = $('.box');
$(window).on('scroll', () => {
    let $scrolltop = $(window).scrollTop(); //获取滚动条top值
    if ($scrolltop >= 100) {
        $box.stop(true).animate({
            top: 0
        })
    } else {
        $box.stop(true).animate({
            top: -60
        })

    }
});