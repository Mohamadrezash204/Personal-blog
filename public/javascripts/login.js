$(document).ready(function() {
    $("#UsernameInput").focusout(function() {
        var UsernameInput = $("#UsernameInput").val();
        const regex = new RegExp(/^[A-Za-z0-9_\.]+$/)
        if (regex.test(UsernameInput)) {
            $("#Usernamevalid").text("معتبر")

        } else
            $("#Usernamevalid").text("نا معتبر")
    })
    $("#PasswordInput").focusout(function() {
        var PasswordInput = $("#PasswordInput").val();
        const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/)
        if (regex.test(PasswordInput)) {
            $("#Passwordvalid").text("معتبر")

        } else
            $("#Passwordvalid").text("نا معتبر")
    })
});