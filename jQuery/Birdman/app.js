var main = function () {
    $(".dropdown img").click(function () {
        $(".dropdown-menu").slideToggle();
    });
}

$(document).ready(main);