var currentConversion = 'CtoF';
var current = 0;
var conversions = ['CtoF', 'FtoC'];

function switchField(){
  if(currentConversion == 'CtoF')
  {
    $('#celsius').prop( "disabled", false);
    $('#fahrenheit').prop( "disabled", true);
  }
  else
  {
    $('#celsius').prop( "disabled", true);
    $('#fahrenheit').prop( "disabled", false);
  }
}

$(document).ready(function() {
  switchField();
  $('#convert').click(function(){
    if(currentConversion === 'CtoF')
    {
      var cels = parseInt($('#celsius').val());
      $('#fahrenheit').val(Math.round((cels * 9.0/5.0) + 32.0, 2));
    }
    else
    {
      var fahr = parseInt($('#fahrenheit').val());
      $('#celsius').val(Math.round((fahr - 32.0) * 5.0/9.0, 2));
    }
  });    
  $('#switcher').click(function(){
    current = !current + 0;
    currentConversion = conversions[current];
    switchField();
  });
});