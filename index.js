// Global variable
var init = 0;
// Event 
function choiseMomOrDad() {
    document.getElementById("dad").style.display = "block";
    document.getElementById("mom").style.display = "block";
    document.getElementById("mom").onclick = () => { Stage2() };
}

function Bag_Basket() {
    if (bag[0].open === 1) {
        document.getElementById("bag").src = "img/bag.png";
    } else if (bag[0].open === 0) {
        document.getElementById("bag").src = "img/bag_new.png";
    }
}
//Bag
let bag = [
    { item: "envelope", image: "", open: 0, thing: 1 },
]



//Scripts
let stage1 = [
    { name: "你", word: "我怎麼變成農場主人了……！", image: "img/農場主人.png", bEvent: 0 },
    { name: "你", word: "我現在要做什麼？！", image: "img/農場主人.png", bEvent: 0 },
    { name: "你", word: "背包裡好像有東西。", image: "img/農場主人.png", bEvent: 1, event: () => {} },
    { name: "你", word: "把信還回去吧，要給誰呢？", image: "img/農場主人.png", bEvent: 1, event: choiseMomOrDad },
]

let stage2 = [
    { name: "你", word: "媽媽，這是你寫的信，放在我背包裡了。", image: "img/農場主人.png", bEvent: 0 },
    { name: "媽媽", word: "謝謝兒子，你可以順便幫媽媽去摘蘋果嗎？", image: "", bEvent: 0 },
    { name: "你", word: "嗯！", image: "img/農場主人.png", bEvent: 0 },
    { name: "媽媽", word: "籃子放在你的背包了，檢查一下，沒問題就去摘蘋果吧。", image: "", bEvent: 1, event: Bag_Basket },
    { name: "提示", word: "點擊蘋果去幫媽媽摘蘋果吧！", image: "img/game_apple2.png", bEvent: 1 }
]

let stage3 = [
        { name: "你", word: "爸爸，這是媽媽給你的信", image: "img/農場主人.png" },
        { name: "爸爸", word: "謝謝兒子，趕快回去耕地吧。", image: "" },
        { name: "你", word: "嗯！", image: "img/農場主人.png" }
    ]
    //Stage
var i = 0

function Stage1() {
    window.addEventListener('load', function() {
        document.getElementById("bag").style.visibility = "hidden";
        document.getElementById("dialog_box").textContent = stage1[i].word;
        document.getElementById("name_box").textContent = stage1[i].name;
        document.getElementById("character_img").src = stage1[i].image;
        i++;
        document.getElementById('dialog_box').addEventListener('click', function() {
            if (i < stage1.length) {
                document.getElementById("dialog_box").textContent = stage1[i].word;
                document.getElementById("name_box").textContent = stage1[i].name;
                document.getElementById("character_img").src = stage1[i].image;
                if (stage1[i].bEvent === 1) {
                    document.getElementById("bag").style.visibility = "visible"; //顯示背包
                    document.getElementById("bag").addEventListener('click', function() { //按背包
                        bag_envelope.style.display = "block";
                        Farmer1.style.display = "none"
                        document.getElementById("envelope_new").click = Envelope_new();
                    })
                    if (stage1[i].bEvent === 1) {
                        stage1[i].event();
                    }
                } else {
                    i++;
                }
            }
        })
    })
}


var m = 0;

function Stage2() {
    // 將原先Stage 1的台詞清空
    stage1 = [];
    bag = [];
    bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0 };
    document.getElementById("envelope_new").src = bag[0].image;
    document.getElementById("dad").style.visibility = "hidden";
    document.getElementById("mom").style.visibility = "hidden";

    document.getElementById("dialog_box").textContent = stage2[m].word;
    m++;
    document.getElementById('dialog_box').addEventListener('click', function() {
        if (m < stage2.length) {
            document.getElementById("dialog_box").textContent = stage2[m].word;
            document.getElementById("name_box").textContent = stage2[m].name;
            document.getElementById("character_img").src = stage2[m].image;
            if (stage2[m].bEvent === 1) {
                bag[0] = { item: "baseket", image: "img/basket.png", open: 0, thing: 0 };
                document.getElementById("envelope_new").src = bag[0].image;
                document.getElementById("envelope_new").onclick = () => {};
                Bag_Basket();
            } else {
                m++;
            }
        }
    })
}


