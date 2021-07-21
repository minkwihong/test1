$(function(){

    // feedback
    $('.test_nav a').eq(1).on('click',function(){
        $('.feedback').show();
    });
    $('.feedback img').on('click',function(){
        $('.feedback').hide();
    });


    // question 문제풀이 활성화
    $('.question ul li p').on('click',function(){
        var idx = $(this).parents().index();
        $('.question ul li').removeClass('active');
        $(this).parents().addClass('active');
        $('.question ul li').eq(idx).find('input[type=radio]').prop('checked',true);
        $(this).removeClass('active');
    })

    $('.question ul li label').on('click',function(){
        var idx = $(this).parents().index();
        $('.question ul li').removeClass('active');
        $(this).parents().addClass('active');
        $('.question ul li').eq(idx).find('input[type=radio]').prop('checked',true);
        $(this).removeClass('active');
    });

    // question 선택 취소
    $('.question ul li a').on('click',function(){
        var idx = $(this).parents().index();
        $('.question ul li').eq(idx).find('input[type=radio]').prop('checked',false);
        $(this).parents().removeClass('active');
        $('.question ul li').eq(idx).find('p').toggleClass('active');
    });

    //bookmark 활성화
    $('.question svg').on('click',function(){
        $(this).toggleClass('active');
    });


    // next btn
    var questionIdx = 1;
    $('.next').on('click',function(){
        if(11 > questionIdx)
        questionIdx++;
        console.log(questionIdx)
        $('.question h2 span').text(questionIdx);
        if( 11 == questionIdx){
            $('.popup_bg').show();
            $('.popup').show();
            $('.popup p').text('Complete Practice.');

            setTimeout(function(){
                $('.popup_bg1').show();
            },1000)
        }
    });

    // prev btn
    $('.prev').on('click',function(){
        if(1 < questionIdx){questionIdx--;}
        if( 1 == questionIdx){
            $('.popup_bg').show();
            $('.popup').show();
        }
        
        $('.question h2 span').text(questionIdx);
    })

    // practice 닫기
    $('.result h4 img').on('click',function(){
        $('.popup_bg1').hide();
    });

    //practice 오늘날짜 표기
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    var day = date.getDate();
    $('.result h4 span').text('( ' +year + '. ' + month +'. ' + day + '. )' );


    // end btn
    $('.end').on('click',function(){
        $('.popup').show();
        $('.popup_bg').show();
        $('.popup p').text('Would you like to end the test now?');
        $('.popup p').append('<span>Unmarked questions will be reported as incorrect.</span>')

        $('.popup a').text('No')
        $('.popup a').after(' <a>Yes</a>')
        $('.popup a').eq(0).css({
            "background" : '#ededed',
            "color" : "#333"
        })
    });

    $('.popup a').on('click',function(){
        $('.popup_bg').hide();
        $('.popup').hide();
    });

    $('.btn a').eq(1).on('click',function(){
        window.location.href = "review_act_english.html";
    });

    $('.test_nav a').eq(0).on('click',function(){
        $('.tuto').show();
    });

    $('.tuto a').on('click',function(){
        $('.tuto').hide();
    });

});