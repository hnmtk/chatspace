$(function(){
  function buildHTML(message){
    var html_1 = `<div class='message'>
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
                    </p>`
    var html_2 =    `<img class='lower-message__image' src='${message.image}' >`
    var html_3 =  `</div>
                </div>`
    if (message.image != null){
      var html = html_1 + html_2 + html_3;
      return html;
    } else{
      var html = html_1 + html_3;
      return html;
    };
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
      $('.input-box__text').val('')
      $('.new_message__submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.new_message__submit-btn').attr('disabled', false);
    })
  })
})