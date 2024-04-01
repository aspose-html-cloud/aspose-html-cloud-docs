new ClipboardJS('.copybtn');
$('.copybtn').click(function () {
    $(this).siblings('.copiedtooltip').show(); 
    setTimeout(function () { $('.copiedtooltip').hide(); 
}, 2000); });
