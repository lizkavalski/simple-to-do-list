'use strict';
$(document).ready(
  function(){
    $('#button').on('keypress || click',
      function(e){
        let toAdd = $('#ListItemInput').val();
        if(toAdd !== ''){
          if(e.which === 13 || e.type === 'click'){
            $('#listGroup').append('<li>' + toAdd + ' <button id="deletetask"> X </button></li>');
            $('#ListItemInput').val('');
          }
        } else{
          alert('Need to put in a task please.');
        }
      });
  }
);



$(document).on('click','li',function(){
  $(this).fadeOut('slow');
});

