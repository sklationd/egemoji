var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
   "./image/left.png",
   "./image/pushed_left.png",
   "./image/right.png",
   "./image/pushed_right.png",
   "./image/button_0.png",
   "./image/pushed_button_0.png",
   "./image/button_1.png",
   "./image/pushed_button_1.png",
)