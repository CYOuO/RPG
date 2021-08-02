document.write('<script src="./common.js"></script>');
document.write('<script src="Son/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/兒子物品/寶貝球_new.png", image2: "img/兒子物品/寶貝球.png", open: 0, bThing: 0, others: 0 },
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
    choice = 1
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('Game/Game_pingpong.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

function Choice_game1() { //玩遊戲/輸入密碼
    choice = 1
    Choice_box();
    document.getElementById("choice1").onclick = () => { window.open('Game/Game_maze.html', ); };
    document.getElementById("choice2").onclick = () => { Password_Game1() };
}


function Choice_stage1_0() { //拒絕挑戰/接受挑戰
    Choice_stage(2, 0, stage1_1, stage1_2);
}

function Choice_stage2_0() { //拒絕挑戰/接受挑戰
    Choice_stage(2, 0, stage2_1, stage2_2);
}

function Choice_stage4_2_0() { //在外面等待/一起報名
    Choice_stage(2, 2, stage4_2_1, stage4_2_2);
}


function Choice_stage4_0() { //直接走掉/繼續等待
    Choice_stage(2, 3, stage4_1, stage4_2);
}

let Choice = [
    { first: "拒絕挑戰", second: "接受挑戰" },
    { first: "玩遊戲", second: "輸入密碼" },
    { first: "在外面等待", second: "一起報名" },
    { first: "直接走掉", second: "繼續等待" },
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

//密碼
var score = 0

function Password_Game() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0404") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        cs = stage2;
        change_scipts();
    } else if (password == "0107") {
        // alert("Welcome !");
        password_common();
        istop = 1
        score += 1;
        cs = stage3;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}

function Password_Game1() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0228") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        cs = stage4;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}