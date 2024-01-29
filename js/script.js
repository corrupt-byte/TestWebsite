$(document).ready(function() {
    $('#change-content-btn').click(function() {
        $('#dynamic-content').text('Content updated! Here is some new text.');
    });

    $('.dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
        $(this).toggleClass('active');

        $('.dark-mode-icon').toggleClass('sun moon');
    });
});
