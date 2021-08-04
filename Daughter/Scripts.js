//Scripts//
let stage1 = [
    { name: "你", word: "我是這座城市市長的女兒 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "道館小開和我是感情深厚的青梅竹馬 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "由於我未來想成為市長秘書", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "所以爸爸常常把他的公務交給我處理 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "讓我學習市長秘書該做什麼 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "不過也只有在爸爸忙不過來時才會這樣 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "也因為這樣我和城市裡的大家交情都很不錯 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "空閒時我最喜歡和小開一起切磋彼此的神奇寶貝的能力 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "雖然我們是這座城市實力相當的對手 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "但幾乎每次都是小開獲得勝利 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "這件事附近的鄰居都有耳聞 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "聽說他也要參加這次的神奇寶貝大賽 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "我一定要在這次的比賽中打敗他獲得冠軍證明給大家看！！（握拳", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "", word: "（鈴鈴鈴）", image: "", bEvent: 0 },
    { name: "市長", word: "女兒，今天也要麻煩你幫爸爸跑一下公務了 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "你", word: "阿？怎麼這樣… ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: "今天不是說好沒事了嗎？ ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: "我已經跟小開約好等一下要一起切磋神奇寶貝的技巧了耶…", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "市長", word: "阿就沒辦法啊…縣長突然說要增加項目… ", image: "img/市長/2.png", bEvent: 0 },
    { name: "你", word: "但是…", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "市長", word: "沒有什麼但不但是，可不可是的！！ ", image: "img/市長/1.png", bEvent: 0 },
    { name: "市長", word: "你既然未來想做市長的祕書，就要努力實習 ", image: "img/市長/1.png", bEvent: 0 },
    { name: "市長", word: "別整天只想著和道館的小開玩 ", image: "img/市長/1.png", bEvent: 0 },
    { name: "你", word: "你兇我！你不愛我了！", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "市長", word: "不是的女兒，爸爸是真的忙不過來 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "如果你不想做，那我就會給別人", image: "img/市長/2.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage1_1 = [ //拒絕爸爸交代的事 
    { name: "你", word: "可是我與小開已經約定好了 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: "我這樣直接反悔，一定會被他認為我是膽小鬼的 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "市長", word: "好吧，那我就將這份工作交給別人了", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "不過女兒，我對你確實有點失望 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "首先，我希望你能學會為了未來著想 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "其次，你不該抱持這麼激烈的勝負欲 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "想贏的心能促使你進步 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "但它的首要條件是你必須良性競爭 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "而非一心認為打敗對方就好了 ", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: "所謂的良性競爭就是要你們彼此都在競爭中進步啊", image: "img/市長/1.png", bEvent: 0 },
    { name: "市長", word: "今天你哪裡都不準去！", image: "img/市長/1.png", bEvent: 0 },
    { name: "市長", word: "在家裡好好反省！ ", image: "img/市長/1.png", bEvent: 0, },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]


let stage1_2 = [ //接受爸爸交代的事
    { name: "你", word: "好吧… ", image: "img/市長女兒/2.png ", bEvent: 0 },
    { name: "你", word: "這次工作要做什麼呢？ ", image: "img/市長女兒/0.png ", bEvent: 0 },
    { name: "市長", word: "這次縣長說要把城市的土地利用重新規劃 ", image: "img/市長/2.png ", bEvent: 0 },
    { name: "市長", word: "雖然很突然但我這次真的不太懂他的想法 ", image: "img/市長/2.png ", bEvent: 0 },
    {
        name: "市長",
        word: "這是空白的土地企畫書，那就交給你了女兒",
        image: "img/市長/2.png ",
        bEvent: 1,
        event: function() {
            Stage1_box();
            bag_appear();
            i++;
        }
    },
    { name: "你", word: "（土地利用可以找誰幫忙呢？） ", image: " img/市長女兒/0.png ", bEvent: 0 },
    { name: "你", word: " 腦中一個熟悉的名字閃過 ", image: " img/市長女兒/3.png ", bEvent: 1, event: Choice_stage1_2_0 }
]

let stage1_2_1 = [ //護士 
    { name: "你", word: "喂？不好意思請問是神奇寶貝中心的護士喬伊小姐嗎？", image: "img/電話.png", bEvent: 0 },
    { name: "喬伊", word: "是的我是呦~怎麼了嗎？ ", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "是這樣的市政府遇到了土地規劃的問題 ", image: "img/電話.png", bEvent: 0 },
    { name: "喬伊", word: "這種事情怎麼會找我呢？", image: "img/電話1.png", bEvent: 0 },
    { name: "喬伊", word: "你找錯人了吧，這不在我的專業領域範圍內 ", image: "img/電話1.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2 = [ //流動商人
    { name: "你", word: " 對了！沒錯可以請那位大名鼎鼎的流動商人——哈密瓜", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 現在就馬上聯絡哈密瓜吧！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 喂？請問是哈密瓜嗎？ ", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: " 我們需要您的幫助，可以請您撥冗前來協助我們嗎？ ", image: "img/電話.png", bEvent: 0 },
    { name: "哈密瓜", word: " 當然沒有問題啊！我可是鼎鼎大名的哈密瓜", image: "img/電話1.png", bEvent: 0 },
    { name: "哈密瓜", word: " 無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/電話1.png", bEvent: 0 },
    { name: "", word: " （哈密瓜前來幫助）", image: "", bEvent: 0 },
    { name: "你", word: " 太好了，謝謝您前來幫忙！話說您的外貌果然跟傳聞中的一樣！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "哈密瓜", word: " 你不要看我長得醜就以貌取人哦 ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 沒…沒有這回事！還請您幫幫我們 ", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你需要什麼樣的道具呢？你要什麼我都有喔~ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 欸？這個跟某知名卡通人物驚人的相似度是怎麼回事？ ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: " 該不會是在消費哆啦X夢吧 ", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "哈密瓜", word: " 喂喂！我都聽到了！！你真的需要我的幫助嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 抱歉抱歉，第一次見到鼎鼎大名的流動商人哈密瓜我太興奮了 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "哈密瓜", word: " 算了這也是凡人應該有的正常反應就原諒你了！ ", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 所以你到底要買什麼？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 我需要土地分析表 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 土地分析表呀…給你！ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 這個…已經是好幾年前的吧？ ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 什麼？抱歉可能是今年的已經賣給別人我又忘記補貨了 ", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 還有這種事怎麼會來找我呢？不是應該找專業人士嗎？ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 那我該找誰呢？ ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "哈密瓜", word: " 你可以去找土地分析專家！ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 謝謝您！啊，還有......我知道這樣很突然，但… ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 嗯？（這小女孩難道要跟我告白？但我已經心有所屬了） ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 就…就是… ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 抱歉！我不能接受你的告白！ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 阿…不是我是想要跟你購買神奇寶貝攻略秘笈… ", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "你", word: " 再說我喜歡的是小開（小聲 ", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "哈密瓜", word: " 阿…是這樣啊…阿哈哈沒有啦哈哈…（好羞恥）", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 咳哼這種東西我當然有阿一本1200元 ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 可是…爸爸一天給我的零用錢只有50塊耶 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: " 剛剛買蛋餅花光了 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 看在你這麼認真努力又可愛的份上就破例借給你了 ", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 要記得還我喔！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 是的我會的！真的很謝謝你！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 太好了這樣我就能在大賽中打敗小開了！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "哈密瓜", word: " 不過你爸爸會答應你去參加神奇寶貝大賽嗎？ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 當然呀！爸爸常說自己的人生只有自己能決定！他一定會支持我的", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那真是太好了，話說你是不是忘記什麼事了？ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 對了對了！爸爸交代我的公務還沒完成呢！謝謝您哈密瓜先生 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "哈密瓜", word: " 沒其他事的話我就先走了，再見。 ", image: "img/商人.png", bEvent: 1, event: Choice_stage1_2_2_0 },
]

let stage1_2_2_1 = [ //挽留哈密瓜 
    { name: "你", word: " 等、等等……。 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 怎麼了孩子沉迷於我的美色無法自拔嗎？ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " （沉默）", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "哈密瓜", word: " 喂喂這是什麼意思？算了不跟你計較。 ", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 不過剛剛才講過吧，你忘了妳要去完成公務？ ", image: "img/商人.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2 = [ //找土地分析專家 
    { name: "市長女兒", word: " （打電話）", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: " 不好意思，請問是土地分析專家嗎？ ", image: "img/電話.png", bEvent: 0 },
    { name: "土地分析專家", word: " 是的我是！請問找我有什麼事嗎？ ", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: " 是這樣的市政府需要您的協助，不知道您是否有空呢？ ", image: "img/電話.png", bEvent: 0 },
    { name: "土地分析專家", word: " 能幫助您們我感到十分榮幸，剛好手上的研究到一個段落了！", image: "img/電話1.png", bEvent: 0 },
    { name: "土地分析專家", word: " 我馬上過去 ", image: "img/電話1.png", bEvent: 0 },
    { name: "", word: " （土地分析專家快速到達）", image: "", bEvent: 0 },
    { name: "你", word: " 感謝您的到來，讓我們趕緊開始討論吧！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "土地分析專家", word: " 資料我都帶齊全了！你先幫我分類整理一下吧！", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/女兒物品/資料.png", bEvent: 1, event: Choice_game1 },
]
let stage4 = [
    { name: "", word: " （討論中）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: " （專業術語）（專業術語） ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "土地分析專家", word: " （專業術語）（專業術語） ", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "你", word: " 天色都這麼晚啦，今天真的很感謝您的協助", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "土地分析專家", word: " 不會啦，能夠幫助您我感到很高興 ", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "你", word: " 請問我該怎麼報答您呢？ ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "土地分析專家", word: " 這一點事我不需要報酬的啦 ", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "土地分析專家", word: " 不過聽說妳很常和道館小開對打神奇寶貝，那麼妳有神奇寶貝攻略秘笈嗎？", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "你", word: " 有是有啦，我剛剛才和鼎鼎大名的哈密瓜借了一本", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "土地分析專家", word: " 可不可以也借我幾天？我家孩子對神奇寶貝也很感興趣 ", image: "img/土地分析專家.png", bEvent: 1, event: Choice_stage1_2_2_2_0 },
    { name: "你", word: " 可是…", image: "img/市長女兒/2.png", bEvent: 1, event: Choice_stage1_2_2_2_0 },
]

let stage1_2_2_2_1 = [ //出借 
    { name: "你", word: " （就幾天而已沒事吧）那就借給您囉！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "土地分析專家", word: " 謝謝，我家孩子一定會很高興的", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "日期", word: " （比賽當天）", image: "img/隔一天.png", bEvent: 0 },
    { name: "哈密瓜", word: "嗨小女孩，我的那本神奇寶貝攻略秘笈呢？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "神奇寶貝大賽就要開始了，我想拿著那本對照觀察一下比賽情勢。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 我.......我借給別人了。 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "商人", word: " 什麼？！沒人告訴過你別人借給你的東西不能未經同意轉借嗎？ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 我以為他很快就會還了。 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 很多時候，你以為的真的只是你以為", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 無論如何別人借你的東西都不能借給別人！並且還要按時歸還", image: "img/商人.png", bEvent: 0 },
    { name: "商人", word: " 這次因為我也沒和你說該什麼時候還，所以你借了這麼久也沒事。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 我知道了！對不起哈密瓜。", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你打算怎麼賠償我？神奇寶貝攻略可不便宜 ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 我..... ", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2_2 = [ //不借 
    { name: "你", word: " 但是這不是我的東西，我沒辦法決定能不能借給你 ", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "你", word: " 很抱歉…等我存到夠的錢跟哈密瓜買下來我一定會借給您的！", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "你", word: " 我希望自己想要的東西能用自己努力存的錢買下來 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "土地分析專家", word: " 沒關係沒關係！", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "你", word: " 真的很抱歉，這是我跟爸爸請款的一些費用 ", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "你", word: " 雖然數目不多但請您收下這點心意，畢竟是公事請您不需要感到壓力", image: "img/市長女兒/5.png", bEvent: 0 },
    { name: "土地分析專家", word: " 那我就恭敬不如從命收下了！那麼再見了，這段時間我過的很開心 ", image: "img/土地分析專家.png", bEvent: 0 },
    { name: "你", word: " 我也是！ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "地點", word: "（市長辦公室）", image: "img/辦公室.png", bEvent: 0 },
    { name: "市長", word: " 不愧是我的女兒，這麼快就完成了，我等會兒看看，今天辛苦妳了", image: "img/市長/0.png", bEvent: 1, event: bag_nothing },
    { name: "你", word: " 不會啦，我知道這對我的未來有幫助，而且也是我自己說想成為市長秘書的。", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 但爸爸，我去找小開真的不是為了玩，我是想和他一起切磋神奇寶貝", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "市長", word: " 我知道你們從有神奇寶貝開始就會約彼此切磋了，爸爸也不會反對你們切磋", image: "img/市長/0.png", bEvent: 0 },
    { name: "市長", word: " 不過最近的頻率有點頻繁啊，所以爸爸以為你們是藉著切磋的名義出去玩。", image: "img/市長/2.png", bEvent: 0 },
    { name: "你", word: " 最近神奇寶貝大賽要開始了，從小到大我都和小開一起比賽，但幾乎都是我輸 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "你", word: " 他要參加這次大賽，我想和他一起練習，並在比賽中和他一決高下 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長", word: " 神奇寶貝大賽？原來如此，沒想到女兒妳對這個有興趣", image: "img/市長/2.png", bEvent: 0 },
    { name: "市長", word: " 不過下次可以主動告訴爸爸，這樣爸爸才不會胡思亂想誤會你", image: "img/市長/2.png", bEvent: 0 },
    { name: "你", word: " 其實我從小就夢想成為神奇寶貝大師，這次大賽是個好機會來證明我自己", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 爸爸，你會同意我參加的對吧？", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "市長", word: " 當然呀，有夢想是最美好的一件事 ", image: "img/市長/0.png", bEvent: 0 },
    { name: "市長", word: " 更何況妳是我最優秀的女兒，我怎麼可能不支持妳 ", image: "img/市長/0.png", bEvent: 0 },
    { name: "你", word: " 太棒了，我一定會努力成為神奇寶貝大師的", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長", word: " 不過話說...為什麼偏偏是小開呢...你確定只是單純的想練習嗎？", image: "img/市長/2.png", bEvent: 0 },
    { name: "你", word: " 當...當然呀，這座城市除了他就沒有人能贏我了，不找他就沒有第二個人選了 ", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "市長", word: " 是這樣啊，那女兒妳安心準備，我最近就不派工作給妳了，好好努力啊，加油！ ", image: "img/市長/0.png", bEvent: 0 },
    { name: "你", word: " 好的，我會成為你的驕傲的 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 去找小開前，先自己訓練一下吧！ 可不能再輸小開了呢！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 先來訓練收服神奇寶貝能力好了。 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 出來吧 ！伊布！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/寶貝球(2).png", bEvent: 1, event: Choice_game },
]
let stage2 = [ //過關
    { name: "你", word: "哈哈哈，果然難不倒我，照這個進度下去，我一定能在比賽好好發揮出實力(積分+5)", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "地點", word: "（隔天，小開家道館）", image: "img/寶貝球.png", bEvent: 0 },
    { name: "你", word: " 早上好！不好意思打擾了抱歉昨天突然有急事沒辦法到…", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "小開", word: " 該不會你又去跑公務了吧？", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: " 是沒錯啦！爸爸太忙了，昨天縣長突然派工作下來 ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: " 我想幫爸爸分擔，何況我未來想成為市長秘書", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "小開", word: " 算了你每次都這樣也不知道休息一下…都不知道我很擔心你… ", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: " 嗯？剛剛說什麼？ ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "小開", word: " 沒什麼啦！還不快點開始今天的比賽！ ", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 真是的！你還不是一樣常常逃避我的問題… ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: " 你怎麼還在那裡？快點跟上，我們要去練習場了 ", image: "img/小開/0.png", bEvent: 0 },
    { name: "", word: "（小開站在原地等你）", image: "", bEvent: 1, event: Choice_stage1_2_2_2_2_0 },
]

let stage3 = [ //失敗
    { name: "你", word: "我果然還是得再練習練習，伊布讓我們再繼續加油吧！(積分+1)", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "地點", word: "（隔天，小開家道館）", image: "img/寶貝球.png", bEvent: 0 },
    { name: "你", word: " 早上好！不好意思打擾了抱歉昨天突然有急事沒辦法到…", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "小開", word: " 該不會你又去跑公務了吧？", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: " 是沒錯啦！爸爸太忙了，昨天縣長突然派工作下來 ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: " 我想幫爸爸分擔，何況我未來想成為市長秘書", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: " 算了你每次都這樣也不知道休息一下…都不知道我很擔心你… ", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: " 嗯？剛剛說什麼？ ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "小開", word: " 沒什麼啦！還不快點開始今天的比賽！ ", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: " 真是的！你還不是一樣常常逃避我的問題… ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: " 你怎麼還在那裡？快點跟上，我們要去練習場了 ", image: "img/小開/0.png", bEvent: 0 },
    { name: "", word: "（小開站在原地等你）", image: "", bEvent: 1, event: Choice_stage1_2_2_2_2_0 },
]

let stage1_2_2_2_2_1 = [ //繼續站著 
    { name: "小開", word: " 你怎麼還站在那裡？我們沒有在玩123木頭人耶！", image: "img/小開/2.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2_2_2 = [ //趕緊跟上 
    { name: "你", word: "來了！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "地點", word: "（練習場）", image: "img/練習場.png", bEvent: 0 },
    { name: "你", word: "哇！好久沒來了！真懷念呀", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: "說什麼傻話呀！我們不是每個禮拜都會在一起練習嗎？ ", image: "img/小開/3.png", bEvent: 0 },
    { name: "小開", word: "最近為了大賽還更頻繁了，平日沒事時也都待在一塊… ", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: " 呀！你不要破壞氣氛啦！被別人聽到會誤會的 ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: "又沒關係這是事實，我也不在乎別人怎麼說 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "小開", word: "順帶一提大家貌似都覺得我們的感情很好！！ ", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: "但是我很在乎呀！！！咦？大家都覺得？？等等大家都知道了？！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "你", word: "你又再捉弄我了！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: "反正我們又沒做什麼虧心事", image: "img/小開/0.png", bEvent: 0 },
    { name: "你", word: "我這次絕對會贏你！！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: "那我可要用盡全力了！ ", image: "img/小開/4.png", bEvent: 0 },
    { name: "", word: " （一段時間後） ", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "為什麼阿？又輸了… ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "小開", word: "從小到大我都跟你待在一起，你的習慣我幾乎都知道", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: "咦…（看來回去的時候該去翻翻神奇寶貝攻略秘笈了） ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "小開", word: "妳啊就是出招的時候太猶豫@＃*/-$還有啊＃$/@", image: "img/小開/4.png", bEvent: 0 },
    { name: "你", word: "知道了知道了！你為什麼這麼了解我啊？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: "就…就妳怎麼突然問這種問題…我其實一直注意著妳 ", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: "哪…哪有人講話這麼直接的！ ", image: "img/市長女兒/1.png", bEvent: 0 },
    { name: "小開", word: "不要逼我說出這種話啦 ", image: "img/小開/5.png", bEvent: 0 },
    { name: "你", word: "好啦停止這個話題", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "你", word: "今..今天道館怎麼這麼熱啊，我都出汗了", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "你", word: "我們要不要去外面玩", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "小開", word: "嗯...好啊，今天的練習量已經夠了，我們走吧 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 不過我們要去哪裡呀？ ", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "小開", word: "去附近逛逛看看風景放鬆一下心情", image: "img/小開/3.png", bEvent: 0 },
    { name: "", word: "（並肩一起走到到目的地）", image: "", bEvent: 0 },
    { name: "小開", word: "大賽快要開始了啊…有點緊張 ", image: "img/小開/6.png", bEvent: 0 },
    { name: "你", word: " 對了昨天呀爸爸同意讓我參加了耶！好開心喔！", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: "真的嗎那真是太好了。 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 你呢？你會參加的吧？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: "可能也會吧…我們家還蠻重視這個的畢竟是道館館主的兒子 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "小開", word: "不過爸爸還在歷練我，他希望我可以以更好的實力上場 ", image: "img/小開/4.png", bEvent: 0 },
    { name: "小開", word: "但我一定會通過他的考驗，然後堂堂正正的站上神奇寶貝大賽的擂台！ ", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 那真是太好了，我一定會在大賽上打敗你，然後證明給大家看我也是很厲害的 ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: "其實你不用證明給大家看，大家其實一直覺得你很厲害…", image: "img/小開/1.png", bEvent: 0 },
    { name: "你", word: " 真的嗎？可是我每次都輸你 ", image: "img/市長女兒/2.png", bEvent: 0 },
    { name: "小開", word: "不是有句話說知己知彼百戰百勝嗎？我覺得你最缺少的是觀察對手的能力", image: "img/小開/3.png", bEvent: 1, event: Choice_stage1_2_2_2_2_2_0 },
]

let stage1_2_2_2_2_2_1 = [ //沒有過多的在意 
    { name: "你", word: " 是嗎？（半信半疑 ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "小開", word: " 真心不騙 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "你", word: " 總覺得很可疑 ", image: "img/市長女兒/6.png", bEvent: 0 },
    { name: "", word: " （由於你沒有聽信小開的建議最後在大賽落敗了） ", image: "", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2_2_2_2 = [ //聽取小開的建議 
    { name: "你", word: " 是嗎？謝謝你我會試著修改看看的這樣我就能更精進我的技術了", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: " 嗯能幫助到你我也很開心 ", image: "img/小開/3.png", bEv小開ent: 0 },
    { name: "你", word: " 對了你去報名了嗎？我還沒有報名，這附近好像有神奇寶貝中心！ ", image: "img/市長女兒/0.png", bEvent: 1, event: Choice_stage1_2_2_2_2_2_2_0 },
]

let stage1_2_2_2_2_2_2_1 = [ //自己登記 
    { name: "你", word: " 你可以在外面等我嗎？我登記一下下就好了！ ", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "小開", word: " 恩，好的我在外面等你，你快去吧 ", image: "img/小開/4.png", bEv小開ent: 0 },
    { name: "", word: "（大賽當天小開沒來比賽） ", image: "", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2_2_2_2_2 = [ //邀請小開 
    { name: "你", word: " 你要跟我一起去報名登記嗎？ ", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "小開", word: " 好呀！順道一起，剛好省下特地過來的時間 ", image: "img/小開/3.png", bEvent: 0 },
    { name: "", word: "（登記成功）", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]