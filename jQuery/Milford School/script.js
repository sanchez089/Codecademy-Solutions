var main = function () {
    $(".dropdown img").click(function () {
        $(".dropdown-menu").slideToggle();
    });
    $(".main form").submit(function () {
        $(".email-error").text("");
        $(".password-error").text("");
        var email = $("#email").val();
        var password = $("#password").val();

        if (email.length === 0) {
            $(".email-error").text("Please enter your email.");
        }
        if (password.length === 0) {
            $(".password-error").text("Please enter your password.");
        }
        return false;
    });


}

$(document).ready(main);