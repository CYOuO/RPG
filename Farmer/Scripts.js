//Scripts//
let stage1 = [
    { name: "你", word: "我是一名農村主人，平日裡的工作無非就是種種樹、餵餵羊之類的", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "從小我就有一個夢想", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我想成為超厲害的神奇寶貝大師！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "最近，終於有了神奇寶貝大賽的消息", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "但。。母親一直不同意我參加大賽。。", image: "img/農場主人/6.png", bEvent: 0 },
    { name: "你", word: "我該怎麼成功說服她呢？", image: "img/農場主人/6.png", bEvent: 0 },
    { name: "你", word: "算了先不想了，我手邊還有一項母親派給我的事情要做。。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "再看一次媽媽留下的紙條然後趕快完成吧。。", image: "img/農場主人/0.png", bEvent: 1, event: bag_appear },
    { name: "你", word: "事不宜遲趕緊完成媽媽交代的家事吧！", image: "img/農場主人/0.png", bEvent: 0, },
    { name: "提示", word: "點擊蘋果去幫媽媽摘蘋果吧！", image: "img/農場主人物品/game_apple.png", bEvent: 1, event: Apple },
    { name: "提示", word: "輸入通關密碼吧", image: "", bEvent: 1, event: Choice_game },
]

let stage2 = [ //密碼1127
    { name: "媽媽", word: "哇！沒想到你這麼快就完成了(積分+5)", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "你", word: "哎呀這沒什麼沒什麼，是我應該做的", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "媽媽", word: "我的兒子終於長大了，為母實在感動至極啊", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "你", word: "媽媽，其實......我一直以來的夢想就是成為一名神奇寶貝大師", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "我可以參加神奇寶貝大賽嗎？", image: "img/農場主人/5.png", bEvent: 0 },
    { name: "媽媽", word: "兒子，想成為神奇寶貝大師不是那麼容易的事啊", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "媽媽", word: "你可能會很辛苦很辛苦", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "媽媽", word: "你真的想好了嗎？", image: "img/媽媽/3.png", bEvent: 1, event: Choice_stage2_0 },

]

let stage2_1 = [ //我再考慮一下
    { name: "你", word: "媽媽，你說的對", image: "img/農場主人/3.png", bEvent: 0 },
    { name: "你", word: "完成夢想是要付出很大的代價的", image: "img/農場主人/3.png", bEvent: 0 },
    { name: "你", word: "我確實需要再考慮一下", image: "img/農場主人/3.png", bEvent: 0 },
    { name: "媽媽", word: "兒子，你能理解母親就好", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "媽媽", word: "不是我不讓你去", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "媽媽", word: "是你年紀還小，我實在放心不下啊", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "你", word: "好吧，那我還是在這個蘋果園多修煉幾年再去挑戰吧", image: "img/農場主人/3.png", bEvent: 0 },
    { name: "你", word: "但無論如何我都是不會輕易放棄的！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },

]

let stage2_2 = [ //我想好了
    { name: "你", word: "我想好了，我早就想好了", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "一個人如果沒有夢想，那就是一具沒有靈魂的軀殼", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "每個人都該有追逐夢想的權利。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "媽媽", word: "可是......", image: "img/媽媽/3.png", bEvent: 0, },
    { name: "你", word: "媽媽，不要再勸我了，我早已下定決心", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "媽媽", word: "好吧，但是在那之前我會寫一封信問問你遠在出差的爸爸", image: "img/媽媽/2.png", bEvent: 0, },
    { name: "媽媽", word: "如果爸爸也同意，那我就無話可說了", image: "img/媽媽/2.png", bEvent: 0, },
    { name: "你", word: "好的，我會幫您將信交給爸爸的", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "媽媽", word: "兒子你聽好了，如果撐不下去了", image: "img/媽媽/3.png", bEvent: 0, },
    { name: "媽媽", word: "你可以回來繼承蘋果園", image: "img/媽媽/3.png", bEvent: 0, },
    { name: "媽媽", word: "這個家永遠是你的避風港", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "你", word: "媽媽，謝謝您的成全，我一定會成為神奇寶貝大師的！", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "(前往找爸爸)", image: "img/農場主人/0.png", bEvent: 1, event: change_bag_letter },
    { name: "你", word: "看來只要說服爸爸就離我的夢想更進一步了", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "不過爸爸在哪裡出差呢", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "他出差前只說了這次出差的地點在南方", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "南方該怎麼走呢？", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "？", word: "這位小夥子，你是要去南方嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "？！？！你是誰，幹嘛偷聽我講話！", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "？", word: "這可不能怪我", image: "img/商人.png", bEvent: 0 },
    { name: "？", word: "這裡是公共場合，你講話又這麼大聲", image: "img/商人.png", bEvent: 0 },
    { name: "？", word: "沒人教你公共場合不能大聲喧嘩嗎？", image: "img/商人.png", bEvent: 1, event: Choice_stage2_2_0 },
]

let stage2_2_1 = [ //抱歉 
    { name: "你", word: "啊......看來是我太大聲說話了，抱歉。", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "？", word: "很好，知錯能改，善莫大焉啊。", image: "img/商人.png", bEvent: 0 },
    { name: "？", word: "我是鼎鼎大名的流動商人——哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "你..你你你...莫不是詐騙集團吧", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "我..我我我...才不是咧，我可是實在的良心商人", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你不要看我長得醜就以貌取人哦小夥子", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哦~好吧，暫且相信你", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "不過......你真的什麼東西都有，什麼東西都會嗎？", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "那是當然，也不看看我是誰", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我還真不太了解您耶", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "哎呀，好了好了不重要", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "小夥子，我看你眉頭緊皺，印堂發黑，似乎碰上了什麼難事", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "要不要說出來讓我知道", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "或許我可以幫得上忙", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哇你怎麼知道！！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我要去南方做一件很重要的事", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "但是我好像迷路了......", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "哦哦我知道了", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "那麼你現在最需要的肯定是一個指北針吧", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我這裡剛好有一款，天靈靈地靈靈怎麼靈都比不過的超靈指北針", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "是尋找路徑的絕佳工具", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "走過路過千萬不要錯過啊", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "額......請問它的價格是？", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "我們現在有優惠方案，一個只要399哦~", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "但我看你跟我還滿有緣的，我可以幫你打個7折唷~", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "那你知道399打七折是多少元嗎？", image: "img/商人.png", bEvent: 1, event: Choice_stage2_2_1_0 },

]

let stage2_2_1_1 = [ //280元
    { name: "你", word: "280元！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "哈哈哈沒錯，看不出來啊小夥子，你算術真不錯", image: "img/商人.png", bEvent: 0, },
    {
        name: "哈密瓜",
        word: "哈哈哈沒錯，看不出來啊小夥子，你算術真不錯",
        image: "img/商人.png",
        bEvent: 1,
        event: function() {
            cs = stage2_2_1_0,
                change_scipts();
        }
    },
]

let stage2_2_1_2 = [ //120元
    { name: "你", word: "120元？", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "哈哈哈答錯囉，還要加油啊小夥子！", image: "img/商人.png", bEvent: 0 },
    {
        name: "哈密瓜",
        word: "哈哈哈答錯囉，還要加油啊小夥子！",
        image: "img/商人.png",
        bEvent: 1,
        event: function() {
            cs = stage2_2_1_0,
                change_scipts();
        }
    },
]

let stage2_2_1_0 = [ //猜完錢後
    { name: "你", word: "不管怎麼說，你賣這麼貴，果然是詐騙集團吧", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "我還是靠自己吧", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "哎呀小夥子，跟你開個玩笑呢", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我才不會當黑心商人呢，看你緊張的", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "指北針借你用用吧", image: "img/商人.png", bEvent: 1, event: change_bag_compass },
    { name: "哈密瓜", word: "改天記得還我啊", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "真的嗎！不過我不太會用指北針耶......", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "這還不簡單！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "指針指向北就是北邊，北邊的反方向就是南邊囉", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哦~原來如此", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "真的非常感謝你，你真的是一個好人", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "不客氣，這個世界還是有很多善良的人喔", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "下次不要再以貌取人了", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "但是遇到壞人還是一定要保護好自己唷！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "好的我知道了。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "對了，我還沒自我介紹呢", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我是附近蘋果園主人的兒子", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "以後可以多來我們家做客，喝喝蘋果茶。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "好啊好啊，那我就先離開了", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "再會小夥子（說著說著就開始揮手告別了）", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "啊？這就要走了？", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "再會呀大善人~", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "", word: "（過了幾分鐘後商人走遠了）", image: "", bEvent: 0 },
    { name: "你", word: "對了！我還沒有問他住哪裡呢，我還要還指北針呀", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "真是可惜，找機會我一定要好好報答他", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "現在還是快點去南方找爸爸吧", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "拿出指北針看看吧", image: "img/農場主人物品/拿出指北針.png", bEvent: 0 },
    { name: "你", word: "指北針指的方向是北方，那麼我應該往那條路走呢？", image: "img/農場主人物品/拿出指北針.png", bEvent: 1, event: Choice_stage2_2_1_0_0 },
]

let stage2_2_1_0_1 = [ //北方
    { name: "你", word: "(走著走著，竟然走回了家裡的蘋果園......)", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "咦？這裡不是......", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "我怎麼這麼糊塗啊", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "應該要走”北方的反方向”，也就是”南方”啊", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "我得抓緊時間繼續去找爸爸了", image: "img/農場主人/0.png", bEvent: 0 },
    {
        name: "你",
        word: "我得抓緊時間繼續去找爸爸了",
        image: "img/農場主人/0.png",
        bEvent: 1,
        event: function() {
            cs = stage2_2_1_0_2,
                change_scipts();
        }
    },
]

let stage2_2_1_0_2 = [ //北方的反方向
    { name: "你", word: "哇這個小鎮好熱鬧！應該就是這裡了！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "這就是大都市嗎？", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "空氣瀰漫著PM2.5根本比不上我家的農場", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我想是因為我家農場樹多吧", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "樹可以產生氧氣，我最自豪我家那片蘋果樹了！！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "應該就是這裡了", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "我想想，身為一名送貨農夫，他最有可能在哪裡出現？", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "我想想，身為一名送貨農夫，他最有可能在哪裡出現？", image: "img/農場主人/4.png", bEvent: 1, event: Choice_stage2_2_1_0_0_0 },
]



let stage2_2_1_0_0_1 = [ //紡織廠
    { name: "你", word: "哇哦~這裡的紡織工廠做了好多的東西", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "有雨傘、襪子、窗簾，居然還有口罩耶~", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "原來這些都是紡織業！", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "咦不對，爸爸不在這裡耶", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "我找錯地方了", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "爸爸是去送貨的，應該在菜市場啦", image: "img/農場主人/4.png", bEvent: 0 },
    {
        name: "你",
        word: "爸爸是去送貨的，應該在菜市場啦",
        image: "img/農場主人/4.png",
        bEvent: 1,
        event: function() {
            cs = stage2_2_1_0_0_0,
                change_scipts();
        }
    },
]

let stage2_2_1_0_0_2 = [ //福興國小
    { name: "你", word: "哇~這裡有好多可愛的小朋友哦", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "想當年我也跟他們一樣活潑可愛", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "咦不對，爸爸不在這裡耶", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "我找錯地方了", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "爸爸是去送貨的，應該在菜市場啦", image: "img/農場主人/4.png", bEvent: 0 },
    {
        name: "你",
        word: "爸爸是去送貨的，應該在菜市場啦",
        image: "img/農場主人/4.png",
        bEvent: 1,
        event: function() {
            cs = stage2_2_1_0_0_0,
                change_scipts();
        }
    },
]

let stage2_2_1_0_0_0 = [ //菜市場/找到爸爸
    { name: "你", word: "爸爸是去送貨的，肯定就在菜市場~", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "爸爸", word: "嘿~兒子，我在這裡", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "你怎麼來了呀", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "最近過得怎麼樣", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "嗨爸爸，好久不見，我很好", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我來這裡其實是有一件重要的事要告訴你", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "爸爸", word: "有重要的事啊", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "你等等，我收拾一下東西", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "我們去前面的涼亭說", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "好的，爸爸我幫你拿點東西吧", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "", word: "（父子兩人走到了涼亭下）", image: "", bEvent: 0 },
    { name: "爸爸", word: "兒子啊，你有什麼事，儘管說出來吧", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "是這樣的，我一直以來都有一個成為神奇寶貝大師的夢想", image: "img/農場主人/2.png", bEvent: 0 },
    { name: "你", word: "最近有了神奇寶貝大賽的消息", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我已經成功說服了媽媽", image: "img/農場主人/2.png", bEvent: 0 },
    { name: "你", word: "這是媽媽給你的信", image: "img/農場主人/2.png", bEvent: 1, event: change_bag_letter2 },
    { name: "你", word: "但是還需要問你的意見", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "爸爸", word: "神奇寶貝大師啊......（看著信摸著下巴思考）", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "爸爸，希望你可以支持我的夢想！", image: "img/農場主人/2.png", bEvent: 0 },
    { name: "爸爸", word: "看你緊張的，我又沒有說不答應", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "我只是想起了我年輕的時候也是跟你一樣非常的勇敢、瀟灑", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "可是迷倒了萬千少女呢", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "咦？爸爸你在開玩笑嗎？", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "臭小子，你說什麼呢，當年你媽媽就是這樣被我追到手的", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "哦~是這樣啊（還是不相信）", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "那那爸爸你同意我去參加神奇寶貝大賽嗎？", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "爸爸", word: "當然同意啦！", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "年輕人有夢想就是要去追尋", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "不要過了好久才來後悔", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "真的嗎爸爸！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "謝謝你的成全，我會好好努力的", image: "img/農場主人/2.png", bEvent: 0 },
    { name: "爸爸", word: "不愧是我的好兒子", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "但是你在外面還是要小心", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "沒有什麼是比安全更重要的了", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "累了就回家看看", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "爸爸", word: "休息一下再繼續也可以", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "好的 我知道了", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我一定會成為神奇寶貝大師，帶著榮譽回家", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "爸爸", word: "乖兒子，快去報名吧！", image: "img/爸爸/0.png", bEvent: 0 },
    { name: "你", word: "好，謝謝爸爸", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝街)", image: "不過神奇寶貝中心在哪裡呢？", bEvent: 0 },
    { name: "你", word: "不過神奇寶貝中心在哪裡呢？", image: "img/農場主人/11.png", bEvent: 1, event: Choice_stage4 },
]


let stage2_2_2 = [ //反駁
    { name: "你", word: "我愛在哪裡講多大聲的話都是我的自由，你管不著！", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "？", word: "真是孺子不可教也", image: "img/商人.png", bEvent: 0 },
    { name: "？", word: "公共場合大聲喧嘩吵鬧可是要罰錢的！", image: "img/商人.png", bEvent: 0 },
    { name: "？", word: "賺錢可不容易，你身上有錢交罰款？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "什......什麼，你是警察？！", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "我沒錢.......。", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "？", word: "我是鼎鼎大名的流動商人——哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你該慶幸我不是警察。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了，我會記住的。", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "記住什麼?", image: "img/商人.png", bEvent: 1, event: Choice_stage2_2_2_0 },
]
let stage2_2_2_1 = [ //你是鼎鼎大名的流動商人——哈密瓜
    { name: "你", word: "你是鼎鼎大名的流動商人——哈密瓜", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "看來你沒有明白我剛剛的那些話啊，我先離開了", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "等等！我想跟你買指北針！", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "你這個年輕人不講品德，好自為之吧，我可不賣你。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "那我該如何前往南方呢？", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage2_2_2_2 = [ //公共場合不可以大聲喧鬧
    { name: "你", word: "公共場合不可以大聲喧鬧", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "很好，知錯能改，善莫大焉啊。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "那個......你真的什麼東西都有，什麼東西都會嗎？", image: "img/農場主人/0.png", bEvent: 1, event: change_scipts2 },
]

let stage3 = [ //密碼0714
    { name: "媽媽", word: "沒關係~摘蘋果本來就不是一件輕鬆事(積分+1)", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "媽媽", word: "下次再努力試試看吧。", image: "img/媽媽/0.png", bEvent: 0, },
    { name: "你", word: "怎麼可以沒關係！?", image: "img/農場主人/9.png", bEvent: 0 },
    { name: "你", word: "摘不到蘋果就是我這個兒子的失職，我不配當您兒子", image: "img/農場主人/8.png", bEvent: 0 },
    { name: "你", word: "再見媽媽，我要一個人踏上完成夢想的道路。", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "媽媽", word: "不要給我學隔壁家的小智，有夠丟臉。", image: "img/媽媽/1.png", bEvent: 0 },
    { name: "你", word: "媽媽，不是您總說隔壁家的小孩比較好嘛！", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "你", word: "我不過是聽你的話，成全你", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "你", word: "為什麼您又要來阻止我。", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "媽媽", word: "阿就沒辦法阿！！！！！", image: "img/媽媽/1.png", bEvent: 0 },
    { name: "媽媽", word: "不要跟媽媽頂嘴！莫名其妙！", image: "img/媽媽/1.png", bEvent: 0 },
    { name: "你", word: "我心意已決，媽媽你就好好待在家中吧", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "你", word: "等我的好消息，我會帶著榮耀回來的。", image: "img/農場主人/7.png", bEvent: 0 },
    { name: "媽媽", word: "不要走兒子，回去了啦！再走不理你囉！", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "您什麼時候理過我！您說您什麼時候理過我！", image: "img/農場主人/10.png", bEvent: 0 },
    { name: "媽媽", word: "你你你......。", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "媽媽......。", image: "img/農場主人/7.png", bEvent: 1, event: Choice_stage3_0 },
]

let stage3_1 = [ //為了夢想離開
    { name: "你", word: "媽媽，我想好了，我早就想好了", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "一個人如果沒有夢想，那就是一具沒有靈魂的軀殼", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "你", word: "每個人都該有追逐夢想的權利", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "媽媽", word: "是嗎，我知道了......你趕快走吧。", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "媽媽", word: "不過大賽會場跟你爸爸都在南方", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "媽媽", word: "我寫封信，你順道去知會他一聲吧。", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "你", word: "媽媽......。", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "媽媽", word: "快走！快走啊！趁我還沒改變心意", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "媽媽", word: "朝向你的夢想奔跑吧。", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "謝謝您，媽媽，我愛您", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "您給我的支持就是我在這條路上最大的避風港。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "我會銘記在心的", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "再見了，媽媽。", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "再見了，媽媽。", image: "img/農場主人/0.png", bEvent: 1, event: change_scipts1 },
]

let stage3_2 = [ //為媽媽留下
    { name: "你", word: "好吧，媽媽，我留下陪您", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "您不要生氣，不要生氣，生氣給魔鬼留地步", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "你", word: "不要生氣，不要生氣，生氣吃虧是您自己。", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "媽媽", word: "好......好......", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "媽媽", word: "走吧兒子，我們回家", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "媽媽", word: "回家種蘋果樹", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "媽媽", word: "我們還能一起在蘋果樹下吃你摘回來的蘋果。", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "好。", image: "img/農場主人/11.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage4 = [ //問路人
    { name: "你", word: "不好意思，請問你們知道神奇寶貝中心怎麼走嗎", image: "img/農場主人/4.png", bEvent: 0 },
    { name: "？", word: "你是要去報名神奇寶貝大賽嗎？", image: "img/小開.png", bEvent: 0 },
    { name: "？", word: "沿著這條路走到盡頭就是神奇寶貝中心了", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "謝謝你們，想請問你們是？找機會我一定會報答你們的", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "小開", word: "我是道館的小開", image: "img/小開.png", bEvent: 0 },
    { name: "市長女兒", word: "我是這座城市市長的女兒", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "真是謝謝你們！", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "小開", word: "不會，舉手之勞而已", image: "img/小開.png", bEvent: 0 },
    { name: "市長女兒", word: "沒錯，這點小事不用報答的。", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "市長女兒", word: "對了，我們也會參加神奇寶貝大賽，一起加油吧", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "小開", word: "那麼我們還要去練習，就先離開了", image: "img/小開.png", bEvent: 0 },
    { name: "小開", word: "再見", image: "img/小開.png", bEvent: 0 },
    { name: "市長女兒", word: "再見", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "啊……再見！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "你", word: "他們真是好人啊，不過他們看起來好像實力很強，看來我也需要加油了！", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "", bEvent: 0 },
    { name: "你", word: "你好，我想要報名參加神奇寶貝大賽", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "工作人員", word: "好的，請你填寫這份表單", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/農場主人/0.png", bEvent: 0 },
    { name: "工作人員", word: "報名成功囉，祝你成功贏得冠軍", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福，我一定會成為冠軍的！", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]
let stage5 = [ //自己找
    { name: "你", word: "啊......我已經找了幾天了，怎麼還是找不到", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "(這時路人聊天的聲音傳入你耳中)", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "路人甲", word: "你知道神奇寶貝大賽報名已經截止了嗎", image: "img/路人甲.png", bEvent: 0 },
    { name: "路人乙", word: "知道啊，這次比賽冠軍會是誰呢？", image: "img/路人乙.png", bEvent: 0 },
    { name: "你", word: "什麼？！截止了？！", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "你", word: "看來我沒機會參加大賽了", image: "img/農場主人/1.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]