$(document).ready(function() {
  $('#addBtn').click(function() {
    
    var deleteButton = "<button class='deleteBtn'><img src='images/remove-icon.png'><span class='btnText'>Remove</span></button>"
    var newItem = $('#addItemTxt').val();
    var todoItem = $("<li><input type='checkbox'>" + newItem + deleteButton + "</li>");
    todoItem.appendTo("#todoItems");
    $('#addItemTxt').val('');

    $('input:checkbox').click(function(){
      var chkBox = $(this);
      if (chkBox.is(':checked')) {
        chkBox.parent().appendTo('#completedItems').addClass('completed');
      } else {
        chkBox.parent().appendTo('#todoItems').removeClass('completed');
      }
    })

    $('.deleteBtn').click(function(){
      var btn = $(this);
      btn.parent().fadeOut(800, function() {btn.parent().remove()});
    })
  })
});
