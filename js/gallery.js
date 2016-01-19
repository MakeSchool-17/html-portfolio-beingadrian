

$(document).ready(function() {
    $('#gallery').justifiedGallery({
        rowHeight: 170,
        lastRow: 'justify',
        randomize: true
    }).on('jg.complete', function() {
        $('#gallery a').swipebox({
            hideBarsDelay: false
        });
    });
})
