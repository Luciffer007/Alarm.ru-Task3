$(document).ready(function() {
    $('input[type="button"]').click(function(){
        /* Проверка введён ли логин */
        if( !$('input[type="text"]').val() ) {
            $('input[type="text"]').val("");
            $('input[type="password"]').val("");
            alert("Логин не введён");
            return;
        }
        /* Проверка введён ли пароль */
        if( !$('input[type="password"]').val() ) {
            $('input[type="text"]').val("");
            $('input[type="password"]').val("");
            alert("Пароль не введён");
            return;
        }
        /* Проверка на наличие цифр в начале логина */
        if (/^[0-9]/i.test($('input[type="text"]').val())) {
            $('input[type="text"]').val("");
            $('input[type="password"]').val("");
            alert("Неверный логин или пароль");
            return;
        }
        window.open("newhtml.html","_self");
    });
});

