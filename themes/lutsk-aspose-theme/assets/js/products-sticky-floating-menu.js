// add .rhs-fixed class
$(document).ready(function() {
    var $stickytop = $('.stickytop');
    $(".sub-menu-container").prepend('<div id="sticky' + ($stickytop.length + 1) + '" class="stickytopheight">&nbsp;</div>');
    var stickyNavTop = $('.stickytopheight').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.sub-menu-container').addClass('stickysubmenu');
            $('.content2').addClass('pd88');
            $('.rhs-menu .rhs-box ').addClass('rhs-fixed');
        } else {
            $('.sub-menu-container').removeClass('stickysubmenu');
            $('.content2').removeClass('pd88');
            $('.rhs-menu .rhs-box ').removeClass('rhs-fixed');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});

// remove .rhs-fixed class
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > ($(document).height() - 200)) {
            $(".rhs-box.rhs-fixed").removeClass("rhs-fixed");
        }
    });
});

// smooth scrolling animation 
$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top - 125},1000);return false;}}});});

$('.profuctfamilyrhs .api-link a').click(function() {
    if ($(this).hasClass('activeurl')) {
        $(this).removeClass('activeurl')
    } else {
        $('.profuctfamilyrhs .api-link a').removeClass('activeurl')
        $(this).addClass('activeurl')
    }
});

$(document).ready((function() {
    $(window).scroll((function() {
        $(this).scrollTop() > 150 ? $(".backtop").fadeIn() : $(".backtop").fadeOut()
    })),
    $(".backtop").click((function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    }))
}));