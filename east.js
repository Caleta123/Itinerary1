function huExpand() { 
    const expand = document.getElementById("hu");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("ro");
    shrink.classList.toggle("shrinked");
}

function roExpand() {
    const expand = document.getElementById("ro");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("hu");
    shrink.classList.toggle("shrinked");
}

function skExpand() {
    const expand = document.getElementById("sk");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("bl");
    shrink.classList.toggle("shrinked");
}

function blExpand() {
    const expand = document.getElementById("bl");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("sk");
    shrink.classList.toggle("shrinked");
}