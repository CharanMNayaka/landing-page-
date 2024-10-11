// Ensure the navbar collapses and expands correctly
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        var target = $(this).attr("data-bs-target");
        $(target).collapse('toggle'); // Toggle collapse
    });
});
