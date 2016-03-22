var main = function () {
    $('form').submit(function () {
        $('.first-name-error').html('');
        $('.last-name-error').html('');
        $('.email-error').html('');
        $('.password-error').html('');

        var firstName = $('#first').val();
        if (firstName === "") {
            $('.first-name-error').html('Please enter your first name.');
        }

        var lastName = $('#last').val();
        if (lastName === "") {
            $('.last-name-error').html('Please enter your last name.');
        }

        var email = $('#email').val();
        if (email === "") {
            $('.email-error').html('Please enter your email address.');
        }
        else if (email === 'xd@xd.de') {
            $('.email-error').html('This email is already taken.');
        }

        var password = $('#password').val();
        if (password === "") {
            $('.password-error').html('Please enter a password.');
        }
        else if (password.length < 8) {
            $('.password-error').html('Short passwords are easy to guess. Try one with at least 8 characters.');
        }


        return false;
    })
}

$(document).ready(main);