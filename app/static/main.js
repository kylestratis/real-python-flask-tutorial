$(document).ready(function() { // When DOM is fully loaded, convention
    console.log("readY!");
    $('#try-again').hide(); //hide button on initial DOM load

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
                if (results.items.length > 0) {
                    $('input').hide();
                    $('#try-again').show() // only show on results
                    var randNum = Math.floor(Math.random() * Object.keys(results.items).length)
                    // console.log(results.items[randNum]);
                    $("#results").html('<a href="'+results.items[randNum].html_url+'">'+results.items[randNum].login+'</a><br><img src="'+results.items[randNum].avatar_url+'" class="avatar">');
                    // clear form input - this is commented out now so that the input remains and the submit button can be done again
                    // $("input").val("");            
                }
                else {
                    $('#results').html('Something went terribly wrong! Please try again!');
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    // For try again button
    $('#try-again').on("click", function() {
        $('input').val('').show();
        $('#try-again').hide();
        // clear any html from results
        $('#results').html('');
    });
});