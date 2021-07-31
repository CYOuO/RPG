document.write('<script src="./common.js"></script>');
document.write('<script src="Hiker/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "compass", image: "img/農場主人物品/指北針_new.png", image2: "img/農場主人物品/指北針.png", open: 0, bThing: 0, thing: "", name: "", word: "", others: 0 },
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
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

function Game() {
    if (istop >= 1) return;
    else {
        document.getElementById("character").addEventListener('click', function() {
            if (istop >= 1) return;
            else {
                play = 1;
                bgm();
                window.open('', );
            }
        })
        document.getElementById("dialog_box").addEventListener('click', function() {
            if (istop >= 1) return;
            else {
                i++;
                Stage1_box();
            }
        })
    }
}

function Choice_stage4_0() { //東/南/西/北
    Choice_stage(4, 1, stage4_1, stage4_2, stage4_3, stage4_4);
}

function Choice_stage4_4_0() { //殺鬼/出發前往神奇寶貝大賽
    Choice_stage(2, 2, stage4_4_1, stage4_4_2);
}

function Choice_stage4_4_2_0() { //會/不會
    Choice_stage(2, 3, stage4_4_2_1, stage4_4_2_2);
}

let Choice = [
    { first: "玩遊戲", second: "輸入密碼" },
    { first: "東", second: "南", third: "西", fourth: "北" },
    { first: "殺鬼", second: "出發前往神奇寶貝大賽" },
    { first: "會", second: "不會" },
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


function change_bag_letter() { //背包新增給醫藥箱
    bag[1] = { item: "first_aid_kit", image: "img/登山客物品/醫藥箱_new.png", image2: "img/登山客物品/醫藥箱.png", open: 0, bThing: 1, thing: "img/登山客物品/藥.png", name: "你", word: "有藥在身邊就安心多了呢", others: 1 }
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
    if (password == "0330") {
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        password_common();
        cs = stage3;
        change_scipts();
    } else if (password == "0514") {
        // alert("Welcome !");
        istop = 1
        score += 1;
        password_common();
        cs = stage2;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}