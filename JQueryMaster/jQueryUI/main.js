$(document).ready(function () {

    $(document).click(function () {
        //$(".button").toggle("drop", 1000, function () {
        //    console.log("done")
        //})

        //$(".button").toggleClass("otherClass", 1000)

        $(".button").switchClass("button", "otherClass",1000)
    })
})