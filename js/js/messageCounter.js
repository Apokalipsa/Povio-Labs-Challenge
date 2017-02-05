//simple counter function  for new messages demo
$(document).ready(function(){
function msgCounter(){
        var count = 2;
    var timer = setInterval(msgCount, 5000)
    function msgCount(){
        $("#numMsg").html(count);
        if(count <9){
            count++;
        }else{
            count= 2; 
        } 
    }
   }
    msgCounter();
    });