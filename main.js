let screen = document.querySelector("#screen")
let btn = document.querySelectorAll(".btn")
for (item of btn) {
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText
        screen.value+=btnText;
    })
}
let x = 0;
let y = 0;
let powerFlag = false;

function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function log() {
    if (!powerFlag) {
        x = Number(screen.value);
        screen.value = '';
        powerFlag = true;
    } else {
        y = Number(screen.value);
        screen.value = Math.log(y) / Math.log(x);
        powerFlag = false;
    }
}
function root() {
    screen.value = Math.sqrt(screen.value,2);
}
function pow() {
    if (!powerFlag) {
        x = Number(screen.value);
        screen.value = '';
        powerFlag = true;
    } else {
        y = Number(screen.value);
        screen.value = Math.pow(x, y);
        powerFlag = false;
    }
}
function pi() {
    screen.value = 3.14159;
}function root() {
    screen.value = Math.sqrt(screen.value,2);
}function root() {
    screen.value = 2.71828;
}
function fact() {
    var i ,num,f;
    f=1
    num=screen.value;
    for (let i = 1; i <= num; i++) {
        f=f*i
        
    }
    // i=i-1;
    screen.value =f
}
function back() {
    screen.value=screen.value.substr(0,screen.value.length-1)
}
