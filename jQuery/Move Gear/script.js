var main = function () {
    $(".login").click(function () {
        $(".dropdown-menu", this).slideToggle(400);
    });

    $("#accordion").accordion();
}


$(document).ready(main)