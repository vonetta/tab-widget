var osomMovie = {};

osomMovie.database = [];

osomMovie.loadAssets = function () {
    $.getJSON("movies.json", function (data) {
        osomMovie.database = data;
        osomMovie.init();
    });
};

osomMovie.init = function () {
    osomMovie.filterSlider();
    osomMovie.getTypes();
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


osomMovie.getTypes = function () {
    var types = [];

    $.each(osomMovie.database, function (index, element) {

        if ($.inArray(osomMovie.database[index].type, types)) {
        var typeValue = osomMovie.database[index].type;
        types.push(typeValue);
        $("#categories").append('<option value="' + typeValue + '">' + typeValue + '</option>');
        }
    });


};

osomMovie.loadAssets();