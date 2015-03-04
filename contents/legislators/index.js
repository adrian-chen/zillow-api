var other = {

    searchByLocation: function(zipcode) {

        $.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks&location=51.5033630,-0.1276250&radius=5000&key=" + apikey, function(data) {

            console.log(data)
            if (data.results){

                $.get("/zillow-api/legislators/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/zillow-api/other/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        other.searchByLocation('senate')

    }

}