//返回鍵
function return_key() { //
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_envelope").style.display = "none";
    document.getElementById("dialog_box").textContent = stage1[i].word;
}

function return_key2() {
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_letter").style.display = "none";
    document.getElementById("box").style.display = "none";
    i++;
    document.getElementById("dialog_box").textContent = stage1[i].word;
    document.getElementById("name_box").textContent = stage1[i].name;
    document.getElementById("character_img").src = stage1[i].image;
}

//初點信封
function Envelope_new() {
    document.getElementById("envelope_new").addEventListener('click', function() {
        if (bag[0].thing === 1) {
            bag[0].open = 1;
            document.getElementById("bag").src = "img/bag.png";
            bag[0].image = src = "img/envelope.png";
            document.getElementById("envelope_new").src = bag[0].image;
            document.getElementById("bag_envelope").style.display = "none";
            document.getElementById("return2").style.display = "none";
            document.getElementById("bag_letter").style.display = "block";
            document.getElementById("letter").addEventListener('click', function() {
                document.getElementById("box").style.display = "block";
                document.getElementById("return2").style.display = "block";
            })
        } else {
            bag[0].open = 1;
            Bag_Basket();
        }
    })
}

function run() {
    init === 0 ? Stage1() : null;
    init = 1;

}
run();

// let script = [ //農村主人劇本
//     "我怎麼變成農場主人了……！",
//     "我現在要做什麼？！",
//     "背包裡好像有東西。",
//     "是媽媽寫給爸爸的父親節卡片。",
//     "把信還回去吧，要給誰呢？",
// ]

// let script_mom = [
//     "媽媽，這是你寫的信，放在我背包裡了。",
//     "謝謝兒子，你可以順便幫媽媽去摘蘋果嗎？",
//     "嗯！",
//     "籃子放在你的背包了，檢查一下，沒問題就去摘蘋果吧。",
//     "點擊蘋果去幫媽媽摘蘋果吧！"
// ]

// let script_dad = [
//     "爸爸，這是媽媽給你的信。",
//     "謝謝兒子，趕快回去耕地吧。",
//     "嗯！"
// ]




// function dialog_box() { //農村主人對話框
//     const f1 = document.getElementById("dialog_box");
//     const bag = document.getElementById("bag");
//     const bag_envelope = document.getElementById("bag_envelope");
//     const Farmer1 = document.getElementById("Farmer1");
//     f1.textContent = stage1[1].word;
//     f1.addEventListener('click', function() { //第三句
//         bag.style.visibility = "visible"; //顯示背包
//         f1.textContent = script_farmer[2];
//         bag.addEventListener('click', function() { //按背包
//             // window.location.href = 'inside_bag.html';
//             bag_envelope.style.display = "block";
//             Farmer1.style.display = "none";
//         })
//     })
// }

// function mom() {
//     // 隱藏選項
//     document.getElementById("dad").style.visibility = "hidden";
//     document.getElementById("mom").style.visibility = "hidden";
//     // 切換台詞
//     const w = document.getElementById("dialog_box2");
//     const farmer = document.getElementById("farmer");
//     const name = document.getElementById("name");
//     w.textContent = script_farmer[5];

//     w.addEventListener('click', function() {
//         // 隱藏選項
//         document.getElementById("dad").style.visibility = "hidden";
//         document.getElementById("mom").style.visibility = "hidden";
//         farmer.style.visibility = "hidden";
//         name.textContent = "媽媽";
//         w.textContent = script_farmer[6];
//         w.addEventListener('click', function() {
//             farmer.style.visibility = "visible";
//             name.textContent = "你";
//             w.textContent = script_farmer[7];
//         })
//     })
// }