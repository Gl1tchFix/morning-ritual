
let time = 60;
let awake = 0;
let coffein = 0;
let hygene = 0; 

const ROOM_LIST =["bedroom", "living-room", "bathroom", "kitchen"];
let currentRoom = "bedroom";

let taskCounter = 0;
let takeShower = 0;
let brushTeeth = 0;
let dressUp = 0;

let ooc = Math.floor(Math.random() * 2);
let wantCoffee = 0;
let isItSpilled = 0;

let coffeeBreath = 0;

let hours = 5;
let minutes = 30;
let minuteString = "30";

let text;
$( document ).ready(function() {
    
    $("textarea#storyboard").val(hours + ":"+minuteString + " - Felébredtél!");
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

    if(taskCounter > 0)
    {  
        $("#snooze").prop('disabled', true);
    }
    
    
    if(time < 20)
    {
        
        $("#dress-up").prop('disabled', true);
        
    }
    
    if(time < 15)
    {
        
        $("#snooze").prop('disabled', true);
        $("#shower").prop('disabled', true);
        
    }
    if(time < 5)
    {
        $("button").each(function(index)
        {
            $(this).prop('disabled', true);
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
    } 
}