function start() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("rule").style.display = "block";
}

function next0() {
    document.getElementById("rule").style.display = "none";
    document.getElementById("fighting").style.display = "block";
}

function next1() {
    document.getElementById("fighting").style.display = "none";
    document.getElementById("introduce1").style.display = "block";
}

function next2() {
    document.getElementById("introduce1").style.display = "none";
    document.getElementById("introduce2").style.display = "block";
}

function next3() {
    document.getElementById("introduce2").style.display = "none";
    document.getElementById("introduce3").style.display = "block";
}

function next_step() {
    document.getElementById("introduce3").style.display = "none";
    document.getElementById("step1").style.display = "block";
    document.getElementById("change_page1").style.display = "block";
}


function change_page1() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function change_page2() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "block";
}
var i = 0;

function pokemon1() {

    document.getElementById("character_img").src = pokemon[i].image;
    document.getElementById("dialog_box").textContent = pokemon[i].word;
    i++;
}

function run() {
    document.getElementById('dialog_box').addEventListener('click', function() {
        if (i < pokemon.length) {
            document.getElementById("character_img").src = pokemon[i].image;
            document.getElementById("dialog_box").textContent = pokemon[i].word;
            i++;
            if (i == 8) {
                document.getElementById('dialog_box').addEventListener('click', function() {
                    next_step();
                })
            }
        }
    })
}

let pokemon = [
    { image: "img/神奇寶貝/0.png", word: "我是一位業餘飛行員，波波鳥是我的神奇寶貝。" },
    { image: "img/神奇寶貝/1.png", word: "我是一位市長的女兒，伊布是我的神奇寶貝。" },
    { image: "img/神奇寶貝/2.png", word: "我是一位登山客，呆呆獸是我的神奇寶貝。" },
    { image: "img/神奇寶貝/3.png", word: "我是一位護士，胖丁是我的神奇寶貝。" },
    { image: "img/神奇寶貝/4.png", word: "我是一個農場的主人，可達鴨是我的神奇寶貝。" },
    { image: "img/神奇寶貝/5.png", word: "我是一位博士的學生，小火龍是我的神奇寶貝。" },
    { image: "img/神奇寶貝/6.png", word: "我是一位消防員，傑尼龜是我的神奇寶貝。" },
    { image: "img/神奇寶貝/7.png", word: "我是一位道館小開（老闆的兒子），妙蛙種子是我的神奇寶貝。" },
]


window.addEventListener('load', function() {
    pokemon1();
    run();

})



var audio = new Audio("../music/start.mp3"); //这里的路径写上mp3文件在项目中的绝对路径
var duration;
duration = audio.duration; //長度單位是秒
function bgm() {
    audio.play(); //播放
}
window.setInterval("bgm()", duration * 1000 + 1000);