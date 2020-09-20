 var randomNumber = Math.floor(Math.random() * 100 + 1);
  document.getElementById("start-button").addEventListener("click",startAction);
    function startAction() {
    var btn = document.getElementById("start-button");
    btn.remove();
    document.getElementById('hi').innerHTML = 'Hi, Am a Number!, guess my Value!!';
    document.getElementById('hint').innerHTML = 'Hint : my value is in between 1 to 100!';
    document.getElementById('below').innerHTML = 'Start guessing below!';

    var input = document.getElementById('inputNumber');
    input.style.display = "block";

    var btnVisibility = document.getElementById('check-button');
    btnVisibility.style.visibility = "visible";
   };
   var count = 10;
   document.getElementById("check-button").addEventListener("click",checkAction);
   function  checkAction() {
   var guessedNumber = document.getElementById("inputNumber").value;
   
   if( guessedNumber > randomNumber && count > 1) {
     count= count - 1 ;
     document.getElementById("result").innerHTML = "my value is bit low!!, you have " + count + " more chances to guess!"; 
   }
   else if (guessedNumber < randomNumber  && count > 1) {
    count = count - 1;
     document.getElementById("result").innerHTML = "my value is bit higher!! , you have " +count + " more chances to guess!"; 
   }
   else if (guessedNumber == randomNumber && count > 1) {
    document.getElementById("result").innerHTML = " you guessed it right!, I'm " + randomNumber +
     "!!\n press F5 key or refresh the page to play again!";
   }
   else {
    document.getElementById("result").innerHTML = " You failed to guess!, I'm " + randomNumber +
     "!!\n press F5 key or refresh the page to play again!";
   }
   };