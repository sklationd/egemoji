let convert_button = document.getElementById("convert_button");
convert_button.addEventListener('mousedown',convert_button_down);
convert_button.addEventListener('mouseup',convert_button_up);
convert_button.addEventListener('mouseleave',convert_mouse_leave);
convert_button.addEventListener('mouseenter',mouse_change);
convert_button.addEventListener('click',convert_mouse_click);

let emoji_string = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🤥 🤫 🤭 🧐 🤓🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🐪 🐫 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🐇 🐁 🐀 🦔"
let emoji_array;

function convert_button_down(event) { 
}

function convert_button_up(event) {
}

function mouse_change(event) {
    document.body.style.cursor = "pointer";
}

function convert_mouse_leave(event){
    convert_button_up(event);
    document.body.style.cursor = "default";
}

function convert_mouse_click(event){
  if(current_position == 2){
    if(document.getElementById("token_input").value === ""){
      alert('Please type any emoji!');
      return;
    }
  }
  editor_output.setValue(
  convert_code(editor_input.getValue()));
}

function string_repeat(string, n){
  repeat = "";
  for(var i = 0; i < n; i++)
    repeat = repeat + string;
  return repeat;
}

function getNewKey(n){
  if(current_position == 0){
    return emoji_array[n];
  }
  if(current_position == 1){
    return string_repeat(emoji, n+1);
  }
  if(current_position == 2){
    return string_repeat(document.getElementById("token_input").value, n+1);
  }
  if(current_position == 3){
    console.log("what!"+n);
    return string_repeat('ㅤ',n+1);
  }
}

function convert_code(input){
  emoji_array = emoji_string.split(' ').sort(function(){return 0.5-Math.random()});
  lines = input.split("\n");
  emoji = emoji_array[0];
  output = "";
  codeBody = "";
  tokenMap = {};
  tokenCnt = 0;
  for (var i = 0; i < lines.length; i++) {
    if(lines[i].startsWith("#")){
      output = output + lines[i] + "\n";
    } 
    else if(lines[i].startsWith("//")){
    } 
    else{
      tokens = lines[i].trim().split(/[\s\t]+/);
      for(var j = 0; j < tokens.length; j++){
        if(tokens[j] != ""){
          if(!(tokens[j] in tokenMap)){
            tokenMap[tokens[j]] = getNewKey(tokenCnt);
            tokenCnt++;
          }
          codeBody = codeBody + tokenMap[tokens[j]] + " ";
        }
      }
    }
  }
  //keyTable = Object.keys(tokenMap)
  keyTable = Object.keys(tokenMap).sort(function(){return 0.5-Math.random()});
  for(var i = 0; i < keyTable.length; i++){
    output = output + "#define " + tokenMap[keyTable[i]] + " " + keyTable[i] + "\n";
  }
  output = output + codeBody;
  return output;
}