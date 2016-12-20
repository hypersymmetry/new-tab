// Clock
function doClock() {
  var d = new Date();

  var month = d.getMonth();
  var date  = d.getDate();
  var day   = d.getDay();
  var year  = d.getFullYear();
  var hours = d.getHours();
  var mins  = d.getMinutes();
  var secs  = d.getSeconds();

  // 12 hour clock
  // var ampm  = hours < 12 ? "AM" : "PM";
  // hours = hours%12   ? hours%12 : 12;

  hours = hours <= 9 ? "0" + hours : hours;
  mins  = mins <= 9  ? "0" + mins  : mins;
  secs  = secs <= 9  ? "0" + secs  : secs;

  $('.time').html(hours+":"+mins+":"+secs);

  var months =
    ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  $('.date').html(days[day]+", "+months[month]+" "+date+", "+year);

  var hex = "#" + hours + mins + secs;
  $("body").css("background-color", hex);
  $('.hex').html(hex);

  setTimeout(doClock, 500);
}

// Onload
$(function() {
    doClock();
})
