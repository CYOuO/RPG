document.write('<script src="Daughter/Scripts.js"></script>');
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

function Choice_stage(num, cho, cs1, cs2, cs3) {
    number = num;
    choice = cho;
    Choice_box();
    document.getElementById("choice1").onclick = () => {
        cs = cs1
        change_scipts()
    };
    document.getElementById("choice2").onclick = () => {
        cs = cs2
        change_scipts()
    };
    document.getElementById("choice3").onclick = () => {
        cs = cs3
        change_scipts()
    };
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

function Choice_stage5() { //失敗
    number = 2;
    choice = 7;
    console.log(score)
    document.getElementById("dialog_box").textContent = "你現在的積分為：" + score;
    Choice_box();
    document.getElementById("choice1").onclick = () => { //遊戲結束

    };
    document.getElementById("choice2").onclick = () => { //從新開始
        window.location.href = 'index.html';
    };
}

function Choice_stage6() { //成功
    score += 10;
    number = 2;
    choice = 7;
    console.log(score)
    document.getElementById("dialog_box").textContent = "恭喜妳成功讓主角參加神奇寶貝大賽啦！你現在的積分為：" + score;
    Choice_box();
    document.getElementById("choice1").onclick = () => { //遊戲結束

    };
    document.getElementById("choice2").onclick = () => { //從新開始
        window.location.href = 'index.html';
    };
}

//Choice
function Choice_box() {
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice1").textContent = Choice[choice].first;
    if (number >= 2) {
        document.getElementById("choice2").style.display = "block";
        document.getElementById("choice2").textContent = Choice[choice].second;
        if (number >= 3) {
            document.getElementById("choice3").style.display = "block";
            document.getElementById("choice3").textContent = Choice[choice].third;
        }
    }
}
let Choice = [
    { first: "拒絕爸爸交代的事 ", second: "接受爸爸交代的事" },
    { first: "護士 ", second: "流動商人" },
    { first: "挽留哈密瓜", second: "找土地分析專家" },
    { first: "出借", second: "不借" },
    { first: "繼續站著", second: "趕緊跟上 " },
    { first: "沒有過多的在意", second: "聽取小開的建議" },
    { first: "自己登記", second: "邀請小開" },
    { first: "遊戲結束", second: "重新開始" },
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

var cs = 0

function change_scipts() {
    stage1 = cs;
    i = 0;
    Stage1_box();
    i++;
    none();
}

function none() {
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.getElementById("choice3").style.display = "none";
    document.getElementById("choice4").style.display = "none";
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
    }
}
var score = 0

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