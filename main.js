// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate = countDownDate + 8640000
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // distance = distance+8640;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days+" days";
  document.getElementById("hours").innerHTML =hours+" hours";
  document.getElementById("minutes").innerHTML =minutes+" minutes";
  document.getElementById("seconds").innerHTML =seconds+" seconds";
  // If the count down is over, write some text seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "OFFER TIME IS EXPIRE";
  }
}, 1000);
function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/android/i.test(userAgent)) {
      return "Android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  } else {
      return "Desktop";
  }
}
const destop = document.querySelectorAll('.destop');
const android = document.querySelectorAll('.android');
const ios = document.querySelectorAll('.ios');
if(detectDevice()=="Desktop"){
  destop.forEach(element => {
    element.style.display = 'flex';
  });
}
if(detectDevice()=="Android"){
  android.forEach(element => {
    element.style.display = 'flex';
  });
}
  if(detectDevice()=="iOS"){
    ios.forEach(element => {
      element.style.display = 'flex';
    });
}
