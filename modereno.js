let mybtn = document.getElementsByClassName("mybtn")[0];
let menu = document.getElementsByClassName("menu")[0];
let but_close = document.getElementsByClassName("clo")[0];

mybtn.onclick = function() {
menu.style.cssText = "right: 0px; --glow-color: rgb(217, 176, 255);--glow-spread-color: rgba(191, 123, 255, 0.781);  --enhanced-glow-color: rgb(231, 206, 255); --btn-color: rgb(100, 61, 136);border: .25em solid var(--glow-color);padding: 1em 3em;color: var(--glow-color);font-size: 15px;font-weight: bold;/* background-color: var(--btn-color); */ border-radius: 1em;outline: none;box-shadow: 0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color),  inset 0 0 .75em .25em var(--glow-color);text-shadow: 0 0 .5em var(--glow-color); box-shadow: 0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color); text-shadow: 0 0 .5em var(--glow-color);"
}

but_close.onclick = function() {
menu.style.cssText = "right: -300px; ";
};
let inputs = document.getElementsByClassName("form-control");
let sumbb = document.querySelector(".lastbb");

sumbb.onclick = function(event) {
for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
        // event.preventDefault();
        return false;
    }
}
  return true;
};