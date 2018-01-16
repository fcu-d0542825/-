$(document).ready(function () {
    
    
    $.ajax({
        type: 'GET',
        url: './php/information.php',
        dataType: 'json',
        account: {
        },
        success: function (account) {            
            if (account != "NULL") {
                alert("您已登入\n將轉至上一頁");
                history.go(-1);
            }
        }
    });

    $('#sendMessageButton').click(function () {
        if ($('#account').val() != "" && $('#password').val() != "") {
            user = $('#account').val();
            $.ajax({
                type: 'POST',
                url: './php/checkLogin.php',
                dataType: 'text',
                data: {
                    'username': user,
                    'password': $('#password').val(),
                },
                success: function (data) {
                    $.ajax({
                        type: 'GET',
                        url: './php/information.php',
                        dataType: 'json',
                        account: {
                        },
                        success: function (account) {
                            if (account == user) {
                                alert('歡迎' + user);
                                //document.location.href = "./Home.html";
                                history.go(-1);
                            }
                            else {
                                alert("帳號或密碼錯誤");
                            }
                        }
                    });
                }
            });
        }
        else {
            alert("帳號或密碼錯誤");
        }

    });
});
