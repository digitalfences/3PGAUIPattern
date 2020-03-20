let divArray = document.querySelectorAll(".image-contentbox");
let divImg = document.querySelectorAll('.image');
let divContent = document.querySelectorAll('.content');
let cat = '';
let url = "https://api.thecatapi.com/v1/images/search";
let categoryURL = "https://api.thecatapi.com/v1/images/search?category_ids=";
let apikey = "66356a00-6e21-4837-b13d-dcc4caee975a";

for (let i=0; i<3; i++){
    divArray[i].style.gridrow = i;
    for(let j=0; j<5; j++){
        divArray[i].style.gridcolumn = j;
    }
}
for (let i = 0; i<15; i++){
    assignPhoto(i);
}

console.log(divArray);
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

    .catch(console.log("oops"))
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

/*function toggle(e) {
    let sheetSrc = document.getElementById("style1");
    let newSheet = e.target.value;
    let newSheetPath = "./" + newSheet + ".css";
    sheetSrc.setAttribute('href',newSheetPath);
}*/