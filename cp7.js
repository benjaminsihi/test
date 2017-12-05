/*global fetch checkStatus */
/*
Name: Benjamin Shi
Date: 10.17.17
Section: CSE 154 AC

This javascript file does an onclick action to output the JSON object which is given by the
cp7.php file, And display the information accordingly. 
*/

"use strict";
(function(){
    
    //this $ sign function makes getElementsById more convinient.
    function $(id){ 
        return document.getElementById(id);
    }
    
    //The window.onload allows us to add some property to the DOM object when page loads.
    window.onload = function(){
        //attach an event handler on the button.
        $("checkOn").onclick = getJsonData;
    };
     
    // event handler for clicking the checkOn. It changes the innerHTML of te "response".
    function getJsonData(){
        let url = "cp7.php"; 
        // let type = $("languague").value;
        // $("response").innerHTML = responseJSON.html;
    
        //making a fetch call.
        fetch(url, {credentials: "include"})
           .then(checkStatus)
           .then(JSON.parse)
           .then(function(response){
               //making the user input case-insensitive.
                let type = $("languague").value;
                type = type.toLowerCase();
                if (type == "css"){
                    $("response").innerHTML = response.css;
                }else if (type == "html"){
                    $("response").innerHTML = response.html;
                }else if (type == "javascript"){
                    $("response").innerHTML = response.javascript;
                }else if (type == "php"){
                    $("response").innerHTML = response.php;
                }else{
                    $("response").innerHTML = "try again please!";
                }
           })
           .catch(function(error) {
               alert(error);
           });
    }
})();