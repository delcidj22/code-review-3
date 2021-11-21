$(document).ready(function(){
  $("userInput").submit(function(event){
    event.preventDefault();
    const number = $(".userNumber").val();
    $("#results").html(userInput(number));
});
});

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
    inputArray.forEach(function(num){
      if (num.includes("3")){
          lastArray.push(num + "Won't you be my neighbor?");
        }
      else if (num.includes("2")){
          lastArray.push(num + "Boop!");
        }
      else if (num.includes("1")){
        lastArray.push(num + "Beep!");
      } else {
        lastArray.push(num + num);
      }
      
    });
    return lastArray;
  }

