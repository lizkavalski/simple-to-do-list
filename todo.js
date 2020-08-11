'use strict';
const addTaskToDo = () => {
  $('#addTesk').click(function(){
    let newTesk = $('#teskInput').val();
    if(newTesk !== ''){
      $('#teskList').append('<li>' + newTesk + '</li>');
      $('#teskInput').val('');
      deleteTasks();
      setTimeout(function(){
        $('#taskList li.bg-success').removeClass('bg-success');
      },1000);
    } else {
      alert('Come on, you\'re better than that');
    }
  });
};
// });

const deleteTasks = () => {
  $('.deletetask').click(function(){
    $(this).remove();
  });
};

// module.exports = addTaskToDo;
