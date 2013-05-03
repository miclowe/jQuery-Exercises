$(document).ready(function(){

  $('#name').bind('blur submit', function(event) {
    event.preventDefault();
    var name = $(this);
    var namelength = $(this).val().length;
    if(namelength <= 3){

      $(this).focus();
    }
  });

 $('form').on('submit', function(event) {
    event.preventDefault();

  });

});