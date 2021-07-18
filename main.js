function main() {
    var test = 0;
    document.getElementsByClassName("testInput").onblur = () => console.log(123);
}

function red() {
    document.getElementById("start").style.color = "red";
    document.getElementById("start").onclick = () => blue()
}

function blue() {
    document.getElementById("start").style.color = "blue";
    document.getElementById("start").onclick = () => red()
}

function start() {
    // red();

}

main();

// function dialog_box() {
//     document.getElementById("dialog_box").textContent = "我現在要幹嘛?!";
// }

let script_farmer = [ //農村主人劇本
    "我怎麼變成農場主人了……！",
    "我現在要做什麼？！",
    "背包裡好像有東西。",
    "是媽媽寫給爸爸的父親節卡片。",
    "把信還回去吧，要給誰呢？"
]


function dialog_box() {
    document.getElementById("bag").style.visibility = "hidden";
    document.getElementById("dialog_box").textContent = script_farmer[1];
    document.getElementById("dialog_box").onclick = () => ac()

}

function ac() {
    document.getElementById("bag").style.visibility = "visible";
    document.getElementById("dialog_box").textContent = script_farmer[2];
}

function bag() {
    window.location.href = 'inside_bag.html';
}

function return_key() {
    window.location.href = 'Farmer2.html';
    document.getElementById("dialog_box").textContent = "背包裡好像有東西。";
}