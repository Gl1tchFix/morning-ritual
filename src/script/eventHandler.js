function outOfCoffee()
{
    if(ooc == 1 && wantCoffee == 1)
    {
        $(".task").each(function(index)
        {
            $(this).hide(500);
        });

        $(".room").click(function()
        {
            
        $("#brew-coffee").hide(500);
        $("#no-coffee").hide(500); 
        });

        $("#brew-coffee").show(500);
        $("#no-coffee").show(500);   
        $(".room").prop('disabled', true);
                       
    }

}

function brewCoffee(brew)
{
    $(".room").prop('disabled', false);
    if(brew == 1)
    {
        time-=7;
        ooc = 0;
        process();
    }
    else
    {
        process();
    }
}

function spilledCoffee()
{
    isItSpilled = Math.floor(Math.random() * 10);
    console.log(isItSpilled);
    if(isItSpilled == 9)
    {
        dressUp = 0;
        $("#is-dressed").css("background-color","rgba(0,0,0,0)");
        coffein -=1;
        text = hours + ":" + minutes + " - Magadra öntötted a kávét!\n" + text;
        $("textarea#storyboard").val(text);
    }
}