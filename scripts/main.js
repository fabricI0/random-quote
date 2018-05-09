$(document).ready(function () {

    let initialRandomQuote = $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function (data) {
        $(".message").html(data[0].content + " — " + data[0].title);
    });


    $(".btn-quote").on('click', function () {
        $.ajaxSetup({cache: false});
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function (data) {
            $(".message").html(data[0].content + " — " + data[0].title);
        });
    });

    $(".btn-twitter").on('click', function (event) {
        event.preventDefault();
        window.open('https://www.twitter.com/intent/tweet?text=' + encodeURIComponent($(".message").text() + ' --'))
    });

});