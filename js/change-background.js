$(document).ready(function () {
    $(".codestrata").hover(function () {
        $("#works").css("background-color", "blue");
    });

    $("#block2").hover(function () {
        $("body").css("background-color", "red");
    });

    $("#block3").hover(function () {
        $("body").css("background-color", "green");
    });
});