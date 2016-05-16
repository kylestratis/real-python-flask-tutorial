$(document).ready(function() { // When DOM is fully loaded, convention
    console.log("readY!");

    $("form").on("submit", function() {
        console.log("form has been submitted!");
        var valueOne = $('input[name="location"]').val();
        var valueTwo = $('input[name="language"]').val();
        // console.log(valueOne,valueTwo);

        //AJAX request to send input data to backend
        $.ajax({
            type: "POST",
            url: "/",
            data: {first: valueOne, second: valueTwo},
            success: function(results) {
                // console.log(results.items[0]);
                $("#results").html('<a href="'+results.items[0].html_url+'">'+results.items[0].login+'</a><br><img src="'+results.items[0].avatar_url+'">');
                // clear form input
                $("input").val("");
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});