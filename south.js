function itExpand() { 
    const expand = document.getElementById("it");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("hr");
    shrink.classList.toggle("shrinked");
}

function hrExpand() {
    const expand = document.getElementById("hr");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("it");
    shrink.classList.toggle("shrinked");
}

function grExpand() {
    const expand = document.getElementById("gr");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("cy");
    shrink.classList.toggle("shrinked");
}

function cyExpand() {
    const expand = document.getElementById("cy");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("gr");
    shrink.classList.toggle("shrinked");
}