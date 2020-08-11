'use strict';
$('#addTesk').click(function(){
  let newTesk = $('#teskInput').val();
  if(newTesk !== ''){
    let count = $('#teskList').children().length;
    $('#teskList').append('<li class="listItem deletetask bg-success">' + count + '.' + newTesk + '</li>');
    $('#teskInput').val('');
    deleteTasks();

    setTimeout(function(){
      $('#taskList li.bg-success').removeClass('bg-success');
    },1000);
  } else {
    alert('Come on, you\'re better than that');
  }
});
// });

const deleteTasks = () => {
  $('.deletetask').click(function(){
    $(this).remove();
  });
};
