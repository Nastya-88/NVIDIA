import $ from '../local_modules/jquery/dist/jquery.min'
// $(document).ready(() => {
//     console.log(`document ready`)
// })
$('.header__menu-icon').click(function () {
    $('.header__menu-icon').toggleClass('menu-active');
});