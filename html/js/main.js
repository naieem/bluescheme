/* 
 *#################
 *Creator:Naieem Mahmud Supto
 *Date:08-09-2016
 *Description:Main javascript file
 *################# 
 */
$(document).ready(function () {

    function toggleIcon(e) {
        $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    $('#dg-container').gallery();
    $('.navbar-fixed-top').affix({
        offset: {
            top: 100
        }
    });
    $("#menu_slide").click(function () {
        alert("Dfds");
        $("#navbar").slideToggle('slow');
    });
    $('#navbar > ul > li:has(ul)').addClass("has-sub");
    $('#navbar > ul > li > a').click(function () {
        var checkElement = $(this).next();
        $('#navbar li').removeClass('dropdown');
        $(this).closest('li').addClass('dropdown');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('dropdown');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#navbar ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });

    $("#navbar").on("click", function (event) {
        event.stopPropagation();
    });
    $(".dropdown-menu").on("click", function (event) {
        event.stopPropagation();
    });
    $(document).on("click", function (event) {
        $(".dropdown-menu").slideUp('normal');
    });

    $(".navbar-header").on("click", function (event) {
        event.stopPropagation();
    });
    $(document).on("click", function (event) {
        $("#navbar").slideUp('normal');
    });
});


