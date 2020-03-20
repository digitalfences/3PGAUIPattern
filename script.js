let divArray = document.querySelectorAll(".image-contentbox");
let divImg = document.querySelectorAll('.image');
let divContent = document.querySelectorAll('.content');
let cat = '';
let url = "https://api.thecatapi.com/v1/images/search";
let categoryURL = "https://api.thecatapi.com/v1/images/search?category_ids=";
let apikey = "66356a00-6e21-4837-b13d-dcc4caee975a";
let row =3
let column = 1
let buttonArray = document.querySelectorAll("button");
let body = document.querySelector("body");

body.addEventListener('click', focus);
for (let i =0; i < 5; i++){
    buttonArray[i].addEventListener('click', toggle)
}

for (let i = 1; i < 5; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i;
    
}
row = 2;
for (let i = 6; i < 10; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i -5;
    
}
row =1;
for (let i = 11; i < 15; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i -10;
    
}





for (let i = 0; i<15; i++){
    assignPhoto(i);
}

var fetchArray =[];
assignPhoto();

function assignPhoto (i) {
    fetch(url, {
        headers: {
            "x-api-key": apikey
        }
    })
    .then(res => res.json())
    .then(res => {divImg[i].setAttribute("src",res[0].url)})
    .catch(err => {})
}




/**
 * focus()
 * 
 * this function will take whichever div is clicked and expand it in the center of the screen
 * when the user clicks away they will return to normal view
 * 
 * @param {event object} e 
 */

function focus(e) {
    e.preventDefault();
    let popUpDiv = document.querySelector('.modal');
    let popUpContent = popUpDiv.querySelector('h1');
    let popUpImage = popUpDiv.querySelector('img');
    let main = document.querySelector('main');
    if (e.target.className != "image"){
        popUpDiv.style.display = "none"
        return;
    }
    else{
        if(popUpDiv.style.display == "none"){
            popUpDiv.style.display = "block";
            popUpImage.setAttribute("src", e.target.src);
        }
        else{
            popUpDiv.style.display = "none"
            return;
        }
    }

     
}
function switchContent(e){
    e.preventDefault();
    if (e.target.className == "modal-image"){
        document.querySelector('.modal-image').style.display = "none"
        document.querySelector('.modal-content').style.display ="block"
    }
        
    else if (e.target.className == 'modal-content'){
        document.querySelector(".modal-content").style.display = "none";
        document.querySelector('.modal-image').style.display="block";
    }
    else{
        return;
    }

}
function loseFocus(e){
    e.preventDefault();
    let modal = document.querySelector(".modal");
    let image = document.querySelector(".modal-image")
    let content = document.querySelector(".modal-content");
    if (modal.style.display =="none"){
        return;
    }
    if(e.target !== image && e.target !== content)
    {   console.log(e.target);
        modal.style.display = "none";}
    
}


/**
 * toggle()
 * 
 * this function will be implemented if I am able to complete the project early
 * it will toggle between various wireframes using buttons in the header
 * modal
 * hamburger
 * slideshow
 * accordion
 * tabs
 */

 function toggle(e){

 }
/*function toggle(e) {
    let sheetSrc = document.getElementById("style1");
    let newSheet = e.target.value;
    let newSheetPath = "./" + newSheet + ".css";
    sheetSrc.setAttribute('href',newSheetPath);
}*/