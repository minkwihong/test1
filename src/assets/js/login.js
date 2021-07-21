$(function () {
    $('.pw_view').on('click', function (e) {
        e.preventDefault();

        $('.pw_view svg').toggleClass('active');
        if ($('.pw_view svg').hasClass('active') == true) {
            $('.pw').attr('type', 'text');
        } else {
            $('.pw').attr('type', 'password');
        }
    });

    $('.forgot_pw a').on('click', function (e) {
        e.preventDefault();
        $('.pw_popup').show();
        $('.pop_bg').show();
    });

    $('.close').on('click', function () {
        $('.pw_popup').hide();
        $('.pop_bg').hide();
    });
});