$( "#parks" ).on( "click", function( event ) {
    parks.load()
    $("#list").empty()
    $("#list2").empty()
})

$( "#other" ).on( "click", function( event ) {
    other.load()
    $("#list").empty()
    $("#list2").empty()
})

// TODO: add loaders for more features