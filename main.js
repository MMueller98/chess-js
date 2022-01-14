

document.addEventListener("DOMContentLoaded", () => {

    // queens
    const bqueen = document.createElement("img");
    bqueen.src = "./resources/bqueen.png"
    const wqueen = document.createElement("img");
    wqueen.src = "./resources/wqueen.png"

    // kings 
    const bking = document.createElement("img");
    bking.src = "./resources/bking.png"
    const wking = document.createElement("img");
    wking.src = "./resources/wking.png"

    // bishops
    const bbishop1 = document.createElement("img");
    bbishop1.src = "./resources/bbishop.png"
    const bbishop2 = document.createElement("img");
    bbishop2.src = "./resources/bbishop.png"
    const wbishop1 = document.createElement("img");
    wbishop1.src = "./resources/wbishop.png"
    const wbishop2 = document.createElement("img");
    wbishop2.src = "./resources/wbishop.png";

    // knights
    const bknight1 = document.createElement("img");
    bknight1.src = "./resources/bknight.png"
    const bknight2 = document.createElement("img");
    bknight2.src = "./resources/bknight.png"
    const wknight1 = document.createElement("img");
    wknight1.src = "./resources/wknight.png"
    const wknight2 = document.createElement("img");
    wknight2.src = "./resources/wknight.png"

    // rooks 
    const brook1 = document.createElement("img");
    brook1.src = "./resources/brook.png"
    const brook2 = document.createElement("img");
    brook2.src = "./resources/brook.png"
    const wrook1 = document.createElement("img");
    wrook1.src = "./resources/wrook.png"
    const wrook2 = document.createElement("img");
    wrook2.src = "./resources/wrook.png"

    //pawns
    const bpawn1 = document.createElement("img");
    bpawn1.src = "./resources/bpawn.png";
    const bpawn2 = document.createElement("img");
    bpawn2.src = "./resources/bpawn.png";
    const bpawn3 = document.createElement("img");
    bpawn3.src = "./resources/bpawn.png";
    const bpawn4 = document.createElement("img");
    bpawn4.src = "./resources/bpawn.png";
    const bpawn5 = document.createElement("img");
    bpawn5.src = "./resources/bpawn.png";
    const bpawn6 = document.createElement("img");
    bpawn6.src = "./resources/bpawn.png";
    const bpawn7 = document.createElement("img");
    bpawn7.src = "./resources/bpawn.png";
    const bpawn8 = document.createElement("img");
    bpawn8.src = "./resources/bpawn.png";

    const wpawn1 = document.createElement("img");
    wpawn1.src = "./resources/wpawn.png";
    const wpawn2 = document.createElement("img");
    wpawn2.src = "./resources/wpawn.png";
    const wpawn3 = document.createElement("img");
    wpawn3.src = "./resources/wpawn.png";
    const wpawn4 = document.createElement("img");
    wpawn4.src = "./resources/wpawn.png";
    const wpawn5 = document.createElement("img");
    wpawn5.src = "./resources/wpawn.png";
    const wpawn6 = document.createElement("img");
    wpawn6.src = "./resources/wpawn.png";
    const wpawn7 = document.createElement("img");
    wpawn7.src = "./resources/wpawn.png";
    const wpawn8 = document.createElement("img");
    wpawn8.src = "./resources/wpawn.png";



    document.getElementById("square-1-a").appendChild(wrook1);
    document.getElementById("square-1-b").appendChild(wknight1);
    document.getElementById("square-1-c").appendChild(wbishop1);
    document.getElementById("square-1-d").appendChild(wqueen);
    document.getElementById("square-1-e").appendChild(wking);
    document.getElementById("square-1-f").appendChild(wbishop2);
    document.getElementById("square-1-g").appendChild(wknight2);
    document.getElementById("square-1-h").appendChild(wrook2);

    document.getElementById("square-2-a").appendChild(wpawn1);
    document.getElementById("square-2-b").appendChild(wpawn2);
    document.getElementById("square-2-c").appendChild(wpawn3);
    document.getElementById("square-2-d").appendChild(wpawn4);
    document.getElementById("square-2-e").appendChild(wpawn5);
    document.getElementById("square-2-f").appendChild(wpawn6);
    document.getElementById("square-2-g").appendChild(wpawn7);
    document.getElementById("square-2-h").appendChild(wpawn8);

    document.getElementById("square-7-a").appendChild(bpawn1);
    document.getElementById("square-7-b").appendChild(bpawn2);
    document.getElementById("square-7-c").appendChild(bpawn3);
    document.getElementById("square-7-d").appendChild(bpawn4);
    document.getElementById("square-7-e").appendChild(bpawn5);
    document.getElementById("square-7-f").appendChild(bpawn6);
    document.getElementById("square-7-g").appendChild(bpawn7);
    document.getElementById("square-7-h").appendChild(bpawn8);


    document.getElementById("square-8-a").appendChild(brook1);
    document.getElementById("square-8-b").appendChild(bknight1);
    document.getElementById("square-8-c").appendChild(bbishop1);
    document.getElementById("square-8-d").appendChild(bqueen);
    document.getElementById("square-8-e").appendChild(bking);
    document.getElementById("square-8-f").appendChild(bbishop2);
    document.getElementById("square-8-g").appendChild(bknight2);
    document.getElementById("square-8-h").appendChild(brook2);

    

    console.log("hurra");

});

function initializeBoard(){
    if(!isValid(localStorage.getItem('initialized'))){
        // pawns

    }else{
        console.log("Viel Spaß beim Spielen!");
    }
};

// Helpers
function isValid(value){
    return value !== null && value !== undefined;
}