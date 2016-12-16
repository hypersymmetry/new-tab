// Clock
function doClock() {
  var d = new Date();

  var month = d.getMonth();
  var date  = d.getDate();
  var year  = d.getFullYear();
  var hours = d.getHours();
  var mins  = d.getMinutes();
  var secs  = d.getSeconds();
  var ampm  = hours < 12 ? "AM" : "PM";

  hours = hours%12   ? hours%12 : 12;
  hours = hours <= 9 ? "0" + hours : hours;
  mins  = mins <= 9  ? "0" + mins  : mins;
  secs  = secs <= 9  ? "0" + secs  : secs;

  $('#clock').html(hours+":"+mins+":"+secs+" "+ampm);
  $('#date').html((month+1)+"."+date+"."+year);

  var timeout = setTimeout(doClock, 500);
}

// Onload
$(function() {
    doClock();
})