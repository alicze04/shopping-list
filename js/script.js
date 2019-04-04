$(document).ready(function () {


    $("#itemButton").on("click", function () {
        var inputValue = $("#itemInput").val()
        console.log(inputValue)
        $("#itemList").append("<li>" + inputValue + "</li>").addClass("itemColor")
        $("#itemInput").val("")
    })

    $("body").on("click", "#itemList li", function () {
        $(this).toggleClass("done")
        $(this).on("click", function () {
            $(this).remove()
        }
        )
        console.log("kliknieto") 
    })


    $("#itemInput").on("keypress", function (event) {
        var inputValue = $("#itemInput").val()
        console.log("you pressed enter");
        if (event.keyCode == "13") {
            console.log("pressed enter");
            $("#itemList").append("<li>" + inputValue + "</li>").addClass("itemColor")
            $("#itemInput").val("")
        }
    })





})
