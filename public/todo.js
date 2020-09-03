'use strict';
$(document).ready(
  function(){
    $('#toDoList').on('submit',
      function(e){
        let toAdd = $('#ListItemInput').val();
        e.preventDefault();
        if(toAdd !== ''){
          $('#listGroup').append('<li> <button id="deletetask"> X </button>' + toAdd + ' </li>');
          $('#ListItemInput').val('');
          console.log('line 10', toAdd);
        } else{
          alert('Need to put in a task please.');
        }
      });
  }
);



$(document).on('click','li',function(){
  $(this).fadeOut('slow');
});

