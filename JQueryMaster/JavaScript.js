$(document).ready(function () {

    $(".item").on("click", function () {
        var number = $(this).data("option"); //item i am clicking on
        console.log(number)

        //remove all actives
        $(".tab_header .item").removeClass("active");

        //add active
        $(this).addClass("active");

        $(".tab_container .container_item").hide();

        $("div[data-item=" + number + "]").show();

    })

  




});