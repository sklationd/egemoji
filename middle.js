let face_button = document.getElementById("face_button");
face_button.addEventListener('mousedown',face_button_down);
face_button.addEventListener('mouseup',face_button_up);
face_button.addEventListener('mouseleave',face_mouse_leave);
face_button.addEventListener('mouseenter',mouse_change);

let current_position = 0;
let number_of_button = 2;

function update_face(){
    img_src = "./image/button_" + current_position + ".png";
    document.getElementById("face_button").src = img_src;
}

function face_button_down(event) { 
    img_src = "./image/pushed_button_"+ current_position + ".png";
    console.log(img_src);
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

let left_button = document.getElementById("left_button");
left_button.addEventListener('mousedown',left_button_down);
left_button.addEventListener('mouseup',left_button_up);
left_button.addEventListener('mouseleave',left_mouse_leave);
left_button.addEventListener('mouseenter',mouse_change);


function left_button_down(event) {
    document.getElementById("left_button_img").src = "./image/pushed_left.png";
    current_position = ((--current_position)+number_of_button)%number_of_button;
    update_face();
}

function left_button_up(event) {
    document.getElementById("left_button_img").src = "./image/left.png";
}

function left_mouse_leave(event){
    left_button_up(event);
    document.body.style.cursor = "default";
}


let right_button = document.getElementById("right_button");
right_button.addEventListener('mouseup',right_button_up);
right_button.addEventListener('mousedown',right_button_down);
right_button.addEventListener('mouseleave',right_mouse_leave);
right_button.addEventListener('mouseenter',mouse_change);

function right_button_down(event) {
    document.getElementById("right_button_img").src = "./image/pushed_right.png";
    current_position = (++current_position)%number_of_button;
    update_face();
}

function right_button_up(event) {
    document.getElementById("right_button_img").src = "./image/right.png";
}

function right_mouse_leave(event){
    right_button_up(event);
    document.body.style.cursor = "default";
}
