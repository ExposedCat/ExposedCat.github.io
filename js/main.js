$('a#price').click(function () {
    $('#price_modal').css({
        visibility: 'visible'
    })
    $('body').css({
        'overflow-y': 'hidden',
        'padding-right': '16px'
    })
})
$('#price_close').click(function () {
    $('#price_modal').css({
        visibility: 'hidden'
    })
    $('body').css({
        'overflow-y': 'scroll',
        'padding-right': '0'
    })
})
$('.work_img').click(function () {
    $('#modal_img').attr('src', $(this).attr('src'))
    $('body').css({
        'overflow-y': 'hidden',
        'padding-right': '16px'
    })
    $('#modal_img').show()
})
$('#modal_img').click(function () {
    $(this).hide()
    $('body').css({
        'overflow-y': 'scroll',
        'padding-right': '0'
    })
})
$('.goto').on('click', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
        top = $(id).offset().top
    $('html, body').animate({ scrollTop: top - 110 }, 800)
    setTimeout(function () {
        window.location = id
    }, 700)
})
$('.mob_menu_ul').hide()
$('.mob_menu').click(function () {
    if ($('.mob_menu_ul').hasClass('hidden')) {
        $('.menu_button_img').attr('src', 'img/close.png')
        $('.mob_menu_ul').show()
        $('.mob_menu_ul').removeClass('hidden')
        $('.mob_menu').css({
            'width': '100%',
            'height': '172px'
        })
    } else {
        $('.menu_button_img').attr('src', 'img/open.png')
        $('.mob_menu_ul').hide()
        $('.mob_menu_ul').addClass('hidden')
        $('.mob_menu').css({
            'width': '36px',
            'height': '36px'
        })
    }
})
$('.menu_li_main').on('click', function (event) {
    let scroll = window.pageYOffset
    if (scroll >= 5) {
        event.preventDefault()
        let id = '#start',
            top = $(id).offset().top
        $('html, body').animate({ scrollTop: top - 172 }, 800)
        setTimeout(function () {
            window.location = id
        }, 700)
    }
})
$(document).on('scroll', () => {
    let scroll = window.pageYOffset
    if (scroll >= 5) {
        $('.main_header').css({
            'height': '110px'
        })
        $('.small_header').hide()
    } else {
        $('.main_header').css({
            'height': '130px'
        })
        $('.small_header').show()
    }
})
