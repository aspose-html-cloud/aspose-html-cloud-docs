$('#diagramcarousel').carousel();

$( "ul.nav-pills" ).children().click( function () {
    $( "li a" ).removeClass( "activetab" );
    $(this).children().first().addClass("activetab");
} );
