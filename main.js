 var randomNumber = Math.floor(Math.random() * 100 + 1);
    document.getElementById("start-button").addEventListener("click",startAction);
    function startAction() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById("game").style.display = 'block';
    
   };

   var count = 10;
   document.getElementById('span').innerHTML = count;
   document.getElementById("check-button").addEventListener("click",checkAction);
   function  checkAction() {
   var guessedNumber = document.getElementById("inputNumber").value;
   document.getElementById('span').innerHTML = count;
   if( guessedNumber > randomNumber && count > 1) {
     count= count - 1 ;
     var node = document.createElement("li");
     node.className = 'list-group-item';
     var textnode = document.createTextNode(`your guess : ${guessedNumber} is bit high, try again!`);
     node.appendChild(textnode);
     document.getElementById("myList").appendChild(node);
     document.getElementById('span').innerHTML = count;
   }
   else if (guessedNumber < randomNumber  && count > 1) {
    count = count - 1;
    var node = document.createElement("li");
    node.className = 'list-group-item';
    var textnode = document.createTextNode(`your guess : ${guessedNumber} is bit less, try again!`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById('span').innerHTML = count;

   }

   else if (guessedNumber == randomNumber && count > 0) {
    document.getElementById("result").innerHTML = ` you guessed it right!, I'm ${randomNumber}!!
    you guessed me in ${10 - count} guesses!`;
   }

   else {
    document.getElementById("result").innerHTML = " You failed to guess!, I'm " + randomNumber + " !!";
    count = count - 1;
    document.getElementById('span').innerHTML = count;

    }
   };