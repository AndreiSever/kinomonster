$(function(){
     function init(){
        dots.removeClass("active");
        dots.eq(activeSlide).addClass("active");
        slides.css("display", "none");
        slides.eq(activeSlide).css("display","block");
    };
    const dots = $(".next-main-slider-dots>span");
    const slides = $(".hero>li");

    const interval = 3;
    let activeSlide = 0;

    init();
    setInterval(function(){
        
        init();
        if(activeSlide<slides.length -1){
            activeSlide++;
        }else{
            activeSlide = 0;
        };
    }, interval*1000)
    dots.on("click", function(){
        activeSlide = $(this) .index();
        init();
    });
    const checkpoint = 600;
    let nav_bg = "transparent";
    let opacity ="1";
    $(window).scroll(function(){
        const currentscroll = window.pageYOffset;
        if(currentscroll <= checkpoint){

            nav_bg = "transparent";
            opacity = 1-currentscroll/checkpoint;
        }else{
            nav_bg = "#0C0B0B";
            opacity = 0;
        }
        slides.children("img").css("opacity", opacity);
        $(".header-nav").css("background", nav_bg);
    
    });
    const menu = $(".mobile-button");
    const submenu = $(".second-menu-mobile");

    menu.on("click", function(){
        submenu.toggleClass("open");
    
    });
});