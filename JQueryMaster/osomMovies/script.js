var osomMovie = {};

osomMovie.init = function () {
    osomMovie.filterSlider();
};

osomMovie.filterSlider = function () {
    $(".filter.open").on("click", function () {

        $(".filter_container").slideToggle(300, function () {
            var btn = $(this).prev();

            if (btn.hasClass("active")) {
                $("filter.open").find(".btn_title").text("Filter by");
                btn.removeClass("active");
            }
            else {
                $("filter.open").find(".btn_title").text("close");
                btn.addClass("active");
            }
        });
    })
};

osomMovie.init();