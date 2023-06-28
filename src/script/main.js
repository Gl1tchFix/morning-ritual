
var time = 60;
var awake = 0;
var coffein = 0;
var hygene = 0; 

var roomList =["bedroom", "living-room", "bathroom", "kitchen"];
var currentRoom = "bedroom";

var taskCounter = 0;
var takeShower = 0;
var brushTeeth = 0;
var dressUp = 0;

var ooc = Math.floor(Math.random() * 2);
var wantCoffee = 0;
var isItSpilled = 0;

var coffeeBreath = 0;

var hours = 5;
var minutes = 30;

var text;
$( document ).ready(function() {
    
    $("textarea#storyboard").val(hours + ":"+minutes + " - Felébredtél!");
    text = $("textarea#storyboard").val();
    $("#"+currentRoom).css("background-color","lightgreen");
    storyTeller();
    process();
    
});


function process()
{
    
    $("#brew-coffee").hide();
    $("#no-coffee").hide();
    
    $("#time").val(time).toString();
    $("#awake").val(awake).toString();
    $("#coffein").val(coffein).toString();
    $("#hygene").val(hygene).toString();
    
    roomHandler();
    outOfCoffee();

    if(taskCounter>0)
    {  
        $("#snooze"). prop('disabled', true);
    }
    
    
    if(time<20)
    {
        
        $("#dress-up"). prop('disabled', true);
        
    }
    
    if(time<15)
    {
        
        $("#snooze"). prop('disabled', true);
        $("#shower"). prop('disabled', true);
        
    }
    if(time<5)
    {
        $("button").each(function(index)
        {
            $(this). prop('disabled', true);
        });

        if(takeShower == 0)
        {
            $("#is-showered").css("background-color","pink");
        }
        if(brushTeeth == 0)
        {
            $("#teeth-brushed").css("background-color","pink");
        }
        if(dressUp == 0)
        {
            $("#is-dressed").css("background-color","pink");
        }
        $("textarea#storyboard").val(hours + ":" + minutes + " - A rituálé kiteljesedet!\n" + $("textarea#storyboard").val());
        
        
    }

    
}