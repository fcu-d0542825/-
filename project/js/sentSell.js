$(document).ready(function () {
    $('#submit').click(function() {
        var username = $("#userName").text();
        var comment = $('#comment').val();
        var fileName = $('#sellTime').val();
        var title = $('#sellTime').text();
        var d = new Date()
        var vYear = d.getFullYear()
        var vMon = d.getMonth() + 1
        var vDay = d.getDate()
        var h = d.getHours();
        var m = d.getMinutes();
        date = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
    
        alert(username);
        alert(date);
        alert(comment);
        alert(fileName);
        alert(title);

       /* $.ajax({
            type: 'POST',
            url: './php/newSell.php',
            dataType: 'text',
            data: {
                'username': user,
                'title': title,
                'comment': comment,
                'date': date,
                'imgSrc': imgSrc,
                'wanted': wanted,
            },
            success: function (data) {
            },
        });*/
    });
});