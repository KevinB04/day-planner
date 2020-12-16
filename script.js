console.log("Hello world");

$(document).ready(function () {

$(".saveBtn").on("click", function(){

var activity = $(this).siblings(".description").val();
var hour = $(this).parent().attr("id");


localStorage.setItem(hour,activity)
console.log(localStorage)

})

function checkHour(){
    var currentHour = moment().hours()
    console.log(currentHour);

    $(".time-block").each(function () {
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(rowHour);

        //if statements plus addClass plus $(this)
        if(rowHour < currentHour) {
            $(this).children(".description").addClass("past")
        }
    })

}

$("#hour-9 .description").val(localStorage.getItem("hour-9"))

checkHour()

})
