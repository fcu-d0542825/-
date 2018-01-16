$(document).ready(function () {
    //發文
    $.ajax({
        type: 'GET',
        url: './php/userCommentLength.php',
        dataType: 'json',
        commentLength: {

        },
        success: function (commentLength) {
            if (commentLength > 0) {
                $.ajax({
                    type: 'GET',
                    url: './php/userComment.php',
                    dataType: 'json',
                    comment: {

                    },
                    success: function (comment) {
                        var i;
                        for (i = 0; i < commentLength; i++) {
                            $("#menu1").append('<a style=" text-decoration:underline; color:rgb(0, 0, 0); margin-top:5px;" href="./message_files/'+ comment[i].no +'comment.html"><p>'+ comment[i].title +'</p></a>');
                        }
                    }
                });
            }
            else {
              $("#menu1").append('<p style="color:rgb(0, 0, 0); margin-top:5px;">沒有發表文章。</p>');
            }
        }
    });
    //商品
    $.ajax({
        type: 'GET',
        url: './php/userSellLength.php',
        dataType: 'json',
        sellLength: {

        },
        success: function (sellLength) {
            if ( sellLength > 0) {
                $.ajax({
                    type: 'GET',
                    url: './php/userSell.php',
                    dataType: 'json',
                    sell: {

                    },
                    success: function (sell) {
                        var i;
                        for (i = 0; i < sellLength; i++) {
                            $("#menu2").append('<a style=" text-decoration:underline; color:rgb(0, 0, 0); margin-top:5px;" href="./sell_files/'+ sell[i].no +'sell.html"><p>'+ sell[i].title +'</p></a>');
                        }
                    }
                });
            }
            else {
              $("#menu2").append('<p style="color:rgb(0, 0, 0); margin-top:5px;">沒有上架商品。</p>');
            }
        }
    });
});