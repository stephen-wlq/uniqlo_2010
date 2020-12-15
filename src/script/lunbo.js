const banner = document.querySelector('.lunbo-1');
var pic = document.querySelectorAll('.lunbo-img li');
var L = document.querySelector('.lunbo-left');
var R = document.querySelector('.lunbo-right');
var num = 0;
var timer = null;
R.onclick = function() {
    num++;
    if (num > pic.length - 1) {
        num = 0;
    }
    lunbo();
};
L.onclick = function() {
    num--;
    if (num < 0) {
        num = pic.length - 1;
    }
    lunbo();
};

function lunbo() {
    for (var j = 0; j < pic.length; j++) {
        pic[j].style.opacity = 0;
    }
    pic[num].style.opacity = 1;
}

timer = setInterval(function() {
    R.onclick();
}, 3000);


banner.onmouseover = function() {
    clearInterval(timer);
};

banner.onmouseout = function() {
    timer = setInterval(function() {
        R.onclick();
    }, 3000);
};