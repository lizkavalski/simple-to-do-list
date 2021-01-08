'use strict';
$(document).ready(
  function(){
    let allTask = [];
    $('#toDoList').on('submit',
      function(e){
        let toAdd = $('#ListItemInput').val();
        e.preventDefault();
        if(toAdd !== ''){
          $('#listGroup').append('<li> <button id="deletetask"> X </button>' + toAdd + ' </li>');
          allTask.push(toAdd);
          $('#ListItemInput').val('');
          console.log('line 10', toAdd);
        } else{
          alert('Need to put in a task please.');
        }
        localStorage.setItem('list', JSON.stringify(allTask));
      });
  }
);

$(document).on('click','#deletetask',function(){
  $('li').fadeOut('slow');
  localStorage.removeItem('list');
});


