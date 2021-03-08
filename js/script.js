// スムーススクロールーーーーーーーーーーーーーーーーーーーーーーーーーーー
// $(function(){
//     $('a[href^="#"]').click(function(){
//     let speed = 500;
//     let href= $(this).attr("href");
//     let target = $(href == "#" || href == "" ? 'html' : href);
//     let position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//     });
// });


var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#header'
});
// スティッキウーヘッダー-----------------------------------
$(function (){
    var $win = $(window)
    var $fv = $(".fv")
    var $header = $(".header")
    var fvHeight = $fv.outerHeight();
    var fixedClass = "fixed";

        $win.on("load scroll", function(){
            var value = $(this).scrollTop();
            if($win.width() > 768){
                if( value > fvHeight){
                    $header.addClass(fixedClass);
                } else {
                    $header.removeClass(fixedClass);
                }
            }
        })
})

// AOS。JSーーーーーーーーーーーーーーーーーーーーーーーー
AOS.init()