let gameseq=[];
let userseq=[];
let btns=["yellow","green","red","blue"];

let started=false;
let level=0;
let h2= document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
    
        started= true;   
        levelUp();
    }
   
}
);
function btnflash (btn)
{
    btn.classList.add("btnflash");
    setTimeout(function()
        {
            btn.classList.remove("btnflash");
        }, 300 
    );
}

function levelUp()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
   btnflash(randbtn);
}
function btnPress()
{  
    btnflash(this);
    usercolor=this.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
function checkAns(idx)
{
    
    if(gameseq[idx]==userseq[idx])
    {
        if(gameseq.length==userseq.length)
            setTimeout(levelUp,1000);
    }
        
    else
    {
      h2.innerHTML=`game over <b> Your score is ${level} </b> <br> press any key to start  again`;
      reset();
    
    }
     
} 
        
let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
function reset ()
{
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}