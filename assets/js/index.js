// DOM Elements
const navigationScreen = document.getElementById('navigationScreen');

// Changes the index page at choosing a different language
function changeLanguage(pageLanguage){
    if(pageLanguage.value == 'ES'){
        window.location.href = 'index-es.html';
    }
    
    if(pageLanguage.value == 'EN'){
        window.location.href = 'index.html';
    }
}

// Close / Show the navigation screen
function closeNavScreen(){
    navigationScreen.style.display = 'none';
}

function showNavScreen(){
    navigationScreen.style.display = 'flex';
}

// Changes the main image of a project
function changeImg(id, imgPath){
    const mainImg = document.getElementById(id);
    const assetsPath = 'assets/img/';

    mainImg.src = assetsPath + imgPath;
}

// Write current year in footer
function writeCurrentYear(){
    let author = document.getElementById('author');
    let year = new Date().getFullYear();

    author.innerText = "Julio Vázquez | El Koko Díaz (" + year + ").";
}

writeCurrentYear();