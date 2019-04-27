let input = document.getElementById("code_input");
let editor_input = CodeMirror.fromTextArea(input, {
    matchBrackets: true,
    mode: "text/x-csrc",
});

let output = document.getElementById("code_output");
let editor_output = CodeMirror.fromTextArea(output, {
    matchBrackets: true,
    mode: "text/x-csrc",
});

editor_input.setSize("40%", "80%");
editor_output.setSize("40%", "80%");
editor_input.getDoc().setValue("//PUT YOUR C CODE HERE");