// Changes the index page at choosing a different language
function changeLanguage(pageLanguage){
    if(pageLanguage.value == 'ES'){
        window.location.href = 'index-es.html';
    }
    
    if(pageLanguage.value == 'EN'){
        window.location.href = 'index.html';
    }
}

// Write current year in footer
function writeCurrentYear(){
    let author = document.getElementById('author');
    let year = new Date().getFullYear();

    author.innerText = "Julio Vázquez | El Koko Díaz (" + year + ").";
}

writeCurrentYear();