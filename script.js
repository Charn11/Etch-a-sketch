//clear button
const clearButton=document.createElement('button');
clearButton.innerText="CLEAR";
clearButton.addEventListener('click',e  => {
    gridHover.forEach(eachGrid =>{
    //eachGrid.setAttribute('style', 'background-color: #5f9ea0');
    //location.reload();
    })
    document.getElementById('gridContainer').remove();
    //reset grid
    resetgrid();
    
    
})
document.body.appendChild(clearButton);


//function to reset grid and prompt
function resetgrid(){
    const gridDiv=document.createElement('div');
gridDiv.setAttribute('id','gridContainer');
document.body.appendChild(gridDiv);

let j= prompt("Enter a number within 1 to 50: ");

//creating grids
for(;;){
if(j<51&&j>0){
for(let i=0;i<j*j;i++){
    const grids=document.createElement('div');
    grids.setAttribute('class','grids');
    document.getElementById('gridContainer').appendChild(grids);
    
} break;
}
else{
    j= prompt("Enter a number within 1 to 50: ");
}
}

let gridno = document.getElementById('gridContainer');
gridno.setAttribute('style', 'grid-template-columns: repeat(' + j + 
', 1fr)');

const eachGrid = document.getElementsByClassName('.grids');
const gridHover = document.querySelectorAll('.grids');
gridHover.forEach(eachGrid =>{
    eachGrid.addEventListener('mouseover', e => {
        eachGrid.setAttribute('style', 'background-color: '+randomColor());
    })
})

}

//grid container start
const gridDiv=document.createElement('div');
gridDiv.setAttribute('id','gridContainer');
document.body.appendChild(gridDiv);

let j=16;

//creating grids
for(let i=0;i<j*j;i++){
    const grids=document.createElement('div');
    grids.setAttribute('class','grids');
    document.getElementById('gridContainer').appendChild(grids);
    
}

let gridno = document.getElementById('gridContainer');
gridno.setAttribute('style', 'grid-template-columns: repeat(' + j + 
', 1fr)');


//ridno.setAttribute('style', 'grid-template-rows: repeat(' + j +', 1fr)');
function randomColor(){
let randomCol = '#'+Math.floor(Math.random()*16777215).toString(16);
return randomCol;
}
//hover effect generator
const eachGrid = document.getElementsByClassName('.grids');
const gridHover = document.querySelectorAll('.grids');
gridHover.forEach(eachGrid =>{
    eachGrid.addEventListener('mouseover', e => {
        eachGrid.setAttribute('style', 'background-color: '+randomColor());
    })
})
