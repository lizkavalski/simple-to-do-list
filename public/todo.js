'use strict';

let allTask = [];
$(document).ready(
  function(){
    $('#toDoList').on('submit',
      function(e){
        let toAdd = $('#ListItemInput').val();
        e.preventDefault();
        if(toAdd !== ''){
          $('#listGroup').append('<li> <button class="deletetask"> X </button>' + toAdd + ' </li>');
          allTask.push(toAdd);
          $('#ListItemInput').val('');
        } else{
          alert('Need to put in a task please.');
        }
        localStorage.setItem('list', JSON.stringify(allTask));
      });
  }
);

$(document).on('click','.deletetask',function(){
  $(this).parent().fadeOut('slow');
});

$(document).on('click','.deleteEverything',function(){
  $('#listGroup').fadeOut('slow');
  localStorage.clear('list')
})

