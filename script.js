console.log("Hello world");

$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
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
        } else if(rowHour === currentHour) {
            $(this).children(".description").addClass("present")
          } else {
             $(this).children(".description").addClass("future")
         }
        
    })

}

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))

checkHour()

})
