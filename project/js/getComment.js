$(document).ready(function() {
    var titleName = $(document).attr("title");
    //檔案名稱
    var script_name= document.location.pathname.match(/[^\/]+$/)[0];
    var tableName = script_name.replace('.html', "");
    $.ajax({
        type: 'POST',
        url: '../php/setComment.php',
        dataType: 'text',
        data: {
            'title': titleName,
            'tableName': tableName,
        },
        success: function (data) {
            //取得標題
            $.ajax({
                type: 'GET',
                url: '../php/getTitle.php',
                dataType: 'json',
                title: {
                },
                success: function (title) {
                    //取得留言內容
                    $.ajax({
                        type: 'GET',
                        url:'../php/commentLength.php',
                        dataType:'json',
                        length:{
                
                        },            
                        success: function(length) {
                            if (length > 0) {
                                $.ajax({
                                    type: 'GET',
                                    url:'../php/getComment.php',
                                    dataType:'json',
                                    comment:{
                    
                                    },            
                                    success: function(comment) {
                                        var i;
                                        reply = comment;
                                        for (i = 0; i < length ; i++) {
                                            var replyComment = reply[i].comment;
                                            while(replyComment.search('\n') != -1 ) {
                                                replyComment = replyComment.replace('\n','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')                                
                                            }  
                                          $("#reply").append('<div class="reply-box col-sm-12 col-md-12 col-lg-12 col-xl-12">');  
                                          $("#reply").append('  <span class="reply-name message-name text-left">' + reply[i].username +'</span>');                                         
                                          $("#reply").append('  <span class="reply-desc col-sm-10 col-md-10 col-lg-10 col-xl-10">:'+ replyComment +'</span>');  
                                          $("#reply").append('  <span class="reply-time text-right">' + reply[i].date +'</span>'); 
                                          $("#reply").append('</div');     
                                        }
                                    }
                                });                                 
                            }
                        }
                    });

                    var titleComment = title[0].comment;
                    while(titleComment.search('\n') != -1 ) {
                        titleComment = titleComment.replace('\n','<br>')                                
                    }  
                    $(".message-title").append('<span>' + title[0].title + '</span>');
                    $(".message-time").append('<span>' + title[0].date + '</span>');
                    $("#author").append('<span>' + title[0].username + '</span>');
                    $(".message-desc").append('<span>' + titleComment + '</span>');
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