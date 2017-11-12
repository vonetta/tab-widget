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
    osomMovie.getDirectors();
    osomMovie.generateMarkup();
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

    osomMovie.getDirectors = function () {
        var db = osomMovie.database;
        var directors = [];

        $.each(db, function (index, element) {

            if ($.inArray(db[index].director, directors)) {
                var directorValue = db[index].director;
                directors.push(directorValue);
                $("#directors").append('<option value="' + directorValue + '">' + directorValue + '</option>');
            }
        })
    }

    osomMovie.generateMarkup = function () {
        var template = '';

        $.each(osomMovie.database, function (index) {
            var db = osomMovie.database;

            template += '<div class="movie_item">';
            template += ' <div class="header">';
            template += '<div class="left">';
            template += '<img src="images/movies/' + db[index].img +'" />';
            template += ' </div>';
            template += ' <div class="right">';
            template += '<h3>'+db[index].title+'</h3>';
            template += ' <div class="node">';
            template += ' <span>Year:</span> ' + db[index].year;
            template += ' </div>';
            template += ' <div class="node">';
            template += '<span>Director:</span> '+ db[index].director;
            template += ' </div>';
            template += ' <div class="node">';
            template += ' <span>Type:</span> ' + db[index].type;
            template += ' </div>';
            template += ' <div class="show_desc">See descrition</div>';
            template += ' </div>';
            template += ' </div>';
            template += ' <div class="description">';
            template += ' <strong>Description</strong> ' + db[index].desc;
            template += ' </div>';
            template += ' </div>';
        });
        $(".movies_content").append(template);
        osomMovie.showDescription();
    }
};

osomMovie.showDescription = function () {
    $(".show_desc").on("click", function () {
        var $this = $(this);
        var parent = $(this).parents().eq(2);
        var element = parent.find(".description");
        element.slideToggle(200, function () {
            if ($this.hasClass("active")) {
                $this.text("See Description").removeClass("active")

            }
            else {
                $this.text("Hide Description").addClass("active")
            }
        });
    });
}

    osomMovie.loadAssets();