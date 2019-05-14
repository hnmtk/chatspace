$(function(){
  function buildHTML(message){
    var image = message.image != null ? `<img class='lower-message__image' src='${message.image}' >` : ''
    var html = `<div class='message'>
                  <div class='upper-info'>
                    <p class='upper-info__user'>
                      ${message.name}
                    </p>
                    <p class='upper-info__date'>
                      ${message.date}
                    </p>
                  </div>
                  <div class='lower-message'>
                    <p class='lower-message__text'>
                      ${message.content}
                    </p>
                    ${image}
                  </div>
                </div>`
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.input-box').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.new_message')[0].reset()
      $('.new_message__submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.new_message__submit-btn').attr('disabled', false);
    })
  })
})