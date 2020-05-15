$(document).ready(function(){
    console.log("script ok");
    $("#nav-info").hide(0);
    $("#toggle").click(function() {
        $("#nav-info").slideToggle();
    })
    $(".navbar-burger").click(function() {
        $("#nav-info").slideToggle();
    })
});
