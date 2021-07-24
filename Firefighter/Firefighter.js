document.write('<script src="Firefighter/Scripts.js"></script>');
// Global variable//
var init = 0;
//Bag//
let bag = [ //初始Bag裡的物品
    { item: "envelope", image: "img/消防隊員物品/envelope_new.png", image2: "img/消防隊員物品/envelope.png", open: 0, bThing: 1, thing: "img/消防隊員物品/辭職信.png", name: "你", word: "一定得成功辭職", others: 0 },
]

function Bag_open() { //判斷背包有無新物品
    for (let a = 0; a < bag.length; a++)
        if (bag[a].open === 1) {
            document.getElementById("bag").src = "img/bag.png";
        } else if (bag[a].open === 0) {
        document.getElementById("bag").src = "img/bag_new.png";
    }
}

function bag_appear() {
    document.getElementById("bag").style.visibility = "visible"; //顯示背包
    // console.log(45678);
    // bag_detect();

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
        if (bag[n].bThing === 1) {
            document.getElementById("envelope_new").addEventListener('click', function() { Envelope_new(); });
        }
    })
}

function bag_change_thing() { //偵測背包換頁按鈕
    if (bag.length > 1) {
        switch (bag[n].others) {
            case 0:
                document.getElementById("next").style.display = "block";
                document.getElementById("previous").style.display = "none";
                console.log(n)
                break;
            case 1:
                document.getElementById("next").style.display = "none";
                document.getElementById("previous").style.display = "block";
                console.log(7748)
                break;
            case 2:
                document.getElementById("previous").style.display = "block";
                document.getElementById("next").style.display = "block";
                console.log(2266)
                break;
        }

    }
}

function change_bag_thing() { //切換背包物品
    document.getElementById("previous").addEventListener('click', function() {
        n = n - 1;
        console.log("按上一頁" + n);
        document.getElementById("envelope_new").src = bag[n].image;
        bag_change_thing()
    });
    document.getElementById("next").addEventListener('click', function() {
        n = n + 1;
        console.log("按下一頁" + n);
        document.getElementById("envelope_new").src = bag[n].image;
        bag_change_thing()
    });
}

function Envelope_new() { //點背包物品外觀

    if (bag[n].bThing === 1) {
        bag[n].open = 1;
        // document.getElementById("bag").src = "img/bag.png";
        Bag_open();
        bag[n].image = src = bag[n].image2; //更改為無紅點
        document.getElementById("envelope_new").src = bag[n].image2;
        document.getElementById("bag_envelope").style.display = "none"; //外包裝頁消失
        document.getElementById("return2").style.display = "none"; //返回鍵消失
        document.getElementById("bag_letter").style.display = "block";
        document.getElementById("letter").src = bag[n].thing;
        document.getElementById("name1").textContent = bag[n].name;
        document.getElementById("word1").textContent = bag[n].word;
        document.getElementById("letter").addEventListener('click', function() {
            document.getElementById("box").style.display = "block";
            document.getElementById("return2").style.display = "block";
        })
    } else {
        bag[n].open = 1;
        Bag_open();
    }

}

function bag_nothing() { //背包清空
    bag = [];
    bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0, event: "" };
    i++;
}

//分支
var choice = 0
var number = 2; //選項個數

function Choice_stage1_0() { //不行/可以
    number = 2;
    choice = 0;
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage1_1;
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage1_2;
        change_scipts()
    };
}

function Choice_game() { //玩遊戲/輸入密碼
    choice = 1
    Choice_box();
    document.getElementById("choice1").onclick = () => { window.open('Game/Game_Snake.html', ); };
    document.getElementById("choice2").onclick = () => { Password_Game() };
}



