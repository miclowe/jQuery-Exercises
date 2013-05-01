$(document).ready(function() {

$("#addBtn").on("click", function(){
  var newItem = $("<span>" + $('#addItemTxt').val() + "</span>");
  var listTags = $("<li></li>");
  var checkBox = $("<input type='checkbox'>");
  var deleteImg = $("<button class='deleteBtn'><img class='delete' src='images/remove-icon.png'><span class='btnText'>Remove</span></button>");

  deleteImg.on("click", function(){
    var btn = $(this);
    btn.parent().fadeOut(800, function() {btn.parent().remove()});
  });

  checkBox.on("click", function(){
    var chkBox = $(this);
      if (chkBox.is(':checked')) {
        chkBox.parent().appendTo('#completedItems').addClass('completed');
      } else {
        chkBox.parent().appendTo('#todoItems').removeClass('completed');
      }
    });

  $(checkBox).appendTo(listTags);
  $(newItem).appendTo(listTags);
  $(deleteImg).appendTo(listTags);
  $(listTags).appendTo('#todoItems');
  $('#addItemTxt').val('');
  });
 });
