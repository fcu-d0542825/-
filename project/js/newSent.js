$(document).ready(function () {
    //確認登入
    $.ajax({
        type: 'GET',
        url: './php/information.php',
        dataType: 'json',
        account: {
        },
        success: function (account) {
            if (account != "NULL") {
                user = account;
                var information = '<li class="nav-item mx-0 mx-lg-1" id="userName"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">' + user + '</a></li>';
                $(".navbar-nav").append(information);
            }
            else {
                alert("請先登入");
                document.location.href = "./Login.html";
            }
        }
    });

    //發文
    $('#submit').click(function () {

        var d = new Date()
        var vYear = d.getFullYear()
        var vMon = d.getMonth() + 1
        var vDay = d.getDate()
        var h = d.getHours();
        var m = d.getMinutes();
        date = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);

        title = $('#title').val();
        comment = $('#comment').val();

        $.ajax({
            type: 'POST',
            url: './php/newSent.php',
            dataType: 'text',
            data: {
                'username': user,
                'title': title,
                'comment': comment,
                'date': date,
            },
            success: function (data) {
                $.ajax({
                    type: 'POST',
                    url: './message_files/comentTable.php',
                    dataType: 'text',
                    data: {
                        'title': title,
                    },
                    success: function (data) {
                        $.ajax({
                            type: 'GET',
                            url:'./php/sentNext.php',
                            dataType:'json',
                            data:{

                            },            
                            success: function(data) {
                                var next = './message_files/' + data;
                                document.location.href = next;
                            }
                        });
                        alert("跳轉到下一個頁面");
                    },
                    error: function (data) {
                        alert("失敗");
                    }
                });               
                alert("發文成功");

            },
            error: function (data) {
                console.log(data)
                alert("失敗");
            }
        });
    });

});