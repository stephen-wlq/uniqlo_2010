! function() {
    var banner = document.querySelector('.banner');
    var picList = document.querySelectorAll('.banner ul li'); //8张大图
    var btnList = document.querySelectorAll('.banner ol li'); //8张大图
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var num = 0;
    var timer = null;

    for (var i = 0; i < btnList.length; i++) {
        btnList[i].index = i;
        btnList[i].onmouseover = function() {
            num = this.index;
            lunbo()
        };
    }


    right.onclick = function() {
        num++;
        if (num > btnList.length - 1) {
            num = 0;
        }
        lunbo();
    };


    left.onclick = function() {
        num--;
        if (num < 0) {
            num = btnList.length - 1;
        }
        lunbo();
    };

    function lunbo() {
        for (var j = 0; j < btnList.length; j++) {
            btnList[j].className = ''; //清空所有小圆圈上面的类名。
            picList[j].style.opacity = 0; //隐藏所有的图片
        }
        btnList[num].className = 'active';
        picList[num].style.opacity = 1;
    }
    timer = setInterval(function() {
        right.onclick(); //每隔3s自动触发right事件。
    }, 3000);
    banner.onmouseover = function() {
        clearInterval(timer);
    };
    banner.onmouseout = function() {
        timer = setInterval(function() {
            right.onclick(); //每隔3s自动触发right事件。
        }, 3000);
    };
}();