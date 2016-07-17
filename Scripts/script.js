$(document).ready(function () {
    
             // navigation click
             $('.scroll-link').on('click', function (event) {
                 event.preventDefault();
                 var sectionID = $(this).attr("data-id");
                 scrollToID('#' + sectionID, 1000);
             });
             // scroll to top
             $('.scroll-top').on('click', function (event) {
                 event.preventDefault();
                 $('html, body').animate({ scrollTop: 0 }, 900);
             });
             // mobile nav toggle
             $('#nav-toggle').on('click', function (event) {
                 event.preventDefault();
                 $('#navbar-collapse').toggleClass("open");
             });
            //viewport checker
             $('.fading').viewportChecker({
                 classToAdd: 'visible animated flipInY',
                 classToRemove: 'invisible',
                 offset: 100
             });
             $('.fading-web').viewportChecker({
                 classToAdd: 'visible animated fadeIn',
                 classToRemove: 'invisible',
                 offset: 100
             });
             showScroller();
             scaleVideoContainer();
             initBannerVideoSize('video');
             squareDivs();
          

});
initBannerVideoSize('video');
scaleVideoContainer();

//hide nav
function hideNav() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var ratio = windowHeight / windowWidth;
    var scrolled = $(window).scrollTop();

    if (windowWidth < 768 && ratio < 1)
    {
        if (scrolled > windowHeight + 70)
        {
            $(".navbar-custom").fadeOut();
        }
        else
        {
            $(".navbar-custom").fadeIn("fast");
        }
    }
    else
    {
        $(".navbar-custom").fadeIn("fast");
    }
}
$(".back-btn").click(function () {
    history.back();
});
// scroll function
function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#navbar-collapse');
    $('html,body').animate({ scrollTop: targetOffset }, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function () { }
    };
}
//parallax effect
//var jumboHeight = $('.jumbotron').outerHeight();
//function parallax() {
//    var scrolled = $(window).scrollTop();
//    $('.bg').css('height', (jumboHeight - scrolled) + 'px');
//    if (scrolled > 100 && scrolled <= 200) {
//        $('.jumbotron').css('background-color', 'rgba(255, 255, 255, 0.25)');
//    }
//    else if (scrolled > 200 && scrolled <=300)
//    {
//        $('.jumbotron').css('background-color', 'rgba(255, 255, 255, 0.5)');
//    }
//    else if (scrolled > 300 && scrolled<=360) {
//        $('.jumbotron').css('background-color', 'rgba(255, 255, 255, 0.75)');
//    }
//    else if (scrolled > 360) {
//        $('.jumbotron').css('background-color', 'rgba(255, 255, 255, 0.95)');
//    }
//    else {
//        $('.jumbotron').css('background-color', 'transparent');
//    }
//}

$(window).scroll(function (e) {
    showScroller();
    hideNav();
});

//scroller visibility
function showScroller() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600)
    {
        $(".scroll-top").slideDown();
    }
    else {
        $(".scroll-top").slideUp();
    }
}

//ddmenu hover and click
function checkHover() {
    $('#ddmenu').removeClass('open');
    $("#ddmenu").hover(function () {
        if (window.innerWidth > 1024) {
            $(this).toggleClass('open');
            document.getElementById('open-menu').removeAttribute('data-toggle');
        }
        else {
            $('#open-menu').attr('data-toggle', 'dropdown');
        }
    });
}
checkHover();

$(".dropdown-menu > li > a").click(function () {
    $('#ddmenu').removeClass('open');
});
$('#ddmenu').removeClass('open');
function squareDivs() {
    var width = $(".square").width();
    var width2 = $(".square2").width();
    if (width === 0)
    {
        $(".square").css("height", width2);
        $(".square2").css("height", width2);
    }
    else
    {
        $(".square").css("height", width);
        $(".square2").css("height", width);
    }
}
squareDivs();

//overlay divs
function showcontent(content) {
    var docHeight = $(document).height();
    var scrollTop = $(window).scrollTop();
    $('#overlay').fadeIn().css({ 'height': docHeight });
    $('.content'+content).fadeIn().css({ 'top': scrollTop + 40 + 'px' });
}
function closecontent(){
    $('#overlay').fadeOut();
    $('.overlay-content').fadeOut('fast');
    $('.overlay-image-content').fadeOut('fast');
}

function showimagecontent(content) {
    var docHeight = $(document).height();
    var scrollTop = $(window).scrollTop();
    $('#overlay').fadeIn().css({ 'height': docHeight });
    $('.overlay-image-content').fadeIn().css({ 'top': scrollTop + 40 + 'px' });
    $('.contentimage').attr('src', 'Images/' + content + '.png');
}
$('.shoverlay-image').click(function (event) {
    event.preventDefault();
    var content = $(this).attr('id');
    showimagecontent(content);
});

$('.shoverlay').click(function(event){
    event.preventDefault();
    var content = $(this).data('content');
    showcontent(content);
});
$('.hdoverlay, #overlay').click(function () {
    closecontent();
});

window.onresize = function () {
    $('#ddmenu').removeClass('open');
    scaleVideoContainer();
    scaleBannerVideoSize('video');
    squareDivs();
}
//video scalling
function scaleVideoContainer() {

    var height = $(window).height()*0.65;
    var height2 = $(window).height() * 0.4;
    var unitHeight = parseInt(height) + 'px';
    $('#video-overlay').css('height', unitHeight);
    $('#video-desc').css('height', height2 + 'px');
    $('.filter').css('height', unitHeight);
}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width'),
            windowAspectRatio = windowHeight / windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
           videoWidth = windowWidth*1.2;
           videoHeight = videoWidth * videoAspectRatio*1.2;
           $(this).css({'margin-left': 0 });
        } else {
            videoHeight = windowHeight*1.2;
            videoWidth = videoHeight / videoAspectRatio*1,2;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
        }
        $(this).width(videoWidth).height(videoHeight);
        $('video').addClass('fadeIn animated');
    });
}