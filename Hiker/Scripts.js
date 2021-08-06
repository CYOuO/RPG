let stage1 = [
    { name: "你", word: "我是一名有著豐富經驗的登山客", image: "img/登山客/1.png", bEvent: 0 },
    { name: "你", word: "聽說最近神奇寶貝大賽要開始了！ ", image: "img/登山客/1.png", bEvent: 0 },
    { name: "你", word: "我當然也要參加", image: "img/登山客/1.png", bEvent: 0 },
    { name: "你", word: "但我在路途上出了一點意外", image: "img/登山客/0.png", bEvent: 0 },
    { name: "你", word: "我迷路了，該怎麼辦呢？", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "這都走了幾天了，怎麼還沒到神奇寶貝大賽會場，我記得爬山是最快的路了", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "真無聊，不如我讓呆呆獸出來陪我聊聊天，出來吧呆呆獸！！ ", image: "img/登山客/3.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞~亞？", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "沒什麼事啦，只是想讓你陪我聊聊天", image: "img/登山客/4.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞~", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "你說，我能不能成為神奇寶貝大師呀？", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "這幾年我很少有與人對戰的經驗，都在山林裡對付野生神奇寶貝", image: "img/登山客/1.png", bEvent: 0 },
    { name: "你", word: "不知道其他參賽者的能力怎麼樣。", image: "img/登山客/1.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞~亞亞~", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "我一定能成功？雖然太猖狂了些，但你說得好像也對啦嘻嘻", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "我可是在深山裡遊歷好幾年", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "對付了許多危險的野生神奇寶貝", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "神奇寶貝大賽我應該滿有勝算的啦哈哈哈", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "你還記得我們那時候遇到怪力的時候#&/*@£", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "咦呆呆獸你怎麼又在發呆啊，我說的故事不有趣嗎？", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "我們那時候真的超危險的，要不是@*^#°£~¢", image: "img/登山客/1.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞亞亞~亞亞~~~", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "怎麼啦怎麼突然這麼慌張？", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "我講到一半呢，當時我在危急時刻撿起了旁邊的石頭", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "使出全力丟出去#&/*@£°¥~*/", image: "img/登山客/3.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞！！", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "呆呆獸你到底怎麼了？啊啊啊嚇死誰！", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "怎麼有一隻火爆猴！還是一隻看起來很生氣的火爆猴！", image: "img/登山客/6.png", bEvent: 0 },
    { name: "你", word: "呆呆獸，你說，他想攻擊的對象應該不是我們，對嗎？", image: "img/登山客/0.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞...", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "咳咳，好吧，那我數123我們快點跑！", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "1...2...欸等等你怎麼衝過來了呀！", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "呆呆獸使用水槍！！", image: "img/神奇寶貝/2_1.png", bEvent: 0 },
    { name: "", word: "（火爆猴毫髮無傷，繼續衝了過來）", image: "img/登山客/火爆猴.png", bEvent: 0 },
    { name: "你", word: "呆呆獸！水之波動！！", image: "img/神奇寶貝/2_1.png", bEvent: 0 },
    { name: "", word: "（火爆猴閃開了，衝過來打了呆呆獸一拳）", image: "img/登山客/火爆猴.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞...亞...（好累）", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "呆呆獸別氣餒！除了水系以外，你還擁有超能力系，使用精神強念！", image: "img/登山客/6.png", bEvent: 0 },
    { name: "", word: "（火爆猴被定住30秒） ", image: "img/登山客/火爆猴.png", bEvent: 0 },
    { name: "你", word: "做得好呆呆獸，趁牠不注意我們快點跑吧~ ", image: "img/登山客/0.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/登山客物品/跑步.png", bEvent: 1, event: Choice_game },
]
let stage2 = [ //闖關失敗(0514) 
    { name: "你", word: "怎...怎麼辦？牠追上來了啊啊啊！(積分+1)", image: "img/登山客/5.png", bEvent: 0 },
    { name: "", word: "（就這樣，我和呆呆獸又跑了快20分鐘）", image: "", bEvent: 0 },
    { name: "你", word: "呼...呼...牠應該沒追上來吧...再..再追上來我..我就跑不動了... ", image: "img/登山客/7.png", bEvent: 0 },
    {
        name: "你",
        word: "我還自誇自己有多勇猛呢，結果被一隻猴子追得如此狼狽，看來我還需要多加歷練了",
        image: "img/登山客/5.png",
        bEvent: 0
    },
    {
        name: "你",
        word: "我還自誇自己有多勇猛呢，結果被一隻猴子追得如此狼狽，看來我還需要多加歷練了",
        image: "img/登山客/5.png",
        bEvent: 1,
        event: function() {
            cs = stage4,
                change_scipts();
        }
    },
]
let stage3 = [ //通關(0330) 
    { name: "你", word: "呼...呼...總算甩掉牠了，剛剛真是好險定住了牠30秒(積分+5)", image: "img/登山客/0.png", bEvent: 0 },
    {
        name: "你",
        word: "呼...呼...總算甩掉牠了，剛剛真是好險定住了牠30秒(積分+5)",
        image: "img/登山客/0.png",
        bEvent: 1,
        event: function() {
            cs = stage4,
                change_scipts();
        }
    },

]
let stage4 = [ //失敗成功重複 
    { name: "你", word: "話說呆呆獸，你知道為什麼讓你使用精神強念嗎", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "因為火爆猴是格鬥系，剛好克制了水系，所以你的水系技能對牠沒用", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "但是超能系技能又剛好克制格鬥系，所以可以控制他&$#@\*£", image: "img/登山客/3.png", bEvent: 0 },
    { name: "呆呆獸", word: "亞~亞~亞~（打了個呵欠）", image: "img/神奇寶貝/2.png", bEvent: 0 },
    { name: "你", word: "咦？聽說呆呆獸打呵欠就會下雨，該不會等一下會... ", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "呸呸呸！還是不要烏鴉嘴好了", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "跑了這麼久你一定很累了，先回到寶貝球裡休息吧。", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "剛剛真是多虧了呆呆獸爭取了那30秒時間才能脫離險境", image: "img/登山客/0.png", bEvent: 0 },
    { name: "你", word: "我還是快點找路吧！", image: "img/登山客/1.png", bEvent: 0 },
    { name: "", word: "（此時天空突然烏雲密佈）", image: "img/登山客物品/烏雲.png", bEvent: 0 },
    { name: "你", word: "額...不...不會吧，那不是傳說嗎喂", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "等等，地上的蚯蚓怎麼都跑出來了", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "真的要下雨了，快走！！", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "哎喲喂！好痛啊，這顆大石頭怎麼在這裡啊", image: "img/登山客/6.png", bEvent: 0 },
    { name: "你", word: "後面還有積水，我剛剛一定是踩到這個才滑倒的。", image: "img/登山客/6.png", bEvent: 0 },
    { name: "你", word: "今天的運氣真不好。", image: "img/登山客/6.png", bEvent: 0 },
    { name: "你", word: "我好像看到前面有一個山洞，去那裡休息一下。 ", image: "img/登山客/0.png", bEvent: 0 },
    { name: "你", word: "（山洞）唉急救包裡只剩一份藥，用完就沒有了", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "算了先包紮一下傷口，如果細菌感染就不好了", image: "img/登山客/2.png", bEvent: 0 },
    { name: "", word: "（7分鐘後）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "終於好了，不過頭好像有點暈暈的...", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "好想睡覺啊...睡覺...睡...", image: "img/登山客/8.png", bEvent: 0 },
    { name: "", word: "（隔天）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "哇啊啊啊！怎麼回事，我怎麼睡在山洞裡！！", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "啊對齁，昨天晚上突然下起傾盆大雨，我不小心滑倒撞到石頭", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "受了點傷就昏昏沉沉的走到這裡休息了，我怕不是被撞傻了。", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "僅剩的急救包也用完了，希望不要再碰到這種情況", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "我可還要趕著去神奇寶貝大賽呢", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "也不知道要往哪個方向走，我還是走到大路碰碰運氣吧。", image: "img/登山客/8.png", bEvent: 0 },
    { name: "", word: "（走著走著，突然見到疑似傳聞中的人）", image: "", bEvent: 0 },
    { name: "你", word: "不好意思，請問你是......流動商人嗎？", image: "img/登山客/8.png", bEvent: 0 },
    { name: "哈密瓜", word: "沒錯，我就是鼎鼎大名的流動商人——哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有，我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "太好了！我沒認錯，你的外貌果然跟傳聞中的一樣好認。", image: "img/登山客/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "你不要看我長得醜就以貌取人哦小夥子。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "當然當然。那個，請問你有沒有指北針啊？", image: "img/登山客/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "當然有啊！小夥子你要買嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我迷路了，需要一個指北針，但我沒帶錢......。", image: "img/登山客/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "你是要去參加神奇寶貝大賽？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "沒錯！你怎麼知道！", image: "img/登山客/4.png", bEvent: 0 },
    { name: "哈密瓜", word: "唉......一路上我已經遇到太多像你這種沒做好準備就上路的人了。 ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我以為有經驗就夠了，沒想到......。", image: "img/登山客/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "凡事都要先做好準備再執行啊", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "不然就會像這樣遇到一些原本可以避免的情況。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "我知道了。", image: "img/登山客/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "希望你能真的記住啊小夥子。", image: "img/商人.png", bEvent: 0 },
    {
        name: "哈密瓜",
        word: "好吧好吧，相遇便是緣，這個指北針就給你了吧，我還有事，要先離開了。",
        image: "img/商人.png",
        bEvent: 1,
        event: function() {
            Stage1_box();
            bag_appear();
            i++;
        }
    },
    { name: "你", word: "真的嗎？！謝謝你，你真是個大好人。", image: "img/登山客/3.png", bEvent: 0 },
    { name: "哈密瓜", word: "行了行了別給我發好人卡了，你也趕快趕路吧。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "再見！", image: "img/登山客/4.png", bEvent: 0 },
    { name: "", word: "（拿出指北針）", image: "img/農場主人物品/拿出指北針.png", bEvent: 0 },
    { name: "你", word: "該往哪裡走呢？", image: "img/登山客/8.png", bEvent: 1, event: Choice_stage4_0 },
]
let stage4_1 = [ //東 
    { name: "", word: "（走著走著，看到了一條長長的河流）", image: "img/登山客物品/河流.png", bEvent: 0 },
    { name: "你", word: "這裡的河水好乾淨呀，現在大城市裡。可看不到這樣的景象嘍", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "不過...我是不是迷路了呀？這裡除了這條河什麼都沒有", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "真糟糕，再這樣下去不知道趕不趕得上神奇寶貝大賽。", image: "img/登山客/5.png", bEvent: 0 },
    {
        name: "你",
        word: "真糟糕，再這樣下去不知道趕不趕得上神奇寶貝大賽。",
        image: "img/登山客/5.png",
        bEvent: 1,
        event: function() {
            cs = stage4_4,
                change_scipts();
        }
    },
]
let stage4_2 = [ //南 
    { name: "", word: "（走著走著，看到了一排櫻花樹道）", image: "img/登山客物品/櫻花樹.png", bEvent: 0 },
    { name: "你", word: "哇~好美呀，沒想到這個地方居然有如此漂亮的景色，真可惜我沒有帶照相機來", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "不對，現在的重點不是這個！", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "真糟糕，再這樣下去不知道趕不趕得上神奇寶貝大賽。", image: "img/登山客/5.png", bEvent: 0 },
    {
        name: "你",
        word: "我好像迷路了，真糟糕，再這樣下去不知道趕不趕得上神奇寶貝大賽",
        image: "img/登山客/5.png",
        bEvent: 1,
        event: function() {
            cs = stage4_4,
                change_scipts();
        }
    },
]
let stage4_3 = [ //西 
    { name: "", word: "（走著走著，來到了一片高大的神木森林）", image: "img/登山客物品/森林.png", bEvent: 0 },
    { name: "你", word: "哇~好高大的神木呀，這些都應該有幾百年、幾千年的歷史了吧", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "不過這些樹又高又多，我都沒辦法看清楚前面的路了，真糟糕", image: "img/登山客/2.png", bEvent: 0 },
    { name: "你", word: "我好像真的迷路了，得快點想個辦法", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "不然再這樣下去不知道還趕不趕得上神奇寶貝大賽。", image: "img/登山客/5.png", bEvent: 0 },
    {
        name: "你",
        word: "不然再這樣下去不知道還趕不趕得上神奇寶貝大賽。",
        image: "img/登山客/5.png",
        bEvent: 1,
        event: function() {
            cs = stage4_4,
                change_scipts();
        }
    },
]
let stage4_4 = [ //北 
    { name: "", word: "（走著走著，看到了一座吊橋，橋下是很深的懸崖）", image: "", bEvent: 0 },
    { name: "你", word: "看起來真可怕，這座吊橋搖搖晃晃的也不知道安不安全，我還是不要冒這個險好了", image: "img/登山客/7.png", bEvent: 0 },
    { name: "你", word: "不過現在更糟糕的是我好像迷路了，得快點想個辦法", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "不然再這樣下去不知道還趕不趕得上神奇寶貝大賽。", image: "img/登山客/5.png", bEvent: 0 },
    { name: "你", word: "啊！那裡有個人，去跟他問路好了。", image: "img/登山客/0.png", bEvent: 0 },
    { name: "你", word: "那個...妳好啊，我看妳裝備齊全，應該是很常在野外活動的人吧。", image: "img/登山客/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "嗨小兄弟，你的眼光不錯喔，不瞞你說我其實是個野外求生專家呢。", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "你", word: "真的嗎！那我真是遇到救星了，我正要去參加神奇寶貝大賽，但是迷路了。", image: "img/登山客/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "那還真是糟糕，你需要指北針嗎？", image: "img/野外求生專家/2.png", bEvent: 0 },
    { name: "你", word: "我受人幫助，已經得到了一個指北針，但我不太會使用。", image: "img/登山客/1.png", bEvent: 0 },
    { name: "野外求生專家", word: "這還不簡單，指針指的地方就是北方，話說指北針也要跟地圖一起使用喔", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "不然即使你學會判斷方向，還是找不到正確的路。我幫你看看吧...", image: "img/野外求生專家/0.png", bEvent: 0 },
    { name: "野外求生專家", word: "找到了！大賽的賽場在南南東方唷，沿著這個方向一直走就可以了~", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "你", word: "天啊謝謝妳，我學會了。要是沒有妳我可能走到天荒地老還是找不到啊", image: "img/登山客/4.png", bEvent: 0 },
    { name: "野外求生專家", word: "不客氣，這只是小事，對了，祝你比賽順利", image: "img/野外求生專家/1.png", bEvent: 0 },
    { name: "你", word: "謝謝，我會努力的！！", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "看來比賽會場在我的南南東方", image: "img/登山客/4.png", bEvent: 1, event: Choice_stage4_4_0 },
]

let stage4_4_1 = [ //殺鬼
    { name: "炭治郎", word: "(炭治郎出現)", image: "img/登山客/炭治郎.png", bEvent: 0 },
    { name: "炭治郎", word: "大哥沒有輸！", image: "img/登山客/炭治郎.png", bEvent: 0 },
    { name: "你", word: "(嚇) 還是趕快去神奇寶貝大賽吧", image: "img/登山客/5.png", bEvent: 0 },
    {
        name: "你",
        word: "(嚇) 還是趕快去神奇寶貝大賽吧",
        image: "img/登山客.png",
        bEvent: 1,
        event: function() {
            cs = stage4_4_2,
                change_scipts();
        }
    },
]

let stage4_4_2 = [ //出發前往神奇寶貝大賽
    { name: "", word: "（我走到了一個繁華的小鎮）", image: "", bEvent: 0 },
    { name: "你", word: "終於到了可以報名大賽的神奇寶貝中心的所在地", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "好久沒來這裡了，這裡還是跟以前一樣熱鬧，好多新奇的東西", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "對了，那位善良的院長也在這間神奇寶貝中心", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "我在報名之前先去拜訪一下院長吧，剛好我的急救包也沒了", image: "img/登山客/4.png", bEvent: 0 },
    { name: "", word: "（神奇寶貝中心）", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "院長好久不見，最近過得如何，身體還好嗎？ ", image: "img/登山客/4.png", bEvent: 0 },
    { name: "院長", word: "是你啊，真的很久不見了，我最近很好，你呢？", image: "img/院長/2.png", bEvent: 0 },
    { name: "你", word: "我過得也不錯，對了....我知道這樣很突然，但是......可以賣我急救包嗎？", image: "img/登山客/2.png", bEvent: 0 },
    { name: "院長", word: "真是拿你沒辦法～一個急救包1999元", image: "img/院長/5.png", bEvent: 0 },
    { name: "你", word: "（掏錢）怎麼辦…...錢沒帶夠…...（小聲", image: "img/登山客/5.png", bEvent: 0 },
    { name: "院長", word: "真是拿你沒辦法～不如，你幫我做點事吧", image: "img/院長/3.png", bEvent: 0 },
    { name: "院長", word: "我們這邊最能幹的喬伊小姐去準備神奇寶貝大賽了", image: "img/院長/4.png", bEvent: 0 },
    { name: "院長", word: "今天的工作有點忙不過來，你會包紮嗎？", image: "img/院長/1.png", bEvent: 1, event: Choice_stage4_4_2_0 },
]

let stage4_4_2_1 = [ //會
    { name: "院長", word: "真是拿你沒辦法～真不愧是你呢！", image: "img/院長/5.png", bEvent: 0 },
    { name: "院長", word: "但以防萬一還是提醒你一下。步驟是這樣的：", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "1.清潔傷口2.塗抹優碘3.擦除優碘", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "4.塗抹藥膏5.覆蓋紗布6.固定傷口", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "聽懂了嗎？先來給你測試測試吧！", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "放馬過來吧！", image: "img/登山客/0.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/登山客物品/包紮.png", bEvent: 1, event: Choice_game1 },
    // {
    //     name: "院長",
    //     word: "趕緊去幫他包紮吧。 ",
    //     image: "img/院長/0.png",
    //     bEvent: 1,
    //     event: function() {
    //         cs = stage5,
    //             change_scipts();
    //     }
    // },
]


let stage4_4_2_2 = [ //不會
    { name: "院長", word: "真是拿你沒辦法～那我教你吧。", image: "img/院長/5.png", bEvent: 0 },
    { name: "院長", word: "步驟是這樣的：", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "1.清潔傷口2.塗抹優碘3.擦除優碘", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "4.塗抹藥膏5.覆蓋紗布6.固定傷口", image: "img/院長/0.png", bEvent: 0 },
    { name: "院長", word: "聽懂了嗎？先來給你測試測試吧！", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "放馬過來吧！", image: "img/登山客/0.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/登山客物品/包紮.png", bEvent: 1, event: Choice_game1 },
    // {
    //     name: "院長",
    //     word: "趕緊去幫他包紮吧。 ",
    //     image: "img/院長/0.png",
    //     bEvent: 1,
    //     event: function() {
    //         cs = stage05,
    //             change_scipts();
    //     }
    // },
]


let stage5 = [
    { name: "院長", word: "不錯呢！那你先幫那邊的先生包紮吧。", image: "img/院長/0.png", bEvent: 0 },
    { name: "你", word: "先生，我先幫你清理傷口塗優碘哦~然後擦除優碘再塗藥膏。 ", image: "img/登山客/1.png", bEvent: 0 },
    { name: "", word: "（••••••）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "先生，我已經幫你覆蓋紗布並且固定傷口了。", image: "img/登山客/1.png", bEvent: 0 },
    { name: "院長", word: "再來是這位小姐和那邊的婆婆，啊啊還有2個小朋友也麻煩你了。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "阿這...好我馬上就來！", image: "img/登山客/0.png", bEvent: 0 },
    { name: "", word: "（••••••）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "包紮好了小朋友，下次玩要注意安全哦~", image: "img/登山客/4.png", bEvent: 0 },
    { name: "你", word: "呼...呼...終於完成了，跑來跑去的有點累", image: "img/登山客/0.png", bEvent: 0 },
    { name: "院長", word: "辛苦你啦，沒想到你包紮技術挺厲害的。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "還好啦，主要是我經常登山遊歷，有時候會受點小傷", image: "img/登山客/1.png", bEvent: 0 },
    { name: "你", word: "包紮傷口對我來說並不算什麼", image: "img/登山客/3.png", bEvent: 0 },
    { name: "院長", word: "是這樣啊，要不要考慮考護士執照來我的醫院工作呢？", image: "img/院長/0.png", bEvent: 0 },
    { name: "你", word: "哈哈哈這就不必了，我的夢想是成為神奇寶貝大師", image: "img/登山客/3.png", bEvent: 0 },
    { name: "你", word: "我等等還要去報名參加神奇寶貝大賽呢", image: "img/登山客/3.png", bEvent: 0 },
    { name: "院長", word: "真的啊，這可不是一件簡單的事，你還挺有勇氣的嘛。", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "嘿嘿，這可是我從小就有的夢想，有機會當然要有一番作為。", image: "img/登山客/3.png", bEvent: 0 },
    { name: "院長", word: "那就祝你成功實現夢想嘍，加油！", image: "img/院長/2.png", bEvent: 0 },
    { name: "你", word: "我會努力的！不過...院長您應該沒有忘了什麼東西吧", image: "img/登山客/0.png", bEvent: 0 },
    { name: "院長", word: "有嗎？我忘了什麼？", image: "img/院長/4.png", bEvent: 0 },
    { name: "你", word: "是我的急救包呀~", image: "img/登山客/0.png", bEvent: 0 },
    { name: "院長", word: "啊？急救包？有這回事嗎？", image: "img/院長/1.png", bEvent: 0 },
    { name: "你", word: "院長！！！", image: "img/登山客/6.png", bEvent: 0 },
    { name: "院長", word: "哈哈哈，逗你玩呢，我怎麼可能忘記", image: "img/院長/2.png", bEvent: 0 },
    { name: "你", word: "我還以為是您年紀大了... ", image: "img/登山客/2.png", bEvent: 0 },
    { name: "院長", word: "你說什麼？我聽力可好著呢，急救包還要不要了", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "要要要！哎呀我只是跟您開了個小玩笑", image: "img/登山客/0.png", bEvent: 0 },
    { name: "院長", word: "哈哈哈你小子還想跟我鬥啊，拿去吧，這裡面有4份藥可以用。", image: "img/院長/2.png", bEvent: 1, event: change_bag_letter },
    { name: "你", word: "謝謝院長，不過話說，神奇寶貝的報名處在哪裡呀？", image: "img/登山客/4.png", bEvent: 0 },
    { name: "院長", word: "就在3樓辦公室，前面的樓梯走上去左轉就可以看到了", image: "img/院長/2.png", bEvent: 0 },
    { name: "你", word: "哦哦好的，謝謝你，那我就先走啦", image: "img/登山客/4.png", bEvent: 0 },
    { name: "院長", word: "哈哈哈！有緣再見啦~", image: "img/院長/3.png", bEvent: 0 },
    { name: "你", word: "後會有期！", image: "img/登山客/4.png", bEvent: 0 },
    { name: "地點", word: "（3樓報名處）", image: "", bEvent: 0 },
    { name: "你", word: "你好，我想要報名參加神奇寶貝大賽", image: "img/登山客/0.png", bEvent: 0 },
    { name: "工作人員", word: "好的，請你填寫這份表單", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/登山客/1.png", bEvent: 0 },
    { name: "工作人員", word: "報名成功囉，祝你成功贏得冠軍", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福，我一定會成為冠軍的！", image: "img/登山客/0.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]