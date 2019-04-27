setTimeout(function(){
    unfade(document.getElementById("whole_body",5));
},500);

let current_position = 0;
let number_of_button = 4;    
let description = ['All Random!', 'Only One!', 'Your Own Emoji!','이거 한번 해봐!'];
let face = document.getElementById("face");
let face_button = document.getElementById("face_button");
let inner_text = document.getElementById("inner_text");
let description_block = document.getElementById("description_block");

face.addEventListener('mouseout',face_mouse_leave);
face.addEventListener('mouseover',dark_face);
face.addEventListener('click',face_mouse_click);

let left_button = document.getElementById("left_button");
left_button.addEventListener('mousedown',left_button_down);
left_button.addEventListener('mouseleave',left_mouse_leave);
left_button.addEventListener('mouseenter',mouse_change);

let right_button = document.getElementById("right_button");
right_button.addEventListener('mousedown',right_button_down);
right_button.addEventListener('mouseleave',right_mouse_leave);
right_button.addEventListener('mouseenter',mouse_change);

/* common function */
function mouse_change(event) {
    document.body.style.cursor = "pointer";
}

/* face function */
function update_face(){
    img_src = "./image/button_" + current_position + ".png";
    document.getElementById("face_button").src = img_src;
}

function dark_face(event){
    inner_text.innerHTML = description[current_position];
    mouse_change(event);
    face_button.style.filter = "brightness(0.4)";
    description_block.style.visibility = "visible";

}

function face_mouse_leave(event){
    description_block.style.visibility = "hidden";
    document.body.style.cursor = "default";
    face_button.style.filter = "brightness(1)";
}

function face_mouse_click(event){
    document.getElementById("whole_html").style.backgroundColor = "rgb(150,150,150)";
    setTimeout(function(){
        fade_none(document.getElementById("info"),5);
        fade_none(document.getElementById("developer_info"),5);
    },50)
    setTimeout(function(){
        unfade(document.getElementById("input_page"));
        if(current_position == 2)
           document.getElementById("token_row").style.display = "block";
        else
           document.getElementById("token_row").style.display = "none";
        editor_input.focus();
        editor_input.refresh();
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


function left_mouse_leave(event){
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
    document.body.style.cursor = "default";
}
