$(document).ready(function () {

    var itemLength = $('.cards_container item').length;
    var current = 1;

    $('.cardSlider .btn_prev').on("click", function () {
        console.log('go to previous')

        if (current > 1){
            current = current - 1;
            showSlider(current);
        } else {
            current = itemLength;
            showSlider(current)
        }
    });

    $('.cardSlider .btn_next').on("click", function () {
        console.log("go to next")


        if (current !== itemLength) {
            current = current + 1;
            showSlider(current);
        } else {
            current = 1;
            showSlider(current)
        }

    });

    function showSlider(current) {
        $(".cards_container .item").removeClass("active");
        $("div[data-id='" + current + "']").addClass("active");
    }

});