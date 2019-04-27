//-- usage --//
var images = [];

preload(
    "./image/left.png",
    "./image/pushed_left.png",
    "./image/right.png",
    "./image/pushed_right.png",
    "./image/button_0.png",
    "./image/button_1.png",
    "./image/button_2.png",
    "./image/button_3.png"
 )
 
 window.onload = function(){
             var input_page = document.getElementById('input_page');
             document.onclick = function(e){
                if(!e.target)
                   return;
                if(!e.target.id)
                    return;
                if(!isChild(e.target, input_page) && e.target.id !== 'face_button' && e.target.id !=='inner_text'){
                    document.getElementById("whole_html").style.backgroundColor = "rgb(233,233,233)"; 
                    if(document.getElementById("input_page").style.display == "block"){
                        unfade(document.getElementById("info"),5);
                        unfade(document.getElementById("developer_info",5));
                    }
                    fade_none(input_page,5);
                }
             };
          };




function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

function isChild (obj,parentObj){
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY'){
        if (obj == parentObj){
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}

function fade_none(element, interval) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, interval);
}

function unfade(element, interval) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, interval);
}

