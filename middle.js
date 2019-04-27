setTimeout(function(){
    unfade(document.getElementById("whole_body",5));
},500);

let current_position = 0;
let number_of_button = 2;    

let face_button = document.getElementById("face_button");
face_button.addEventListener('mousedown',face_button_down);
face_button.addEventListener('mouseup',face_button_up);
face_button.addEventListener('mouseleave',face_mouse_leave);
face_button.addEventListener('mouseenter',mouse_change);
face_button.addEventListener('click',face_mouse_click);

let left_button = document.getElementById("left_button");
left_button.addEventListener('mousedown',left_button_down);
left_button.addEventListener('mouseleave',left_mouse_leave);
left_button.addEventListener('mouseenter',mouse_change);


let right_button = document.getElementById("right_button");
right_button.addEventListener('mousedown',right_button_down);
right_button.addEventListener('mouseleave',right_mouse_leave);
right_button.addEventListener('mouseenter',mouse_change);


function update_face(){
    img_src = "./image/button_" + current_position + ".png";
    document.getElementById("face_button").src = img_src;
}

function face_button_down(event) { 
    img_src = "./image/pushed_button_"+ current_position + ".png";
    document.getElementById("face_button").src = img_src;
}

function face_button_up(event) {
    img_src = "./image/button_" + current_position + ".png";
    document.getElementById("face_button").src = img_src;
}

function mouse_change(event) {
    document.body.style.cursor = "pointer";
}

function face_mouse_leave(event){
    face_button_up(event);
    document.body.style.cursor = "default";
}

function face_mouse_click(event){
    document.getElementById("whole_html").style.backgroundColor = "rgb(150,150,150)";
    setTimeout(function(){
        fade_none(document.getElementById("info"));
    },50)
    setTimeout(function(){
        unfade(document.getElementById("input_page"));
    },100);
}

/* fading */

function fade(element, interval) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            element.style.opacity = 0;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, interval);
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

/* left button function */

function left_button_down(event) {
        document.getElementById("left_button_img").src = "./image/pushed_left.png";
        fade(face_button,5);
        setTimeout(function(){
            document.getElementById("left_button_img").src = "./image/left.png";
            current_position = ((--current_position)+number_of_button)%number_of_button;
            update_face();
            unfade(face_button,5);
        },300)
        
}

function left_button_up(event) {
}

function left_mouse_leave(event){
    left_button_up(event);
    document.body.style.cursor = "default";
}

/* right button function */

function right_button_down(event) {
    document.getElementById("right_button_img").src = "./image/pushed_right.png";
    fade(face_button,5);
    setTimeout(function(){
        document.getElementById("right_button_img").src = "./image/right.png";
        current_position = (++current_position)%number_of_button;
        update_face();
        unfade(face_button,5);
    },300);
}

function right_mouse_leave(event){
    right_button_up(event);
    document.body.style.cursor = "default";
}
