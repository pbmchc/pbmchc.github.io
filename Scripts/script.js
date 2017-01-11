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
});
//hide nav
function hideNav() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var ratio = windowHeight / windowWidth;
    var scrolled = $(window).scrollTop();

    if (windowWidth < 768 && ratio < 1)
    {
        if (scrolled > windowHeight + 100)
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

function changeOrientation() {
    var height = $(window).height();
    var width = $(window).width();
    var scrollTop = $(window).scrollTop();
    if (height < width && height < 500)
    {
        $('.overlay-image-content').css("height", "90%");
        $('.contentimage').css("width", "55%");    }
    else
    {
        $('.overlay-image-content').css("height", "auto");
        $('.contentimage').css("width", "70%");
    }
    $('.overlay-image-content').css({ 'top': scrollTop + height * 0.05 });

}

$(window).load(function () {
    var loader = $('.loader');
    var loadHide = function () {
        loader.fadeOut();
    }
    setTimeout(loadHide, 700);
    setTimeout(typeWriter, 800);
});
//overlay divs
function showcontent(content) {
    var docHeight = $(document).height();
    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    $('#overlay').fadeIn().css({ 'height': docHeight });
    $('.content' + content).fadeIn().css({ 'top': scrollTop + height * 0.05 });
    $("html").css("overflow", "hidden");
    $('#overlay').bind('touchmove', function (e) {
        e.preventDefault()
    });
}
function closecontent(){
    $('#overlay').fadeOut();
    $('.overlay-content').fadeOut('fast');
    $('.overlay-image-content').fadeOut('fast');
    $("html").css("overflow", "auto");
    $('#overlay').unbind('touchmove');
}

function showimagecontent(content) {
    var height = $(window).height();
    var width = $(window).width();
    var docHeight = $(document).height();
    var scrollTop = $(window).scrollTop();
    $('#overlay').fadeIn().css({ 'height': docHeight });
    $('.overlay-image-content').fadeIn().css({ 'top': scrollTop + height * 0.05 });
    $('.contentimage').attr('src', 'Images/Graphics/' + content + '.png');
    $("html").css("overflow", "hidden");
    $('#overlay').bind('touchmove', function (e) {
        e.preventDefault()
    });
    if (height < width && height < 500)
    {
        $('.overlay-image-content').css("height", "90%");
        $('.contentimage').css("width", "55%");
    }
    else
    {
        $('.overlay-image-content').css("height", "auto");
        $('.contentimage').css("width", "70%");
    }
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
    changeOrientation();
}
//typewriter
function typeWriter() {
    var title = $("#title-text");
    var text = "Hello World!";
    var chars = text.split("");
    var timeout;
    text = "";
    for (var i = 0; i < chars.length; i++) {
        (function (index) {
            timeout = setTimeout(function () {
                text += chars[index];
                title.text(text);
            }, 300 * (i + 1));
        })(i);
    }
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
var submitted
//validate and submit
$("#cform").submit(function (e) {
    submitted = true;
    $(".form-div").append('<iframe name="g_iframe" id="hidden_iframe" style="display:none;"></iframe>');

    var ref = $(this).find("[required]");
    var validation = true;
    $(ref).each(function () {
        if ($(this).val() == '') {
            validation = false;
            $(this).focus();
            e.preventDefault();
       }
    });
    if (validation == true)
    {  
        var height = $(".form-div").height();
        $(".form-div").hide();
        $("#submit-thanks").height(height);
        $("#submit-thanks").fadeIn("slow");
        setTimeout(showFormAgain, 4000);
    }
});

function showFormAgain() {
    clearForm();
    $("#submit-thanks").hide();
    $(".form-div").show();
    $("#hidden_iframe").remove();
}

function clearForm() {
    var inputs = $("#cform").find("input");
    var textarea = $("#cform").find("textarea");

    inputs.each(function () {
        $(this).val("");
    });
    textarea.val("");
}

//function generateQuote() {

//    var i = Math.round(Math.random() * 2);
//    $.getJSON('Scripts/proverbs.json', function (jd) {
//        var record = jd[i];
//        $("#quote").text(record.quote);
//        $("#author").text(record.author);
//    });
//}