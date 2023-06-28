function storyTeller()
{

    var lastName = "bedroom";
    $("button").click(function()
    {
        var taskName = this.id;
        switch(taskName)
        {
            //Mozgás szobák közt
            case "bedroom":
                text = hours + ":" + minutes + " - Belépsz a hálószobába!\n" + text;
            break;
            case "living-room":
                text = hours + ":" + minutes + " - Belépsz a nappaliba!\n" + text;
            break;

            case "bathroom":
                text = hours + ":" + minutes + " - Belépsz a fürdőazobába!\n" + text;
            break;
            case "kitchen":
                text = hours + ":" + minutes + " - Belépsz a konyhába!\n" + text;
            break;
            //Feladatok végrehajtása
            case "snooze":
                text = hours + ":" + minutes + " - Vissza aludtál!\n" + text; 
            break;
            case "coffee":
                if(ooc == 1)
                {
                    text = hours + ":" + minutes + " - Kávét szeretnél, de nincs...\n" + text; 
                }
                else
                {
                    text = hours + ":" + minutes + " - Iszol egy kávét!\n" + text; 

                }
            break;
            case "nrg":
                text = hours + ":" + minutes + " - Iszol egy energiaitalt!\n" + text; 
            break;
            case "shower":
                text = hours + ":" + minutes + " - Lezuhanyzol!\n" + text; 
            break;
            case "brush-teeth":
                text = hours + ":" + minutes + " - Fogat mosol!\n" + text;     
            break;
            case "dress-up":
                text = hours + ":" + minutes + " - Felöltözöl\n" + text; 
            break;
            case "brew-coffee":
                text = hours + ":" + minutes + " - Főzöl egy kávét!\n" + text; 
            break;
            case "no-coffee":
                text = hours + ":" + minutes + " - Nem iszol kávét!\n" + text; 

            break;
        }
        //Random events
        if(dressUp == 1 && taskName =="coffee" && ooc == 0)
        {
            spilledCoffee();
        }
        //Write down
        if(lastName != taskName || jQuery.inArray("rooms") != taskName)
        {
            $("textarea#storyboard").val(text);
        }
        lastName = taskName;
    });
}
