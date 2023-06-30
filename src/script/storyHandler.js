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
                text = hours + ":" + minuteString + " - Belépsz a hálószobába!\n" + text;
            break;
            case "living-room":
                text = hours + ":" + minuteString + " - Belépsz a nappaliba!\n" + text;
            break;

            case "bathroom":
                text = hours + ":" + minuteString + " - Belépsz a fürdőazobába!\n" + text;
            break;
            case "kitchen":
                text = hours + ":" + minuteString + " - Belépsz a konyhába!\n" + text;
            break;
            //Feladatok végrehajtása
            case "snooze":
                text = hours + ":" + minuteString + " - Vissza aludtál!\n" + text; 
            break;
            case "coffee":
                if(ooc == 1)
                {
                    text = hours + ":" + minuteString + " - Kávét szeretnél, de nincs...\n" + text; 
                }
                else
                {
                    text = hours + ":" + minuteString + " - Iszol egy kávét!\n" + text; 

                }
            break;
            case "nrg":
                text = hours + ":" + minuteString + " - Iszol egy energiaitalt!\n" + text; 
            break;
            case "tee":
                text = hours + ":" + minuteString + " - Iszol egy Teát!\n" + text; 

            break;
            case "shower":
                text = hours + ":" + minuteString + " - Lezuhanyzol!\n" + text; 
            break;
            case "brush-teeth":
                text = hours + ":" + minuteString + " - Fogat mosol!\n" + text;     
            break;
            case "dress-up":
                text = hours + ":" + minuteString + " - Felöltözöl!\n" + text; 
            break;
            case "brew-coffee":
                text = hours + ":" + minuteString + " - Főzöl egy kávét!\n" + text; 
            break;
            case "no-coffee":
                text = hours + ":" + minuteString + " - Nem iszol kávét!\n" + text; 

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

        if(time<=5)
        {
            text = hours + ":" + minutes + " - A rituálé kiteljesedet!\n" + text;
        $("textarea#storyboard").val(text);
        }
    });
}
