console.log("Welcome to Tic-Tac-Toe game");
const ting =new Audio("ting.mp3")
const music=new Audio("music.mp3");
const gameover=new Audio("gameover.mp3")
let turn="X";
let isgameover=false;
//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//Function to check for a win
const checkwin = ()=>{
let boxtext=document.querySelectorAll(".boxtext")
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
    
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!='')){
        document.querySelector(".h").innerText=boxtext[e[0]].innerText+"won";  
        isgameover=true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "200px";
        document.querySelector(".line").style. transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width="20vw";
    }
})
}
const if_a_tie = () => {
    let boxtext = document.querySelectorAll(".boxtext");
    let flag = true; // Change the initial value to true

    boxtext.forEach(element => {
        if (element.innerText === '') {
            flag = false; // If any box is empty, the flag should be false
        }
    });

    if (flag && !isgameover) {
        document.querySelector(".h").innerText = "Game is a Tie";
        isgameover = true; // Set game over as true for a tie
    }
}

//Game logic
// music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        boxtext.innerText=turn;
        turn=changeTurn();
        ting.play();
        checkwin();
        if(!isgameover){
        if_a_tie();
        let h=document.querySelectorAll(".h")[0];
        h.innerText="Turn for:"+turn;
    }
       
    })
})
btn.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    let h=document.querySelectorAll(".h")[0];
    h.innerText="Turn for:"+turn;
    isgameover=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "0px";
    document.querySelector(".line").style.width="0vw";
})