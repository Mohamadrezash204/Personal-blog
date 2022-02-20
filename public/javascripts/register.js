$(document).ready(function() {
    let usernameValid = false;
    let passwordValid = false;
    let firstnameValid = false;
    let lastnameValid = false;
    $('#UsernameInput').keyup(function(e) {
        e.preventDefault();
        const farsiregex = /^[\u0600-\u06FF\s]+$/
        if ((!/^[A-Za-z0-9_\.]+$/.test($('#UsernameInput').val()) && !farsiregex.test($('#UsernameInput').val)) || $('#UsernameInput').val().length < 2) {
            $('#Usernamevalid').text('username shoule be Atleast: 2 character number and letter NO SPACE');
        } else {
            usernameValid = true;
            $('#Usernamevalid').text('');
        }
    });
    $('#paswordInput').keyup(function(e) {
        e.preventDefault();
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/).test($('#paswordInput').val()) || $('#paswordInput').val().length < 8) {
            $('#paswordvalid').text('password shoule be Atleast: 8 character number and letter(uppercase, lowercase) and special character');
        } else {
            passwordValid = true;
            $('#paswordvalid').text('');
        }
    });
    $('repeatPaswordInput').keyup(function(e) {
        e.preventDefault();
        if ($('#repeatPaswordInput').val() === $('#paswordinput').val()) {
            $('#repeatPaswordvalid').text('password shoule be Atleast: 8 character number and letter(uppercase, lowercase) and special character');
        } else {
            passwordValid = true;
            $('#repeatPaswordvalid').text('');
        }
    });
    $('#firstNameInput').keyup(function(e) {
        e.preventDefault();
        if ($('#firstNameInput').val().length > 30 || $('#firstNameInput').val().length < 2) {
            $('#firstNamevalid').text('firstname shoule be Atleast: 2 character and At-most 30character');
        } else {
            firstnameValid = true;
            $('#firstNamevalid').text('');
        }
    });
    $('#lastNameInput').keyup(function(e) {
        e.preventDefault();
        if ($('#lastNameInput').val().length > 30 || $('#lastNameInput').val().length < 2) {
            $('#lastNamevalid').text('lastname shoule be Atleast: 2 character and At-most 30character');
        } else {
            lastnameValid = true;
            $('#lastNamevalid').text('');
        }
    });


});