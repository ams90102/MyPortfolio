$(window).scroll(function(){
    if (window.matchMedia("(max-width: 1000px)").matches) {
        /* 窗口小于或等于 1000 像素 */
        $('#container').css('left', 0 + '%')
    } else {
        /*窗口大于 1000 像素 */
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
            ww = $(window).width();
            value = (scroll/(dh-wh)) * 100;
        $('#container').css('left', -value * 4 + '%')
        // value = scroll/(dh-wh) *100;
        // // 4是頁數
        // if(ww<1150){
        //     $('#container').css('left', - value *(dh/ww) + '%');
        // }
        // else{
        //     $('#container').css('left', - value * 3 + '%');
        // }
    }
});

// $(function () {
//     resize_tab();
// });

// $(window).resize(function () {
//     resize_tab();
// }).resize();

// function resize_tab() {

//     var viewportWidth = $(window).innerWidth();
//     var viewportHeight = $(window).innerHeight();

//     var width = $('#bg-img').width();
//     var height = $('#bg-img').height();


//     if ((viewportWidth / viewportHeight) > (width / height)) {

//         $('#bg-img').css({
//             'width': '100%',
//             'height': 'auto',
//             'margin-left': 0 - width / 2,
//             'margin-top': 0 - height / 2
//         });


//     } else {
//         $('#bg-img').css({
//             'width': 'auto',
//             'height': '100%',
//             'margin-left': 0 - width / 2,
//             'margin-top': 0 - height / 2
//         });
//     }
// }