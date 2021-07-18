export function choiseMomOrDad() {
    document.getElementById('dialog_box').addEventListener('click', function() {
        document.getElementById("dad").style.display = "block";
        document.getElementById("mom").style.display = "block";
    })
}