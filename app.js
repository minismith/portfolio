var text = $('.big-heading').text();
var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() {
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.big-heading').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 150);
}());
