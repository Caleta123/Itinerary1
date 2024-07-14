function uaeExpand() { 
    const expand = document.getElementById("uae");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("tr");
    shrink.classList.toggle("shrinked");
}

function trExpand() {
    const expand = document.getElementById("tr");
    expand.classList.toggle("expanded"); 

    const shrink = document.getElementById("uae");
    shrink.classList.toggle("shrinked");
}