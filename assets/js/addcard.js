$(document).ready(function(){
    console.log("Rady!!");
    $("#idBtnAgregar").click(function(){
        console.log("Click agrgera");
        $("#idRowCard").html($("#idRowCard").html() + "<div class='col-sm-3 custom-card-1'>" +
                                "<div class='card'><img src='..' class='card-img-top' alt='...'>" + 
                                    "<div class='card-body'><h5 class='card-title'>Card title</h5>" +
                                        "<p class='card-text'>Some quick example text to build on the card title and make up the bulkof the card's content.</p>" +
                                        "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                                    "</div>" +
                                "</div>" +
                              "</div>");
    });
});