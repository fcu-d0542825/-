$(document).ready(function() {
    var message;
    $.ajax({
        type: 'GET',
        url:'./php/sellLength2.php',
        dataType:'json',
        length:{

        },            
        success: function(length) {
            $.ajax({
                type: 'GET',
                url:'./php/sellTitle2.php',
                dataType:'json',
                data:{

                },            
                success: function(data) {
                    var i;
                    message = data;
                    for (i = length - 1; i>=0 ; i--) {
                        $("#title").append('    <div class="box col-7 col-sm-6 col-md-4 col-lg-3 col-xl-2 container"><a href="./sell_files/' + message[i].no +'sell.html" ><img class="img img-fluid" src="' + message[i].src +'" alt="預覽圖片。"><p class="sellTitle">'+ message[i].title +'</p></a></div>');
                    }
                }
            }); 
        }
    });


    $('#submit').click(function () {
        var value = $("#myInput").val().toLowerCase();
        $(".box").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

});