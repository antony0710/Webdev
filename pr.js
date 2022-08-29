const buttonL = document.querySelector("#left");
const buttonR = document.querySelector("#right");

// Set the date we're counting down to
var countDownDate = new Date("Sep 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
let valueL=50;
let valueR=50;
const getValueInput=()=>{
  let inputValue =document.getElementsByClassName("column")[0].value;
  document.getElementById("testing").innerText=inputValue;
  document.getElementById("percentage").innerText="Right:"+valueR/(valueR+valueL)*100+"%";
  document.getElementById("testing3").innerText=circleclassname;
}
buttonL.addEventListener("click", getValueInput);

const getValueInput1=()=>{
  let inputValue =document.getElementsByClassName("column")[1].value;
  valueR=(valueR+parseInt(inputValue));
  document.getElementById("testing3").innerText=valueR;
  let classn="c100 p"+valueR/(valueR+valueL)*100+" green";
  
  document.getElementById("testing4").innerText="c100 p"+valueR/(valueR+valueL)*100+" green";
  document.getElementById("percentageid").className ="c100 p"+75+" green";
  document.getElementById("percentage").innerText="Right:"+valueR/(valueR+valueL)*100+"%";
  
}
buttonR.addEventListener("click", getValueInput1);