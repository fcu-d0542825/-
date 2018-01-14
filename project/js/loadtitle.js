$(document).ready(function() {
    var message;
    $.ajax({
        type: 'GET',
        url:'./php/titleLength.php',
        dataType:'json',
        length:{

        },            
        success: function(length) {
            $.ajax({
                type: 'GET',
                url:'./php/loadtitle.php',
                dataType:'json',
                data:{

                },            
                success: function(data) {
                    var i;
                    message = data;
                    for (i = length - 1; i>=0 ; i--) {
                        $(".title").append('<div><h4 style="margin-top:50px;"><a href="./message_files/'+ message[i].no +'comment.html" style="color:black; text-decoration:underline;">' + message[i].title + '</a></h4></div>');
                        $(".title").append('<div class="date" ><p>' + message[i].date + '</p></div>');
                    }
                }
            }); 
        }
    });

});