$(function(){
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    $('#user-search-result').append(html);
  }
  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`
    $('#user-search-result').append(html);
  }
  function changeUser(userName, userId) {
    var html =`<div class='chat-group-user clearfix js-chat-member' id='${ userId }'>
                <input name='group[user_ids][]' type='hidden' value='${ userId }'>
                <p class='chat-group-user__name'>${ userName }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    $("#chat-group-users").append(html);
  };

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  $(document).on("click", ".chat-group-user__btn--add", function(){
    $(this).parent().remove();
    var userName = $(this).data('user-name');
    var userId   = $(this).data('user-id');
    changeUser(userName, userId);
  });
  $(document).on("click", ".chat-group-user__btn--remove", function(){
    $(this).parent().remove();
  });
});