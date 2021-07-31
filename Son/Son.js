document.write('<script src="./common.js"></script>');
document.write('<script src="Son/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/農場主人物品/envelope_new.png", image2: "img/農場主人物品/envelope.png", open: 0, bThing: 1, thing: "img/農場主人物品/letter.png", name: "你", word: "得趕快去摘蘋果呢。", others: 0 },
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
    choice = 0
    Choice_box();
    document.getElementById("choice1").onclick = () => { window.open('', ); };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}



function Choice_stage1_0() { //冒險開飛機/存錢修飛機 
    Choice_stage(2, 0, stage1_1, stage1_2);
}

function Choice_stage1_2_0() { //找博士應聘/找其他工作
    Choice_stage(2, 1, stage1_2_1, stage1_2_2);
}

function Choice_stage1_2_2_0() { //每天待在家處理訂單/辛苦的幫忙送貨
    Choice_stage(2, 2, stage1_2_2_1, stage1_2_2_2);
}

let Choice = [
    { first: "拒絕挑戰", second: "接受挑戰" },
    { first: "玩遊戲", second: "輸入密碼" },
    { first: "一起報名", second: "在外面等待" },
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