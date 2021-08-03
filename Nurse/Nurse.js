document.write('<script src="./common.js"></script>');
document.write('<script src="Nurse/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/護士物品/OK繃.png", image2: "img/護士物品/OK繃.png", open: 1, bThing: 0, others: 0 },
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
    bag[0] = { item: "nothing", image: "img/Nothing.png", image2: "img/Nothing.png", open: 1, bThing: 0, event: "" };
    i++;
}
//分支
var choice = 0

var number = 2; //選項個數

function Choice_game() { //玩遊戲/輸入密碼
    choice = 3
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('Game/Game_cube.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}

function Choice_game1() { //玩遊戲/輸入密碼
    choice = 3
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        play = 1;
        bgm();
        window.open('Game/Game_cube.html', );
    };
    document.getElementById("choice2").onclick = () => { Password_Game1() };
}

function Choice_stage1_0() { //還是留下來吧 /跟院長談談 
    Choice_stage(2, 0, stage1_1, stage1_2);
}

function Choice_stage1_2_0() { //流動商人/農場主人
    Choice_stage(2, 1, stage1_2_1, stage1_2_2);
}

function Choice_stage1_2_2_0() { //忽視/尋找聲音來源
    Choice_stage(2, 2, stage1_2_1_1, stage1_2_1_2);
}

let Choice = [
    { first: "還是留下來吧 ", second: "跟院長談談" },
    { first: "流動商人", second: "農場主人 " },
    { first: "忽視", second: "尋找聲音來源" },
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

//密碼
var score = 0

function Password_Game() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0617") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        cs = stage3;
        change_scipts();
    } else if (password == "0716") {
        // alert("Welcome !");
        password_common();
        istop = 1
        score += 1;
        cs = stage4;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}

function Password_Game1() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "0617") {
        password_common();
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        cs = stage5;
        change_scipts();
    } else if (password == "0716") {
        // alert("Welcome !");
        password_common();
        istop = 1
        score += 1;
        cs = stage6;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}