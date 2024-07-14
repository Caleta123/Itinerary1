function noExpand() { 
    const expand = document.getElementById("no");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("uk");
    shrink.classList.toggle("shrinked");
}

function ukExpand() {
    const expand = document.getElementById("uk");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("no");
    shrink.classList.toggle("shrinked");
}

function fiExpand() {
    const expand = document.getElementById("fi");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("is");
    shrink.classList.toggle("shrinked");
}

function isExpand() {
    const expand = document.getElementById("is");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("fi");
    shrink.classList.toggle("shrinked");
}