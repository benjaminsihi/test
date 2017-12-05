<?php
    header("Content-Type: application/json");
    
    #declare an empty array.
    $output = array();
    
    #adding my evaluation into each categories.
    $output["html"] = "straight forward and easy to work with";
    $output["css"] = "tricky and messy";
    $output["javascript"] = "a powerful programming languague";
    $output["php"] = "an unusual languague(hard to debug)";
    
    #output this json object.
    print(json_encode($output));
?>$