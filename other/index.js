var other = {

    urlAnalysis: function(text) {

        $.get("http://access.alchemyapi.com/calls/url/URLGetTextSentiment?&apikey=" + apikey + "&showSourceText=1&outputMode=json&url="+text, function(data) {

            console.log(data)
            if (data){

                $.get("/zillow-api/other/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    urlAnalysis2: function(text) {

        $.get("http://access.alchemyapi.com/calls/url/URLGetTextSentiment?&apikey=" + apikey + "&showSourceText=1&outputMode=json&url="+text, function(data) {

            console.log(data)
            if (data){

                $.get("/zillow-api/other/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list2").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/zillow-api/other/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
    }

}