$(document).ready(function() {
    $("#UsernameInput").focusout(function() {
        var UsernameInput = $("#UsernameInput").val();
        const regex = new RegExp("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")
        if (regex.test(UsernameInput)) {
            $("#Usernamevalid").text("is validation")

        } else
            $("#Usernamevalid").text("not valid")
    })
    $("#PasswordInput").focusout(function() {
        var PasswordInput = $("#PasswordInput").val();
        const regex = new RegExp("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")
        if (regex.test(PasswordInput)) {
            $("#Passwordvalid").text("is validation")

        } else
            $("#Passwordvalid").text("not valid")
    })
});