captureTimeChange(captureTrafficLightChange);

function captureTrafficLightChange(number){
  if (number >= 40){
      go();
}
  else if(number > 30 && number < 40){
      caution();
  }
  else {
      stop();
  }
};
