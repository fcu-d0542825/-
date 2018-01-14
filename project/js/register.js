$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: './php/information.php',
        dataType: 'json',
        account: {
        },
        success: function (account) {            
            if (account != "NULL") {
                alert("您已登入\n將轉至首頁");
                document.location.href = "./Home.html";
            }
        }
    });
    
    $('#sendMessageButton').click(function () {
        var on = 0;
        if ($('#account').val() != "" && $('#password').val() != "" && $('#email').val() != "") {
            $.ajax({
                type: 'GET',
                url: './php/getUser.php',
                dataType: 'json',
                length: {
                },
                success: function (length) {
                    $.ajax({
                        type: 'GET',
                        url: './php/user.php',
                        dataType: 'json',
                        data: {

                        },
                        success: function (data) {
                            var i;
                            for (i = 0; i < length; i++) {
                                var temp = data[i].username;
                                var username = $('#account').val();
                                if (temp.search(username) != -1) {
                                    on = 1;
                                    break;
                                }
                            }
                            if (on == 0) {
                                $.ajax({
                                    type: 'POST',
                                    url: './php/register.php',
                                    dataType: 'text',
                                    data: {
                                        'username': $('#account').val(),
                                        'password': $('#password').val(),
                                        'email': $('#email').val(),
                                    },
                                });
                                alert("註冊完成!\n跳轉到主頁");
                                document.location.href = "./Home.html";
                            }
                            else {
                                alert("帳號已被使用!");
                            }
                        }
                    });

                }
            });
        }
    });
});
