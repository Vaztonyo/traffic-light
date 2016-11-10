var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval(){
        counter++;

      if  (counter == 61){
        (counter = 0);
      }

        showNumber(counter);
}

setInterval(interval, 1000);

var counter = 0;
setInterval(function(){
  counter--;
  if (counter >= 40){
    go();
  }
  else if (counter < 40 && counter > 30){
    caution();
  }
  else{
    stop();
  }
  if (counter == 61){
    counter = 0;
  }
}, 1000);
