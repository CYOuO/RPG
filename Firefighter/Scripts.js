let stage1 = [
    { name: "你", word: "我是一名消防員", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "最近神奇寶貝大賽的消息在鎮上傳得沸沸揚揚", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "從小我就想參加一次神奇寶貝大賽", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "不過從我的鎮上到神奇寶貝大賽的會館有一段很長的路程", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "而且我還想為了爭奪冠軍和其他選手打練習賽！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "看來我必須放棄我的工作才有充足的時間去準備", image: "img/消防員/2.png", bEvent: 0 },
    { name: "你", word: "可隊長對我一直都寄予厚望，我該怎麼跟他開口呢？", image: "img/消防員/2.png", bEvent: 0 },
    { name: "你", word: "算了，船到橋頭自然直，直接去吧！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "去找隊長前，檢查一下背包裡有沒有辭職信吧！", image: "img/消防員/0.png", bEvent: 1, event: bag_appear },
    { name: "你", word: "(找消防隊長)", image: "img/消防員/1.png", bEvent: 0 },
    { name: "消防隊長", word: "哎呀呀 小夥子你來的正好", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "我正好...咦？？你怎麼一副心神不寧的樣子？？ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "(我該怎麼開口好咧...) ", image: "img/消防員/2.png", bEvent: 0 },
    { name: "消防隊長", word: "怎麼啦??遇到什麼問題啦?跟我聊聊吧 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "(加油！我可以的！為了夢想！) ", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "阿...雖然這麼說很突然.... ", image: "img/消防員/4.png", bEvent: 0 },
    { name: "消防隊長", word: "你要退消防隊？", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "？！！！！！(被發現了！！！", image: "img/消防員/3.png", bEvent: 0 },
    { name: "消防隊長", word: "哈哈哈 開個玩笑 我看剛剛氣氛太凝重了嘖嘖 哈哈哈 好笑吧", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你怎麼可能退隊呢 你可是我們隊最優秀的人呢！！ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "嗚嗚嗚 謝謝您這麼看重我 ", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "但...對不起...我恐怕要令您失望了...", image: "img/消防員/6.png", bEvent: 0 },
    { name: "消防隊長", word: " 怎麼了，怎麼了呢", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "我...我有一個夢想", image: "img/消防員/6.png", bEvent: 0 },
    { name: "消防隊長", word: "有夢想好啊，有夢最美了！！！ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "等等...你說讓我失望...難道... ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "(加油！勇敢的說出來吧！)", image: "img/消防員/1.png", bEvent: 0 },
    { name: "消防隊長", word: "你想篡位當消防隊長？", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "對！！！", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "？？？？？？", image: "img/消防員/5.png", bEvent: 0 },
    { name: "你", word: "阿...不是這樣啦QAQ", image: "img/消防員/7.png", bEvent: 0 },
    { name: "消防隊長", word: "早說嘛 我啊 一直很看重你", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你不說我未來當然還是讓你當的呀", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "不...不是... ", image: "img/消防員/7.png", bEvent: 0 },
    { name: "消防隊長", word: "我跟你說齁 每次看你努力辛勤的在做任務時", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "那模樣像極了我年輕時的樣子*@*#-- ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "(怎麼插不進去話啊啊啊)", image: "img/消防員/8.png", bEvent: 0 },
    { name: "消防隊長", word: "想當年我啊@#*/-$", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "不是...請您聽我說啦嗚嗚嗚！", image: "img/消防員/8.png", bEvent: 0 },
    { name: "消防隊長", word: "啊~你也想說說感想啊？說吧 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "額...不是這樣的... ", image: "img/消防員/7.png", bEvent: 0 },
    { name: "你", word: "我的夢想是成為神奇寶貝大師！！！", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "（終於講出來了！我好棒嗚嗚） ", image: "img/消防員/4.png", bEvent: 0 },
    { name: "消防隊長", word: "？！！！你認真？ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "我是認真的！", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "為了成為神奇寶貝大師，我需要做很多的準備以及練習", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "所以...對不起隊長...我要辭職（給出辭職信", image: "img/消防員/6.png", bEvent: 1, event: bag_nothing },
    { name: "消防隊長", word: "我不跟你開玩笑了，你也不要跟我開玩笑啦QAQ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "不要走啦嗚嗚嗚，你怎麼會突然這樣想呢", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "我其實一直以來都想成為神奇寶貝大師... ", image: "img/消防員/6.png", bEvent: 0 },
    { name: "你", word: "奈何之前總是各種錯過... ", image: "img/消防員/6.png", bEvent: 0 },
    { name: "消防隊長", word: "你知道參加大賽需要付出多少嗎？ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你真的確定嗎？", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "我知道，我都知道的... ", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "但我真的不想錯過這次機會。", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "我不想讓我的夢想只是一場白日夢 ", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "我想達成它！ ", image: "img/消防員/2.png", bEvent: 0 },
    { name: "消防隊長", word: "我是真的捨不得你呀 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "對於大家而言，你真的是超優秀的消防隊員", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你真的不再仔細思考嗎 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "你", word: "我是思考過才選擇辭職的...真的很對不起... ", image: "img/消防員/6.png", bEvent: 0 },
    { name: "消防隊長", word: "沒什麼好對不起的 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "追逐夢想本來就不是錯呀！ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "但是不是...儘管我再挽留... ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你也不會為我停留？ ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "好吧！我同意你辭職 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "但我還想派給你最後一個任務", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "你可以去幫農村媽媽抓蛇嗎？ ", image: "img/消防隊長.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage1_1 = [ //不行
    { name: "你", word: " 可是，實現夢想刻不容緩。 ", image: "img/消防員/2.png", bEvent: 0 },
    { name: "消防隊長", word: "我知道，但就當你在消防隊的最後一個紀念吧。", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "我記得她兒子也會去參加大賽 ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "他兒子曾說過：「一個人如果沒有夢想， ", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "那就是一具沒有靈魂的軀殼", image: "img/消防隊長.png", bEvent: 0 },
    { name: "消防隊長", word: "每個人都該有追逐夢想的權利。」", image: "img/消防隊長.png", bEvent: 0 },
    {
        name: "消防隊長",
        word: "我就是想到這句話，才同意你辭職的。",
        image: "img/消防隊長.png",
        bEvent: 0,
        event: function() {
            cs = stage1_2,
                change_scipts();
        }
    },
]

let stage1_2 = [ //可以
    { name: "你", word: "好吧，我馬上就去 ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "地點", word: "（農村媽媽家）", image: "", bEvent: 0 },
    { name: "你", word: "你好，農村媽媽，我是消防隊員 ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "是您打電話來求救的吧 ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "對呀，我的蘋果收成到一半", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "前幾天突然一堆蛇跑到樹上", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "雖然一些蛇無毒而且還會幫我吃掉害蟲", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "農村媽媽", word: "但有毒的蛇害我根本就接近不了我的果樹", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "我收成工作都沒辦法繼續了。 ", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "農村媽媽你別擔心", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "我這就去幫你把有毒的蛇抓起來", image: "img/消防員/1.png", bEvent: 0 },
    { name: "提示", word: "點擊蛇去幫農村媽媽抓蛇吧！", image: "img/消防隊員物品/蛇.png", bEvent: 1, event: Game },
    { name: "提示", word: "輸入通關密碼吧", image: "", bEvent: 1, event: Choice_game },

]

let stage2 = [ //抓蛇成功2931
    { name: "你", word: "呼...呼...終於抓完蛇了 ", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "沒想到這群蛇的老大居然是隻大岩蛇！ ", image: "img/消防員/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "真是太感謝你了！ ", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "你", word: "不會不會，這是我的職責所在", image: "img/消防員/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "辛苦你了", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "我的兒子去遠方追逐夢想", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "農村媽媽", word: "一時半會連絡不上他 ", image: "img/媽媽/2.png", bEvent: 0 },
    { name: "農村媽媽", word: "沒有你的話我真的不知道該怎麼辦", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "你", word: "我有聽說，您的兒子是去參加神奇寶貝大賽了吧？ ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "對呀，雖然心疼", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "但是年輕人有夢想就是要去闖嘛，對吧？", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "其實，我也有成為神奇寶貝大師的夢想", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "幫您抓蛇是我最後一個任務", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "結束後我也要去參加神奇寶貝大賽 ", image: "img/消防員/1.png", bEvent: 0 },
    { name: "農村媽媽", word: "真的嗎！我看你年少熱血", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "農村媽媽", word: "心地又這麼善良 ", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "農村媽媽", word: "一定能有所成就的，加油喔~", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福 ", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "不過不過我先把大岩蛇送去博士那再出發好了", image: "img/消防員/9.png", bEvent: 0 },
    { name: "農村媽媽", word: "好啊好啊 ", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "農村媽媽", word: "等等，這個是我剛烤好的蘋果派 ", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "農村媽媽", word: "如果不嫌棄的話就拿上吧 ", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "路上餓了可以吃 ", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "哇！好香啊 ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "謝謝農村媽媽 ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "那我先告辭嘍 ", image: "img/消防員/0.png", bEvent: 0 },
    {
        name: "農村媽媽",
        word: "路上小心啊！ ",
        image: "img/媽媽/4.png",
        bEvent: 0,
        event: function() {
            cs = stage4,
                change_scipts();
        }
    },
]

let stage3 = [ //抓蛇失敗1328
    { name: "你", word: "哎呀！好痛呀！", image: "img/消防員/5.png", bEvent: 0 },
    { name: "你", word: "（我怎麼從樹上摔下來了）", image: "img/消防員/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "怎麼了，你有沒有受傷？", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "沒事沒事，我只是不小心踩空，摔了下來", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "不過這蛇怎麼會抓都抓不完", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "毒蛇還差點咬到我，真是危險！", image: "img/消防員/6.png", bEvent: 0 },
    { name: "農村媽媽", word: "沒事就好，沒事就好", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "不過...這可怎麼辦呀", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "要是沒辦法在這幾天把蘋果全部採收下來", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "可是會影響蘋果的品質的。", image: "img/媽媽/3.png", bEvent: 0 },
    { name: "你", word: "農村媽媽您先別擔心", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "我認識一位野外求生專家", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "他的臨時小屋離這裡不遠", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "我可以去找他，他或許有辦法可以解決", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "您先在家裡等著", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "記得不要靠近蘋果園", image: "img/消防員/3.png", bEvent: 0 },
    { name: "你", word: "以免被毒蛇傷到", image: "img/消防員/3.png", bEvent: 0 },
    { name: "農村媽媽", word: "好，麻煩你了", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "地點", word: "（野外求生專家的臨時小屋）", image: "", bEvent: 0 },
    { name: "野外求生專家", word: "嘿小夥子，好久不見啊", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "你來我這荒郊野外的小屋作做什麼呀？", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "你", word: "是這樣的，我剛剛在農村媽媽家抓蛇", image: "img/消防員/6.png", bEvent: 0 },
    { name: "你", word: "結果那邊的蛇實在是太多了", image: "img/消防員/7.png", bEvent: 0 },
    { name: "你", word: "抓都抓不完", image: "img/消防員/8.png", bEvent: 0 },
    { name: "你", word: "我還不小心從樹上摔下來，所以才來找你幫忙", image: "img/消防員/6.png", bEvent: 0 },
    { name: "野外求生專家", word: "抓蛇？我是野外求生專家", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "抓蛇無能為力，躲蛇的經驗倒是挺多的哈哈哈", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "你", word: "啊？那可怎麼辦呀？真傷腦筋", image: "img/消防員/7.png", bEvent: 0 },
    { name: "野外求生專家", word: "嗯...雖然我沒有抓蛇的經驗", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "但是我對蛇很了解，或許可以幫到忙", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "我還是陪你去看看吧", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "地點", word: "（農村媽媽家）", image: "", bEvent: 0 },
    { name: "你", word: "農村媽媽，我找來了野外求生專家~", image: "img/消防員/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "這這這..這也太多蛇了吧", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "而且有些還有毒", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "不趕快除掉的話整個蘋果園都會被毒蛇佔領", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "你", word: "是啊，我實在是沒有辦法了，所以才找你求助", image: "img/消防員/8.png", bEvent: 0 },
    { name: "你", word: "農村媽媽，這些蛇什麼時候跑到樹上的呀？", image: "img/消防員/2.png", bEvent: 0 },
    { name: "農村媽媽", word: "就在2天前", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "這些蛇突然跑到樹上棲息，一來就是一大堆", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "聽起來確實很糟糕", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "不過依我的經驗", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "野外求生專家", word: "一群蛇會突然集體行動", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "野外求生專家", word: "通常是有蛇老大帶領著", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "野外求生專家", word: "擒賊先擒王，我們只要抓住蛇老大", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "野外求生專家", word: "其他蛇就會因為失去方向而離開", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "你", word: "那事不宜遲，我這就爬上樹去找！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "等等 等等 別衝動啊", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "萬一你又摔下來或者被毒蛇咬傷了怎麼辦？", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "你", word: "可是除了爬上去以外還有什麼解決方法？", image: "img/消防員/2.png", bEvent: 0 },
    { name: "野外求生專家", word: "當然有！蛇的視覺、聽覺不敏銳", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "但是嗅覺很好", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "我們可以利用這點把蛇老大吸引出來", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "你", word: "這個方法聽起來不錯", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "不過我們要用什麼吸引牠們？", image: "img/消防員/6.png", bEvent: 0 },
    { name: "野外求生專家", word: "不如...我們在這裡烤肉吧！", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "正好也到午餐時間了", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "你", word: "額...專家你只是剛好餓了吧？", image: "img/消防員/7.png", bEvent: 0 },
    { name: "野外求生專家", word: "才不是呢，我是為了趕緊引出蛇老大", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "我而且除蛇、吃飯兩不誤", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "這不是一件好事嗎", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "別說了，趕緊來生火吧！", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "", word: "（十五分鐘後）", image: "", bEvent: 0 },
    { name: "農村媽媽", word: "來，多吃點，不夠的話還有", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "謝謝農村媽媽", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "沒想到您這麼會烤肉", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "還有這個蘋果烤肉醬，跟烤肉絕配，太好吃了", image: "img/消防員/4.png", bEvent: 0 },
    { name: "野外求生專家", word: "哎哎哎，給我也留點啊，都快被你吃光了", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "你", word: "我現在還在長身體，多吃點是正常的", image: "img/消防員/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "還長身體，你的身材已經夠好了", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "再長下去讓其他人怎麼辦", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "野外求生專家", word: "不過說到底，這蛇怎麼還沒來啊", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "農村媽媽", word: "哎呀你們別爭了，還有很多肉呢", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "噓...你們看那裡", image: "img/消防員/5.png", bEvent: 0 },
    { name: "野外求生專家", word: "天哪！沒想到這些蛇的老大居然是大岩蛇", image: "img/野外求生專家//3.png", bEvent: 0 },
    { name: "野外求生專家", word: "我上一次見到他都是3年前的事了", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "你", word: "我只在書中看過大岩蛇", image: "img/消防員/2.png", bEvent: 0 },
    { name: "你", word: "沒想到現在可以親眼目睹，真幸運！", image: "img/消防員/4.png", bEvent: 0 },
    { name: "野外求生專家", word: "幸運個鬼啊！現在要緊的是控制好牠", image: "img/野外求生專家/3.png", bEvent: 0 },
    { name: "你", word: "喔喔說的也對，出來吧傑尼龜！", image: "img/消防員/9.png", bEvent: 0 },
    { name: "", word: "（大岩蛇衝了過來）", image: "img/消防員/C.png", bEvent: 0 },
    { name: "你", word: "傑尼龜！使用泡沫還有水之波動！", image: "img/消防員/B.png", bEvent: 0 },
    { name: "", word: "（大岩蛇受到傷害，打開岩石盾牌）", image: "img/消防員/C.png", bEvent: 0 },
    { name: "你", word: "傑尼龜！使用水流尾給他最後一擊！", image: "img/消防員/A.png", bEvent: 0 },
    { name: "", word: "（大岩蛇被擊中，昏迷了）", image: "img/消防員/C.png", bEvent: 0 },
    { name: "你", word: "做得好傑尼龜，進去寶貝球休息吧！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "可以啊小夥子，一下子就解決了", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "你", word: "還好啦，主要是我的傑尼龜是水系", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "剛好克制了大岩蛇的岩石系", image: "img/消防員/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "真的太感謝你們了！", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "我心中的大石終於可以放下了", image: "img/媽媽/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "哈哈不會啦", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "不過這些蛇可能要過幾天才會全部離開", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "接下來還是要多加小心唷！", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "你", word: "這次謝謝你的幫忙！", image: "img/消防員/4.png", bEvent: 0 },
    { name: "野外求生專家", word: "不用客氣啦老朋友", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "不過你之後要去哪？要不要來我家敘敘舊？", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "你", word: "不了老朋友", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "我要去參加這次的神奇寶貝大賽", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "可能會在外面歷練很久", image: "img/消防員/4.png", bEvent: 0 },
    { name: "野外求生專家", word: "真的嗎？祝你成功實現你的夢想啊，加油！", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "農村媽媽", word: "好巧啊，我的兒子跟你有一樣的夢想", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "農村媽媽", word: "你年少熱血，心地又善良，一定可以的", image: "img/媽媽/4.png", bEvent: 0 },
    { name: "你", word: "嗯嗯，我會努力的！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "不過聽說博士最近在做研究", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "這隻大岩蛇或許對他有幫助", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "我先把牠送去博士那再出發好了，我先走啦~", image: "img/消防員/0.png", bEvent: 0 },
    {
        name: "野外求生專家",
        word: "那我也先離開了，有緣再見！",
        image: "img/野外求生專家/0.png",
        bEvent: 0,
        event: function() {
            cs = stage4,
                change_scipts();
        }
    },
]
let stage4 = [
    { name: "地點", word: "（博士的實驗室門口）", image: "", bEvent: 0 },
    { name: "你", word: "（敲敲門）博士！博士！博士你在嗎？ ", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "咦？博士平常這個時間不是都泡在實驗室裡做研究嗎？", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "我打個電話好了", image: "img/消防員/0.png", bEvent: 0 },
    { name: "博士", word: "（鈴鈴鈴）喂？請問你找誰？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "喂喂，博士，是我啦", image: "img//電話.png", bEvent: 0 },
    { name: "博士", word: "額...請問你哪位？ ", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "我是消防隊員啊！", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: "我有一件事情找你，但是你好像不在實驗室 ", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "原來是你啊", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "我就在實驗室呀，我去門口接你 ", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "（開門）", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "好久不見呀~", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "剛剛我做實驗做得太入迷了 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "所以沒聽到敲門聲，不好意思啊 ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "不會啦，我才剛來", image: "img/消防員/0.png", bEvent: 0 },
    { name: "博士", word: "那麼...你找我有什麼事呀？ ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "是這樣的，我剛剛在農村媽媽家抓蛇", image: "img/消防員/9.png", bEvent: 0 },
    { name: "你", word: "結果發現了這隻大岩蛇", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "我想應該對您的實驗有幫助，就帶來了", image: "img/消防員/4.png", bEvent: 0 },
    { name: "博士", word: "大岩蛇？這可是很難遇到的呢 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "這一定能讓我的實驗更加完整", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "真的太感謝你了，幫了我一個大忙", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "嘿嘿，小事小事，能幫到你是我的榮幸", image: "img/消防員/1.png", bEvent: 0 },
    { name: "博士", word: "你還是這麼善良又客氣", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "接下來你要去哪呀，回消防隊嗎？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "其實，我已經向消防隊長辭職了", image: "img/消防員/4.png", bEvent: 0 },
    { name: "你", word: "接下來我要參加神奇寶貝大賽", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "完成我的夢想，當一個神奇寶貝大師", image: "img/消防員/1.png", bEvent: 0 },
    { name: "博士", word: "神奇寶貝大賽？", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "跟我的學生一模一樣", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "他也要去參加這次大賽", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你們年輕人真是充滿勇氣", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "不畏懼困難，不害怕受傷", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "想當年我也是這樣過來的", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "真的嗎", image: "img/消防員/0.png", bEvent: 0 },
    { name: "你", word: "夢想這兩個字真的能帶給人無限的希望呢", image: "img/消防員/1.png", bEvent: 0 },
    { name: "博士", word: "是啊，祝你能實現夢想", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "成為神奇寶貝大師，加油！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "謝謝您的祝福，我會好好努力的", image: "img/消防員/1.png", bEvent: 0 },
    { name: "你", word: "對了，神奇寶貝大賽的報名處是在神奇寶貝中心對嗎？", image: "img/消防員/2.png", bEvent: 0 },
    { name: "博士", word: "對呀！就在前面的小鎮", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好的，那沒什麼事的話我就先走啦~", image: "img/消防員/0.png", bEvent: 0 },
    { name: "博士", word: "有緣再見~", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "後會有期！", image: "img/消防員/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "", bEvent: 0 },
    { name: "你", word: "你好，我想要報名參加神奇寶貝大賽", image: "img/消防員/0.png", bEvent: 0 },
    { name: "工作人員", word: "好的，請你填寫這份表單", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/消防員/0.png", bEvent: 0 },
    { name: "工作人員", word: "報名成功囉，祝你成功贏得冠軍", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福，我一定會成為冠軍的！", image: "img/消防員/1.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]