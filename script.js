window.onscroll = function () { scrollFunction() };

document.body.style.overflowX = 'hidden';
document.documentElement.style.overflowX = 'hidden';

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function open_menu() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    var element1 = document.getElementById("hidden-navbar");
    var element2 = document.getElementById("close-menu");
    var element3 = document.getElementById("open-menu");
    element1.style.display = "block";
    element2.style.display = "block";
    element3.style.display = "none";
}

function close_menu() {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    var element1 = document.getElementById("hidden-navbar");
    var element2 = document.getElementById("close-menu");
    var element3 = document.getElementById("open-menu");
    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "block";
}