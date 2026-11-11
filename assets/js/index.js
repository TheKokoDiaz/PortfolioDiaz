// Write current year in footer
function writeCurrentYear(){
    let author = document.getElementById('author');
    let year = new Date().getFullYear();

    author.innerText = "Julio Vázquez | El Koko Díaz (" + year + ").";
}

writeCurrentYear();