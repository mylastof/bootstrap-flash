/*
    Bootstrap Flash
    Version: 3.0
    A small lib to display notifications by @vsergeyev
    https://github.com/vsergeyev/bootstrap-flash

    Twitter Bootstrap (http://twitter.github.com/bootstrap).
*/

(function(){
    $(document).ready(function () {
        $("body").prepend('<div class="bootstrap-flash alert alert-success alert-danger hide" role="alert" style="position:absolute;top:1px;left:25%;width:50%;float:left;z-index:1500;"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p></p></div>');
    });

    // Hide alert in 10 seconds
    setInterval(function() {
        $(".bootstrap-flash").fadeOut("slow", function() {
                    $( this ).removeClass( "show" );
                })
    }, 10000);

    this.flash = function(msg, err) {
        var box = $(".bootstrap-flash");
        if (err)
            box.addClass("alert-danger")
        else
            box.removeClass("alert-danger");

        box.find("p").html(msg);
        box.show('fast', function() {
                    $( this ).addClass( "show" );
                });
    }
}).call(this);