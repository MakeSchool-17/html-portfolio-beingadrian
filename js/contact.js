
$(document).ready(function () {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/adrian@beingadrian.com",
            method: "POST",
            data: {
                email: $('.email').val(),
                message: $('.message').val()
            },
            dataType: "json"
        }).error(function(x, status, error) {
            alert("Error");
        }).success(function(data, status) {
            alert("Cheers mate.")
            $('form').find('.email, .message').val('');
        });
    });
});
