function Bag_open() { //判斷背包有無新物品
    for (let a = 0; a < bag.length; a++)
        if (bag[a].open === 1) {
            document.getElementById("bag").src = "img/bag.png";
        } else if (bag[a].open === 0) {
        document.getElementById("bag").src = "img/bag_new.png";
    }
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
        bag[n].image = bag[n].image2; //更改為無紅點
        document.getElementById("envelope_new").src = bag[n].image;
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
        bag[n].image = bag[n].image2;
        document.getElementById("envelope_new").src = bag[n].image;
        Bag_open();
    }

}

function Choice_stage(num, cho, cs1, cs2, cs3, cs4) {
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
    document.getElementById("choice4").onclick = () => {
        cs = cs4
        change_scipts()
    };
}

function Choice_stage5() { //失敗
    number = 2;
    console.log(score)

    document.getElementById("dialog_box").textContent = "你現在的積分為：" + score;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").textContent = "遊戲結束"
    document.getElementById("choice2").textContent = "重新開始"
    document.getElementById("choice1").onclick = () => { //遊戲結束
        window.open("https://forms.gle/QXbTJSpdoQCxGhyk8");
    };
    document.getElementById("choice2").onclick = () => { //重新開始
        window.location.href = 'index.html';
    };
}
var end = 0

function Choice_stage6() { //成功
    if (end === 0) {
        score += 10;
        end++;
    }
    number = 2;
    console.log(score)
    document.getElementById("dialog_box").textContent = "恭喜妳成功讓主角參加神奇寶貝大賽啦！你現在的積分為：" + score;
    Choice_box();
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").textContent = "遊戲結束"
    document.getElementById("choice2").textContent = "重新開始"
    document.getElementById("choice1").onclick = () => { //遊戲結束
        window.open("https://forms.gle/QXbTJSpdoQCxGhyk8");
        // window.location.href = '';
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
            if (number >= 4) {
                document.getElementById("choice4").style.display = "block";
                document.getElementById("choice4").textContent = Choice[choice].fourth;
            }
        }

    }
}

function none() { //選擇選項消失
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
        X++
    }
}

//執行//
function run() {
    init === 0 ? Stage1() : null;
    init = 1;

}
window.addEventListener('load', function() {
    // music();
    if (istop >= 1) return;
    else {
        document.getElementById("bag").style.visibility = "hidden";
        bag_detect();
        change_bag_thing()
        run();
    }
})

function music() {
    var audio = new Audio("music/Ryukyu Live.mp3");
    audio.play();
    Audio.loop = -1;



}
var audio = new Audio("music/Ryukyu Live.mp3"); //这里的路径写上mp3文件在项目中的绝对路径
var duration;
duration = audio.duration; //長度單位是秒
var play = 0;

function password_common() {
    console.log(score);
    none();
    play = 0;
    bgm();
}

function bgm() {
    if (play == 0) { //播放
        audio.play();
    } else { audio.pause(); }
}
window.setInterval("bgm()", duration * 1000 + 1000);