$(document).ready(function () {
    $("#title").fadeIn(100);
    $(".hidden").hide()
    
    $("*").click(function() {
        $(".hidden").slideDown(500);
    });

});