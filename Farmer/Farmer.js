document.write('<script src="./common.js"></script>');
document.write('<script src="Farmer/Scripts.js"></script>');
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
        if (bag[n].bThing === 1) {
            document.getElementById("envelope_new").addEventListener('click', function() { Envelope_new(); });
        }
    })
}
//分支
var choice = 0

function Choice_game() { //玩遊戲/輸入密碼
    choice = 0
    Choice_box();
    document.getElementById("choice1").onclick = () => { window.open('Game/Game_Apple.html', ); };
    document.getElementById("choice2").onclick = () => { Password_Apple() };
}

function Apple() {
    if (istop >= 1) return;
    else {
        document.getElementById("character").addEventListener('click', function() {
            if (istop >= 1) return;
            else {
                window.open('Game/Game_Apple.html', );
            }
        })
        document.getElementById("dialog_box").addEventListener('click', function() {
            i++;
            Stage1_box();
        })
    }
}

var number = 2; //選項個數

function Choice_stage2_0() { //再考慮一下/我想好了
    Choice_stage(2, 1, stage2_1, stage2_2);
}

function Choice_stage2_2_0() { //道歉/反駁
    Choice_stage(2, 2, stage2_2_1, stage2_2_2);
}

function Choice_stage2_2_1_0() { //280/120
    Choice_stage(2, 3, stage2_2_1_1, stage2_2_1_2);
}

function Choice_stage2_2_1_0_0() { //北方/北方的反方向
    Choice_stage(2, 4, stage2_2_1_0_1, stage2_2_1_0_2);
}

function Choice_stage2_2_1_0_0_0() { //紡織廠/福興國小/菜市場
    Choice_stage(3, 5, stage2_2_1_0_0_1, stage2_2_1_0_0_2, stage2_2_1_0_0_0);
}

function Choice_stage2_2_2_0() { //你是鼎鼎大名的流動商人/公共場合不可以大聲喧鬧
    Choice_stage(2, 6, stage2_2_2_1, stage2_2_2_2);
}

function Choice_stage3_0() { //為了夢想離開/為了媽媽留下
    Choice_stage(2, 7, stage3_1, stage3_2);
}

function Choice_stage4() { //問路人/自己找
    Choice_stage(2, 8, stage4, stage5);
}
let Choice = [
    { first: "玩遊戲", second: "輸入密碼" },
    { first: "我再考慮一下", second: "我想好了" },
    { first: "道歉", second: "反駁" },
    { first: "280元", second: "120元" },
    { first: "北方", second: "北方的反方向" },
    { first: "紡織廠", second: "福興國小", third: "菜市場" },
    { first: "你是鼎鼎大名的流動商人", second: "公共場合不可以大聲喧鬧" },
    { first: "為了夢想離開", second: "為了媽媽留下" },
    { first: "問路人", second: "自己找" },
    { first: "遊戲結束", second: "重新開始" },
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
    if (istop >= 1) return;
    else {
        document.getElementById('dialog_box').addEventListener('click', function() {

            if (istop >= 1) return;
            else {
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
            }
        })
    }
}

function Stage1_box() {
    if (istop >= 1) return;
    else {
        if (i < stage1.length) {
            document.getElementById("dialog_box").textContent = stage1[i].word;
            document.getElementById("name_box").textContent = stage1[i].name;
            document.getElementById("character_img").src = stage1[i].image;
        } else {
            i = stage1.length - 1; //控制i不超出範圍
            document.getElementById("dialog_box").onclick = stage1[i].event();
        }
    }
}
//Stage2
var m = 0;

function Stage2() { //密碼1127

    if (istop >= 2) return;
    else {

        // 將原先Stage 1的台詞清空
        stage1 = [];
        istop = 1;
        Stage2_box();
        m++;
        Stage2_run();
    }
}

function Stage2_run() {
    document.getElementById('dialog_box').addEventListener('click', function() {
        console.log(m);
        if (istop >= 2) return;
        else {
            if (m < stage2.length) {
                Stage2_box();
                if (stage2[m].bEvent === 1) { //發生Script Event
                    document.getElementById("dialog_box").onclick = stage2[m].event();
                } else {
                    m++;
                }
            } else {
                m = stage2.length - 1; //控制i不超出範圍
                document.getElementById("dialog_box").onclick = stage2[m].event();
            }
        }
    })
}

function Stage2_box() {
    if (istop >= 2) return;
    else {
        document.getElementById("dialog_box").textContent = stage2[m].word;
        document.getElementById("name_box").textContent = stage2[m].name;
        document.getElementById("character_img").src = stage2[m].image;
    }
}
var cs = 0

function change_scipts() {
    stage2 = cs;
    m = 0;
    Stage2_box();
    m++;
    none();
}

function change_scipts1() { //失敗選項劇情接回找爸爸
    istop = 1
    stage2 = stage2_2;
    m = 12;
    Stage2_box();
    change_bag_letter();
}

function change_bag_letter() { //背包新增給爸爸的信
    bag[1] = { item: "envelope", image: "img/農場主人物品/媽媽的信封_new.png", image2: "img/農場主人物品/媽媽的信封.png", open: 0, bThing: 1, thing: "img/農場主人物品/媽媽的信.png", name: "你", word: "得趕快找到爸爸呢。", others: 1 }
    bag.open = 0;
    Bag_open();
    // bag_detect();
    Stage2_box();
    m++;

}

function change_scipts2() { //公共場合不可以大聲喧鬧
    istop = 1
    stage2 = stage2_2_1;
    m = 8;
    Stage2_box();
    change_bag_letter();
}



function change_bag_compass() { //背包新增給指北針
    bag[2] = { item: "compass", image: "img/農場主人物品/指北針_new.png", image2: "img/農場主人物品/指北針.png", open: 0, bThing: 0, thing: "", name: "", word: "", others: 1 }
    bag[1].others = 2;
    bag.open = 0;
    Bag_open();
    // bag_detect();
    Stage2_box();
    m++;

}

function change_bag_letter2() { //背包給爸爸的信消失
    bag[1] = bag[2];
    bag[2] = [];
    Bag_open();
    Stage2_box();
    m++;

}


//密碼
var score = 0

function Password_Apple() { //輸入密碼
    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "1127") {
        // alert("Welcome to my homepage!");
        score += 5;
        Stage2();
        console.log(score);
        none();

    } else if (password == "0714") {
        // alert("Welcome !"); 
        score += 1;
        console.log(score);
        none();
        stage2 = stage3;
        Stage2();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}