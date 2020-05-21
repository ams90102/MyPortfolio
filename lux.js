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
            value = (scroll / (dh-ww)) *100;
        $('#container').css('left', - value * (dh/ww) + '%');

        //     value = (scroll/(dh-wh)) * 100;
        // $('#container').css('left', -value * 3 + '%')
        
        //     if (window.matchMedia("(max-width: 1024px)").matches){
        //         value = (scroll/ww) * 50;
        //     }
        //     else{
        //         value = (scroll/ww) * 60;
        //     }
        //     // value = (scroll/(dh-wh)) * 100;
        // $('#container').css('left', -value * 3 + '%')
    }
});