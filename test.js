// Global variable//
var init = 0;
// Scripts Event //
//stage1
function choiseMomOrDad() {
    document.getElementById("dad").style.display = "block";
    document.getElementById("mom").style.display = "block";
    document.getElementById("mom").onclick = () => { Stage2() };
}

function bag_appear() {
    document.getElementById("bag").style.visibility = "visible"; //顯示背包
    document.getElementById("bag").addEventListener('click', function() { //按背包
        bag_envelope.style.display = "block"; //顯示信封
        Farmer1.style.display = "none" //劇情頁消失
        document.getElementById("envelope_new").addEventListener('click', function() { bag[0].event(); });
    })
}
//stage2
function Bag_Basket() {
    bag[0] = { item: "baseket", image: "img/basket.png", open: 0, thing: 0 };
    Bag_open();
    document.getElementById("envelope_new").src = bag[0].image;
    // document.getElementById("envelope_new").onclick = () => {};
    document.getElementById("bag").addEventListener('click', function() {
        bag[0].open = 1;
        Bag_open();
    })
    m++;

}

function Apple() {}

//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "", open: 0, thing: 1, event: Envelope_new },
]

function Bag_open() { //判斷背包有無新物品
    if (bag[0].open === 1) {
        document.getElementById("bag").src = "img/bag.png";
    } else if (bag[0].open === 0) {
        document.getElementById("bag").src = "img/bag_new.png";
    }
}



//Scripts//
let stage1 = [
    { name: "你", word: "我怎麼變成農場主人了……！", image: "img/農場主人.png", bEvent: 0 },
    { name: "你", word: "我現在要做什麼？！", image: "img/農場主人.png", bEvent: 0 },
    { name: "你", word: "背包裡好像有東西。", image: "img/農場主人.png", bEvent: 1, event: bag_appear },
    { name: "你", word: "把信還回去吧，要給誰呢？", image: "img/農場主人.png", bEvent: 1, event: choiseMomOrDad },
]

let stage2 = [
    { name: "你", word: "媽媽，這是你寫的信，放在我背包裡了。", image: "img/農場主人.png", bEvent: 0 },
    { name: "媽媽", word: "謝謝兒子，你可以順便幫媽媽去摘蘋果嗎？", image: "", bEvent: 0 },
    { name: "你", word: "嗯！", image: "img/農場主人.png", bEvent: 0 },
    { name: "媽媽", word: "籃子放在你的背包了，檢查一下，沒問題就去摘蘋果吧。", image: "", bEvent: 1, event: Bag_Basket },
    { name: "提示", word: "點擊蘋果去幫媽媽摘蘋果吧！", image: "img/game_apple2.png", bEvent: 1, event: Apple }
]

let stage3 = [
    { name: "你", word: "爸爸，這是媽媽給你的信", image: "img/農場主人.png" },
    { name: "爸爸", word: "謝謝兒子，趕快回去耕地吧。", image: "" },
    { name: "你", word: "嗯！", image: "img/農場主人.png" }
]

//Stage//
//Stage1
var i = 0

function Stage1() {
    window.addEventListener('load', function() {
        document.getElementById("bag").style.visibility = "hidden";
        Stage1_box();
        i++;
        document.getElementById('dialog_box').addEventListener('click', function() {
            if (i < stage1.length) {
                Stage1_box();
                if (stage1[i].bEvent === 1) { //發生Script Event
                    document.getElementById("dialog_box").onclick = stage1[i].event();
                } else {
                    i++;
                }
            } else {
                i = stage1.length - 1; //控制i不超出範圍
                document.getElementById("dialog_box").onclick = stage1[i].event();
            }
        })
    })
}

function Stage1_box() {
    document.getElementById("dialog_box").textContent = stage1[i].word;
    document.getElementById("name_box").textContent = stage1[i].name;
    document.getElementById("character_img").src = stage1[i].image;
}
//Stage2
var m = 0;

function Stage2() {
    // 將原先Stage 1的台詞清空
    stage1 = [];
    bag = [];
    bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0 };
    document.getElementById("envelope_new").src = bag[0].image;
    document.getElementById("dad").style.visibility = "hidden";
    document.getElementById("mom").style.visibility = "hidden";
    Stage2_box();
    m++;
    document.getElementById('dialog_box').addEventListener('click', function() {
        if (m < stage2.length) {
            Stage2_box();
            if (stage2[m].bEvent === 1) { //發生Script Event
                document.getElementById("dialog_box").onclick = stage2[m].event();
            } else {
                m++;
            }
        }
    })
}

function Stage2_box() {
    document.getElementById("dialog_box").textContent = stage2[m].word;
    document.getElementById("name_box").textContent = stage2[m].name;
    document.getElementById("character_img").src = stage2[m].image;
}


//返回鍵//
function return_key() { //
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_envelope").style.display = "none";
    Stage1_box();
}

function return_key2() {
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_letter").style.display = "none";
    document.getElementById("box").style.display = "none";
    i++;
    Stage1_box();
}
//Bag Event//
function Envelope_new() { //初點信封

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
        Bag_open();
    }

}



//執行//
function run() {
    init === 0 ? Stage1() : null;
    init = 1;

}
run();