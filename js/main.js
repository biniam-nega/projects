// declaring global variables
var id_counter = 0;

$(document).ready(function () {
    $('#add-note').click(function () {
        if ($('#new-note').val()) {
            $('#my-notes').html('<div id="note-' + id_counter + '" class="w3-panel w3-sand w3-bar-red w3-leftbar w3-margin-right w3-margin-left w3-margin-top w3-margin-bottom">'
            + '<div class="w3-container w3-margin-top w3-margin-bottom">'
            + '<div class="text">'
            + $('#new-note').val()
            + '</div>'
            + '<div class="w3-margin-bottom">'
            + '<input type="button" class="w3-button w3-red w3-right w3-round-large" id="btn-del-' + id_counter + '"value="Delete"/>'
            + '</div>'
            + '</div>'
            + '</div>' + 
            $('#my-notes').html());

            $('#new-note').val('');
            
            for(var i = 0; i <= id_counter; i++) {
                (function() {
                    var c = i;
                    $('#btn-del-' + c).click(function(){
                        $('#note-' + c).remove();
                    });
                }());
            }
            id_counter++;
        }
        else {
            alert('Please Enter text');
        }
    });

    $('#del-notes').click(function() {
        $('#my-notes').html('');
    });
});