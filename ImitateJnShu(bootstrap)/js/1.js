/**
 * Created by lenovo on 2016/5/19.
 */
window.onload = function () {
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oImg = document.getElementById('image');
    var oF1 = document.getElementById('f1');
    var oF2 = document.getElementById('f2');
    var oF3 = document.getElementById('f3');
    var oF4 = document.getElementById('f4');
    var arrUrl = ["img/banner-1.jpg", "img/banner-2.jpg", "img/banner-3.jpg", "img/banner-4.jpg"];
    var num = 0;
    oImg.src = arrUrl[num];
    oPrev.onclick = function () {
        num--;
        if (num == -1) {
            num = 3;
        }
        oImg.src = arrUrl[num];
    };
    oNext.onclick = function () {
        num++;
        if (num == 4) {
            num = 0;
        }
        oImg.src = arrUrl[num];
    };
    oF1.onclick = function () {
        oImg.src = arrUrl[0];
    };
    oF2.onclick = function () {
        oImg.src = arrUrl[1];
    };
    oF3.onclick = function () {
        oImg.src = arrUrl[2];
    };
    oF4.onclick = function () {
        oImg.src = arrUrl[3];
    };
};