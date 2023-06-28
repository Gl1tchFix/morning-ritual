function roomHandler()
{
    switch (currentRoom)
    {

        case "bedroom":
            $("#snooze").show(500);  
            $("#coffee").hide(500);  
            $("#nrg").hide(500);  
            $("#shower").hide(500);  
            $("#brush-teeth").hide(500);  
            $("#dress-up").show(500); 
        break;

        
        case "living-room":
            $("#snooze").hide(500);  
            $("#coffee").hide(500);  
            $("#nrg").hide(500);  
            $("#shower").hide(500);  
            $("#brush-teeth").hide(500);  
            $("#dress-up").hide(500);  
        break;

        
        case "bathroom":
            $("#snooze").hide(500);  
            $("#coffee").hide(500);  
            $("#nrg").hide(500);  
            $("#shower").show(500);  
            $("#brush-teeth").show(500);  
            $("#dress-up").show(500); 
        break;

        
        case "kitchen":
            $("#snooze").hide(500);  
            $("#coffee").show(500);  
            $("#nrg").show(500);  
            $("#shower").hide(500);  
            $("#brush-teeth").hide(500);  
            $("#dress-up").hide(500);
        break;

    }

}