$(function(){
     function init(dots, slides, activeSlide){
        dots.removeClass("active");
        dots.eq(activeSlide).addClass("active");
        slides.css("display", "none");
        slides.eq(activeSlide).css("display","block");
    };
    function tab(tab_titles, tabs, active_tab, last_tab){
        tabs.css("display", "none");
        tab_titles.eq(last_tab).removeClass("active");
        tabs.eq(active_tab).css("display", "block");
        tab_titles.eq(active_tab).addClass("active");
    }
    if ($(".next-main-slider-dots>span").length && $(".hero>li").length){
        const dots = $(".next-main-slider-dots>span");
        const slides = $(".hero>li");
        const interval = 3;
        let activeSlide = 0;

        init(dots, slides, activeSlide);
        setInterval(function(){
            
            init(dots, slides, activeSlide);
            if(activeSlide<slides.length -1){
                activeSlide++;
            }else{
                activeSlide = 0;
            };
        }, interval*1000)
        dots.on("click", function(){
            activeSlide = $(this) .index();
            init(dots, slides, activeSlide);
        });
    }
    
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
        if ($(".hero>li").length){
            const slides = $(".hero>li");
            slides.children("img").css("opacity", opacity);
        }
        $(".header-nav").css("background", nav_bg);
    
    });
    const menu = $(".mobile-button");
    const submenu = $(".second-menu-mobile");

    menu.on("click", function(){
        submenu.toggleClass("open");
    
    });
    $("button").on("click", function(){
        window.location.replace("movie.php");
    });
    if ($(".tab-titles").length){
        const tab_titles = $(".tab-titles>li");
        const tabs = $(".tabs>div");
        const number_tab = 2;
        let active_tab = 0;
        let last_tab = 0;
        tab(tab_titles, tabs, active_tab, last_tab);
        tab_titles.on("click", function(){
            active_tab = $(this).index();
            tab(tab_titles, tabs, active_tab, last_tab);
            last_tab = active_tab;
        });
    }
});