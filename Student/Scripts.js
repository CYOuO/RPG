let stage1 = [
    { name: "你", word: " 我是一位博士的學生", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 我有著成為神奇寶貝大師的夢想", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 最近我在做一項關於小火龍的報告", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 希望透過這份研究能使我更了解小火龍", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "為了在大賽前去製作並執行我的訓練企劃，", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 我得先拿到空白企劃書", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "因此要趕快把報告拿給博士看！", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 不過博士可能會問我幾個問題，還是在那之前再看一次吧。", image: "img/學生/4.png", bEvent: 1, event: bag_appear },
    { name: "地點", word: "（博士的實驗室門口）", image: "img/門.png", bEvent: 0 },
    { name: "你", word: "博士！ 博士！ 博士你在嗎？", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "咦？ 博士平常這個時間不是都泡在實驗室裡做研究嗎？", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "我打個電話好了", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "（ 鈴鈴鈴） 喂？ 請問你找誰？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "喂喂， 博士， 是我啦", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "額...請問你哪位？", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "我是位為了給你檢查報告而來的學生。", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "你、 你等等！ 我現在就來幫你開門。", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "（開門）", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "好久不見呀~", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "剛剛我做實驗做得太入迷了 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "所以沒聽到敲門聲，不好意思啊 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你研究報告做得如何？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "已經完成了，請您過目。", image: "img/學生/0.png", bEvent: 1, event: bag_nothing },
    { name: "博士", word: "讓我仔細看看。 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "恩，你寫得很好呢", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "但沒有記住重點的話，就沒有用了喔 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "那我抽問你幾個要點，看你有沒有融會貫通。", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "小火龍是哪種神奇寶貝？", image: "img/博士.png", bEvent: 1, event: Choice_stage1_1 },
    { name: "博士", word: "小火龍的什麼部位能夠反應心情？", image: "img/博士.png", bEvent: 1, event: Choice_stage1_2 },
    { name: "博士", word: "小火龍的哪一種性別較多？", image: "img/博士.png", bEvent: 1, event: Choice_stage1_3 },
    { name: "博士", word: "這麼基礎的東西你都不會，這份報告真的是你自己做的嗎？ ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你要學會把知識吸收成自己的東西，再回去重做一份吧。", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "可是…再做一份就趕不上神奇寶貝大賽了。", image: "img/學生/2.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
    { name: "博士", word: "嗯…100分！！！太棒了！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "我已經做了充分的努力去了解我的小夥伴阿龍呢", image: "img/學生/5.png", bEvent: 0 },
    { name: "博士", word: "阿龍是誰？", image: "img/博士.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage2 = [ //陳志龍
    { name: "炭治郎", word: "(炭治郎出現)", image: "img/登山客/炭治郎.png", bEvent: 0 },
    { name: "博士", word: "嚇到我了！", image: "img/博士.png", bEvent: 0 },
    { name: "炭治郎", word: "大哥沒有輸！", image: "img/登山客/炭治郎.png", bEvent: 0 },
    { name: "你", word: "志龍！回去了啦！你比我還瘋你知道嗎", image: "img/學生/2.png", bEvent: 0 },
    { name: "炭治郎", word: "大哥沒有輸！", image: "img/登山客/炭治郎.png", bEvent: 0 },
    { name: "你", word: "博士我只是開個玩笑開個玩笑", image: "img/學生/3.png", bEvent: 0 },
    {
        name: "你",
        word: "博士我只是開個玩笑開個玩笑",
        image: "img/學生/3.png",
        bEvent: 1,
        event: function() {
            cs = stage3_2,
                change_scipts();
        }
    },

]
let stage3 = [ //小火龍
    { name: "你", word: "(博士這問題有詐)", image: "img/學生/1.png", bEvent: 1, event: Choice_stage3_0 },
]

let stage3_1 = [ //直接講真心話
    { name: "你", word: "小火龍啊！ 不是才剛剛給您報告看， 博士您記性怎麼那麼差", image: "img/學生/2.png", bEvent: 0 },
    { name: "博士", word: "你在教我做事？孩子大了，什麼話都不經思考講出來唉 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我要沒收你的報告！ 難道你不知道神奇寶貝大賽最注重品德嗎", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: " 回去寫1000字品德報告書", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你這麼不注重禮貌， 已經沒有資格參加神奇寶貝大賽了", image: "img/博士.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage3_2 = [ //認真回答博士
    { name: "你", word: "當然是小火龍呀", image: "img/學生/3.png", bEvent: 0 },
    { name: "博士", word: "怎麼會想叫阿龍呢", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "因為阿龍在我腦海來的太突然，我只好接受", image: "img/學生/5.png", bEvent: 0 },
    { name: "博士", word: "怎麼會突然出現呢", image: "img/博士.png", bEvent: 1, event: Choice_stage3_2_0 },

]

let stage3_2_1 = [ //直接講真心話
    { name: "你", word: "您的問題怎麼那麼多呢", image: "img/學生/2.png", bEvent: 0 },
    { name: "博士", word: "啊就沒辦法啊，你這是在嫌棄我？", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "孩子大了，不聽我這個老人家的話了唉", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我要沒收你的報告！ 難道你不知道神奇寶貝大賽最注重品德嗎", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: " 回去寫1000字品德報告書", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你這麼不注重禮貌， 已經沒有資格參加神奇寶貝大賽了", image: "img/博士.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage3_2_2 = [ //認真回答博士
    { name: "你", word: "阿龍出來吧 讓博士認識認識你", image: "img/學生/3.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "你", word: "等等博士，應該是我開寶貝球的方式不對", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "阿龍出來吧 讓博士認識認識你", image: "img/學生/5.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "你", word: "呵呵博士（汗", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "搞什麼東西！你是怎麼培養小火龍的！你、你！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "不要生氣，不要生氣，生氣給魔鬼留地步", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "不要生氣，不要生氣，生氣吃虧是您自己", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "要怎麼樣才能培訓出會講話的小火龍（星星眼", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "哈？", image: "img/學生/2.png", bEvent: 0 },
    { name: "博士", word: "哈？哈密瓜？原來是他啊！", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你是不是讓他把小火龍調育成會說話的小火龍", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "哈？", image: "img/學生/2.png", bEvent: 0 },
    { name: "博士", word: "我就知道是哈密瓜！", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "哎呀這阿龍實在太可愛了，能讓我養幾天嗎", image: "img/博士.png", bEvent: 1, event: Choice_stage3_2_2_0 },
]
let stage3_2_2_1 = [ //不行
    { name: "你", word: "抱歉博士，我要和阿龍一起準備大賽", image: "img/學生/4.png", bEvent: 0 },
    { name: "博士", word: "太可惜了吧！好吧好吧，好好準備大賽吧！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "我會努力的！不過我想請教一下", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "我會努力的！不過我想請教一下", image: "img/學生/1.png", bEvent: 1, event: bAgree },
]

let stage3_2_2_2 = [ //可以
    { name: "你", word: "當然可以呀博士，不過我想請教一下", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "當然可以呀博士，不過我想請教一下", image: "img/學生/0.png", bEvent: 1, event: bAgree },
]
let stage3_0 = [
    { name: "你", word: "我的報告完成了，下一步應該做些什麼呢？", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "報告完成了，當然是要將它寫成一份企劃書啊", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你想計畫些什麼呢？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "我做這份報告的動機是想要更了解小火龍", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "然後準備參加神奇寶貝大賽", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "所以我要做的應該是一份訓練企劃書", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "是這樣啊，那我讓我的助理幫你找適合你的企劃書吧", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "謝謝博士！", image: "img/學生/3.png", bEvent: 0 },
    { name: "你", word: "那還請博士幫我看看還有什麼問題，還有請您幫我蓋一下章", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "這份報告沒問題，我已經蓋好章了", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你拿去給我的助理看看吧", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "他會依照你的研究方向給你用研究的空白企劃書。", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "學長，這是我的報告，博士讓我來跟你拿空白企畫書。", image: "img/學生/0.png", bEvent: 0 },
    { name: "助理", word: "好，你是研究小火龍對吧", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "助理", word: "你來的正好，我剛整理完空白企畫書，給你吧！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "助理", word: "這個企畫書最符合你要做的研究了，拿回去好好寫吧", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "謝謝學長", image: "img/學生/0.png", bEvent: 0 },
    { name: "助理", word: "不用客氣", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "那你好好回去寫企劃書吧，我還有事要跟助理討論。", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "那我就先行離開了，再見博士！再見學長！", image: "img/學生/0.png", bEvent: 0 },
    { name: "", word: "（一個星期後）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "終於完成了這份訓練企劃書", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "為了能帶著阿龍一起實現夢想，成為神奇寶貝大師", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "我一定要拿出百分之兩百的努力！", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "先不多說了，我還是趕緊拿企劃書去給博士看吧", image: "img/學生/0.png", bEvent: 0 },
    { name: "地點", word: "（博士的實驗室門口）", image: "img/開門.png", bEvent: 0 },
    { name: "你", word: "咦？博士怎麼連門都沒有關，這也太誇張了吧", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "博士真的是這世界上最愛做實驗的人", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "（禮貌性敲敲門）博士我進來了哦~", image: "img/學生/3.png", bEvent: 0 },
    { name: "你", word: "博士，都快晚上了您還在做實驗呀", image: "img/學生/4.png", bEvent: 0 },
    { name: "博士", word: "咦咦？你什麼時候出現的！？不對，你怎麼進來的！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "額...就在剛剛，我敲了敲門進來的，實驗室的門沒有關", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "我的門沒有關？真是糟糕", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "一定是我做實驗做得太入迷了", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "隨手就忘了關門，還有就連剛剛你來了都沒發現", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "沒事的博士，我都已經習慣了...（小聲）", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "你說什麼？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "沒有呀我什麼都沒說", image: "img/學生/3.png", bEvent: 0 },
    { name: "博士", word: "是這樣呀，看來我需要去看看耳朵了，居然聽到了幻覺", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "哈..哈哈..喔對了博士，我來這邊是給你看看我的訓練企劃書", image: "img/學生/3.png", bEvent: 0 },
    { name: "博士", word: "訓練企劃書？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "就是我小火龍報告的訓練企劃書呀", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "啊啊我想起來了！大哥沒有輸！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "對對對！", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "額不是啦，重點是對小火龍的分析", image: "img/學生/2.png", bEvent: 0 },
    { name: "博士", word: "說的也是，我這幾天也被阿龍洗腦了", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "把你的企劃書給我吧", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "在這裡~我主要是針對阿龍的體力、營養均衡和身體狀況做訓練方案", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "嗯~不愧是我的學生，這份企劃書做的很完整", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "看得出來你下了不少功夫哦~", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "還好啦，這一切都是為了參加神奇寶貝大賽", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "以你的程度只要好好練習，一定能得到好成績的！我看好你唷~", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "以你的程度只要好好練習，一定能得到好成績的！我看好你唷~", image: "img/博士.png", bEvent: 1, event: branch },
]

let stage4 = [ //被借走劇情
    { name: "你", word: "謝謝博士，我想問問我可以帶走阿龍了嗎", image: "img/學生/1.png", bEvent: 0 },
    { name: "博士", word: "我想再借阿龍幾天，之後再還你，可以嗎？", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我的這份實驗如果能有阿龍的幫助就好了（星星眼", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好...好吧，那博士要記得還唷", image: "img/學生/4.png", bEvent: 0 },
    { name: "", word: "(大賽前3天)", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "？！！博士還沒還我阿龍啊啊！", image: "img/學生/2.png", bEvent: 0 },
    { name: "你", word: "沒有阿龍我怎麼去報名參加大賽呢", image: "img/學生/2.png", bEvent: 0 },
    { name: "？", word: "你也是想要參加大賽的人？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "對呀！等等，你難道是哈密瓜？！", image: "img/學生/2.png", bEvent: 0 },
    { name: "？", word: "我是鼎鼎大名的流動商人——哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "你..你你你...莫不是詐騙集團吧", image: "img/學生/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "我..我我我...才不是咧，我可是實在的良心商人", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你不要看我長得醜就以貌取人哦小夥子", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哦~好吧，暫且相信你", image: "img/學生/4.png", bEvent: 0 },
    { name: "你", word: "不過......你真的什麼東西都有，什麼東西都會嗎？", image: "img/學生/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "那是當然，也不看看我是誰", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我還真不太了解您耶", image: "img/學生/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "哎呀，好了好了不重要", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "小夥子，我看你眉頭緊皺，印堂發黑，似乎碰上了什麼難事", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "要不要說出來讓我知道", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "或許我可以幫得上忙", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哇你怎麼知道！！", image: "img/學生/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "說吧說吧 讓我來幫幫你", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我...我的阿龍不見了啦嚶嚶嚶", image: "img/學生/6.png", bEvent: 0 },
    { name: "哈密瓜", word: "額...阿龍是哪位？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "是一隻會說話、很有靈性的小火龍，沒有牠我要怎麼參加比賽", image: "img/學生/6.png", bEvent: 0 },
    { name: "哈密瓜", word: "小火龍啊...簡單！(丟神奇寶貝球", image: "img/商人.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "你", word: "是阿龍！？怎麼會在你這裡呢？", image: "img/學生/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "這是你的小火龍？你怎麼這麼肯定？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "這當然是我的阿龍", image: "img/學生/2.png", bEvent: 0 },
    { name: "你", word: "這世界上除了阿龍以外沒有任何一隻神奇寶貝會懂大哥沒有輸了", image: "img/學生/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "可是我還是有點懷疑你耶", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "這隻小火龍是我前幾天在路上撿到的", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你如果是他的主人，怎麼會隨便把牠丟在路邊", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是那真的是我的阿龍，我要怎麼做你才可以相信我？", image: "img/學生/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "那我來測試你一下你有多了解他", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "當然沒問題，這世界上沒有人比我更了解阿龍了", image: "img/學生/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "阿龍和牠的同類們最重要的身體部位是什麼？", image: "img/商人.png", bEvent: 1, event: Choice_stage400 },

]
let stage401 = [ //眉毛
    { name: "哈密瓜", word: "眉毛是什麼神奇的答案，你根本就不了解小火龍！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你個騙子！你別想帶走阿龍！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "沒有小火龍就不能參加大賽了...", image: "img/學生/6.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage402 = [ //尾巴
    { name: "哈密瓜", word: "答對了！小火龍的尾巴可以反映出心情和身體狀況", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "那我再問一題，阿龍最喜歡看什麼動畫？", image: "img/商人.png", bEvent: 0, event: Choice_stage4_0 },
]
let stage403 = [ //嘴巴
    { name: "哈密瓜", word: "嘴巴可以用來進食、講話，確實很重要", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "但不是正確答案，你根本不了解小火龍", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你個騙子！你別想帶走阿龍！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "沒有小火龍就不能參加大賽了...", image: "img/學生/6.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage5 = [ //不借走劇情
    { name: "你", word: "謝謝博士，那我趕快繼續回去準備大賽了！", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "去吧去吧！ 相信身為我學生的你一定會獲得好成績的！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "再見博士，我會努力讓你感到驕傲的！", image: "img/學生/0.png", bEvent: 0 },
    { name: "", word: "(大賽前3天)", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "寶貝球好像有點舊了，想在比賽前買到更好的寶貝球", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "哈密瓜在哪呢", image: "img/學生/1.png", bEvent: 0 },
    { name: "？", word: "是你在叫我？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "對呀！等等，你難道是哈密瓜？！", image: "img/學生/2.png", bEvent: 0 },
    { name: "？", word: "我是鼎鼎大名的流動商人——哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "你..你你你...莫不是詐騙集團吧", image: "img/學生/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "我..我我我...才不是咧，我可是實在的良心商人", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你不要看我長得醜就以貌取人哦小夥子", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哦~好吧，暫且相信你", image: "img/學生/4.png", bEvent: 0 },
    { name: "你", word: "不過......你真的什麼東西都有，什麼東西都會嗎？", image: "img/學生/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "那是當然，也不看看我是誰", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我還真不太了解您耶", image: "img/學生/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "哎呀，好了好了不重要", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "小夥子，我看你眉頭緊皺，印堂發黑，似乎碰上了什麼難事", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "要不要說出來讓我知道", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "或許我可以幫得上忙", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "哇你怎麼知道！！", image: "img/學生/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "說吧說吧 讓我來幫幫你", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "快到大賽了，我想找你買高級寶貝球呢！", image: "img/學生/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "那你找對人了！我這裡可是有最高級的寶貝球呢！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "錢給你，寶貝球我就收下囉~不過你應該不會騙人吧？", image: "img/學生/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "這當然不是騙人的啊！你竟然敢質疑我！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我都沒懷疑你是不是真的要參加大賽呢！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我當然要參加大賽啊！", image: "img/學生/2.png", bEvent: 0 },
    { name: "你", word: "你看這是我神奇寶貝阿龍呢！(丟神奇寶貝球", image: "img/學生/0.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "阿龍？這是小火龍吧！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我怎麼可能會不知道阿龍是小火龍呢！", image: "img/學生/2.png", bEvent: 0 },
    { name: "你", word: "而且我可是做了很多功課去了解牠的耶", image: "img/學生/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "是嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "那我來測試你一下你有多了解他", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "當然沒問題，這世界上沒有人比我更了解阿龍了", image: "img/學生/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "阿龍和牠的同類們最重要的身體部位是什麼？", image: "img/商人.png", bEvent: 1, event: Choice_stage400 },

]

let stage4_1 = [ //哆啦a夢
    { name: "哈密瓜", word: "你個騙子！是個人都看得出來阿龍有多麼喜歡鬼滅之刃！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你怎麼能夠忽視牠眼神散發出的那種大哥沒有輸的真摯情感", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你別想帶走阿龍！", image: "img/商人.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage4_2 = [ //鬼滅之刃
    { name: "哈密瓜", word: "哈哈哈你還挺了解牠的嘛，我也超喜歡鬼滅之刃的", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我就是看阿龍眼神散發出那種大哥沒有輸的熱血我，才忍不住把牠撿回來的", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "看來你真的是阿龍的主人", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "對吧對吧，他最近甚至會入戲太深，拉都拉不回來", image: "img/學生/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "真可愛，不過你為什麼把他丟在路邊", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "牠一隻龍孤苦伶仃，要是被壞人抓走怎麼辦？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "其實是我的老師說想要借養幾天好好觀察阿龍", image: "img/學生/6.png", bEvent: 0 },
    { name: "你", word: "沒想到居然把牠弄丟了", image: "img/學生/6.png", bEvent: 0 },
    { name: "你", word: "對了，我想問問你是在哪個路邊撿到阿龍的呀？", image: "img/學生/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "我想想...怎麼形容好呢，就是很普通的路邊呀，旁邊有樹有花", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "啊對了，那附近剛好是博士的實驗室", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你知道博士嗎，就是那個很厲害的博士", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我當然知道啊！他就是我說的那個老師", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "肯定是博士太沉迷於做實驗，把小火龍遺忘在旁邊", image: "img/學生/2.png", bEvent: 0 },
    { name: "你", word: "牠才會自己跑出來的，真的是齁...", image: "img/學生/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "原來如此呀，不過也是我的問題", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我不應該隨便撿路上的神奇寶貝，讓你擔心了", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "沒事啦，至少我找到阿龍了", image: "img/學生/3.png", bEvent: 0 },
    { name: "你", word: "但是你下次不要再撿屬於別人的東西了", image: "img/學生/1.png", bEvent: 0 },
    {
        name: "你",
        word: "但是你下次不要再撿屬於別人的東西了",
        image: "img/學生/1.png",
        bEvent: 1,
        event: function() {
            cs = stage6,
                change_scipts();
        }
    },
]
let stage5_2 = [ //鬼滅之刃
    { name: "哈密瓜", word: "哈哈哈你還挺了解牠的嘛，我也超喜歡鬼滅之刃的", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "這是當然！我跟牠就像家人一樣呢！", image: "img/學生/3.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    {
        name: "小火龍",
        word: "大哥沒有輸！阿聾阿聾",
        image: "img/神奇寶貝/5.png",
        bEvent: 1,
        event: function() {
            cs = stage6,
                change_scipts();
        }
    },
]

let stage6 = [
    { name: "哈密瓜", word: "我知道了，不過阿龍真的好有靈性、還會講人話", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你到底怎麼培養出來的呀（星星眼", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "這熟悉的感覺...呃呃只要多讓牠接觸人類的事物就可以了", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "你..你可不要找我借啊，我要參加比賽了", image: "img/學生/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "齁好吧，真是可惜，那祝你比賽順利", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒什麼事的話我就先走啦~", image: "img/商人.png", bEvent: 1, event: Choice_stage6_0 },
]
let stage6_1 = [ //挽留哈蜜瓜
    { name: "你", word: "啊？你這麼快就要走了呀？", image: "img/學生/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "難道你還要挽留我？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我知道我人見人愛、花見花開，但你也不能如此糾纏不休", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "嘖嘖嘖，難道魅力太大也是種錯誤嗎", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "額不是，你誤會了，我只是想說我們還挺有緣的", image: "img/學生/3.png", bEvent: 0 },
    { name: "你", word: "要不要一起聊聊天，談談心呀~", image: "img/學生/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "好啊好啊，最喜歡你這種熱情的朋友了", image: "img/商人.png", bEvent: 0 },
    { name: "", word: "(就這樣與哈密瓜開心的交談了幾天，忘記了報名日期)", image: "img/時間.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage6_2 = [ //練習比賽→
    { name: "你", word: "謝謝你的祝福，後會有期！", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "幸好找回了阿龍，我也要抓緊時間練習比賽了", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "阿龍，我們開始吧！", image: "img/學生/0.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/寶貝球(2).png", bEvent: 1, event: Choice_game },
]

let stage7 = [ //（遊戲成功0727）→
    { name: "你", word: "哈哈哈，果然難不倒我(積分+5)", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "照這個進度下去，我一定能在比賽好好發揮出實力", image: "img/學生/5.png", bEvent: 0 },
    {
        name: "你",
        word: "照這個進度下去，我一定能在比賽好好發揮出實力",
        image: "img/學生/5.png",
        bEvent: 1,
        event: function() {
            cs = stage9,
                change_scipts();
        }
    },
]
let stage8 = [ //（遊戲失敗1325）→
    { name: "你", word: "幾天沒練習，果然是生疏了(積分+1)", image: "img/學生/6.png", bEvent: 0 },
    { name: "你", word: "不過我不會放棄的，相信只要我多加練習就能發揮出實力的", image: "img/學生/5.png", bEvent: 0 },
    {
        name: "你",
        word: "不過我不會放棄的，相信只要我多加練習就能發揮出實力的",
        image: "img/學生/5.png",
        bEvent: 1,
        event: function() {
            cs = stage9,
                change_scipts();
        }
    },
]
let stage9 = [
    { name: "", word: "（傍晚）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "呼...呼...已經傍晚了呀，阿龍", image: "img/學生/1.png", bEvent: 0 },
    { name: "你", word: "今天的練習狀況很理想，我們未來繼續一起加油", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "一定能成功打敗對手！", image: "img/學生/5.png", bEvent: 0 },
    { name: "你", word: "今天你也累了，進去寶貝球好好休息吧", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "睡飽了才有精神繼續奮鬥唷~", image: "img/學生/0.png", bEvent: 0 },
    { name: "小火龍", word: "大哥沒有輸！阿聾阿聾", image: "img/神奇寶貝/5.png", bEvent: 0 },
    { name: "你", word: "差點忘記報名大賽了！！得趕快去神奇寶貝中心呢", image: "img/學生/2.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "你好，我想要報名參加神奇寶貝大賽", image: "img/學生/0.png", bEvent: 0 },
    { name: "工作人員", word: "好的，請你填寫這份表單", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/學生/0.png", bEvent: 0 },
    { name: "工作人員", word: "報名成功囉，祝你成功贏得冠軍", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福，我一定會成為冠軍的！", image: "img/學生/5.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },

]