let stage1 = [
    { name: "你", word: "我是一位充滿愛心的護士~", image: "img/護士/3.png", bEvent: 0 },
    {
        name: "你",
        word: "平常的工作就是照顧在戰鬥中受傷的神奇寶貝",
        image: "img/護士/1.png",
        bEvent: 1,
        event: function() {
            Stage1_box();
            bag_appear();
            i++;
        }
    },
    { name: "你", word: "和提供住宿給旅途中辛勞的訓練家", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "雖然平時的工作很辛苦", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "但是我很享受幫助人的過程", image: "img/護士/1.png", bEvent: 0 },
    { name: "你", word: "儘管我很喜愛自己的工作", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "但其實我很羨慕來到神奇寶貝中心的人", image: "img/護士/1.png", bEvent: 0 },
    { name: "你", word: "我也想和其他人一樣享受在賽場上揮灑努力的汗水的滋味！", image: "img/護士/2.png", bEvent: 0 },
    { name: "", word: "（陽光從窗口灑進房間）", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: "今天也是一個美好的早晨呢！", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "（看了看時鐘）", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "慘了！已經7:00了只剩半小時就要去上班", image: "img/護士/5.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "早安呀胖丁今天天氣真的很好的吧！", image: "img/護士/3.png", bEvent: 0 },
    { name: "胖丁", word: "啵利~啵利~", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "在這間神奇寶貝中心也只有我跟你了", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "眼看神奇寶貝大賽的截止日期一天天的逼近", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "我該不該跟院長談談請同意讓我去參加比賽呢？", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "但…我離開了誰能接替我的工作呢？", image: "img/護士/7.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage1_1 = [ //還是留下來吧 
    { name: "你", word: "還是算了吧", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "我不想失去這份寶貴的工作", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "還有長久以來跟附近居民建立好的交情", image: "img/護士/0.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]
let stage1_2 = [ //跟院長談談 
    { name: "地點", word: "(院長辦公室)", image: "", bEvent: 0 },
    { name: "你", word: "那…那個院長我知道這樣很突然", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "你知道即將舉辦的神奇寶貝大賽吧？", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "是這樣的，我一直想參加比賽", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "我希望能夠暫時離開崗位", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "可是你離開後誰要來接替你的位置呢？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "該怎麼辦…", image: "img/護士/7.png", bEvent: 0 },
    { name: "你", word: "（我該請誰幫忙？）", image: "img/護士/7.png", bEvent: 1, event: Choice_stage1_2_0 },

]
let stage1_2_2 = [ //農場主人 
    { name: "你", word: "或許我們能請隔壁蘋果樹園的農場主人幫忙？", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "他不是平常的工作就是種種樹、餵餵羊嗎？", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "還有他最近也要參加那個什麼什麼大賽", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "是神奇寶貝大賽", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "還有院長你知道怎麼那麽清楚", image: "img/護士/4.png", bEvent: 0 },
    { name: "院長", word: "真拿你沒辦法~你就那麼想知道？", image: "img/院長/0.png", bEvent: 0 },
    { name: "你", word: "其實…還好", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "因為我最喜歡吃他們家種的蘋果了！", image: "img/院長/2.png", bEvent: 0 },
    { name: "院長", word: "清脆可口怎麼都吃不膩", image: "img/院長/2.png", bEvent: 0 },
    { name: "院長", word: "所以我就暗中調查了他們", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "結果沒查出種植的祕密", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "反倒更加了解農場一家人", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "院長…你這樣有犯法的嫌疑喔", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "糟…糟糕，那我該怎麼辦？", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "我勸你馬上停止這樣的行為比較好", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "我知道了，你說的對，偷偷調查別人確實是不對的行為", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "知道錯就好了，以後可不能再做這種事", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "我會記住的。不過確定的是農場主人不能幫你代班", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "那我該怎麼辦呢？沒人代班可就不能去參加大賽了", image: "img/護士/6.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },

]
let stage1_2_1 = [ //流動商人 
    { name: "你", word: "院長…或許能請哈密瓜先生幫忙？", image: "img/護士/6.png", bEvent: 0 },
    { name: "院長", word: "他一個商人懂我們的醫學嗎？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "院長他可是鼎鼎大名的流動商人——哈密瓜", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "無論是你想的到的", image: "img/護士/3.png", bEvent: 0, },
    { name: "你", word: "或是想不到的東西他都有，他都會！", image: "img/護士/3.png", bEvent: 0 },
    { name: "院長", word: "好吧…如果他真的像傳聞所說一樣", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "那或許也未嘗不是一個辦法", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "順帶一提他應該是有護士執照的吧？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "有的有的他可是那個哈密瓜耶", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "我現在就打電話問問他的意願", image: "img/護士/3.png", bEvent: 0 },
    { name: "", word: "（嘟嘟嘟）", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: "喂？請問是哈密瓜先生嗎？", image: "img/電話.png", bEvent: 0 },
    { name: "哈密瓜", word: "是我是請問找我有什麼事嗎？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "是這樣的我希望您能代替我在神奇寶貝中心的工作一陣子", image: "img/電話.png", bEvent: 0 },
    { name: "哈密瓜", word: "但…你怎麼找我代替你呢？", image: "img/電話1.png", bEvent: 0 },
    { name: "哈密瓜", word: "其他的護士呢？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "其他護士剛好都很忙碌，實在是沒辦法支援", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: "但我聽說您有護士執照", image: "img/電話.png", bEvent: 0 },
    { name: "哈密瓜", word: "但我鼎鼎大名哈密瓜忙著賺錢", image: "img/電話1.png", bEvent: 0 },
    { name: "哈密瓜", word: "我可是要周遊列國到處掙錢的", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "哈密瓜先生我們神奇寶貝中心的薪資可是很可觀的", image: "img/電話.png", bEvent: 0 },
    { name: "你", word: "說不定比你在外面賺的錢還要多", image: "img/電話.png", bEvent: 0 },
    { name: "哈密瓜", word: "太好康了吧！我馬上過去！", image: "img/電話1.png", bEvent: 0 },
    { name: "", word: "（哈密瓜光速抵達神奇寶貝中心）", image: "", bEvent: 0 },
    { name: "哈密瓜", word: "關於剛剛的工作內容具體來說要做些什麼？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "先說好我只幫你一小段時間喔！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "基本上需要照顧受傷的神奇寶貝", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "還有整理訓練家暫時入住的房間", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "雖然知道您是什麼都會什麼都有的哈密瓜", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "但這個OK繃還有繃帶給你", image: "img/護士/0.png", bEvent: 1, event: bag_nothing },
    { name: "你", word: "都請您幫忙了還要您提供，真的說不過去", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "聽起來還算簡單嘛~", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "畢竟我可是哈密瓜這點事難不倒我 ", image: "img/商人.png ", bEvent: 0 },
    { name: "你", word: "真是太好了！謝謝您，那就萬事拜託囉~", image: "img/護士/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒問題！我絕不會讓妳後悔妳的選擇的", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "選擇哈密瓜你優質貼心的好夥伴", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "謝謝！一切就交給你啦", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "院長，哈密瓜願意接替我的工作並且我們已經交接好了", image: "img/護士/3.png", bEvent: 0 },
    { name: "院長", word: "好吧，想成為神奇寶貝大師不是那麼容易的事啊", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "你要好好加油阿！要為我們爭光喔", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "失敗了沒關係", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "這間神奇寶貝中心永遠是你的避風港", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "我會想你的", image: "img/院長/0.png", bEvent: 0 },
    { name: "你", word: "呸呸呸！", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "院長我還沒開始你就講這種觸霉頭的話不太好吧", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "總之我們會支持你的，加油！", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "有種自己的孩子終於長大的感覺，我好感動呀", image: "img/院長/5.png", bEvent: 0 },
    { name: "你", word: "院長…謝謝你我會努力的（感動", image: "img/護士/7.png", bEvent: 0 },
    { name: "哈密瓜", word: "所以你要走了沒？感動的戲碼演完了嗎", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "咳哼我該走了掰掰", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "（離開神奇寶貝中心）", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "再見了陪伴我多年的神奇寶貝中心", image: "img/護士/2.png", bEvent: 0 },
    { name: "？", word: "呀阿阿…好痛阿", image: "img/護士/7.png", bEvent: 1, event: Choice_stage1_2_2_0 },
]
let stage1_2_1_1 = [ //忽視 
    { name: "你", word: "這是什麼聲音？嗯？聲音又消失了大概只是風聲吧？", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "不管了先跟胖丁去訓練然後再去報名大賽吧。", image: "img/護士/4.png", bEvent: 0 },
    { name: "地點", word: "（訓練場）", image: "img/訓練場.png", bEvent: 0 },
    { name: "你", word: "胖丁，使出拍擊！", image: "img/護士/4.png", bEvent: 0 },
    { name: "胖丁", word: "啵利~啵利~", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "很好，接下來使出魔法閃耀！", image: "img/護士/4.png", bEvent: 0 },
    { name: "胖丁", word: "啵利！", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "胖丁你好棒！", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "你要記住這兩個技能合在一起就是你的最佳攻擊組合！", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "大家一定沒想到我已經知道胖丁的最佳攻擊組合是什麼", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "對了最近訓練場開放了一個新的場地讓神奇寶貝訓練", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "胖丁，我們也去試試吧！", image: "img/護士/3.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/護士物品/方塊.png", bEvent: 1, event: Choice_game },
]
let stage3 = [ //忽視遊戲成功線
    { name: "你", word: "哇據說這個新場地的訓練特別難，沒想到我們一次就通過了！(積分+5)", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "嘿嘿希望我們參加大賽能獲得優勝。", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "我們回去報名吧！", image: "img/護士/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "院長、哈密瓜，我回來了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "怎麼？想清楚自己不想參加大賽了？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "不是啦！我回來報名！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "啊妳怎麼不先報名再走？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我有個招式組合不知道能不能成功", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "所以今天先去訓練場試試", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "我想說成功了再回來報名。", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你沒成功怎麼辦？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "呃...我倒是沒想到", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "果然年輕人就是衝動啊，凡事都要考慮後果啊。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！一生就這麼短，一時衝動又如何", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "我就想放手大膽追夢！", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒錯一生就這麼短", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "所以做任何決定都應該三思而後行，才不會後悔", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是一生這麼短，要是每個人做事都要先想東想西", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "那短短的一輩子不都花在思考上", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "不......", image: "img/商人.png", bEvent: 0 },
    { name: "院長", word: "好了好了別吵了，這裡可還有很多病人", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "在治病的地方這樣吵鬧，可是會影響大家休息的", image: "img/院長/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "可是！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "好了好了，你們雙方說的都很有道理", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "但價值觀是主觀的", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "只要不危害到他人，都沒有錯", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "不強加自己的思想在別人身上", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "也尊重他人的想法才是一個好公民！", image: "img/院長/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "我知道了。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了。", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好哈哈哈，要報名大賽的話找我報名，哈密瓜你繼續幫神奇寶貝看病", image: "img/院長/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "好", image: "img/商人.png", bEvent: 0 },
    { name: "地點", word: "(院長辦公室)", image: "", bEvent: 0 },
    { name: "院長", word: "來，你先填一下這個表格吧，填好就報名成功了。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "好！院長我一定不會辜負你的。我填好了！", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好，我幫你的資料登錄進電腦", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "謝謝院長！那我先走了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "院長", word: "等、等等！你無法報名神奇寶貝大賽！", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "為什麼？！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "你最近是不是做了什麼壞事？", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "據我所知，神奇寶貝大賽很注重品德", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "也只有因為品德不好才被禁賽的例子。", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "什麼？！怎麼可能！我可是人盡皆知的小護士呢。", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "啊！不會是我早上聽到的奇怪聲音吧？", image: "img/護士/4.png", bEvent: 0 },
    { name: "院長", word: "你在哪裡聽到的？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "就在我剛從神奇寶貝中心出門的時候", image: "img/護士/4.png", bEvent: 0 },
    { name: "院長", word: "那恐怕就是了", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "你剛出門不走，道長就被抬進來了", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "好像是訓練中受傷，結果在門口暈倒。", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "怎麼這樣", image: "img/護士/5.png", bEvent: 0 },
    { name: "院長", word: "我也沒辦法，見到道長暈倒的人還挺多", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "畢竟這裡也算市區，可能是消息傳到賽方耳裡", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "賽方判定你見死不救", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "所以你無法參加神奇寶貝大賽了。", image: "img/院長/4.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage4 = [ //忽視遊戲失敗線
    { name: "你", word: "沒事的胖丁，我們再接再厲！(積分+1)", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "至少我今天的目的——測試攻擊組合，已經達成啦", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "我們回去報名吧，之後再來訓練！", image: "img/護士/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "院長、哈密瓜，我回來了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "怎麼？想清楚自己不想參加大賽了？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "不是啦！我回來報名！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "啊妳怎麼不先報名再走？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我有個招式組合不知道能不能成功", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "所以今天先去訓練場試試", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "我想說成功了再回來報名。", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你沒成功怎麼辦？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "呃...我倒是沒想到", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "果然年輕人就是衝動啊，凡事都要考慮後果啊。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！一生就這麼短，一時衝動又如何", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "我就想放手大膽追夢！", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒錯一生就這麼短", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "所以做任何決定都應該三思而後行，才不會後悔", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是一生這麼短，要是每個人做事都要先想東想西", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "那短短的一輩子不都花在思考上", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "不......", image: "img/商人.png", bEvent: 0 },
    { name: "院長", word: "好了好了別吵了，這裡可還有很多病人", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "在治病的地方這樣吵鬧，可是會影響大家休息的", image: "img/院長/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "可是！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "好了好了，你們雙方說的都很有道理", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "但價值觀是主觀的", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "只要不危害到他人，都沒有錯", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "不強加自己的思想在別人身上", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "也尊重他人的想法才是一個好公民！", image: "img/院長/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "我知道了。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了。", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好哈哈哈，要報名大賽的話找我報名，哈密瓜你繼續幫神奇寶貝看病", image: "img/院長/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "好", image: "img/商人.png", bEvent: 0 },
    { name: "地點", word: "(院長辦公室)", image: "", bEvent: 0 },
    { name: "院長", word: "來，你先填一下這個表格吧，填好就報名成功了。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "好！院長我一定不會辜負你的。我填好了！", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好，我幫你的資料登錄進電腦", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "謝謝院長！那我先走了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "院長", word: "等、等等！你無法報名神奇寶貝大賽！", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "為什麼？！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "你最近是不是做了什麼壞事？", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "據我所知，神奇寶貝大賽很注重品德", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "也只有因為品德不好才被禁賽的例子。", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "什麼？！怎麼可能！我可是人盡皆知的小護士呢。", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "啊！不會是我早上聽到的奇怪聲音吧？", image: "img/護士/4.png", bEvent: 0 },
    { name: "院長", word: "你在哪裡聽到的？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "就在我剛從神奇寶貝中心出門的時候", image: "img/護士/4.png", bEvent: 0 },
    { name: "院長", word: "那恐怕就是了", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "你剛出門不走，道長就被抬進來了", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "好像是訓練中受傷，結果在門口暈倒。", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "怎麼這樣", image: "img/護士/5.png", bEvent: 0 },
    { name: "院長", word: "我也沒辦法，見到道長暈倒的人還挺多", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "畢竟這裡也算市區，可能是消息傳到賽方耳裡", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "賽方判定你見死不救", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "所以你無法參加神奇寶貝大賽了。", image: "img/院長/4.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_1_2 = [ //尋找聲音來源 
    { name: "你", word: "什麼聲音？", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "（踢到不明物體）", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "我踢到什麼東西？好可怕", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "（仔細一看）", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "這是…屍體？", image: "img/護士/5.png", bEvent: 0 },
    { name: "你", word: "不對依照我多年的經驗這應該是昏倒了", image: "img/護士/6.png", bEvent: 0 },
    { name: "你", word: "趕緊把他帶回神奇寶貝中心吧", image: "img/護士/6.png", bEvent: 0 },
    { name: "", word: "（再次回到神奇寶貝中心）", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "院長", word: "你怎麼又回來了？是想通了決定留下嗎？", image: "img/院長/0.png", bEvent: 0 },
    { name: "你", word: "不是，我是因為在路上偶然遇到傷患", image: "img/護士/6.png", bEvent: 0 },
    { name: "", word: "（一段時間後）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "你還好嗎？身體好多了嗎？發生了什麼事？", image: "img/護士/7.png", bEvent: 0 },
    { name: "道長", word: "剛剛在比賽中出了一點意外，所以才…", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "剛剛太慌亂了沒有仔細看，你應該是…道長吧？", image: "img/護士/7.png", bEvent: 0 },
    { name: "道長", word: "是、是的", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "阿還有你的手臂好像還有小傷口，我先幫你貼OK繃喔", image: "img/護士/4.png", bEvent: 0 },
    { name: "道長", word: "阿好、好的", image: "img/道長.png", bEvent: 0 },
    { name: "你", word: "那我先離開了，剩下的部分就交由哈密瓜照顧了", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "這次是真的要離開了嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "該不會又像這次又跑回來吧？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "想念就要說嘛！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "這次真的要走了啦！", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "真的、真的、真的要離開了！掰掰", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "（又再次離開神奇寶貝中心）", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "短時間發生這麼多事真不可思議…", image: "img/護士/1.png", bEvent: 0 },
    { name: "你", word: "應該不會再遇到一樣的事了吧？", image: "img/護士/6.png", bEvent: 0 },
    { name: "胖丁", word: "啵利~啵利~", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "說的也是我們要趕緊開始訓練！", image: "img/護士/2.png", bEvent: 0 },
    { name: "地點", word: "（訓練場）", image: "img/練習場.png", bEvent: 0 },
    { name: "你", word: "胖丁，使出拍擊！", image: "img/護士/4.png", bEvent: 0 },
    { name: "胖丁", word: "啵利~啵利~", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "很好，接下來使出魔法閃耀！", image: "img/護士/4.png", bEvent: 0 },
    { name: "胖丁", word: "啵利！", image: "img/神奇寶貝/3.png", bEvent: 0 },
    { name: "你", word: "胖丁你好棒！", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "你要記住這兩個技能合在一起就是你的最佳攻擊組合！", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "大家一定沒想到我已經知道胖丁的最佳攻擊組合是什麼", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "對了最近訓練場開放了一個新的場地讓神奇寶貝訓練", image: "img/護士/0.png", bEvent: 0 },
    { name: "你", word: "胖丁，我們也去試試吧！", image: "img/護士/3.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/護士物品/方塊.png", bEvent: 1, event: Choice_game1 },
]
let stage5 = [ //救道長遊戲成功線
    { name: "你", word: "哇據說這個新場地的訓練特別難，沒想到我們一次就通過了！(積分+5)", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "嘿嘿希望我們參加大賽能獲得優勝。", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "我們回去報名吧！", image: "img/護士/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "院長、哈密瓜，我回來了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "怎麼？想清楚自己不想參加大賽了？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "不是啦！我回來報名！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "啊妳怎麼不先報名再走？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我有個招式組合不知道能不能成功", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "所以今天先去訓練場試試", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "我想說成功了再回來報名。", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你沒成功怎麼辦？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "呃...我倒是沒想到", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "果然年輕人就是衝動啊，凡事都要考慮後果啊。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！一生就這麼短，一時衝動又如何", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "我就想放手大膽追夢！", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒錯一生就這麼短", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "所以做任何決定都應該三思而後行，才不會後悔", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是一生這麼短，要是每個人做事都要先想東想西", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "那短短的一輩子不都花在思考上", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "不......", image: "img/商人.png", bEvent: 0 },
    { name: "院長", word: "好了好了別吵了，這裡可還有很多病人", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "在治病的地方這樣吵鬧，可是會影響大家休息的", image: "img/院長/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "可是！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "好了好了，你們雙方說的都很有道理", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "但價值觀是主觀的", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "只要不危害到他人，都沒有錯", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "不強加自己的思想在別人身上", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "也尊重他人的想法才是一個好公民！", image: "img/院長/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "我知道了。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了。", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好哈哈哈，要報名大賽的話找我報名，哈密瓜你繼續幫神奇寶貝看病", image: "img/院長/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "好", image: "img/商人.png", bEvent: 0 },
    { name: "地點", word: "(院長辦公室)", image: "", bEvent: 0 },
    { name: "院長", word: "來，你先填一下這個表格吧，填好就報名成功了。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "好！院長我一定不會辜負你的。我填好了！", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好，我幫你的資料登錄進電腦", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "恭喜妳報名成功囉！", image: "img/院長/3.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]
let stage6 = [ //救道長遊戲失敗線
    { name: "你", word: "哇據說這個新場地的訓練特別難，沒想到我們一次就通過了！(積分+1)", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "嘿嘿希望我們參加大賽能獲得優勝。", image: "img/護士/3.png", bEvent: 0 },
    { name: "你", word: "我們回去報名吧！", image: "img/護士/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "院長、哈密瓜，我回來了！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "怎麼？想清楚自己不想參加大賽了？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "不是啦！我回來報名！", image: "img/護士/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "啊妳怎麼不先報名再走？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我有個招式組合不知道能不能成功", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "所以今天先去訓練場試試", image: "img/護士/4.png", bEvent: 0 },
    { name: "你", word: "我想說成功了再回來報名。", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: " 那你沒成功怎麼辦？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "呃...我倒是沒想到", image: "img/護士/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "果然年輕人就是衝動啊，凡事都要考慮後果啊。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！一生就這麼短，一時衝動又如何", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "我就想放手大膽追夢！", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒錯一生就這麼短", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "所以做任何決定都應該三思而後行，才不會後悔", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是一生這麼短，要是每個人做事都要先想東想西", image: "img/護士/2.png", bEvent: 0 },
    { name: "你", word: "那短短的一輩子不都花在思考上", image: "img/護士/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "不......", image: "img/商人.png", bEvent: 0 },
    { name: "院長", word: "好了好了別吵了，這裡可還有很多病人", image: "img/院長/1.png", bEvent: 0 },
    { name: "院長", word: "在治病的地方這樣吵鬧，可是會影響大家休息的", image: "img/院長/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "可是！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "可是！", image: "img/護士/7.png", bEvent: 0 },
    { name: "院長", word: "好了好了，你們雙方說的都很有道理", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "但價值觀是主觀的", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "只要不危害到他人，都沒有錯", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "不強加自己的思想在別人身上", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "也尊重他人的想法才是一個好公民！", image: "img/院長/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "我知道了。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了。", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好哈哈哈，要報名大賽的話找我報名，哈密瓜你繼續幫神奇寶貝看病", image: "img/院長/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "好", image: "img/商人.png", bEvent: 0 },
    { name: "地點", word: "(院長辦公室)", image: "", bEvent: 0 },
    { name: "院長", word: "來，你先填一下這個表格吧，填好就報名成功了。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "好！院長我一定不會辜負你的。我填好了！", image: "img/護士/2.png", bEvent: 0 },
    { name: "院長", word: "好，我幫你的資料登錄進電腦", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "恭喜妳報名成功囉！", image: "img/院長/3.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]