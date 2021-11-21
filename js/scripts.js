
// Utility Logic
function inArray(number){
  inputArray = [];
  for (i = 0; i <= number; i++){
    inputArray.push(i.toString());
  }
  return inputArray;
  }

// business logic
function userInput(number){
  lastArray = [];
  inputArray = inArray(number)
  inputArray.forEach(function(user){
    if (user.includes("3")){
      lastArray.push(user + "Won't you be my neighbor?")
    }
    else (user.includes("2")){
      lastArray.push(user + "Boop!");
    }
    else if (user.includes("1")) {
      lastArray.push(user, + "Beep!");
    }
    else if {
      lastArray.push(user ++);
    }
  });
  return lastArray;
}

});

$(document).ready(function(){
  $("form.userInput").submit(function(event){
    event.preventDefault();
    const number = $(".userNumber").val();
    $("#results").html(userInput(number));
  });
});
