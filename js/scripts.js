$(document).ready(function () {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const number = $(".userInput").val();
        $("#results").html(roboger(number));
    });
  });

// business logic
function roboger(number){
  finalArray = [];
  numberArray = numArray(number)
  numberArray.forEach(function(num){
  });
}  