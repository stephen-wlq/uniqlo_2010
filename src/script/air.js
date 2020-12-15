! function($) {
    const $air = $('.air');

    $(window).on("scroll", function() {
        var $scrolltop = $(window).scrollTop();
        if ($scrolltop >= 300) {
            $air.show();
        } else {
            $air.hide();
        }
    })
    $air.on('click', function() {
        $("html").animate({
            scrollTop: 0
        });
    });
}(jQuery);