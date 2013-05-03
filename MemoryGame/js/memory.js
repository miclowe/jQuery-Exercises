

$(document).ready(function(){

  var letterTiles = new Array();
  var tile = '';
  var numOfTiles = 10;

  $('#small_btn').on('click', function(){

    for(var i = 0; i < numOfTiles; i += 1){
      tile += '<li class="tile" id="'+ i +'"><div class="front"></div><div class="back hidden">Test</div></li>';
    }

    $('#game').html(tile);

    $('.tile').on('click', function(){
      $(this).children(':first').fadeTo('fast', 0);
      $(this).children(':last').removeClass('hidden');
    });
  });
});