document.write('<script src="./common.js"></script>');
document.write('<script src="Daughter/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/女兒物品/土地企劃書_new.png", image2: "img/女兒物品/土地企劃書.png", open: 0, bThing: 0, others: 0 },
]

function bag_appear() {
    document.getElementById("bag").style.visibility = "visible"; //顯示背包
}

var n = 0 //用來偵測在第幾個物品

function bag_detect() { //偵測按背包
    document.getElementById("bag").addEventListener('click', function() { //按背包
        console.log(122222)
        n = 0
        document.getElementById("bag_envelope").style.display = "block"; //顯示信封
        document.getElementById("Farmer1").style.display = "none" //劇情頁消失
        document.getElementById("previous").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("envelope_new").src = bag[n].image;
        bag_change_thing();

        document.getElementById("envelope_new").addEventListener('click', function() { Envelope_new(); });
    })
}


//分支
var choice = 0
var number = 2; //選項個數

function Choice_game() { //玩遊戲/輸入密碼
    choice = 7
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('Game/Game_baby.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

function Choice_game1() { //玩遊戲/輸入密碼
    choice = 7
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('https://games.gdevelop-app.com/game-17fd3769-7c61-4f43-bde9-ee4e4ab33700/index.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game1() };
}

function Choice_stage1_0() { //拒絕爸爸交代的事/接受爸爸交代的事
    Choice_stage(2, 0, stage1_1, stage1_2);
}

function Choice_stage1_2_0() { //護士/流動商人
    Choice_stage(2, 1, stage1_2_1, stage1_2_2);
}

function Choice_stage1_2_2_0() { //挽留哈密瓜/找土地分析專家
    Choice_stage(2, 2, stage1_2_2_1, stage1_2_2_2);
}

function Choice_stage1_2_2_2_0() { //出借/不借
    Choice_stage(2, 3, stage1_2_2_2_1, stage1_2_2_2_2);
}

function Choice_stage1_2_2_2_2_0() { //繼續站著/趕緊跟上
    Choice_stage(2, 4, stage1_2_2_2_2_1, stage1_2_2_2_2_2);
}

function Choice_stage1_2_2_2_2_2_0() { //沒有過多的在意/聽取小開的建議
    Choice_stage(2, 5, stage1_2_2_2_2_2_1, stage1_2_2_2_2_2_2);
}

function Choice_stage1_2_2_2_2_2_2_0() { //自己登記/邀請小開
    Choice_stage(2, 6, stage1_2_2_2_2_2_2_1, stage1_2_2_2_2_2_2_2);
}

//Choice
let Choice = [
    { first: "拒絕爸爸交代的事 ", second: "接受爸爸交代的事" },
    { first: "護士 ", second: "流動商人" },
    { first: "挽留哈密瓜", second: "找土地分析專家" },
    { first: "出借", second: "不借" },
    { first: "繼續站著", second: "趕緊跟上 " },
    { first: "沒有過多的在意", second: "聽取小開的建議" },
    { first: "自己登記", second: "邀請小開" },
    { first: "玩遊戲", second: "輸入密碼" },

]

//Stage//
//Stage1
var i = 0
var istop = 0; //運行
function Stage1() {
    // window.addEventListener('load', function() {
    // document.getElementById("bag").style.visibility = "hidden";
    if (istop == 1) return;
    Stage1_box();

    i++;
    Stage1_run();

    // })
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

function bag_nothing() { //背包清空
    bag = [];
    bag[0] = { item: "nothing", image: "img/Nothing.png", image2: "img/Nothing.png", open: 1, bThing: 0, event: "" };
    i++;
}

var cs = 0

function change_scipts() {
    stage1 = cs;
    i = 0;
    Stage1_box();
    i++;
    none();
}

var score = 0;

function Password_Game() { //輸入密碼
    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0066") {
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        password_common();
        cs = stage2;
        change_scipts();
    } else if (password == "6600") {
        // alert("Welcome !");
        istop = 1
        score += 1;
        password_common();
        cs = stage3;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}

function Password_Game1() { //輸入密碼
    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0705") {
        // alert("Welcome to my homepage!");
        istop = 1
        password_common();
        cs = stage4;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}