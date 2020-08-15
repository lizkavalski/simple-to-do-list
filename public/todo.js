'use strict';
$(document).ready(
  function(){
    $('#toDoList, #button').click(
      function(){
        let toAdd = $('#ListItemInput').val();
        if(toAdd !== ''){
          $('#listGroup').append('<li>' + toAdd + ' <button id="deletetask"> X </button></li>');
          $('#ListItemInput').val('');
        } else{
          alert('Need to put in a task please.');
        }
      });
  }
);
$(document).on('click','li',function(){
  $(this).fadeOut('slow');
});

