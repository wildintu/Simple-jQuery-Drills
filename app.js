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

    $(<div></div>).appendTo('body');
    $()

        
    

})
