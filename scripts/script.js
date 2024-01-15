let loader = $('.loader');
let form = $('.form');
let thanks = $('#thanks');
let product = $('#productName');
let name = $('#clientName');
let phone = $('#phoneNumber');
let orderTitle = $('.order__title');
let orderTxt = $('.order__txt');
let hasError = false;

form.show();
orderTitle.show();
orderTxt.show();
thanks.hide();
phone.inputmask({'mask': '+375(99)999-99-99'});

$('#submit').click(function () {
    hasError = false;

    $('.error-input').hide();
    product.css('border-color', 'rgb(130, 19, 40)');
    name.css('border-color', 'rgb(130, 19, 40)');
    phone.css('border-color', 'rgb(130, 19, 40)');
    product.next().hide();
    name.next().hide();
    phone.next().hide();

    if (!product.val()) {
        product.next().show();
        product.css('border-color', 'red');
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: 'POST',
            url: 'https://testologia.site/checkout',
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    form.hide();
                    orderTitle.hide();
                    orderTxt.hide();
                    thanks.css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            })
    }
});

$('#burger').click(() => {
    $('#menu').addClass('menu__open');
});

$('#menu *').each((index, element) => {
    $(element).click(() => {
        $('#menu').removeClass('menu__open');
    });
});

$('.select__btn').click(event => {
   $('.order')[0].scrollIntoView({behavior: 'smooth'});
   $('#productName')
       .val($(event.target)
       .parents('.select__macaroon')
       .find('.select__ingredient')
       .text());
});

// document.getElementById('burger').onclick = function () {
//     document.getElementById('menu').classList.add('menu__open');
// }
//
// document.querySelectorAll('#menu *').forEach((item) => {
//     item.onclick = () => {
//         document.getElementById('menu').classList.remove('menu__open');
//     }
// });

