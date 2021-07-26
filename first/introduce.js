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
                    window.location.href = '/RPG/step/step1.html';
                })
            }
        }
    })
}
window.addEventListener('load', function() {
    pokemon1();
    run();
})
let pokemon = [
    { image: "/img/神奇寶貝/0.png", word: "我是一位飛行員，波波鳥是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/1.png", word: "我是一位市長的女兒，伊布是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/2.png", word: "我是一位登山客，呆呆獸是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/3.png", word: "我是一位護士，胖丁是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/4.png", word: "我是一個農場的主人，可達鴨是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/5.png", word: "我是一位博士的學生，小火龍是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/6.png", word: "我是一位消防員，傑尼龜是我的神奇寶貝。" },
    { image: "/img/神奇寶貝/7.png", word: "我是一位道館小開（老闆的兒子），妙蛙種子是我的神奇寶貝。" },
]