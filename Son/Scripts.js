let stage1 = [
    { name: "你", word: " 我是道館老闆的兒子", image: "img/小開/4.png", bEvent: 0 },
    {
        name: "你",
        word: " 市長女兒和我是感情深厚的青梅竹馬",
        image: "img/小開/0.png",
        bEvent: 1,
        event: function() {
            Stage1_box();
            bag_appear();
            i++;
        }
    },
    { name: "你", word: " 我最喜歡和市長女兒一起切磋彼此的神奇寶貝的能力", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 雖然她的實力也不容小覷", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: " 但因為我太了解她了", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 所以每次和他練習我都贏過他", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 這件事附近的鄰居都有耳聞", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: " 而每次的勝利也讓我累積了一點自信", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 因此我想參加這次的神奇寶貝大賽", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 想在這次的比賽中獲得冠軍！", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: " 但首先我得先獲得爸爸的同意", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: " 先去找爸爸吧", image: "img/小開/4.png", bEvent: 0 },
    { name: "地點", word: "(道館)", image: "img/寶貝球.png", bEvent: 0 },
    { name: "你", word: " 爸爸， 其實我從小就夢想成為神奇寶貝大師", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: " 您在我小時候送我的神奇寶貝球我也一直珍藏著，就是這顆寶貝球給了我夢想的契機", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: " 而且這次大賽是個好機會來證明我自己， 請您同意我參加！", image: "img/小開/5.png", bEvent: 0 },
    { name: "爸爸", word: "你想參加神奇寶貝大賽？", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: " 是的爸爸， 我真的很想要成為神奇寶貝大師", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 未來也想要好好經營這間道館", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 拜託了爸爸。", image: "img/小開/5.png", bEvent: 0 },
    { name: "爸爸", word: "不可能！ 你的實力我還不清楚嗎", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "光是你的專注力太低，就已經遠遠輸給其他人了", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "專注力不夠，你還要怎麼打比賽。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: " 為什麼爸爸就是不願意相信我", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 我已經很努力在學習， 想讓你看見我的改變了", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: " 可是您卻連我展示的機會都不願意給我。", image: "img/小開/1.png", bEvent: 0 },
    { name: "爸爸", word: "這...不是爸爸不相信你", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "只是在爸爸心中你就還像是個小孩一樣。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "既然這樣的話，那明天去我們去道館測試看看你的能力是不是真的足以讓你參加大賽", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "對了我明天會早點去道館布置，你去的時候走小路吧", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "據說大馬路上最近出現了很多蟲，你可要小心一點。 ", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "別擔心，我一個男孩子能發生什麼呢", image: "img/小開/4.png", bEvent: 0 },
    { name: "爸爸", word: "就算是男孩子也要小心！危險是不分性別的", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "好啦好啦，爸爸我知道了，那我先去準備了，您也早點休息。", image: "img/小開/4.png", bEvent: 0 },
    { name: "爸爸", word: "好，期待你明天的表現", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "我不會讓您失望的", image: "img/小開/4.png", bEvent: 0 },
    { name: "", word: "(隔天)", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: "嗯…雖然爸爸那麼說了，那我到底該走哪條路呢？", image: "img/小開/0.png", bEvent: 1, event: Choice_stage5_0 },
]
let stage5_1 = [ //小路
    { name: "你", word: "還是聽爸爸的話走小路吧，不過走罕無人煙的小路怪可怕的", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: "等等，我好像聽到後面有腳步聲，而且越來越近了怎麼辦啊啊啊", image: "img/小開/6.png", bEvent: 0 },
    { name: "", word: "(突然一隻手搭上你的肩膀)", image: "", bEvent: 0 },
    { name: "你", word: "啊啊啊啊啊啊啊！", image: "img/小開/5.png", bEvent: 0 },
    { name: "？", word: "你還好嗎孩子", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "？!！你是誰？", image: "img/小開/5.png", bEvent: 0 },
    { name: "哲哲", word: "我？我是哲哲啊，社區糾察隊的大隊長", image: "img/哲哲.png", bEvent: 0 },
    { name: "哲哲", word: "對了最近社區會舉辦淨灘活動，你要參加嗎？", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "你、你嚇到我了！幹嘛突然搭我肩膀", image: "img/小開/5.png", bEvent: 0 },
    { name: "哲哲", word: "啊就沒辦法啊，原本計畫好的淨灘，因為最近大馬路上出現的蟲蟲危機", image: "img/哲哲.png", bEvent: 0 },
    { name: "哲哲", word: "所以社區民眾參加意願普遍降低，我只好邊巡邏社區邊招人了。", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "呼…我還以為你是壞人，在小路搭人肩膀，怎麼可能招的到人啦。", image: "img/小開/1.png", bEvent: 0 },
    { name: "哲哲", word: "真是抱歉，我承認我這麼做不對", image: "img/哲哲.png", bEvent: 0 },
    { name: "哲哲", word: "不過遇到危險時首先要冷靜判斷情況，然後迅速遠離危險喔，這麼亂吼亂叫可不行", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "我知道了，下次我會注意的大隊長。", image: "img/小開/1.png", bEvent: 0 },
    { name: "哲哲", word: "既然如此，那你來參加我們巡邏隊幫助社區回饋社會吧", image: "img/哲哲.png", bEvent: 1, event: Choice_stage5_1_0 },
]
let stage5_1_1 = [ //不行
    { name: "你", word: "抱歉…我可能要去參加大賽，訓練時間跟巡邏隊時間可能會撞到", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: "嗯…不過如果是小事我還是可以幫忙的", image: "img/小開/4.png", bEvent: 0 },
    {
        name: "你",
        word: "嗯…不過如果是小事我還是可以幫忙的",
        image: "img/小開/4.png",
        bEvent: 1,
        event: function() {
            cs = stage6,
                change_scipts();
        }
    },
]
let stage5_1_2 = [ //可以
    { name: "你", word: "好當然可以，不過得等我先比完大賽", image: "img/小開/4.png", bEvent: 0 },
    {
        name: "你",
        word: "嗯…不過如果是小事我現在還是可以幫忙的",
        image: "img/小開/4.png",
        bEvent: 1,
        event: function() {
            cs = stage6,
                change_scipts();
        }
    },
]

let stage6 = [
    { name: "哲哲", word: "那真是太好了！我等等要去上任大隊長家幫他換紗窗", image: "img/哲哲.png", bEvent: 0 },
    { name: "哲哲", word: "但我一直忘記換紗窗要準備什麼，你知道嗎？", image: "img/哲哲.png", bEvent: 1, event: Choice_stage6_0 },
]

let stage6_1 = [ //紗網 
    { name: "哲哲", word: "啊對！是他是他就是他，那我先去買紗網了，你路上小心啊！", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "好，有緣再見！", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: "我得趕快去道館", image: "img/小開/3.png", bEvent: 0 },
    { name: "", word: "（道館）", image: "img/寶貝球.png", bEvent: 0 },
    { name: "爸爸", word: "你終於來了啊，還記得我昨天說的嗎？想參加大賽首先得通過測試", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "我這裡有一個關於乒乓球的考驗", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "千萬不要小看它， 這很考驗你的專注度", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "你...要挑戰看看嗎？", image: "img/道長.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage6_2 = [ //螺絲起子 
    { name: "哲哲", word: "好像是名字裡帶紗的物品，到底是什麼呢？", image: "img/哲哲.png", bEvent: 0 },
    { name: "你", word: "紗網？", image: "img/小開/0.png", bEvent: 0 },
    {
        name: "你",
        word: "紗網？",
        image: "img/小開/0.png",
        bEvent: 1,
        event: function() {
            cs = stage6_1,
                change_scipts();
        }
    },
]

let stage5_2 = [ //大路
    { name: "你", word: "還是走大馬路吧，只是蟲而已沒事的吧", image: "img/小開/4.png", bEvent: 0 },
    { name: "", word: " (遭遇蟲蟲危機，受傷而無法參加比賽) ", image: "img/小開物品/蟲蟲危機.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]



let stage1_1 = [ //拒絕挑戰
    { name: "你", word: " 不，爸爸我不相信光用一顆乒乓球就能測試我的專注度", image: "img/小開/2.png", bEvent: 0 },
    { name: "你", word: "我拒絕挑戰這個考驗。", image: "img/小開/2.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage1_2 = [ //接受挑戰
    { name: "你", word: " 當然！ 我一定會過關", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: "向你證明我不是您眼中的小孩子了。", image: "img/小開/4.png", bEvent: 0 },
    { name: "爸爸", word: "很好， 勇於挑戰。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "去吧孩子， 別讓爸爸失望了。", image: "img/道長.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/小開物品/乒乓球.png", bEvent: 1, event: Choice_game },
]
let stage2 = [ //遊戲成功
    { name: "你", word: " 爸爸我成功了！ 我通過了專注度的測試了！(積分+5)", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 那我是不是可以去報名神奇寶貝大賽了！", image: "img/小開/3.png", bEvent: 0 },
    { name: "爸爸", word: "很好你通過了乒乓球專注度的測試", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "證明了你的專注度確實有提升。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "但是兒子， 你真的想要報名神奇寶貝大賽嗎？", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "在我看來你的能力還無法參加神奇寶貝大賽。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "  為什麼？！！ 您不是說我的專注度不夠嗎？", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 我已經通過了乒乓球的測試，向您證明我的專注度是有成長", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 而且是足夠的了", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 為什麼還是沒辦法參加神奇寶貝大賽？", image: "img/小開/5.png", bEvent: 0 },
    { name: "爸爸", word: "你的方向感也還不夠好。難道你忘記了嗎？", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "去年冬天你被麋鹿拉著到處跑， 直接在隔壁市的市中心迷路", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "你這樣讓我怎麼答應讓你去參加大賽。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "想要參加神奇寶貝大賽方向感怎麼可以差！", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "  爸爸！ 那已經是去年冬天的事了！", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: "  再說了， 那次是因為我不小心在雪橇上睡著了", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: "都是麋鹿害我迷路的！", image: "img/小開/5.png", bEvent: 0 },
    { name: "爸爸", word: "我不管，你要是想去參加神奇寶貝大賽，就必須再通過迷宮的考驗。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "迷宮是最考驗方向感的了", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "你要是沒辦法通過迷宮的考驗", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "那你就別想參加神奇寶貝大賽了！", image: "img/道長.png", bEvent: 1, event: Choice_stage2_0 },
]

let stage3 = [ //遊戲失敗(乒乓球
    { name: "你", word: "我...我失敗了...原來我的專注力真的太差(積分+1)", image: "img/小開/6.png", bEvent: 0 },
    { name: "爸爸", word: "沒關係兒子，既然現在知道自己的缺點在哪了", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "就加把勁訓練，練到自己滿意為止。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "  嗯我會的。", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: "  那個...爸爸我沒有通過你的專注力測試", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: "  那...我還能參加神奇寶貝大賽嗎？", image: "img/小開/5.png", bEvent: 0 },
    { name: "爸爸", word: "看在你這麼努力想參加大賽的份上，我可以再給你一個機會，那就是迷宮測試。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "迷宮測試是用來測試你的方向感的。", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "要是連迷宮測試都無法通過， 那就真的不能參加大賽了。", image: "img/道長.png", bEvent: 1, event: Choice_stage2_0 },
]

let stage2_1 = [ //拒絕挑戰
    { name: "你", word: " 不， 爸爸我不相信光是一個迷宮就能測試我的方向感", image: "img/小開/2.png", bEvent: 0 },
    { name: "你", word: "我拒絕挑戰這個遊戲。", image: "img/小開/2.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage2_2 = [ //接受挑戰
    { name: "你", word: " 沒問題！ 我相信我的方向感絕對可以通過考驗！", image: "img/小開/3.png", bEvent: 0 },
    { name: "爸爸", word: "那接下來就看你的表現了", image: "img/道長.png", bEvent: 0 },
    { name: "爸爸", word: "我會在那裡放置五顆寶貝球，都收集完並走出迷宮，才算挑戰成功", image: "img/道長.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/小開物品/迷宮.png", bEvent: 1, event: Choice_game1 },
]

let stage4 = [ //通過迷宮測試
    { name: "你", word: " 太好了爸爸！我通過迷宮測試了！", image: "img/小開/3.png", bEvent: 0 },
    { name: "爸爸", word: "不錯，證明你的方向感還是可以的。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: " 那...爸爸我是不是可以參加神奇寶貝大賽了？", image: "img/小開/1.png", bEvent: 0 },
    { name: "爸爸", word: "可以！同意你去參加大賽了。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: " 謝謝爸爸！！", image: "img/小開/3.png", bEvent: 0 },
    { name: "爸爸", word: "行了，去訓練吧，你看市長的女兒都來找你了。", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: " 那爸爸我就先走了。", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 早上好！不好意思打擾了抱歉昨天突然有急事沒辦法到…", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: " 該不會你又去跑公務了吧？", image: "img/小開/0.png", bEvent: 0 },
    { name: "市長女兒", word: " 是沒錯啦！爸爸太忙了，昨天縣長突然派工作下來 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "市長女兒", word: " 我想幫爸爸分擔，何況我未來想成為市長秘書", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: " 算了你每次都這樣也不知道休息一下…都不知道我很擔心你… ", image: "img/小開/1.png", bEvent: 0 },
    { name: "市長女兒", word: " 嗯？剛剛說什麼？ ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "你", word: " 沒什麼啦！還不快點開始今天的比賽！ ", image: "img/小開/5.png", bEvent: 0 },
    { name: "市長女兒", word: " 真是的！你還不是一樣常常逃避我的問題… ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: " 你怎麼還在那裡？快點跟上，我們要去練習場了 ", image: "img/小開/0.png", bEvent: 1, event: Choice_stage4_0 },
]

let stage4_1 = [ //直接走掉
    { name: "你", word: " 你怎麼還站在原地不動", image: "img/小開/2.png", bEvent: 0 },
    { name: "市長女兒", word: "等等我的玻璃鞋…", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "你", word: " 快跟上來", image: "img/小開/2.png", bEvent: 0 },
    {
        name: "你",
        word: " 快跟上來",
        image: "img/小開/2.png",
        bEvent: 1,
        event: function() {
            cs = stage4_2,
                change_scipts();
        }
    },
]


let stage4_2 = [ //繼續等待
    { name: "市長女兒", word: "來了！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "地點", word: "（練習場）", image: "img/練習場.png", bEvent: 0 },
    { name: "市長女兒", word: "哇！好久沒來了！真懷念呀", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "說什麼傻話呀！我們不是每個禮拜都會在一起練習嗎？ ", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: "最近為了大賽還更頻繁了，平日沒事時也都待在一塊… ", image: "img/小開/0.png", bEvent: 0 },
    { name: "市長女兒", word: " 呀！你不要破壞氣氛啦！被別人聽到會誤會的 ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: "又沒關係這是事實，我也不在乎別人怎麼說 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: "順帶一提大家貌似都覺得我們的感情很好！！ ", image: "img/小開/1.png", bEvent: 0 },
    { name: "市長女兒", word: "但是我很在乎呀！！！咦？大家都覺得？？等等大家都知道了？！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "市長女兒", word: "你又再捉弄我了！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: "反正我們又沒做什麼虧心事", image: "img/小開/0.png", bEvent: 0 },
    { name: "市長女兒", word: "我這次絕對會贏你！！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: "那我可要用盡全力了！ ", image: "img/小開/4.png", bEvent: 0 },
    { name: "", word: " （一段時間後） ", image: "img/時間.png", bEvent: 0 },
    { name: "市長女兒", word: "為什麼阿？又輸了… ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: "從小到大我都跟你待在一起，你的習慣我幾乎都知道", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: "咦…", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "你", word: "妳啊就是出招的時候太猶豫@＃*/-$還有啊＃$/@", image: "img/小開/4.png", bEvent: 0 },
    { name: "市長女兒", word: "知道了知道了！你為什麼這麼了解我啊？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "就…就妳怎麼突然問這種問題…我其實一直注意著妳 ", image: "img/小開/1.png", bEvent: 0 },
    { name: "市長女兒", word: "哪…哪有人講話這麼直接的！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: "不要逼我說出這種話啦 ", image: "img/小開/5.png", bEvent: 0 },
    { name: "市長女兒", word: "好啦停止這個話題", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "市長女兒", word: "今..今天道館怎麼這麼熱啊，我都出汗了", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "市長女兒", word: "我們要不要去外面玩", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "嗯...好啊，今天的練習量已經夠了，我們走吧 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 不過我們要去哪裡呀？ ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "去附近逛逛看看風景放鬆一下心情", image: "img/小開/3.png", bEvent: 0 },
    { name: "", word: "（並肩一起走到到目的地）", image: "", bEvent: 0 },
    { name: "你", word: "大賽快要開始了啊…有點緊張 ", image: "img/小開/6.png", bEvent: 0 },
    { name: "市長女兒", word: " 別緊張！你一定能取得好成績，不如說你可不能輸！我們要在決賽場上見！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 對了昨天呀爸爸同意讓我參加了耶！好開心喔！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "真的嗎那真是太好了。 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 你呢？你會參加的吧？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "可能也會吧…我們家還蠻重視這個的，畢竟是道館館主的兒子 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: "不過爸爸還在歷練我，他希望我可以以更好的實力上場 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: "但我一定會通過他的考驗，然後堂堂正正的站上神奇寶貝大賽的擂台！ ", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 那真是太好了，我一定會在大賽上打敗你，然後證明給大家看我也是很厲害的 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "其實你不用證明給大家看，大家其實一直覺得你很厲害…", image: "img/小開/1.png", bEvent: 0 },
    { name: "市長女兒", word: " 真的嗎？可是我每次都輸你 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: "不是有句話說知己知彼百戰百勝嗎？我覺得你最缺少的是觀察對手的能力", image: "img/小開/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 是嗎？謝謝你我會試著修改看看的這樣我就能更精進我的技術了", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 嗯能幫助到你我也很開心 ", image: "img/小開/3.png", bEv小開ent: 0 },
    { name: "市長女兒", word: " 對了你去報名了嗎？我還沒有報名，這附近好像有神奇寶貝中心！ ", image: "img/市長女兒/0.png", bEvent: 1, event: Choice_stage4_2_0 },
]

let stage4_2_1 = [ //在外面等待
    { name: "市長女兒", word: " 你可以在外面等我嗎？我登記一下下就好了！ ", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "你", word: " 恩，好的我在外面等你，你快去吧 ", image: "img/小開/4.png", bEv小開ent: 0 },
    { name: "", word: "（錯過了報名機會） ", image: "", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage4_2_2 = [ //一起報名
    { name: "市長女兒", word: " 你要跟我一起去報名登記嗎？ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 好呀！順道一起，剛好省下特地過來的時間 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "", word: "（登記成功）", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]