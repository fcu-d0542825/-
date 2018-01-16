$(document).ready(function () {
    var titleName = $(document).attr("title");
    //檔案名稱
    var script_name = document.location.pathname.match(/[^\/]+$/)[0];
    var tableName = script_name.replace('.html', "");

    $.ajax({
        type: 'POST',
        url: '../php/setSell.php',
        dataType: 'text',
        data: {
            'title': titleName,
            'tableName': tableName,
        },
        success: function (data) {
            //取得標題
            $.ajax({
                type: 'GET',
                url: '../php/getSell.php',
                dataType: 'json',
                title: {
                },
                success: function (title) {

                    var titleComment = title[0].comment;
                    while (titleComment.search('\n') != -1) {
                        titleComment = titleComment.replace('\n', '<br>')
                    }
                    $(".message-title").append('<span>' + title[0].title + '</span>');
                    $(".message-time").append('<span>' + title[0].date + '</span>');
                    $("#author").append('<span>' + title[0].username + '</span>');
                    $(".message-desc").append('<p>' + titleComment + '</p>');
                    $("#img").append('<img id="preImg" class="img-fluid" style="max-width:300px; height:inherit; overflow:hidden;" src="' + title[0].src + '" alt="預覽圖片。">');
                    $(".message-wanted").append('<span>' + title[0].wanted + '</span>');
                    username = title[0].username;
                    if (title[0].username != $("#userName").text()) {
                        $("#reply").append('       <form><div class="replyForm form-group"><label>選擇一個要交換的商品:</label><select class="form-control" id="sellTitle"></select><label>給賣家的話</label><input type="text" class="form-control" id="comment"><button id="submit" type="button" class="btn btn-success " style="margin-top:20px;">送 出</button></div></form>');

                        //
                        $.ajax({
                            type: 'GET',
                            url: '../php/emailLength.php',
                            dataType: 'json',
                            emailLength: {

                            },
                            success: function (emailLength) {
        
                                $.ajax({
                                    type: 'GET',
                                    url: '../php/getEmail.php',
                                    dataType: 'json',
                                    email: {

                                    },
                                    success: function (email) {
                                        for (i = 0; i < emailLength ; i++) {
                                            if (email[i].username.search(username) != -1) {
                                                $(".replyForm").append('<a href="mailto:' + email[i].email + '"><button id="email" type="button" class="btn btn-success " style="margin-top:20px;margin-left:20px;">聯絡賣家</button></a>');
                                                break;
                                            }
                                        }
                                    },
                                });           
                            },
                        });



                        //
                        $.ajax({
                            type: 'GET',
                            url: '../php/ownLength.php',
                            dataType: 'json',
                            length: {
                            },
                            success: function (length) {
                                $.ajax({
                                    type: 'GET',
                                    url: '../php/ownSell.php',
                                    dataType: 'json',
                                    own: {
                                    },
                                    success: function (own) {
                                        for (i = length - 1; i >= 0; i--) {
                                            $("#sellTitle").append('<option id="'+  own[i].no + 'sell" value="' + own[i].no + 'sell">' + own[i].title + '</option>');
                                        }

                                        //
                                        $('#submit').click(function () {
                                            if ($("#userName").text() != '登入') {
                                                var script_name = document.location.pathname.match(/[^\/]+$/)[0];
                                                var tableName = script_name.replace('.html', "");
                                                var username = $("#userName").text();
                                                var comment = $('#comment').val();
                                                var fileName = $('#sellTitle').val();
                                                var title = $('#' + fileName).text();
                                                var d = new Date()
                                                var vYear = d.getFullYear()
                                                var vMon = d.getMonth() + 1
                                                var vDay = d.getDate()
                                                var h = d.getHours();
                                                var m = d.getMinutes();
                                                date = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
                                                if (title != '') {
                                                    $.ajax({
                                                        type: 'POST',
                                                        url: '../php/sellRply.php',
                                                        dataType: 'text',
                                                        data: {
                                                            'tableName': tableName,
                                                            'username': user,
                                                            'title': title,
                                                            'comment': comment,
                                                            'date': date,
                                                            'fileName': fileName,
                                                        },
                                                        success: function (data) {
                                                            alert("成功。");
                                                            location.reload();
                                                        },
                                                    });
                                                }
                                                else {
                                                    alert('請選擇商品。');
                                                }
                                            }
                                            else {
                                                alert("請先登入。");
                                                document.location.href = "../Login.html";
                                            }

                                        });



                                        //
                                    },
                                });
                            },
                        });
                    }
                    else {
                        var titleName = $(document).attr("title");
                        //檔案名稱
                        var script_name = document.location.pathname.match(/[^\/]+$/)[0];
                        var tableName = script_name.replace('.html', "");
                        $.ajax({
                            type: 'POST',
                            url: '../php/setSell.php',
                            dataType: 'text',
                            data: {
                                'tableName': tableName,
                                'title': titleName,
                            },
                            success: function (data) {
                                $.ajax({
                                    type: 'GET',
                                    url: '../php/replyLength.php',
                                    dataType: 'json',
                                    length: {
                                    },
                                    success: function (length) {
                                        
                                        $.ajax({
                                            type: 'GET',
                                            url: '../php/replySell.php',
                                            dataType: 'json',
                                            reply: {
                                            },
                                            success: function (reply) {
                                                
                                                $("#reply").append('<h4 class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">有意交換的商品</h4>');
                                                for (i = 0; i < length; i++) {
                                                    $("#reply").append('<div><h5 style="margin-top:10px; word-wrap:break-word; " class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11"><a href="./' + reply[i].fileName + '.html" style="color:black; text-decoration:underline;">標題:' + reply[i].sellTitle + '</a></h5></div>');
                                                    $("#reply").append('<div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" "><p>留言:' + reply[i].comment + ' </p></div>');
                                                }

                                            }
                                        });
                                    },
                                });
                            },
                        });
                    }
                },
                error: function (data) {
                    alert("失敗");
                }
            });

        },
        /*  error: function (data) {
              console.log(data)
              alert("失敗");
          }*/
    });

});