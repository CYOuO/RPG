document.write('<script src="./common.js"></script>');
document.write('<script src="Pilot/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/飛行員物品/帳本_new.png", image2: "img/飛行員物品/帳本.png", open: 0, bThing: 1, thing: "img/飛行員物品/錢.png", name: "你", word: "沒有錢要怎麼修飛機呢", others: 0 },
]

function bag_appear() {
    document.getElementById("bag").style.visibility = "visible"; //顯示背包
}

var n = 0 //用來偵測在第幾個物品

function bag_detect() { //偵測按背包
    document.getElementById("bag").addEventListener('click', function() { //按背包
        n = 0
        document.getElementById("envelope_new").src = bag[n].image;
        document.getElementById("bag_envelope").style.display = "block"; //顯示信封
        document.getElementById("Farmer1").style.display = "none" //劇情頁消失
        document.getElementById("previous").style.display = "none";
        document.getElementById("next").style.display = "none";
        bag_change_thing();
        document.getElementById("envelope_new").addEventListener('click', function() { Envelope_new(); });

    })
}
//分支
var choice = 0

var number = 2; //選項個數

function Choice_game() { //玩遊戲/輸入密碼
    choice = 4
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('https://games.gdevelop-app.com/game-4a41c8d1-3138-4813-b10a-818ab523ebf3/index.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

function Choice_stage1_0() { //冒險開飛機/存錢修飛機 
    Choice_stage(2, 0, stage1_1, stage1_2);
}

function Choice_stage1_2_0() { //找博士應聘/找其他工作
    Choice_stage(2, 1, stage1_2_1, stage1_2_2);
}

function Choice_stage1_2_1_0() { //堅持成為助理/練習神奇寶貝大賽
    Choice_stage(2, 3, stage1_2_1_1, stage1_2_1_2);
}

function Choice_stage1_2_2_0() { //每天待在家處理訂單/辛苦的幫忙送貨
    Choice_stage(2, 2, stage1_2_2_1, stage1_2_2_2);
}

let Choice = [
    { first: "冒險開飛機", second: "存錢修飛機" },
    { first: "找博士應聘", second: "找其他工作" },
    { first: "待在家處理訂單", second: "辛苦的幫忙送貨" },
    { first: "堅持成為助理", second: "練習神奇寶貝大賽" },
    { first: "玩遊戲", second: "輸入密碼" },
]

//Stage//
//Stage1
var i = 0
var istop = 0; //運行
function Stage1() {
    if (istop == 1) return;
    Stage1_box();
    i++;
    Stage1_run();
}

function Stage1_run() {
    document.getElementById('dialog_box').addEventListener('click', function() {
        console.log(i)
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
}

function Stage1_box() {
    if (i < stage1.length) {
        document.getElementById("dialog_box").textContent = stage1[i].word;
        document.getElementById("name_box").textContent = stage1[i].name;
        document.getElementById("character_img").src = stage1[i].image;
    } else {
        i = stage1.length - 1; //控制i不超出範圍
        document.getElementById("dialog_box").onclick = stage1[i].event();
    }
}
var cs = 0

function change_scipts() {
    stage1 = cs;
    i = 0;
    Stage1_box();
    i++;
    none();
}

function change_bag_report() { //背包新增報告
    bag[1] = { item: "envelope", image: "img/飛行員物品/報告_new.png", image2: "img/飛行員物品/報告.png", open: 0, bThing: 1, thing: "img/飛行員物品/報告內頁.png", name: "你", word: "看完後，我更了解了波波鳥呢", others: 1 }
    bag.open = 0;
    Bag_open();
    // bag_detect();
    Stage1_box();
    i++;
}
//密碼
var score = 0

function Password_Game() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0408") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        cs = stage2_1;
        change_scipts();
    } else if (password == "1025") {
        // alert("Welcome !");
        password_common();
        istop = 1
        score += 1;
        cs = stage2_2;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}