let divArray = document.querySelectorAll(".image-contentbox");
let divImg = document.querySelectorAll('.image');
let divContent = document.querySelectorAll('.content');
console.log(divArray);



for (let i=0; i<3; i++){
    divArray[i].style.gridrow = i;
    for(let j=0; j<5; j++){
        divArray[i].style.gridcolumn = j;
    }
}