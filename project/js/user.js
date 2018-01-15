$(document).ready(function () {

    $('#logout').click(function () {
            $.ajax({
                type: 'POST',
                url: './php/logout.php',
                dataType: 'text',
                data: {

                },
                success: function (data) {
                    alert('登出完成');
                    history.go(-1);
                },
                error: function (data) {
                    alert("失敗");
                }
            });            
    });

});