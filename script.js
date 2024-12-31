
// Declaración de variables

var timer = 0;
var i = 0;
var line = false;

function replace_text() {
    if (line == true) {
        document.getElementById("text_descarga").textContent="> DESCARGA_";
        document.getElementById("text_wiki").textContent="> WIKI_";
        line = false;
    } else {
        document.getElementById("text_descarga").textContent="> DESCARGA";
        document.getElementById("text_wiki").textContent="> WIKI";
        line = true;
    }
}

function clickDownload() {
    $("#download_button")
    .attr('src', "media/descargar_on.png");
    //audio_confirm.play();
}

function displayWiki() {
    var show = document.getElementById("wiki_display");
    if (show.style.display == "block") {
        show.style.display = "none";
        document.getElementById("show_more").textContent="← Mostrar →";
    }
    else {
        show.style.display = "block";
        document.getElementById("show_more").textContent="→ Ocultar ←";
    }
  }

setInterval(replace_text, 500);

