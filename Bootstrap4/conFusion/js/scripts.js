$(document).ready(function () {
    $("#carousel").carousel({
        interval: 2000,
        pause: "false",
    });

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#carousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else if (
            $("#carouselButton").children("span").hasClass("fa-play")
        ) {
            $("#carousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });
    

    $('#botonlog').click(function(){
        $('#loginModal').modal('show')
    })
    
    $('#botonreser').click(function(){
        $('#ModalTable').modal('show')
    })
});