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
             squareDivs();
             typeWriter();
});
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

$('#ddmenu').blur(function () {
    $('#ddmenu').removeClass('open');
});

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
    $('.contentimage').attr('src', 'Images/Graphics/' + content + '.png');
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
    squareDivs();
}
//typewriter
function typeWriter() {
    var title = $("#title-text");
    var text = "Hello World!";
    var chars = text.split("");
    text = "";
    for (var i = 0; i < chars.length; i++) {
        (function (index) {
            var timeout = setTimeout(function () {
                text += chars[index];
                title.text(text);
            }, 300 * (i + 1));
        })(i);

    }
    clearTimeout(timeout);
}
//bottom footer
$("#portfolio-btn").click(function (e) {
    e.preventDefault();
    $(".portfolio-nav").slideDown();
    $(".nav-down").slideUp();
});
$("#caret-bale").click(function (e) {
    e.preventDefault();
    $(".portfolio-nav").slideUp();
    $(".nav-down").slideDown();
});
//function generateQuote() {

//    var i = Math.round(Math.random() * 2);
//    $.getJSON('Scripts/proverbs.json', function (jd) {
//        var record = jd[i];
//        $("#quote").text(record.quote);
//        $("#author").text(record.author);
//    });
//}