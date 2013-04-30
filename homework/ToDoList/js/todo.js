$(document).ready(function() {
  var count = 1;
  $('#addBtn').click(function() {
    
    var newItem = $('#addItemTxt').val();
    var todoItem = $("<li><input type='checkbox' id='item" + count + "'>" + newItem + "<button class='deleteBtn'><img src='images/remove-icon.png'><span class='btnText'>Remove</span></button></li>");

    todoItem.appendTo("#todoList");
    $('#addItemTxt').val('');
    count += 1;

    $('input:checkbox').click(function(){
      var cb = $(this);
      if (cb.is(':checked')) {
        cb.parent().appendTo('#completed');
        cb.parent().css('color', 'red');
        cb.parent().css('text-decoration', 'line-through');
      } else {
        cb.parent().appendTo('#todoList');
        cb.parent().css('color', 'black');
        cb.parent().css('text-decoration', 'none');
        
      }
    })

    $('.deleteBtn').click(function(){
      var btn = $(this);
      btn.parent().remove();
    })



    // todoItem.click(function() {
    //   var item = $(this);
    //   // $('input[name=' + newItem + ']').remove();
    //   item.appendTo("#completed");
    //   item.css("color", "red");
    //   item.css("text-decoration", "line-through");
    // })
  })
});

