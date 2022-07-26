let Inner = document.querySelector("#result");

let score_player_1 = document.querySelector("#score_player_1");
let score_player_2 = document.querySelector("#score_player_2");

let operation = document.querySelectorAll(".action");


let restar_game = document.querySelector("#restar");
let nextgame = document.querySelector("#next_game");

let isNext_step = false;
let isNext_game = false;
let x_scr = 0;
let o_scr = 0;


(function(){
    let player_1 = document.querySelector("#player_1");
    let player_2 = document.querySelector("#player_2");
    let block = document.querySelector("#score_block");

    let x = prompt("x");
    let o = prompt("o");

    if(x !== "" && o !== ""){
        player_1.innerHTML = x + ": ";
        player_2.innerHTML = o + ": ";
    }else{
        block.style.display = "none";
    }

})()


operation.forEach((e) => e.addEventListener("click", function(){
    if(!isNext_game){
        if(!isNext_step && e.value !== "o"){
            e.value = "x";
            isNext_step = true;
        }else if(isNext_step && e.value !== "x"){
            e.value = "o";   
            isNext_step = false;
        }
 
        win(e)
    }
}))


restar_game.addEventListener("click", function(){
    for(i = 0; i < operation.length; i++){
        operation[i].value = ""
        Inner.innerHTML = ""
    };
    // isNext_step = false
    isNext_game = false
})


nextgame.addEventListener("click", function(){
    for(i = 0; i < operation.length; i++){
        operation[i].value = ""
        Inner.innerHTML = ""
    };
    isNext_game = false
    // isNext_step = false
    score_player_1.innerHTML = 0
    score_player_2.innerHTML = 0
    x_scr = 0;
    o_scr = 0;
    
})


function win(e){

    if((operation[0].value == operation[1].value && operation[0].value == operation[2].value) && (operation[0].value == "x" || operation[0].value == "o")){
        let scare_value = operation[0].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)

    }else if((operation[3].value == operation[4].value && operation[3].value == operation[5].value) && (operation[3].value == "x" || operation[3].value == "o")){
        let scare_value = operation[3].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }else if((operation[6].value == operation[7].value && operation[6].value == operation[8].value) && (operation[6].value == "x" || operation[6].value == "o")){
        let scare_value = operation[6].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }

    if((operation[0].value == operation[3].value && operation[0].value == operation[6].value) && (operation[0].value == "x" || operation[0].value == "o")){
        let scare_value = operation[0].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }else if((operation[1].value == operation[4].value && operation[1].value == operation[7].value) && (operation[1].value == "x" || operation[1].value == "o")){
        let scare_value = operation[1].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }else if((operation[2].value == operation[5].value && operation[2].value == operation[8].value) && (operation[2].value == "x" || operation[2].value == "o")){
        let scare_value = operation[2].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }

    if((operation[0].value == operation[4].value && operation[0].value == operation[8].value) && (operation[0].value == "x" || operation[0].value == "o")){
        let scare_value = operation[0].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }else if((operation[2].value == operation[4].value && operation[2].value == operation[6].value) && (operation[2].value == "x" || operation[2].value == "o")){
        let scare_value = operation[2].value
        Inner.innerHTML = "win " +  scare_value
        isNext_game = true
        score(scare_value)
    }
}


function score(e){
    if(e == "x"){
        x_scr += 1
        score_player_1.innerHTML = x_scr
    }else if(e == "o"){
        o_scr += 1
        score_player_2.innerHTML = o_scr
    }
}