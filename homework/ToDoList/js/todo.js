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
        chkBox.parent().appendTo('#completedItems');
        chkBox.parent().css('color', 'red');
        chkBox.parent().css('text-decoration', 'line-through');
      } else {
        chkBox.parent().appendTo('#todoItems');
        chkBox.parent().css('color', 'black');
        chkBox.parent().css('text-decoration', 'none');        
      }
    })

    $('.deleteBtn').click(function(){
      var btn = $(this);
      btn.parent().fadeOut(800, function() {btn.parent().remove()});
    })
  })
});
