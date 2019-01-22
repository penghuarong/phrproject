var ls = window.localStorage;
var arr = JSON.parse(ls.getItem("his")) || [];
var str = '';
$.each(arr, function(i, v) {
    str += `<li>${v}</li>`;
})
$('.list').html(str);
$('#btn').on('tap', function() {
    var value = $('.text').val();
    if ($.inArray(value, arr) == -1) {
        arr.push(value);
        ls.setItem('his', JSON.stringify(arr));
    }
    // window.location.href = "www.baidu.com";
})
$('#del').on('tap', function() {
    $('.mark').removeClass('hidden');
    $('.sure').on('tap', function() {
        $('.mark').addClass('hidden');
        arr = [];
        ls.clear();
        $('.list').html('');
    })
})