function Game() {
    if (istop >= 1) return;
    else {
        document.getElementById("character").addEventListener('click', function() {
            if (istop >= 1) return;
            else {
                window.open('Game/Game_Snake.html', );
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

//Choice
function Choice_box() {
    if (number == 2) {
        document.getElementById("Choice").style.display = "block";
        document.getElementById("choice1").textContent = Choice[choice].first;
        document.getElementById("choice2").textContent = Choice[choice].second;
    }
    if (number == 3) {
        document.getElementById("Choice3").style.display = "block";
        document.getElementById("choice3_1").textContent = Choice[choice].first;
        document.getElementById("choice3_2").textContent = Choice[choice].second;
        document.getElementById("choice3_3").textContent = Choice[choice].third;
    }
}
let Choice = [
        { first: "不行", second: "可以" },
        { first: "玩遊戲", second: "輸入密碼" },
        { first: "道歉", second: "反駁" },
        { first: "280元", second: "120元" },
        { first: "北方", second: "北方的反方向" },
        { first: "紡織廠", second: "福興國小", third: "菜市場" },
        { first: "你是鼎鼎大名的流動商人", second: "公共場合不可以大聲喧鬧" },
        { first: "為了夢想離開", second: "為了媽媽留下" },
    ]
    //Stage//
    //Stage1
var i = 0
var istop = 0; //运行
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
    // if (istop >= 1) return;
    // else {
    document.getElementById('dialog_box').addEventListener('click', function() {
        console.log(i)
            // if (istop >= 1) return;
            // else {
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

// }

function Stage1_box() {
    // if (istop >= 1) return;
    // else {
    if (i < stage1.length) {
        document.getElementById("dialog_box").textContent = stage1[i].word;
        document.getElementById("name_box").textContent = stage1[i].name;
        document.getElementById("character_img").src = stage1[i].image;
    } else {
        i = stage1.length - 1; //控制i不超出範圍
        document.getElementById("dialog_box").onclick = stage1[i].event();
    }
}
// }

//Stage2
// var m = 0;

// function Stage() { //密碼1127
//     if (istop >= 2) return;
//     else {
//         // 將原先Stage 1的台詞清空
//         stage1 = [];
//         istop = 1 //停止
//             // bag = [];
//             // bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0, event: "" };
//             // document.getElementById("envelope_new").src = bag[0].image;
//         Stage_box();
//         m++;
//         Stage_run();
//     }
// }

// function Stage_run() {
//     document.getElementById('dialog_box').addEventListener('click', function() {
//         console.log(m);
//         if (istop >= 2) return;
//         else {
//             if (m < stage.length) {
//                 Stage_box();
//                 if (stage[m].bEvent === 1) { //發生Script Event
//                     document.getElementById("dialog_box").onclick = stage[m].event();
//                 } else {
//                     m++;
//                 }
//             } else {
//                 m = stage.length - 1; //控制i不超出範圍
//                 document.getElementById("dialog_box").onclick = stage[m].event();
//             }
//         }
//     })
// }

// function Stage_box() {
//     if (istop >= 2) return;
//     else {
//         console.log(111)
//         document.getElementById("dialog_box").textContent = stage[m].word;
//         document.getElementById("name_box").textContent = stage[m].name;
//         document.getElementById("character_img").src = stage[m].image;
//     }
// }
var cs = 0

function change_scipts() {
    stage1 = cs;
    i = 0;
    Stage1_box();
    i++;
    document.getElementById("Choice").style.display = "none";
    document.getElementById("Choice3").style.display = "none";
}



//返回鍵//
function return_key() { //物品外觀返回鍵
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_envelope").style.display = "none";
    Stage1_box();
}

let X = 0;

function return_key2() { //物品內容返回鍵
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_letter").style.display = "none";
    document.getElementById("box").style.display = "none";

    if (X == 0) {
        i++;
        Stage1_box();
        i++;
        // Stage1_run();
        X++
    } else {
        console.log(100 * X)
            // Stage1_box();
            // Stage1_run();
    }
}


//密碼
var score = 0

function Password_Game() { //輸入密碼

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "2931") {
        // alert("Welcome to my homepage!");
        istop = 1
        score += 5;
        console.log(score);
        document.getElementById("Choice").style.display = "none";
        cs = stage2;
        change_scipts();
    } else if (password == "1328") {
        // alert("Welcome !");
        istop = 1
        score += 1;
        console.log(score);
        document.getElementById("Choice").style.display = "none";
        cs = stage3;
        change_scipts();
    } else {
        alert("密碼錯誤! \n\n請重新輸入 ");
    }

}

//執行//
function run() {
    init === 0 ? Stage1() : null;
    init = 1;

}
window.addEventListener('load', function() {
    if (istop >= 1) return;
    else {
        document.getElementById("bag").style.visibility = "hidden";
        bag_detect();
        change_bag_thing()
        run();
    }
})