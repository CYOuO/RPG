document.write('<script src="Farmer/Scripts.js"></script>');
// Global variable//
var init = 0;
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
// Scripts Event //
//stage1
// function choiseMomOrDad() {
//     document.getElementById("Choice").style.display = "block";
//     document.getElementById("choice2").onclick = () => {};
// }

function bag_appear() {
    document.getElementById("bag").style.visibility = "visible"; //顯示背包
    bag_detect();
}

function bag_detect() {
    document.getElementById("bag").addEventListener('click', function() { //按背包
        bag_envelope.style.display = "block"; //顯示信封
        Farmer1.style.display = "none" //劇情頁消失
        if (bag[0].thing === 1) {
            document.getElementById("envelope_new").addEventListener('click', function() { bag[0].event(); });
        }
    })
}

//分支
var choice = 0

function Choice_game() {
    choice = 0
    Choice_box();
    document.getElementById("choice1").onclick = () => { window.open('Game_Apple.html', ); };
    document.getElementById("choice2").onclick = () => { Password_Apple() };
}

function Apple() {
    if (istop >= 1) return;
    else {
        document.getElementById("character").addEventListener('click', function() {
            if (istop >= 1) return;
            else {
                window.open('Game_Apple.html', );
            }
        })
        document.getElementById("dialog_box").addEventListener('click', function() {
            i++;
            Stage1_box();
        })
    }
}


//stage2
// function Bag_Basket() {
//     bag[0] = { item: "baseket", image: "img/basket.png", open: 0, thing: 0 };
//     Bag_open();
//     document.getElementById("envelope_new").src = bag[0].image;
//     // document.getElementById("envelope_new").onclick = () => {};
//     document.getElementById("bag").addEventListener('click', function() {
//         bag[0].open = 1;
//         Bag_open();
//     })
//     m++;

// }


var number = 2;

function Choice_stage2_0() { //我在考慮一下/我想好了
    number = 2;
    choice = 1
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage2_1;
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage2_2;
        change_scipts()
    };
}

function Choice_stage2_2_0() { //道歉/反駁
    number = 2;
    choice = 2
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage2_2_1;
        change_scipts();
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage2_2_2;
        change_scipts();
    };
}

function Choice_stage2_2_1_0() { //280/120
    number = 2;
    choice = 3
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage2_2_1_1;
        change_scipts();
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage2_2_1_2;
        change_scipts();
    };
}

function Choice_stage2_2_1_0_0() { //北方/北方的反方向
    number = 2;
    choice = 4
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage2_2_1_0_1;
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage2_2_1_0_2;
        change_scipts()
    };
}

function Choice_stage2_2_1_0_0_0() { //紡織廠/福興國小/菜市場
    number = 3;
    choice = 5
    Choice_box();
    document.getElementById("choice3_1").onclick = () => {
        cs = stage2_2_1_0_0_1;
        change_scipts()
    };
    document.getElementById("choice3_2").onclick = () => {
        cs = stage2_2_1_0_0_2;
        change_scipts()
    };
    document.getElementById("choice3_3").onclick = () => {
        cs = stage2_2_1_0_0_0;
        change_scipts()
    };
}

function Choice_stage2_2_2_0() { //你是鼎鼎大名的流動商人/公共場合不可以大聲喧鬧
    number = 2;
    choice = 6
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage2_2_2_1;
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage2_2_2_2;
        change_scipts()
    };
}

function Choice_stage3_0() { //北方/北方的反方向
    number = 2;
    choice = 7
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = stage3_1;
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = stage3_2;
        change_scipts()
    };
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
    { first: "玩遊戲", second: "輸入密碼" },
    { first: "我再考慮一下", second: "我想好了" },
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
        istop = 1 //停止
            // bag = [];
            // bag[0] = { item: "nothing", image: "img/Nothing.png", open: 1, thing: 0, event: "" };
            // document.getElementById("envelope_new").src = bag[0].image;
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
    document.getElementById("Choice").style.display = "none";
    document.getElementById("Choice3").style.display = "none";
}

//返回鍵//
function return_key() { //
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_envelope").style.display = "none";
    Stage1_box();
}

let X = 0;

function return_key2() {
    document.getElementById("Farmer1").style.display = "block";
    document.getElementById("bag_letter").style.display = "none";
    document.getElementById("box").style.display = "none";

    if (X == 0) {
        i++;
        Stage1_box();
        Stage1_run();
        X++
    } else {
        console.log(100 * X)
            // Stage1_box();
            // Stage1_run();
    }
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

//密碼
var score = 0

function Password_Apple() {

    // var password = ''
    let password = prompt('輸入密碼:', '');
    if (password == "1127") {
        // alert("Welcome to my homepage!");
        score += 5;
        Stage2();
        console.log(score);
        document.getElementById("Choice").style.display = "none";

    } else if (password == "0714") {
        // alert("Welcome !"); 
        console.log(score);
        document.getElementById("Choice").style.display = "none";
        stage2 = stage3;
        Stage2();
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
    document.getElementById("bag").style.visibility = "hidden";
    run();
})