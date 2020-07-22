$("#modal-button").click(function()  // this is activating the modal using javascript
{
    $("#loginModal").modal('toggle');
});
$("#res").click(()=> // using arrow functions this is for activating the reserve form using the modal.
{
    $('#reserve').modal('toggle');
});
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass("fa-pause");
        $("#carouselButton").children("span").addClass("fa-play");
    }
    else if ($("#carouselButton").children("span").hasClass('fa fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa fa-play');
        $("#carouselButton").children("span").addClass('fa fa-pause');                    
    }
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});