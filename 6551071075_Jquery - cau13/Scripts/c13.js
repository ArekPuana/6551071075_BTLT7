$(document).ready(function() {
    $(".password-show").click(function() {
        const input = $(".input-control");
        const icon = $(this);

        if (input.attr("type") === "password") {
            input.attr("type", "text"); //hien mk
            icon.removeClass("fa-eye").addClass("fa-eye-slash"); //doi icon mat
        } else {
            input.attr("type", "password");//an mk
            icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });
});