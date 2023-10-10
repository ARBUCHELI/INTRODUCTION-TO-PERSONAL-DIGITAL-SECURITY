$(document).ready(function() {
    $('#password').on('keyup', function(e) {
      password = $('#password').val();
      console.log(password);
      const method = "POST";
      if (method === 'POST') {
        const body = {
          password
        };
        $.ajax({
          method: method,
          url: '',
          data: JSON.stringify(body),
          contentType: 'application/json',
          success: handleSuccess,
          error: function(jqxhr) {
            $('#status-code').text(jqxhr.status);
            $('#response-body').text('');
          }
        });
      } else {
        $.ajax({
          method: method,
          url: path,
          success: handleSuccess,
          error: function(jqxhr) {
            $('#status-code').text(jqxhr.status);
            $('#response-body').text('');
          }
        });
      }
      e.preventDefault();
    });
  });
  
  function handleSuccess(response, status, jqxhr) {
    $('#status-code').text(jqxhr.status);
    $('#response-body').text(JSON.stringify(response, null, 4));
  }