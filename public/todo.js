'use strict';
// window.onload=function(){
//   let list = localStorage.getItem()
//   if(list !== null){
//     $('');
//   }
// }

let allTask= localStorage.getItem('list')||[]
$(document).ready(
  function(){
    $('#toDoList').on('submit',
      function(e){
        let toAdd = $('#ListItemInput').val();
        e.preventDefault();
        if(toAdd !== ''){
          $('#listGroup').append('<li> <button id="deletetask"> X </button>' + toAdd + ' </li>');
          let newTask = localStorage.setItem('list', JSON.stringify(toAdd));
          allTask.push(newTask);
          $('#ListItemInput').val('');
          console.log('line 10', toAdd);
        } else{
          alert('Need to put in a task please.');
        }
      });
  }
);

$(document).on('click','#deletetask',function(){
  $('li').fadeOut('slow');
  localStorage.removeItem('list');
});


