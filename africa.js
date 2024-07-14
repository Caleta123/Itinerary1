function tuExpand() { 
    const expand = document.getElementById("tu");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("eg");
    shrink.classList.toggle("shrinked");
}

function egExpand() {
    const expand = document.getElementById("eg");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("tu");
    shrink.classList.toggle("shrinked");
}