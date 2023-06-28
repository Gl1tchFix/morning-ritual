function room(room)
{
    taskCounter++;

    if(currentRoom != room.id)
    {
        $("#"+currentRoom).css("background-color","lightgoldenrodyellow");
        currentRoom = room.id;
        $("#"+currentRoom).css("background-color","lightgreen");
        
        time -= 2;
        minutes += 2;
        if(minutes >= 60)
        {
            hours++;
            minutes -= 60;
        }

        process();
    
    }

}

function task(tTime, tAwake, tCoffein, tHygene, isShower, teethIsBrushed, isDressed)
{
    taskCounter++;

    if(tHygene == -1 && tCoffein == 1)
    {
       wantCoffee = 1;
       if(ooc == 1 && wantCoffee == 1)
       {
           tTime = 0;
           tAwake = 0;
           tCoffein = 0;
           tHygene = 0;
           isShower = 0;
           teethIsBrushed = 0;
           isDressed = 0;
       }
    }

    if(takeShower == 1)
    {
        if(isShower == 1)
        {
            tHygene = 0;
        }
    }
    if(takeShower == 0)
    {
        if(isShower == 1)
        {
            takeShower = 1;
            $("#is-showered").css("background-color","lightgreen");
        }
    }

    if(brushTeeth == 1)
    {
        if(teethIsBrushed == 1 && coffeeBreath == 1)
        {
            tHygene = 1;
        }
        if(teethIsBrushed == 1 && coffeeBreath == 0)
        {
            tHygene = 0;
        }
        
    }
    if(brushTeeth == 0)
    {
        if(teethIsBrushed == 1)
        {
            $("#teeth-brushed").css("background-color","lightgreen");
            brushTeeth = 1;
        }
    }

    if(dressUp == 1)
    {
        if(isDressed == 1)
        {
            tHygene = 0;
        }
    }    
    if(dressUp == 0)
    {
        if(isDressed == 1)
        {
            $("#is-dressed").css("background-color","lightgreen");
            dressUp = 1;
        }
    }

    time -= tTime;
    awake += tAwake;
    coffein += tCoffein;
    hygene += tHygene;

    minutes += tTime;
    if(minutes >= 60)
    {
        hours++;
        minutes -= 60;
    }

    process();

}

function finished()
{
    time-=time;
    process();
}
