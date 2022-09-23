$(document).ready(function() {
  $('#convert').click(function(){
    var cels = parseInt($('#celsius').val());
    $('#fahrenheit').val((cels * 9.0/5.0) + 32.0);
  });    
});