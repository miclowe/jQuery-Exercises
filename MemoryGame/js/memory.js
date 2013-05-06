var sec = 0;
var min = 0;
var count = 0;
var counter;

$(document).ready(function(){
  function shuffle(arr){
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  }

  var letterArray = ["A","B","C","D","E",
                    "A","B","C","D","E"];
  newArray = shuffle(letterArray);

  var numOfTiles = 10;

  function timer(){
      sec += 1;
      if(sec > 59) {
        min += 1;
        sec = 0;
        min = (min < 10 ? "0" : "") + min;
      }
      // console.log(sec);
      // sec = (sec < 10 ? "0" : "") + sec;

      timeString = min + ":" + sec;
      $("#timer").html("Time: " + sec + " secs");
    }

  $('#small_btn').on('click', function(){
    sec = 0;
    counter = setInterval(timer, 1000);
    $('#game').empty();
    for(var i = 0; i < numOfTiles; i += 1){
      var span = $('<span class="ltr"></span>');
      span.append(newArray[i]);
      var div = $('<div class="box" id="box' + i + '"></div>');
      div.append(span);
      $("#game").append(div);
      $('span').hide();
    }

    $('.box').on('click', function(){
      id = $(this).attr("id");
      $(this).addClass('revealed');

      var spanLtr = $(this).children("span");

      spanLtr.show("fast");

      if($(".revealed").length === 1) {
        otherId = id;
        // console.log(otherId);
      } else {
        thisLtr = spanLtr.html();
        firstLtr = $("#" + otherId + " span").html();
        // console.log("This ltr: " + thisLtr + "; First ltr: " + firstLtr);
        if(thisLtr === firstLtr){
          $(this).unbind("click");
          $("#" + otherId).unbind("click");
          setTimeout(function(){
            $(".revealed").removeClass("revealed");
          }, 500);
          count += 1;
          if (count === 5) {
            clearInterval(counter);
            $("#winner").html("Winner, winner, chicken dinner!");
            // console.log("Winner, winner, chicken dinner!");
          }
        } else {
          setTimeout(function() {
            $(".revealed").removeClass("revealed");
            $("#" + id + " span").hide("slow");
            $("#" + otherId + " span").hide("slow");
          }, 500);
        }
      }
    });
  });
});