document.write('<script src="./common.js"></script>');
document.write('<script src="Student/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/學生物品/報告第一頁_new.png", image2: "img/學生物品/報告第一頁.png", open: 0, bThing: 0, others: 0 },
    { item: "envelope", image: "img/學生物品/報告第二頁_new.png", image2: "img/學生物品/報告第二頁.png", open: 0, bThing: 0, others: 1 },
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

function bag_nothing() { //背包清空
    bag = [];
    bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0, event: "" };
    i++;
}

//分支
var choice = 0

var number = 2; //選項個數

function Choice_game() { //玩遊戲/輸入密碼
    choice = 9
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('https://games.gdevelop-app.com/game-6078f6aa-81f3-4cf9-a26b-a27ee938a99b/index.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

var score = 0

function Choice_stage1_1() { //蜥蜴/龍
    Choice_ans(0, 1);
}

function Choice_stage1_2() { //耳朵/尾巴
    Choice_ans(1, 2);
}

function Choice_stage1_3() { //女/男
    Choice_ans(2, 2);
}

function Choice_stage1_0() { //陳志龍/小火龍
    Choice_stage(2, 3, stage2, stage3);
}

function Choice_stage3_0() { //直接講真心話/認真回答博士
    Choice_stage(2, 4, stage3_1, stage3_2);
}

function Choice_stage3_2_0() { //直接講真心話/認真回答博士
    Choice_stage(2, 4, stage3_2_1, stage3_2_2);
}

function Choice_stage3_2_2_0() { //不行/可以
    Choice_stage(2, 5, stage3_2_2_1, stage3_2_2_2);
}

function Choice_stage3_2_2_0() { //不行/可以
    Choice_stage(2, 5, stage3_2_2_1, stage3_2_2_2);
}

function Choice_stage400() { //眉毛/尾巴/嘴巴
    Choice_stage(3, 6, stage401, stage402, stage403);
}

function Choice_stage4_0() { //哆啦a夢/鬼滅之刃
    if (bOK === 1) {
        Choice_stage(2, 7, stage4_1, stage4_2);
    } else if (bOK === 0) {
        Choice_stage(2, 7, stage4_1, stage5_2);
    }
}

function Choice_stage6_0() { //挽留哈蜜瓜/練習比賽
    Choice_stage(2, 8, stage6_1, stage6_2);
}

let Choice = [
    { first: "蜥蜴", second: "龍" },
    { first: "耳朵", second: "尾巴" },
    { first: "女", second: "男" },
    { first: "陳志龍", second: "小火龍" },
    { first: "直接講真心話", second: "認真回答博士" },
    { first: "不行", second: "可以" },
    { first: "眉毛", second: "尾巴", third: "嘴巴" },
    { first: "哆啦a夢", second: "鬼滅之刃" },
    { first: "挽留哈蜜瓜", second: "練習比賽" },
    { first: "玩遊戲", second: "輸入密碼" },
]
var point = 0

function Choice_ans(cho, ans) {
    choice = cho;
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        if (ans == 1) {
            point++;
        }
        choice_run()

    };
    document.getElementById("choice2").onclick = () => {
        if (ans == 2) {
            point++;
        }
        choice_run()
    };
}

function choice_run() {
    if (choice < 2) {
        none();
        i++;
        Stage1_box();
    } else {
        if (point == 3) {
            none();

            i += 5;
            Stage1_box();
            i++
        } else {
            i++;
            Stage1_box();
            Choice_stage5();


        }

    }

}




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
var bOK = 0

function bAgree() {
    if (cs == stage3_2_2_1) {
        bOK = 0;
        cs = stage3_0,
            change_scipts();
    } else if (cs == stage3_2_2_2) {
        bOK = 1;
        cs = stage3_0,
            change_scipts();
    }
}

function branch() {
    if (bOK === 0) {
        cs = stage5
        stage1 = cs;
        i = 0;
        Stage1_box();
        i++;
        none();
    } else if (bOK === 1) {
        cs = stage4
        stage1 = cs;
        i = 0;
        Stage1_box();
        i++;
        none();
    }
}

//密碼
var score = 0

function Password_Game() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0727") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        cs = stage7;
        change_scipts();
    } else if (password == "1325") {
        // alert("Welcome !");
        password_common();
        istop = 1
        score += 1;
        cs = stage8;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}