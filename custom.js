// Custom JavaScript to run when the page is ready
$(document).ready(function() {
    console.log("pdunkn.com!");
    
    // Example: Smooth scrolling for internal links
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000, function () {
            window.location.hash = target;
        });
    });
});
