var parks = {

    textAnalysis: function(text) {

        $.get("http://access.alchemyapi.com/calls/text/TextGetTextSentiment?&apikey=" + apikey + "&outputMode=json&text="+text, function(data) {

            console.log(data)
            if (data){

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
    }

}