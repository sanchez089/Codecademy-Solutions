var main = function () {
    $(".dropdown").click(function () {
        if ($('.dropdown-menu', this).css('display') == 'none') {
            $(".dropdown-menu").fadeOut(200);
            $('.dropdown-menu', this).slideDown();
        }
        else {
            $('.dropdown-menu', this).slideUp();
        }
    });
}

$(document).ready(main);