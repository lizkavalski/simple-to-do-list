'use strict';
$(document).ready(
  function(){
    $('#button').click(
      function(){
        var toAdd = $('input[name=ListItem]').val();
        $('ol').append('<li>' + toAdd + '</li>');
      });

    $('input[name=ListItem]').keyup(function(event){
      // eslint-disable-next-line eqeqeq
      if(event.keyCode == 13){
        $('#button').click();
      }
    });

    $(document).on('dblclick','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function() {
      $(this).val('');
    });

    $('ol').sortable();

  }
);
