﻿$(document).ready(function () {

    (function startQuiz() {
        this.settings = {
            results: []
        };

        this.loadQuiz = function () {

            $(".panel_one h1").show("drop", 800, function () {
                $(".start_quiz").addClass("started", 500);
            });

            $(".start_quiz").on("click", function () {
                showPanel(1);
                listenNext();
            });
        };

        this.showPanel = function (position) {
            var current = $("div[data-panel='" + (position - 1) + "']");

            current.find(".wrapper").animate({
                left: "-=100px",
                opacity: 0
            }, 500, function () {
                //Hide current
                current.addClass("hidden");

                //show next
                var next = $("div[data-panel='" + position + "']");
                next.removeClass("hidden");
                showNext(next);

            });


        };

        this.showNext = function (next) {
            var wrapper = next.find(".wrapper");

            wrapper.fadeIn("300", function () {
                manageOptions(next);
            })
         };

        this.manageOptions = function (next) {
            var options = next.find(".options");
            var childrens = options.find("div")
            var counter = 0;

            childrens.each(function (i, element) {
                $(element).delay(counter).fadeIn(200);
                counter += 250;
            });

            childrens.on("click", function () {
                childrens.removeClass("active");
                next.addClass("valid");
                $(this).addClass("active");
            });
        };

        this.listenNext = function () {
            $(".next_question").on("click", function () {
                var next = $(this).data("next");
    
                if (validateSelection($(this))){
                    showPanel(next);
                    showProgressAndStore(next);
                }
            });
        };

        this.validateSelection = function ($this) {
            var parent = $this.parents().eq(1);

            if (parent.hasClass("valid")) {
                return true;
            }

            else {
                $(".error").fadeIn("300", function () {
                    $(this).delay(500).fadeOut("300");
                })
                return false;
            }
        };

        this.showProgressAndStore = function (panel) {
            $(".progress .bar").animate({
                "width": "+=25%"
            }, 250);

            var options = $("div[data-panel='" + (panel - 1) + "']").find(".options");
            options.find("div").each(function (i,e) {
                if ($(this).hasClass("active")) {
                    settings.results.push($(this).text());
                    console.log(settings.results)

                }
            })

        };




        loadQuiz();
    })()

});