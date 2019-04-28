/**
 * Created by LYSM on 2019/3/16.
 */
$(function () {
    $('#down').click(function () {
        $('.list').toggle()
    })
    $(window).on('scroll',function () {
        if($(window).scrollTop()>100){
            $('.three_icon').css('visibility','visible');
        }else{
            $('.three_icon').css('visibility','hidden');
        }
    });
    $('.three_icon').click(function () {
        $('html,body').animate({
            scrollTop:0
        },200)
    })
    $('.show_btn').click(function () {

        $('#mask').toggle()

    }).on('click',function () {
        $('.loginIn').toggle()

    })
    $('.close').click(function () {

        $('#mask').toggle()

    }).on('click',function () {
        $('.loginIn').toggle()
    })
    $('.img_input').click(function () {
        $('.img_close').toggle()
    })

})