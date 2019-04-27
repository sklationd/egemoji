let info_button = document.getElementById("info");
info_button.addEventListener('mouseenter', enter);
info_button.addEventListener('mouseleave', leave);


function enter(event) {
    let info_box = document.getElementById("info-box");
    info_box.style.visibility = "visible";
}

function leave(event) {
    let info_box = document.getElementById("info-box");
    info_box.style.visibility = "hidden";
}
