document.getElementById("btnDescription").addEventListener("click", function() {
    document.getElementById("descriptionContent").style.display = "block";
    document.getElementById("sourcesContent").style.display = "none";
    document.getElementById("commentairesContent").style.display = "none";
});

document.getElementById("btnSources").addEventListener("click", function() {
    document.getElementById("descriptionContent").style.display = "none";
    document.getElementById("sourcesContent").style.display = "block";
    document.getElementById("commentairesContent").style.display = "none";
});

document.getElementById("btnCommentaires").addEventListener("click", function() {
    document.getElementById("descriptionContent").style.display = "none";
    document.getElementById("sourcesContent").style.display = "none";
    document.getElementById("commentairesContent").style.display = "block";
});
