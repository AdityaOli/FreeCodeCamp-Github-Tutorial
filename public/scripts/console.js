var idCounter = 0;
var newConsoleLine = "";
var commandStack = [];
$(
    function () {
        update(idCounter);
        $("#staticBody").html(newConsoleLine);
    }
);
/*
$(document).keypress(function(e) 
{
    if(e.which == 13) 
    {
      $("#nonstaticBody").html($("#staticBody").text()+$(".commandInput").val());
      $("#staticBody").html(newConsoleLine);
    }
}); 
*/
function update(idCounter) {
    newConsoleLine = "<form class='form-horizontal' action='' id='interpreterForm'><div class='form-group formGroup'><label class='control-label bash' for='text'>git-console ~:</label><div class='command'><input size='50' type='text' class='form-control commandInput' id='" + idCounter + "' autocomplete='off'></div></div></form>";
}

$(document).on('submit', function () {
    $("#nonstaticBody").append("<div class='staticBash'>" + $("#staticBody").text() + "</div>" + "<div class='staticCommand'>" + $(".commandInput").val() + "</div><br />");
    //$("#nonstaticBody").addClass("bash");
    idCounter += 1;
    update(idCounter);
    $("#staticBody").html(newConsoleLine);
    $(".commandInput").focus();
});

$(document).on('click',
    function () {
        $(".commandInput").focus();
    });