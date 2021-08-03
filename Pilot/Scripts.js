let stage1 = [
    { name: "你", word: "我是一位業餘飛行員", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 終於等到神奇寶貝大賽要開始了", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 這次神奇寶貝大賽，我絕對要開著我的飛機閃亮登場！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "爸爸", word: " 只剩30天就要去比神奇寶貝大賽了", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: " 你有去檢查你的飛機嗎？", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: " 可不要當天突然壞掉啊！", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "你", word: " 阿！我忘記了！我現在立刻去檢查", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: " 拜託飛機不要在這時候壞掉", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "", word: " (經過了一個下午的嘗試)", image: "img/時間.png", bEvent: 0 },
    {
        name: "你",
        word: " 飛機引擎有一些故障要怎麼辦才好？可是我沒錢修飛機啊…",
        image: "img/飛行員/2.png",
        bEvent: 1,
        event: function() {
            Stage1_box();
            bag_appear();
            i++;
        }
    },
    { name: "你", word: " 我要冒險開著飛機前往參賽，還是辛苦的工作存錢，試著把飛機修好呢？ ", image: "img/飛行員/5.png", bEvent: 1, event: Choice_stage1_0 },
]

let stage1_1 = [ //冒險開飛機
    { name: "", word: " (比賽當天早上)", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: " 啊啊啊！飛機發不動了", image: "img/飛行員/3.png", bEvent: 0 },
    { name: "你", word: " 我那麼辛苦的準備的神奇寶貝大賽都白費了啦！ ", image: "img/飛行員/3.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2 = [ //存錢修飛機 
    { name: "你", word: " 冒險開飛機還是太危險了", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: " 要是在比賽當天發不動可就糟糕了 ", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: " 還是努力存錢吧", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: " 但是有什麼辦法可以賺錢呢？ ", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 去問問爸爸好了 ", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "地點", word: " （客廳） ", image: "", bEvent: 0 },
    { name: "你", word: " 爸爸，我的飛機引擎有點故障，我想修好他", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 有什麼辦法可以賺錢呢？  ", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "爸爸", word: " 你可以試試出去打工", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: "以前不讓你打工是因為你還小", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: " 你現在已經過15歲了，而且爸爸也同意你打工", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: "現在你可以試試靠自己的能力賺錢。 ", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "你", word: " 那您知道哪裡可以打工嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "爸爸", word: " 這個就要靠你自己去摸索了", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "爸爸", word: "你要靠自己的雙手去打造一片屬於你自己的天地。", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "你", word: " 我知道了爸爸！ 我不會讓您失望的。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "爸爸", word: " 乖兒子， 去吧。", image: "img/飛行員爸爸.png", bEvent: 0 },
    { name: "你", word: "  好的， 謝謝爸爸！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 雖然爸爸這麼說， 不過究竟有哪裡可以讓我打工呢？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 要不......去問問看市長好了", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 他那麼忙， 一定有什麼事是我可以做的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "地點", word: "（市政府）", image: "img/辦公室.png", bEvent: 0 },
    { name: "你", word: " 您好， 最近我在找工作， 請問您們這裡還缺人嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "櫃檯人員", word: " 先生您好， 市政府的工作是需要您先去考公務員的。", image: "img/櫃檯人員.png", bEvent: 0 },
    { name: "你", word: " 嗯…… 沒有我能做的事嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 我、 我會開飛機！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "只要能給我一台飛機， 我就能開著它去到天涯海角。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "櫃檯人員", word: "真的很抱歉先生， 還是請您去別的地方找工作吧。", image: "img/櫃檯人員.png", bEvent: 0 },
    { name: "你", word: "好吧， 不好意思打擾你們了。", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 唉…… 到底該去哪裡找工作呢？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "？", word: " 你要找工作？", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "？！ 你、 你是…… 市長的女兒？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "市長女兒", word: "沒錯， 我是市長的女兒， 不過你怎麼知道？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: " 這還不簡單， 你和道館小開總是在練習對戰神奇寶貝！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "身為一個夢想成為神奇寶貝大師的我來說", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "當然是不能錯過你們的練習戰啊", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "你們的對戰真的很精彩啊， 兩邊的實力都很厲害", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "每次都打拉鋸戰， 看得我總是熱血沸騰", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "@ & _ / 、¢ % ¶`¢", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "市長女兒", word: "夠了夠了，你不是正在找工作嗎？", image: "img/市長女兒/4.png", bEvent: 0 },
    { name: "你", word: "啊啊對齁……我還得賺錢回去修飛機呢！", image: "img/飛行員/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 修飛機？ 你是飛行員？", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "沒錯沒錯， 欸？ 你怎麼也知道？不過我只是業餘的。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "市長女兒", word: "  那還不簡單", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長女兒", word: "我有陣子為了公務常去請教博士", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長女兒", word: " 他和我說到你是他最驕傲的學生", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長女兒", word: "  只不過你最後選擇了投向自由的天空", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "市長女兒", word: " 他至今都還覺得惋惜呢。", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "你", word: "原來博士是這樣想我的嗎？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "當初年少輕狂， 看到了波波鳥在天上自由飛翔的模樣", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: " 就覺得好羨慕， 便毅然決然的離開了博士的實驗室", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "離開時我也只留了一張便條紙， 也沒有和博士好好的道別。", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "市長女兒", word: " 對了， 博士最近好像在招募助理", image: "img/市長女兒/0.png", bEvent: 0 },
    { name: "市長女兒", word: " 更何況你們還有未盡的緣分", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "市長女兒", word: "  要不你去試試看？", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "真的嗎！", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "不過我有機會應聘成功嗎？我已經離開實驗室一段時間了。", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: "離開時我也只留了一張便條紙， 也沒有和博士好好的道別。", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "市長女兒", word: "當然有機會， 你可是他的驕傲。", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "你", word: "可是……", image: "img/飛行員/5.png", bEvent: 1, event: Choice_stage1_2_0 },
]
let stage1_2_1 = [ //找博士應聘
    { name: "你", word: "好吧！ 我現在就去找博士， 謝謝妳！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "市長女兒", word: "不客氣， 祝你成功", image: "img/市長女兒/3.png", bEvent: 0 },
    { name: "地點", word: "（博士的實驗室門口）", image: "img/門.png", bEvent: 0 },
    { name: "你", word: "博士！ 博士！ 博士你在嗎？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "咦？ 博士平常這個時間不是都泡在實驗室裡做研究嗎？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "我打個電話好了", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "博士", word: "（ 鈴鈴鈴） 喂？ 請問你找誰？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "喂喂， 博士， 是我啦", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "額...請問你哪位？", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "我是您以前那位為了天空而離開的學生。", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "你、 你等等！ 我現在就來幫你開門。", image: "img/電話1.png", bEvent: 0 },
    { name: "", word: "（開門）", image: "img/開門.png", bEvent: 0 },
    { name: "博士", word: "好久不見呀~", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "剛剛我做實驗做得太入迷了 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "所以沒聽到敲門聲，不好意思啊 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你…… 你怎麼回來了？  ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好久不見，聽說您最近在招助理", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "我就想著回來應聘看看，也回來看看您。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "好、好，回來就好。", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "怎麼突然開始找工作了？", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "是這樣的，我想在神奇寶貝大賽上開著我的飛機登場", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "可是我的飛機壞了，我想賺錢修好他", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "博士", word: "哈哈正好我現在新研究了飛機", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "既然要參加神奇寶貝大賽", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "現在最重要的是練習吧", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "嗯不過得先讓我把一些實驗相關的東西整理好，才能幫你修飛機", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "嗯不過得先讓我把一些實驗相關的東西整理好，才能幫你修飛機", image: "img/博士.png", bEvent: 1, event: Choice_stage1_2_1_0 },

]

let stage1_2_1_1 = [ //堅持成為助理
    { name: "你", word: "阿不行啦不行，怎麼能讓您無償幫我修飛機阿", image: "img/飛行員/2.png", bEvent: 0 },
    { name: "你", word: "更何況當初我離開時連跟您好好道別都沒有", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "博士", word: "沒事的，大家都說要惜才阿哈哈", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "而且年輕人多出去闖沒事的", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "總要試試才能找到最適合自己的", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "那請您讓我當助理吧！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "我還沒嘗試過做助理呢，以前都只是以學生的身分在實驗室", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "真是拿你沒辦法~快進來吧", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "實驗室過了這麼久還是沒變啊", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "是阿，畢竟東西都歸類整理在固定的位置比較好找", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "對了你不會還保留著以前的習慣東西總是亂放吧", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "…誰會亂放東西啦！", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "博士", word: "那麼作為助理的第一份工作", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "就請你先幫我整理那堆空白企畫書吧。", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好！我一定會好好完成。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "那我先去看一下我的實驗", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "等這個實驗完成一個段落，我就去修飛機", image: "img/博士.png", bEvent: 0 },
    { name: "", word: "（一段時間後）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "博士博士，您的手機在響喔", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "博士", word: "阿真的，我去走廊接一下電話，你繼續忙吧", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好的。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "等這個實驗完成一個段落，我就去修飛機", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你先停一下手邊的事，跟你介紹一下", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "這是我現在的學生，剛剛的電話就是他打來的", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "你好，我算是你的學長吧~", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士學生", word: "學長你好，我這次是來給博士看報告的", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士學生", word: "希望不會打擾到你做事", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "哈哈沒事，我只是在整理東西而已", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "依照我對博士的了解，他肯定會針對報告問你問題", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: "你可要加油啊", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士學生", word: "我會的！謝謝學長", image: "img/學生/0.png", bEvent: 0 },
    { name: "博士", word: "好了那讓我看看你的報告吧", image: "img/博士.png", bEvent: 0 },
    { name: "", word: "（一段時間後）", image: "img/時間.png", bEvent: 0 },
    { name: "博士學生", word: "學長，這是我的報告，博士讓我來跟你拿空白企畫書。", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: "好， 你是研究小火龍對吧", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "你來的正好，我剛整理完空白企畫書", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "你", word: "給你吧， 這個企畫書最符合你要做的研究了", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 拿回去好好寫吧", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士學生", word: " 謝謝學長。", image: "img/學生/0.png", bEvent: 0 },
    { name: "你", word: " 不用客氣", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "助理， 我的實驗剩最後收尾", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "  好的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "  嗯？ 博士你在研究的竟然是波波鳥", image: "img/飛行員/1.png", bEvent: 0 },

    { name: "博士", word: "沒錯，我記得這也是你的神奇寶貝吧，所以才叫你來看看", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "希望你能更了解你的神奇寶貝，才有機會在大賽上一舉奪冠。", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "這是一些實驗的數據結果，你好好看看吧。", image: "img/博士.png", bEvent: 1, event: change_bag_report },
    { name: "你", word: "  謝謝博士！您對我真是太好了，我一直很想對您說聲抱歉", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 抱歉我當初丟下那麼多實驗不管不顧不聞不問一聲不吭就離開了", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "博士", word: "沒關係的，你不用在意這件事", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我剛剛也說過年輕人就要勇敢出去闖嘛，有夢最美，築夢踏實！", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "  但不管怎麼說，我真的很感謝您。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 啊，博士，您的手機又響了喔", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "博士", word: "咦真的耶，今天怎麼回事，大家全部都有事找我", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "那我出去接下電話，你自己慢慢看報告。", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "", word: "（一段時間後）", image: "img/時間.png", bEvent: 0 },
    { name: "博士", word: "助理你看完了嗎，先幫我顧著這隻大岩蛇", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "什麼？！ 大岩蛇不是很稀有嗎", image: "img/飛行員/4.png", bEvent: 0 },
    {
        name: "你",
        word: "報告看是看完了，不過博士你怎麼獲得的",
        image: "img/飛行員/4.png",
        bEvent: 1,
        event: function() { bag[1] = [], bag.length = 1, i++ }
    },
    { name: "博士", word: "剛剛消防員來過了", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "他送了這隻大岩蛇過來， 說是在農場抓到的", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "哇真想不到我有生之年還看的到大岩蛇", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "好了好了， 先幫我顧好，實驗也差不多到一個段落了", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我先去幫你修飛機， 再回來處理這隻大岩蛇", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: " 啊！ 好、 好的！ 謝謝博士", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "唉這還是我人生第一次那麼靠近大岩蛇，真不知道他是不是如傳聞中那般", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "還是好好看著他吧。", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "", word: "(博士修好飛機回來)", image: "", bEvent: 0 },
    { name: "博士", word: "飛機我已經修好了 ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "博士你也修太快了吧？！", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "博士", word: "飛機的損壞不嚴重，換幾個小零件就好了。 ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "博士您對我的這些恩惠我真的無以回報啊", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "博士", word: "最好的回報就是讓我看到你成功完成你的夢想阿，我最驕傲的學生。 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "快去報名參加大賽吧，截止日期就要到了 ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "我一定不會辜負您的期待的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "讓我帶著冠軍回來見您吧", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "我相信你一定沒問題的，去吧孩子 ", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "好！博士再見！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "地點", word: "(神奇寶貝中心)", image: "img/神奇寶貝中心.png", bEvent: 0 },
    { name: "你", word: "你好，我想要報名參加神奇寶貝大賽", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "工作人員", word: "好的，請你填寫這份表單", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "好的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "工作人員", word: "報名成功囉，祝你成功贏得冠軍", image: "img/工作人員.png", bEvent: 0 },
    { name: "你", word: "謝謝你的祝福，我一定會成為冠軍的！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "", word: "（到了比賽當天)", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: "開我的飛機前往吧！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "提示", word: "玩遊戲獲取通關密碼後，回來輸入通關密碼吧", image: "img/飛行員物品/飛機.png", bEvent: 1, event: Choice_game },
]



let stage2_1 = [

    { name: "", word: "波波順利的開著他的飛機華麗登場， 全場觀眾都為他鼓掌(積分+5)", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: "我這段時間的準備沒有白費了！ 真的好開心喔！！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]

let stage2_2 = [

    { name: "", word: "雖然修好了飛機，卻因為飛行技術而在途中出了點意外(積分+1)", image: "img/隔一天.png", bEvent: 0 },
    { name: "你", word: "阿…雖然我成功報名了大賽，卻沒有達成想在大賽上開著飛機華麗出場的心願呢", image: "img/飛行員/3.png", bEvent: 0 },
    { name: "你", word: "但還好還是參加到了大賽呢！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "成功", word: "再按一下獲得成績", image: "img/成功.png", bEvent: 1, event: Choice_stage6 },
]

let stage1_2_1_2 = [ //練習神奇寶貝大賽
    { name: "你", word: "好吧博士，那我就恭敬不如從命，我就帶著波波鳥去練習了", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "博士", word: "去吧去吧。", image: "img/博士.png", bEvent: 0 },
    { name: "", word: "（神奇寶貝大賽當天）", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: "博士我的飛機修好了嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "博士", word: "阿...抱歉，我沒想到整理東西會這麼久", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "途中還不小心累到病倒了，飛機還沒完全修好呢", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "博士你可要好好保重身體啊", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: "不過這樣我就不能開著飛機出場了嗎……", image: "img/飛行員/3.png", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2 = [ //找其他工作
    { name: "你", word: " 當初沒有告知博士就獨自離開", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 現在回去一定會很尷尬", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: "  我還是去找別的工作吧！", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: " 阿對了！ 我想起來好像有一位很有名的流動商人可以幫忙", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "我現在就去找他！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "你好， 我是鼎鼎大名的流動商人—— 哈密瓜", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "無論是你想的到的或是想不到的東西我都有， 我都會！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 真的嗎？ 你該不會是在騙我吧？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "你不要看我長得醜就以貌取人哦小夥子。", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 好吧抱歉， 我現在需要一些錢去修理我的飛機", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: " 你有什麼辦法可以幫我嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "哈密瓜", word: " 既然你都這麼問了， 那我就大發慈悲的告訴你", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我這邊有兩個方法", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "第一個是你可以直接讓我幫你修理好你的飛機", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "但是你在神奇寶貝大賽前一周以前的每一天", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "都必須待在家裡幫我處理我每一個客戶的訂單", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 不可以踏出家門一步", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 如果你違反我們的規定要自己負責喔！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "至於第二個方法則是你幫我飛去神奇寶貝中心送貨幾次", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "  雖然你自己飛去有點辛苦", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "  可是我會給你足夠的錢讓你修好你的飛機的。", image: "img/商人.png", bEvent: 1, event: Choice_stage1_2_2_0 },

]

let stage1_2_2_1 = [ //方法一（ 待在家處理訂單）
    { name: "你", word: " 待在家裡賺錢聽起來好像蠻輕鬆的， 我選第一個方法！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "哈密瓜", word: " 好， 明天開始我就會排工作給你囉！", image: "img/商人.png", bEvent: 0 },
    { name: "", word: " (經過了幾天的工作)", image: "img/時間.png", bEvent: 0 },
    { name: "你", word: " 每天都在家好無聊喔", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "我想要休息一天不工作，去家裡附近新開的遊樂園玩", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: " 而且離家很近應該不會怎麼樣", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "  哈密瓜也不可能在我身上裝追蹤器吧。", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "", word: " (神奇寶貝大賽前一週)", image: "", bEvent: 0 },
    { name: "哈密瓜", word: "喂欸欸！ 你不是說好要幫我處理訂單嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "怎麼出爾反爾！！", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 我的訂單積累了好幾週，全部堆在一起 ", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 根本弄不完！！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "  因為實在是太無聊了...對不起啊", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "哈密瓜", word: " 道歉有用的話要警察幹嘛！ ", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "  我真的不知道會有這種結果， 那現在怎麼辦...（慌張）", image: "img/飛行員/2.png", bEvent: 0 },
    { name: "哈密瓜", word: "我不管！ 你必須要跟我一起把這些弄完才能走", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "是你先不守信用的！", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: " 好吧...這畢竟是我自己貪玩惹出來的禍， 也只能認命了。", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "", word: "（直到比賽當天都沒能處理完訂單）", image: "", bEvent: 0 },
    { name: "失敗", word: "再按一下獲得成績", image: "img/失敗.png", bEvent: 1, event: Choice_stage5 },
]

let stage1_2_2_2 = [ //方法二（ 辛苦的幫忙送貨）
    { name: "你", word: " 雖然自己去送貨可能蠻辛苦的", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: " 但是送貨的路途中還可以欣賞周圍的風景", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "在天空飛翔的感覺， 也讓我感到很自由", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 這就是為什麼我會去開飛機阿！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: " 所以我決定要選第二個方法！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "好， 明天開始我就會排工作給你囉！", image: "img/商人.png", bEvent: 0 },
    { name: "", word: "（經過好幾天辛苦的工作）", image: "img/時間.png", bEvent: 0 },
    { name: "哈密瓜", word: "哇！ 你真的很棒， 我的客戶都說你的服務很好", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "他們都願意再向我購買產品", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: " 為了感謝你非常認真的幫我送貨", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "我除了幫你付你修理飛機的費用以外", image: "img/商人.png", bEvent: 0 },
    {
        name: "哈密瓜",
        word: "我再多給你一筆錢當成獎勵！",
        image: "img/商人.png",
        bEvent: 1,
        event: function() {
            bag[0].thing = "img/飛行員物品/錢2.png"
            bag[0].word = "終於有錢啦"
        }
    },
    { name: "你", word: " 謝謝你， 沒想到你人那麼好", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "祝你以後生意興隆！ 我要去修理我的飛機了！", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "你", word: "不過你知道修飛機要找誰嗎？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "你以前是博士的學生吧？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "是的沒錯， 不過怎麼大家都知道？", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "哈密瓜", word: "你可是博士最驕傲的學生", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "每個見過博士的人多多少少都聽過他提起你啦", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "他甚至還為了你去研究飛機", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "想說等你某天回去他可以和你一起探討飛機", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "現在不就是機會嗎？", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "你以前是博士的學生吧？", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "  博士竟然還為我研究飛機？！", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "他不是一向只研究神奇寶貝嗎", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "哈密瓜", word: "由此可知博士有多重視你吧， 快回去看看博士吧", image: "img/商人.png", bEvent: 0 },
    { name: "哈密瓜", word: "而且還能修飛機， 簡直摸蜊仔兼洗褲——一舉兩得", image: "img/商人.png", bEvent: 0 },
    { name: "你", word: "好， 那我就去找博士了！謝謝你哈密瓜", image: "img/飛行員/0.png", bEvent: 0 },
    { name: "哈密瓜", word: "有緣再見！", image: "img/商人.png", bEvent: 0, },

    { name: "地點", word: "（博士的實驗室門口）", image: "img/門.png", bEvent: 0 },
    { name: "你", word: "博士！ 博士！ 博士你在嗎？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "咦？ 博士平常這個時間不是都泡在實驗室裡做研究嗎？", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "我打個電話好了", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "博士", word: "（ 鈴鈴鈴） 喂？ 請問你找誰？", image: "img/電話1.png", bEvent: 0 },
    { name: "你", word: "喂喂， 博士， 是我啦", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "額...請問你哪位？", image: "img/電話1.png", bEvent: 0 },
    { name: "博士", word: "我是您以前那位為了天空而離開的學生。", image: "img/電話.png", bEvent: 0 },
    { name: "博士", word: "你、 你等等！ 我現在就來幫你開門。", image: "img/電話1.png", bEvent: 0 },
    { name: "", word: "（開門）", image: "img/開門.png", bEvent: 0 },
    { name: "博士", word: "好久不見呀~", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "剛剛我做實驗做得太入迷了 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "所以沒聽到敲門聲，不好意思啊 ", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "你…… 你怎麼回來了？  ", image: "img/博士.png", bEvent: 0 },

    { name: "你", word: "好久不見，博士聽說您對飛機有深入的研究", image: "img/飛行員/1.png", bEvent: 0 },
    { name: "你", word: "說起來很不好意思…我打算開著飛機參加大賽的", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "你", word: "但…飛機故障了可以請您幫我修理嗎？我可以付您錢的", image: "img/飛行員/5.png", bEvent: 0 },
    { name: "博士", word: "好、好，回來就好。", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我也可以幫你修飛機，至於費用嘛…", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "您隨便開價！就算我錢不夠我也會再去賺的", image: "img/飛行員/4.png", bEvent: 0 },
    { name: "博士", word: "哈哈不要緊張，我可以免費幫你修好飛機", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "我可以免費幫你修好飛機", image: "img/博士.png", bEvent: 0 },
    { name: "你", word: "不行啦！那我做您的助理作為替代吧，據說您最近在招募助理", image: "img/飛行員/5.png", bEvent: 0 },


    { name: "博士", word: "既然要參加神奇寶貝大賽", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "現在最重要的是練習吧", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "嗯不過得先讓我把一些實驗相關的東西整理好，才能幫你修飛機", image: "img/博士.png", bEvent: 0 },
    { name: "博士", word: "嗯不過得先讓我把一些實驗相關的東西整理好，才能幫你修飛機", image: "img/博士.png", bEvent: 1, event: Choice_stage1_2_1_0 },

]