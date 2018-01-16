$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: './php/information.php',
        dataType: 'json',
        account: {
        },
        success: function (account) {
            user = "NULL";            
            if (account != "NULL") {
                user = account;
                var information = '<li class="nav-item mx-0 mx-lg-1" id="userName"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="./user.html">'+ user +'</a></li>';
                $(".navbar-nav").append(information);
            }
            else {
                alert("請先登入\n轉至登入頁面");
                document.location.href = "./Login.html";
            }
        },
        error: function(account) {
            alert("請先登入\n轉至登入頁面");
            document.location.href = "./Login.html";
        }
    });
});