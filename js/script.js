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

        // $win.on("load scroll", function(){
        //     var value = $(this).scrollTop();
        //     if($win.width() > 768){
        //         if( value > fvHeight){
        //             $header.addClass(fixedClass);
        //         } else {
        //             $header.removeClass(fixedClass);
        //         }
        //     }
        // })

        $win.on("load scroll", function(){
            var value = $(this).scrollTop();
                if( value >= fvHeight){
                    $header.addClass(fixedClass);
                } else {
                    $header.removeClass(fixedClass);
                }
        })
})

// AOS。JSーーーーーーーーーーーーーーーーーーーーーーーー
AOS.init()
// 2

// バーガーボタン-----------------------------------
$(function(){
    $(".burger-btn").on("click",function() {
        $(".burger-btn").toggleClass("close");
        $(".bglayer").toggleClass("open");
        $(".header-nav-res").toggleClass("active");
        // $(".header").css('color','red');
    })

    var $resitem = $(".header-nav-res-list-items");

    $resitem.on("click",function() {
        $(".burger-btn").removeClass("close");
        $(".bglayer").removeClass("open");
        $(".header-nav-res").removeClass("active");
    })

    if($(".header-nav-res").hasClass("active")){

    }

    $("main").on('click',function() {
        $(".burger-btn").removeClass("close");
        $(".bglayer").removeClass("open");
        $(".header-nav-res").removeClass("active");
    })
});

// $(document).click(function() {　$('.header-nav-res').hide();　});

// $(document).click(function(event) {
//     if(!$(event.target).closest('.header-nav-res').length) {
//         $(".burger-btn").removeClass("close");
//         $(".bglayer").removeClass("open");
//         $(".header-nav-res").removeClass("active");
//         console.log('外側がクリックされました。');
//     } else {                console.log('内側がクリックされました。');
//     }

// });





