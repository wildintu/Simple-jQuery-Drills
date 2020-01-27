//document.getElementById('btnSubmit')
$(document).ready(function(){
    //$("#btnSubmit").click(function() {
        //alert("The button was clicked.");  
    //});

    $("form").submit(function() {
        let msg = $("#message").val();
        if (msg.length === 0) {
            $("#btnSubmit").prop("disabled", true);
        } else {
            alert(msg);
        }
    });

    $('<div></div>').appendTo('body');
    $('<h2></h2>').appendTo('div');

    $("form").submit(function(e) {
        e.preventDefault();
        let msg = $('#message').val();
        $('h2').append(`<ul>${msg}</h2>`);
    });
    
    $("h2").mouseover(function (event) {
        console.log(event);
        $(event.target).css({'background-color': getRandomColor(), 'border-radius': '30px'});
    })

});

function getRandomColor() {
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return color;
}

