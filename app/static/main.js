$(document).ready(function() { // When DOM is fully loaded, convention
    console.log("readY!");

    $("form").on("submit", function() {
        console.log("form has been submitted!");
        var valueOne = $('input[name="number-one"]').val();
        var valueTwo = $('input[name="number-two"]').val();
        console.log(valueOne,valueTwo);

        //AJAX request to send input data to backend
        $.ajax({
            type: "POST",
            url: "/",
            data: {first: valueOne, second: valueTwo},
            success: function(results) {
                console.log(results);
                $("#results").html(results.total);
                // clear form input
                $("input").val("");
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});