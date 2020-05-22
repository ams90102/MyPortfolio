$(window).scroll(function(){
    if (window.matchMedia("(max-width: 900px)").matches) {
        /* 窗口小于或等于 700 像素 */
        $('#container').css('left', 0 + '%')
    } else {
        /*窗口大于 700 像素 */
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
            ww = $(window).width();
        //     value = (scroll/(dh-wh)) * 100;
        // $('#container').css('left', -value * 3 + '%')
        value = scroll/(dh-wh) *100;
        // 4是頁數
        if(ww<1150){
            $('#container').css('left', - value *(dh/ww) + '%');
        }
        else{
            $('#container').css('left', - value * 3 + '%');
        }
    }
});