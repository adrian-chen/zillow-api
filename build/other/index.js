var parks = {

    searchByLocation: function(longitude, latitude) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks&location=51.5033630,-0.1276250&radius=5000&key=" + apikey, function(data) {

            console.log(data)
            if (data.results){

                $.get("/zillow-api/parks/list.jade", function(template) {
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

        $.get("/zillow-api/parks/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        parks.searchByLocation('51.5033630','-0.1276250')

    }

}