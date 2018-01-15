$(document).ready(function () {

    //發文
    $('#submit').click(function () {
        //確認登入
        $.ajax({
            type: 'GET',
            url: '../php/information.php',
            dataType: 'json',
            account: {
            },
            success: function (account) {
                if (account != "NULL") {
                    user = account;
                    var comment = $('#comment').val();
                    var script_name= document.location.pathname.match(/[^\/]+$/)[0];
                    var tableName = script_name.replace('.html', "");

                    if (comment != '') {
                        var d = new Date()
                        var vYear = d.getFullYear()
                        var vMon = d.getMonth() + 1
                        var vDay = d.getDate()
                        var h = d.getHours();
                        var m = d.getMinutes();
                        var date = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);

                        $.ajax({
                            type: 'POST',
                            url: '../php/newComment.php',
                            dataType: 'text',
                            data: {
                                'tableName': tableName,
                                'username': user,
                                'comment': comment,
                                'date': date,
                            },
                            success: function (data) {
                                alert('發文成功');
                                location.reload();
                            },
                            error: function (data) {
                                alert("失敗");
                            }
                        });            
                    }
                    else {
                        alert('內文請勿空白。');
                    }
                }
                else {
                    alert("請先登入");
                    document.location.href = "../Login.html";
                }
            }
        });
    });
});