$(document).ready(function () {
  function second_passed() {
    $(".clock").removeClass("is-off");
  }
  setTimeout(second_passed, 2000);

  var countDownDate = new Date("May 18, 2022 09:00:00").getTime();

  setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var realTime =
      (days < 0 ? "0" : "") +
      days +
      " : " +
      (minutes < 10 ? "0" : "") +
      minutes +
      " : " +
      (seconds < 10 ? "0" : "") +
      seconds;

    $(".time").html(realTime);
    $(".time").attr("data-time", realTime);
    if (distance < 0) {
      document.getElementById("countdown").innerHTML =
        '<div class="time" style="color:white;text-align:center;display:flex;justify-content:space-evenly;align-items:center;font-size:3rem;font-family:Poppins;color:red;font-weight:600;">Festivities have already begun !</div>';
    }
  }, 1000);
});
