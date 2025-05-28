import { create } from 'zustand'

const initialWords = [
  {
    fields: ['私', 'わたし', 'I (polite, general)']
  },
  {
    fields: ['あなた', 'あなた', "you (usually when one doesn't know the person)"]
  },
  {
    fields: ['さん', 'さん', 'san']
  },
  {
    fields: ['彼', 'かれ', 'he, him']
  },
  {
    fields: ['好き', 'すき', 'like, fond of']
  },
  {
    fields: ['人', 'ひと', 'person']
  },
  {
    fields: ['いい', 'いい', 'good']
  },
  {
    fields: ['人', 'じん', 'person from (nationality)']
  },
  {
    fields: ['日本語', 'にほんご', 'Japanese language']
  },
  {
    fields: ['勉強', 'べんきょう', 'study']
  },
  {
    fields: ['本', 'ほん', 'book']
  },
  {
    fields: ['これ', 'これ', 'this']
  },
  {
    fields: ['何', 'なに・なん', 'what']
  },
  {
    fields: ['それ', 'それ', 'that']
  },
  {
    fields: ['あれ', 'あれ', 'that over there']
  },
  {
    fields: ['どれ', 'どれ', 'which, what']
  },
  {
    fields: ['毎日', 'まいにち', 'every day']
  },
  {
    fields: ['兄', 'あに', 'older brother']
  },
  {
    fields: ['いる', 'いる', 'have, exist (animate)']
  },
  {
    fields: ['ある', 'ある', 'have, exist (inanimate)']
  },
  {
    fields: ['あまり', 'あまり', '(not) very, (not) much']
  },
  {
    fields: ['今', 'いま', 'now']
  },
  {
    fields: ['時間', 'じかん', 'time, hour']
  },
  {
    fields: ['無い', 'ない', 'to not be']
  },
  {
    fields: ['この', 'この', 'this one']
  },
  {
    fields: ['その', 'その', 'that one']
  },
  {
    fields: ['あの', 'あの', 'that one there']
  },
  {
    fields: ['どの', 'どの', 'which one']
  },
  {
    fields: ['見る', 'みる', 'see, look at']
  },
  {
    fields: ['全然', 'ぜんぜん', '(not) at all']
  },
  {
    fields: ['面白い', 'おもしろい', 'interesting, amusing']
  },
  {
    fields: ['する', 'する', 'do, make']
  },
  {
    fields: ['なる', 'なる', 'become, result in, come (to do)']
  },
  {
    fields: ['先生', 'せんせい', 'teacher']
  },
  {
    fields: ['ください', 'ください', 'please give..., please do...']
  },
  {
    fields: ['名前', 'なまえ', 'name']
  },
  {
    fields: ['教える', 'おしえる', 'teach, tell']
  },
  {
    fields: ['ここ', 'ここ', 'here']
  },
  {
    fields: ['そこ', 'そこ', 'there']
  },
  {
    fields: ['あそこ', 'あそこ', 'over there']
  },
  {
    fields: ['どこ', 'どこ', 'where']
  },
  {
    fields: ['置く', 'おく', 'put, place']
  },
  {
    fields: ['家', 'いえ', 'house, home']
  },
  {
    fields: ['帰る', 'かえる', 'return, go back']
  },
  {
    fields: ['話', 'はなし', 'talk, story']
  },
  {
    fields: ['知る', 'しる', 'know']
  },
  {
    fields: ['彼女', 'かのじょ', 'she, her, girlfriend']
  },
  {
    fields: ['ちゃん', 'ちゃん', 'chan']
  },
  {
    fields: ['はい', 'はい', 'yes (polite)']
  },
  {
    fields: ['いいえ', 'いいえ', 'no (polite)']
  },
  {
    fields: ['日本', 'にほん', 'Japan']
  },
  {
    fields: ['学校', 'がっこう', 'school']
  },
  {
    fields: ['行く', 'いく', 'go']
  },
  {
    fields: ['明日', 'あした', 'tomorrow']
  },
  {
    fields: ['来る', 'くる', 'come']
  },
  {
    fields: ['また', 'また', 'again, also']
  },
  {
    fields: ['いつ', 'いつ', 'when']
  },
  {
    fields: ['思う', 'おもう', 'think']
  },
  {
    fields: ['こう', 'こう', 'like this, this kind of']
  },
  {
    fields: ['そう', 'そう', 'in such manner, that way']
  },
  {
    fields: ['どう', 'どう', 'how, what']
  },
  {
    fields: ['会う', 'あう', 'meet']
  },
  {
    fields: ['次', 'つぎ', 'next, subsequent']
  },
  {
    fields: ['方', 'ほう', 'direction, side ( かた Also Person)']
  },
  {
    fields: ['方', 'かた', 'person (polite form) ( ほうalso direction)']
  },
  {
    fields: ['聞く', 'きく', 'hear']
  },
  {
    fields: ['聞く', 'きく', 'ask']
  },
  {
    fields: ['お願いします', 'おねがいします', 'please']
  },
  {
    fields: ['分かる', 'わかる', 'understand']
  },
  {
    fields: ['よく', 'よく', 'well, often']
  },
  {
    fields: ['よく', 'よく', 'often']
  },
  {
    fields: ['考える', 'かんがえる', 'think, consider']
  },
  {
    fields: ['ありがとうございます', 'ありがとうございます', 'thank you (formal)']
  },
  {
    fields: ['話す', 'はなす', 'talk, speak']
  },
  {
    fields: ['もっと', 'もっと', 'more, a bit more']
  },
  {
    fields: ['ゆっくり', 'ゆっくり', 'slowly']
  },
  {
    fields: ['言う', 'いう', 'say']
  },
  {
    fields: ['友達', 'ともだち', 'friend, companion']
  },
  {
    fields: ['待つ', 'まつ', 'wait']
  },
  {
    fields: ['昨日', 'きのう', 'yesterday']
  },
  {
    fields: ['町', 'まち', 'town, city']
  },
  {
    fields: ['高い', 'たかい', 'expensive']
  },
  {
    fields: ['高い', 'たかい', 'high, tall']
  },
  {
    fields: ['一番', 'いちばん', '(the) most']
  },
  {
    fields: ['ちょっと', 'ちょっと', 'a little']
  },
  {
    fields: ['もう', 'もう', 'already, yet']
  },
  {
    fields: ['もう', 'もう', 'another, again, already']
  },
  {
    fields: ['父', 'ちち', "(speaker's) father"]
  },
  {
    fields: ['大好き', 'だいすき', 'love']
  },
  {
    fields: ['母', 'はは', "(speaker's) mother"]
  },
  {
    fields: ['あげる', 'あげる', "give (receiver is not in the speaker's group)"]
  },
  {
    fields: ['くれる', 'くれる', "give (receiver is in the speaker's group)"]
  },
  {
    fields: ['もらう', 'もらう', 'receive']
  },
  {
    fields: ['物', 'もの', 'thing, object']
  },
  {
    fields: ['君', 'きみ', 'you (to someone of equal or lower status)']
  },
  {
    fields: ['中', 'なか', 'inside, middle']
  },
  {
    fields: ['出来る', 'できる', 'can do, be good at']
  },
  {
    fields: ['本当', 'ほんとう', 'truth, reality']
  },
  {
    fields: ['立つ', 'たつ', 'stand, rise']
  },
  {
    fields: ['前', 'まえ', 'front, before']
  },
  {
    fields: ['入る', 'はいる', 'enter']
  },
  {
    fields: ['家族', 'かぞく', 'family']
  },
  {
    fields: ['住む', 'すむ', 'live, reside']
  },
  {
    fields: ['大きな', 'おおきな', 'big, large']
  },
  {
    fields: ['大きい', 'おおきい', 'big, large']
  },
  {
    fields: ['声', 'こえ', 'voice, sound']
  },
  {
    fields: ['目', 'め', 'eye']
  },
  {
    fields: ['手', 'て', 'hand']
  },
  {
    fields: ['上げる', 'あげる', 'raise, increase']
  },
  {
    fields: ['嫌い', 'きらい', 'dislike']
  },
  {
    fields: ['おじいさん', 'おじいさん', 'grandfather']
  },
  {
    fields: ['おばあさん', 'おばあさん', 'grandmother']
  },
  {
    fields: ['元気', 'げんき', 'energetic, healthy']
  },
  {
    fields: ['いつも', 'いつも', 'always, usually']
  },
  {
    fields: ['持つ', 'もつ', 'have, hold']
  },
  {
    fields: ['みんな', 'みんな', 'all, everybody']
  },
  {
    fields: ['使う', 'つかう', 'use']
  },
  {
    fields: ['大丈夫', 'だいじょうぶ', 'alright, OK']
  },
  {
    fields: ['始める', 'はじめる', 'start']
  },
  {
    fields: ['今日', 'きょう', 'today']
  },
  {
    fields: ['部屋', 'へや', 'room']
  },
  {
    fields: ['悪い', 'わるい', 'bad']
  },
  {
    fields: ['まあ', 'まあ', 'well...']
  },
  {
    fields: ['食べる', 'たべる', 'eat']
  },
  {
    fields: ['沢山', 'たくさん', 'a lot, plenty']
  },
  {
    fields: ['場所', 'ばしょ', 'place, location']
  },
  {
    fields: ['呼ぶ', 'よぶ', 'call, name']
  },
  {
    fields: ['動く', 'うごく', 'move']
  },
  {
    fields: ['気持ち', 'きもち', 'feeling, sensation']
  },
  {
    fields: ['誰', 'だれ', 'who']
  },
  {
    fields: ['子', 'こ', 'child, kid']
  },
  {
    fields: ['どんな', 'どんな', 'what kind of...']
  },
  {
    fields: ['意味', 'いみ', 'meaning, significance']
  },
  {
    fields: ['言葉', 'ことば', 'word, language']
  },
  {
    fields: ['心配', 'しんぱい', 'worry']
  },
  {
    fields: ['様子', 'ようす', 'appearance, state']
  },
  {
    fields: ['信じる', 'しんじる', 'believe, trust']
  },
  {
    fields: ['自分', 'じぶん', 'Selber, self, oneself']
  },
  {
    fields: ['調べる', 'しらべる', 'look up, search']
  },
  {
    fields: ['事', 'こと', 'thing, incident']
  },
  {
    fields: ['同じ', 'おなじ', 'same, identical']
  },
  {
    fields: ['申し訳ない', 'もうしわけない', 'sorry, inexcusable']
  },
  {
    fields: ['もちろん', 'もちろん', 'of course, no doubt']
  },
  {
    fields: ['とても', 'とても', 'very']
  },
  {
    fields: ['楽しい', 'たのしい', 'fun, enjoyable']
  },
  {
    fields: ['失礼します', 'しつれいします', 'pardon me, excuse me (e.g. when leaving)']
  },
  {
    fields: ['手伝う', 'てつだう', 'help']
  },
  {
    fields: ['忙しい', 'いそがしい', 'busy, occupied']
  },
  {
    fields: ['仕事', 'しごと', 'work, job']
  },
  {
    fields: ['続ける', 'つづける', 'to continue, to keep up']
  },
  {
    fields: ['見せる', 'みせる', 'show']
  },
  {
    fields: ['うち', 'うち', "one's household"]
  },
  {
    fields: ['約束', 'やくそく', 'promise, appointment']
  },
  {
    fields: ['忘れる', 'わすれる', 'forget']
  },
  {
    fields: ['守る', 'まもる', 'protect, observe']
  },
  {
    fields: ['変える', 'かえる', 'change, alter']
  },
  {
    fields: ['さっき', 'さっき', '(only) a moment ago']
  },
  {
    fields: ['今度', 'こんど', 'next time']
  },
  {
    fields: ['これから', 'これから', 'from now on, after this']
  },
  {
    fields: ['止める', 'とめる', 'stop (at some place)']
  },
  {
    fields: ['止める', 'やめる', 'stop (doing something)']
  },
  {
    fields: ['頼む', 'たのむ', 'ask, request']
  },
  {
    fields: ['許す', 'ゆるす', 'forgive, permit']
  },
  {
    fields: ['嬉しい', 'うれしい', 'happy, glad']
  },
  {
    fields: ['頑張る', 'がんばる', "persevere, do one's best"]
  },
  {
    fields: ['なるほど', 'なるほど', 'I see, really']
  },
  {
    fields: ['つまり', 'つまり', 'in short, basically']
  },
  {
    fields: ['国', 'くに', 'country']
  },
  {
    fields: ['優しい', 'やさしい', 'gentle, kind']
  },
  {
    fields: ['嫌', 'いや', 'disliking, unwilling (to do)']
  },
  {
    fields: ['そんなに', 'そんなに', 'that much']
  },
  {
    fields: ['今回', 'こんかい', 'Dieses Mal ']
  },
  {
    fields: ['夜', 'よる', 'evening, night']
  },
  {
    fields: ['買う', 'かう', 'buy']
  },
  {
    fields: ['今まで', 'いままで', 'until now']
  },
  {
    fields: ['奴', 'やつ', 'that guy, (s)he (usu. derogatory)']
  },
  {
    fields: ['あいつ', 'あいつ', 'that guy']
  },
  {
    fields: ['もし', 'もし', 'Im falle von...']
  },
  {
    fields: ['理解', 'りかい', 'Nachvollziehen, comprehension']
  },
  {
    fields: ['夢', 'ゆめ', 'dream']
  },
  {
    fields: ['俺', 'おれ', 'I (male)']
  },
  {
    fields: ['難しい', 'むずかしい', 'difficult']
  },
  {
    fields: ['今度', 'こんど', 'this time']
  },
  {
    fields: ['おかしい', 'おかしい', 'strange, suspicious']
  },
  {
    fields: ['男の子', 'おとこのこ', 'boy']
  },
  {
    fields: ['女の子', 'おんなのこ', 'girl']
  },
  {
    fields: ['寝る', 'ねる', 'sleep']
  },
  {
    fields: ['伝える', 'つたえる', 'Übermitteln convey, transmit']
  },
  {
    fields: ['小さい', 'ちいさい', 'small']
  },
  {
    fields: ['選ぶ', 'えらぶ', 'choose, elect']
  },
  {
    fields: ['座る', 'すわる', 'sit']
  },
  {
    fields: ['簡単', 'かんたん', 'simple, easy']
  },
  {
    fields: ['お願い', 'おねがい', 'favor']
  },
  {
    fields: ['進む', 'すすむ', 'move forward']
  },
  {
    fields: ['全く', 'まったく', 'entirely, truly']
  },
  {
    fields: ['なぜ', 'なぜ', 'why']
  },
  {
    fields: ['僕', 'ぼく', 'I (male)']
  },
  {
    fields: ['水', 'みず', 'water']
  },
  {
    fields: ['飲む', 'のむ', 'drink']
  },
  {
    fields: ['暇', 'ひま', 'free, not busy']
  },
  {
    fields: ['時', 'とき', 'time, occasion']
  },
  {
    fields: ['時', 'じ', "hour, o'clock"]
  },
  {
    fields: ['一', 'いち', 'one']
  },
  {
    fields: ['二', 'に', 'two']
  },
  {
    fields: ['三', 'さん', 'three']
  },
  {
    fields: ['四', 'よん・し', 'four']
  },
  {
    fields: ['五', 'ご', 'five']
  },
  {
    fields: ['六', 'ろく', 'six']
  },
  {
    fields: ['七', 'なな・しち', 'seven']
  },
  {
    fields: ['八', 'はち', 'eight']
  },
  {
    fields: ['九', 'きゅう', 'nine']
  },
  {
    fields: ['十', 'じゅう', 'ten']
  },
  {
    fields: ['くん', 'くん', 'kun (usu. used with men younger or of the same age)']
  },
  {
    fields: ['すみません', 'すみません', 'sorry, excuse me']
  },
  {
    fields: ['やる', 'やる', 'do']
  },
  {
    fields: ['顔', 'かお', 'face']
  },
  {
    fields: ['今朝', 'けさ', 'this morning']
  },
  {
    fields: ['出る', 'でる', 'go out, leave']
  },
  {
    fields: ['そして', 'そして', 'and, and then']
  },
  {
    fields: ['まだ', 'まだ', 'yet, more']
  },
  {
    fields: ['じゃ', 'じゃ', 'then, well']
  },
  {
    fields: ['ため', 'ため', 'sake, purpose']
  },
  {
    fields: ['ご飯', 'ごはん', 'cooked rice, meal']
  },
  {
    fields: ['ところ', 'ところ', 'place']
  },
  {
    fields: ['少し', 'すこし', 'a bit, a little while']
  },
  {
    fields: ['見える', 'みえる', 'be visible']
  },
  {
    fields: ['違う', 'ちがう', 'differ, be wrong']
  },
  {
    fields: ['男', 'おとこ', 'man, male']
  },
  {
    fields: ['ただ', 'ただ', 'free']
  },
  {
    fields: ['ただ', 'ただ', 'simply']
  },
  {
    fields: ['人間', 'にんげん', 'human being, people']
  },
  {
    fields: ['作る', 'つくる', 'make, create']
  },
  {
    fields: ['感じる', 'かんじる', 'feel, sense']
  },
  {
    fields: ['上', 'うえ', 'up, above']
  },
  {
    fields: ['強い', 'つよい', 'strong']
  },
  {
    fields: ['出す', 'だす', 'take out']
  },
  {
    fields: ['笑う', 'わらう', 'laugh, smile']
  },
  {
    fields: ['毎月', 'まいつき', 'every month']
  },
  {
    fields: ['毎年', 'まいとし', 'every year']
  },
  {
    fields: ['多く', 'おおく', 'many, much']
  },
  {
    fields: ['くらい', 'くらい', 'approximately, about']
  },
  {
    fields: ['姉', 'あね', 'older sister']
  },
  {
    fields: ['弟', 'おとうと', 'younger brother']
  },
  {
    fields: ['妹', 'いもうと', 'younger sister']
  },
  {
    fields: ['力', 'ちから', 'strength, power']
  },
  {
    fields: ['世界', 'せかい', 'world']
  },
  {
    fields: ['相手', 'あいて', 'partner, opponent']
  },
  {
    fields: ['姿', 'すがた', 'figure, appearance']
  },
  {
    fields: ['死ぬ', 'しぬ', 'die']
  },
  {
    fields: ['早い', 'はやい', 'early']
  },
  {
    fields: ['早い', 'はやい', 'fast (in terms of time)']
  },
  {
    fields: ['頭', 'あたま', 'head']
  },
  {
    fields: ['戻る', 'もどる', 'return, go back']
  },
  {
    fields: ['ずっと', 'ずっと', 'continuously, the whole time']
  },
  {
    fields: ['どうして', 'どうして', 'why']
  },
  {
    fields: ['やっぱり', 'やっぱり', 'just as I thought, after all']
  },
  {
    fields: ['つもり', 'つもり', 'intention, purpose']
  },
  {
    fields: ['必要', 'ひつよう', 'necessary, needed']
  },
  {
    fields: ['終わる', 'おわる', 'finish, end']
  },
  {
    fields: ['者', 'もの', 'person']
  },
  {
    fields: ['後', 'あと', 'after']
  },
  {
    fields: ['こちら', 'こちら', 'here, this way']
  },
  {
    fields: ['向かう', 'むかう', 'face, head toward']
  },
  {
    fields: ['きっと', 'きっと', 'surely, certainly']
  },
  {
    fields: ['変わる', 'かわる', 'change']
  },
  {
    fields: ['凄い', 'すごい', 'wonderful, great, a lot']
  },
  {
    fields: ['女', 'おんな', 'woman, girl']
  },
  {
    fields: ['ちゃんと', 'ちゃんと', 'properly']
  },
  {
    fields: ['音', 'おと', 'sound']
  },
  {
    fields: ['体', 'からだ', 'body']
  },
  {
    fields: ['掛ける', 'かける', 'hang, put on']
  },
  {
    fields: ['歩く', 'あるく', 'walk, go on foot']
  },
  {
    fields: ['存在', 'そんざい', 'existence, being']
  },
  {
    fields: ['過ぎる', 'すぎる', 'exceed, pass by']
  },
  {
    fields: ['聞こえる', 'きこえる', 'can hear']
  },
  {
    fields: ['受ける', 'うける', 'receive, accept']
  },
  {
    fields: ['今年', 'ことし', 'this year']
  },
  {
    fields: ['去年', 'きょねん', 'last year']
  },
  {
    fields: ['来年', 'らいねん', 'next year']
  },
  {
    fields: ['殺す', 'ころす', 'kill']
  },
  {
    fields: ['まさか', 'まさか', 'by no means, never!']
  },
  {
    fields: ['絶対', 'ぜったい', 'absolutely']
  },
  {
    fields: ['理由', 'りゆう', 'reason, cause']
  },
  {
    fields: ['口', 'くち', 'mouth']
  },
  {
    fields: ['外', 'そと', 'outside']
  },
  {
    fields: ['逃げる', 'にげる', 'escape, run away']
  },
  {
    fields: ['誰か', 'だれか', 'someone']
  },
  {
    fields: ['まるで', 'まるで', 'just like, completely']
  },
  {
    fields: ['他', 'ほか', 'another, somewhere else']
  },
  {
    fields: ['他', 'た', 'other (esp. people and abstract matters)']
  },
  {
    fields: ['問題', 'もんだい', 'problem, question']
  },
  {
    fields: ['今後', 'こんご', 'after this, in the future']
  },
  {
    fields: ['普通', 'ふつう', 'normal, regular, average']
  },
  {
    fields: ['心', 'こころ', 'heart, mind']
  },
  {
    fields: ['春', 'はる', 'spring']
  },
  {
    fields: ['夏', 'なつ', 'summer']
  },
  {
    fields: ['秋', 'あき', 'fall']
  },
  {
    fields: ['冬', 'ふゆ', 'winter']
  },
  {
    fields: ['以上', 'いじょう', '... or more, beyond']
  },
  {
    fields: ['それで', 'それで', 'then, so']
  },
  {
    fields: ['生きる', 'いきる', 'live, exist']
  },
  {
    fields: ['最初', 'さいしょ', 'first, beginning']
  },
  {
    fields: ['最後', 'さいご', 'last, final']
  },
  {
    fields: ['日', 'ひ', 'day']
  },
  {
    fields: ['間', 'あいだ', 'interval']
  },
  {
    fields: ['間', 'ま', 'interval, duration of time']
  },
  {
    fields: ['について', 'について', 'concerning, regarding']
  },
  {
    fields: ['左', 'ひだり', 'left']
  },
  {
    fields: ['右', 'みぎ', 'right']
  },
  {
    fields: ['感じ', 'かんじ', 'feeling, impression']
  },
  {
    fields: ['胸', 'むね', 'chest']
  },
  {
    fields: ['表情', 'ひょうじょう', 'expression, look']
  },
  {
    fields: ['多い', 'おおい', 'a lot']
  },
  {
    fields: ['初めて', 'はじめて', 'for the first time']
  },
  {
    fields: ['無理', 'むり', 'unreasonable, impossible']
  },
  {
    fields: ['欲しい', 'ほしい', 'wanting, wishing for']
  },
  {
    fields: ['ごめん', 'ごめん', 'sorry']
  },
  {
    fields: ['覚える', 'おぼえる', 'memorize']
  },
  {
    fields: ['別に', 'べつに', '(not) particularly']
  },
  {
    fields: ['思い出す', 'おもいだす', 'recollect, recall']
  },
  {
    fields: ['入れる', 'いれる', 'put in']
  },
  {
    fields: ['開く', 'あく', 'open']
  },
  {
    fields: ['開く', 'ひらく', 'open']
  },
  {
    fields: ['残る', 'のこる', 'remain, be left over']
  },
  {
    fields: ['答える', 'こたえる', 'answer']
  },
  {
    fields: ['怖い', 'こわい', 'fearful, be afraid, fearsome']
  },
  {
    fields: ['年', 'ねん', 'counter for years']
  },
  {
    fields: ['年', 'とし', 'year']
  },
  {
    fields: ['取る', 'とる', 'take, to get']
  },
  {
    fields: ['全て', 'すべて', 'all, entirely']
  },
  {
    fields: ['助ける', 'たすける', 'help, save']
  },
  {
    fields: ['状況', 'じょうきょう', 'state of affairs, conditions']
  },
  {
    fields: ['確認', 'かくにん', 'confirmation']
  },
  {
    fields: ['消える', 'きえる', 'turn off, disappear']
  },
  {
    fields: ['長い', 'ながい', 'long']
  },
  {
    fields: ['驚く', 'おどろく', 'be surprised, be astonished']
  },
  {
    fields: ['腕', 'うで', 'arm']
  },
  {
    fields: ['以外', 'いがい', 'except for']
  },
  {
    fields: ['困る', 'こまる', 'be at a loss, be in trouble']
  },
  {
    fields: ['離れる', 'はなれる', 'be separated, be apart']
  },
  {
    fields: ['気', 'き', 'spirit, temperament']
  },
  {
    fields: ['書く', 'かく', 'write']
  },
  {
    fields: ['光', 'ひかり', 'light, flash']
  },
  {
    fields: ['走る', 'はしる', 'run']
  },
  {
    fields: ['戦う', 'たたかう', 'wage war, fight']
  },
  {
    fields: ['余り', 'あまり', 'remainder, leftover']
  },
  {
    fields: ['全部', 'ぜんぶ', 'all, everything']
  },
  {
    fields: ['瞬間', 'しゅんかん', 'instant, moment']
  },
  {
    fields: ['説明', 'せつめい', 'explanation']
  },
  {
    fields: ['決める', 'きめる', 'to decide']
  },
  {
    fields: ['女性', 'じょせい', 'woman, female']
  },
  {
    fields: ['頂く', 'いただく', 'receive, take (humble form)']
  },
  {
    fields: ['敵', 'てき', 'enemy']
  },
  {
    fields: ['起きる', 'おきる', 'occur']
  },
  {
    fields: ['起きる', 'おきる', 'get up, get out of bed']
  },
  {
    fields: ['落ちる', 'おちる', 'fall']
  },
  {
    fields: ['足', 'あし', 'leg, foot']
  },
  {
    fields: ['それに', 'それに', 'in addition']
  },
  {
    fields: ['先に', 'さきに', 'before, ahead']
  },
  {
    fields: ['魔法', 'まほう', 'magic']
  },
  {
    fields: ['探す', 'さがす', 'look for, search']
  },
  {
    fields: ['子供', 'こども', 'child, kid']
  },
  {
    fields: ['怒る', 'おこる', 'get angry, scold']
  },
  {
    fields: ['笑顔', 'えがお', 'smile']
  },
  {
    fields: ['先輩', 'せんぱい', 'senior (at work, school, etc.)']
  },
  {
    fields: ['続く', 'つづく', 'continue, keep up']
  },
  {
    fields: ['こんなに', 'こんなに', 'this much, such']
  },
  {
    fields: ['変', 'へん', 'strange, funny']
  },
  {
    fields: ['読む', 'よむ', 'read']
  },
  {
    fields: ['当然', 'とうぜん', 'natural, as a matter of course']
  },
  {
    fields: ['情報', 'じょうほう', 'information']
  },
  {
    fields: ['見つける', 'みつける', 'find']
  },
  {
    fields: ['少女', 'しょうじょ', 'girl']
  },
  {
    fields: ['大変', 'たいへん', 'terrible, serious, grave']
  },
  {
    fields: ['かなり', 'かなり', 'fairly, rather']
  },
  {
    fields: ['下', 'した', 'under, below']
  },
  {
    fields: ['下', 'もと', 'under (the supervision of)']
  },
  {
    fields: ['かかる', 'かかる', 'take (e.g. time or money)']
  },
  {
    fields: ['掛かる', 'かかる', 'hang, be hung']
  },
  {
    fields: ['一度', 'いちど', 'once']
  },
  {
    fields: ['完全', 'かんぜん', 'perfect, complete']
  },
  {
    fields: ['後ろ', 'うしろ', 'back, behind']
  },
  {
    fields: ['泣く', 'なく', 'cry']
  },
  {
    fields: ['状態', 'じょうたい', 'state, condition']
  },
  {
    fields: ['関係', 'かんけい', 'relation(ship)']
  },
  {
    fields: ['向ける', 'むける', 'turn toward, point at']
  },
  {
    fields: ['奥', 'おく', 'inner part, back (of...)']
  },
  {
    fields: ['軽い', 'かるい', 'light']
  },
  {
    fields: ['返す', 'かえす', 'return, repay']
  },
  {
    fields: ['現れる', 'あらわれる', 'appear, emerge']
  },
  {
    fields: ['痛い', 'いたい', 'hurt, ouch']
  },
  {
    fields: ['どうやら', 'どうやら', '(seems) likely, seems like']
  },
  {
    fields: ['点ける', 'つける', 'switch on']
  },
  {
    fields: ['付ける', 'つける', 'attach, set, add']
  },
  {
    fields: ['一瞬', 'いっしゅん', 'instant, for a moment']
  },
  {
    fields: ['隠す', 'かくす', 'hide']
  },
  {
    fields: ['準備', 'じゅんび', 'preparation, arrangements']
  },
  {
    fields: ['そろそろ', 'そろそろ', 'soon, about time']
  },
  {
    fields: ['落ち着く', 'おちつく', 'calm down,&nbsp;settle in']
  },
  {
    fields: ['恥ずかしい', 'はずかしい', 'embarrassing, shy']
  },
  {
    fields: ['場合', 'ばあい', 'situation, case']
  },
  {
    fields: ['しっかり', 'しっかり', 'tightly, firmly']
  },
  {
    fields: ['しっかり', 'しっかり', 'mature, responsible']
  },
  {
    fields: ['髪', 'かみ', 'hair(style)']
  },
  {
    fields: ['元', 'もと', 'former, ex-']
  },
  {
    fields: ['得る', 'える', 'obtain, gain']
  },
  {
    fields: ['すぐ', 'すぐ', 'at once, right away']
  },
  {
    fields: ['来月', 'らいげつ', 'next month']
  },
  {
    fields: ['昔', 'むかし', 'a long time ago, the old days']
  },
  {
    fields: ['近い', 'ちかい', 'near']
  },
  {
    fields: ['動き', 'うごき', 'movement, motion']
  },
  {
    fields: ['見つめる', 'みつめる', 'stare']
  },
  {
    fields: ['幸せ', 'しあわせ', 'happiness, good fortune']
  },
  {
    fields: ['記憶', 'きおく', 'memory']
  },
  {
    fields: ['反応', 'はんのう', 'reaction, response']
  },
  {
    fields: ['私たち', 'わたしたち', 'we']
  },
  {
    fields: ['とにかく', 'とにかく', 'in any case, anyway']
  },
  {
    fields: ['勝手', 'かって', 'selfish, self-centered']
  },
  {
    fields: ['攻撃', 'こうげき', 'attack, assault, criticism']
  },
  {
    fields: ['開ける', 'あける', 'open, unlock']
  },
  {
    fields: ['黙る', 'だまる', "become silent, shut one's mouth"]
  },
  {
    fields: ['最近', 'さいきん', 'recently']
  },
  {
    fields: ['全員', 'ぜんいん', 'all members, (the) entire staff']
  },
  {
    fields: ['せい', 'せい', 'cause, fault']
  },
  {
    fields: ['深い', 'ふかい', 'deep, profound']
  },
  {
    fields: ['別', 'べつ', 'another, different']
  },
  {
    fields: ['決まる', 'きまる', 'be decided']
  },
  {
    fields: ['しばらく', 'しばらく', 'for a while, for the time being']
  },
  {
    fields: ['行う', 'おこなう', 'perform, do']
  },
  {
    fields: ['上がる', 'あがる', 'go up, rise']
  },
  {
    fields: ['隣', 'となり', 'next to, adjacent']
  },
  {
    fields: ['扉', 'とびら', 'door']
  },
  {
    fields: ['指', 'ゆび', 'finger, toe']
  },
  {
    fields: ['結果', 'けっか', 'result, outcome']
  },
  {
    fields: ['与える', 'あたえる', 'give']
  },
  {
    fields: ['道', 'みち', 'road']
  },
  {
    fields: ['乗る', 'のる', 'ride, take']
  },
  {
    fields: ['特に', 'とくに', 'specially, particularly']
  },
  {
    fields: ['形', 'かたち', 'shape']
  },
  {
    fields: ['さあ', 'さあ', "I'm not sure, Hmm..."]
  },
  {
    fields: ['血', 'ち', 'blood']
  },
  {
    fields: ['更に', 'さらに', 'furthermore, even more']
  },
  {
    fields: ['用意', 'ようい', 'preparation, getting ready']
  },
  {
    fields: ['負ける', 'まける', 'lose']
  },
  {
    fields: ['神', 'かみ', 'god, spirit']
  },
  {
    fields: ['実は', 'じつは', 'actually, the truth is']
  },
  {
    fields: ['服', 'ふく', 'clothes']
  },
  {
    fields: ['不思議', 'ふしぎ', 'strange, wonderful']
  },
  {
    fields: ['意識', 'いしき', 'consciousness, awareness']
  },
  {
    fields: ['一体', 'いったい', 'what on earth, what the…']
  },
  {
    fields: ['とりあえず', 'とりあえず', 'for now, first of all']
  },
  {
    fields: ['送る', 'おくる', 'send']
  },
  {
    fields: ['では', 'では', 'then']
  },
  {
    fields: ['安心', 'あんしん', 'peace of mind, relief']
  },
  {
    fields: ['失う', 'うしなう', 'lose, miss']
  },
  {
    fields: ['行動', 'こうどう', 'action, conduct']
  },
  {
    fields: ['触れる', 'ふれる', 'touch, come in contact with']
  },
  {
    fields: ['そもそも', 'そもそも', 'in the first place']
  },
  {
    fields: ['少ない', 'すくない', 'few, little']
  },
  {
    fields: ['結局', 'けっきょく', 'after all, finally']
  },
  {
    fields: ['空', 'そら', 'sky, weather']
  },
  {
    fields: ['済む', 'すむ', 'be settled, complete']
  },
  {
    fields: ['任せる', 'まかせる', 'entrust to, leave it to']
  },
  {
    fields: ['赤い', 'あかい', 'red']
  },
  {
    fields: ['大事', 'だいじ', 'important, precious']
  },
  {
    fields: ['残す', 'のこす', 'leave, reserve']
  },
  {
    fields: ['止まる', 'とまる', 'stop, come to a stop']
  },
  {
    fields: ['朝', 'あさ', 'morning']
  },
  {
    fields: ['命', 'いのち', 'life']
  },
  {
    fields: ['不安', 'ふあん', 'uneasiness, anxiety']
  },
  {
    fields: ['結構', 'けっこう', 'all right, no thank you']
  },
  {
    fields: ['結構', 'けっこう', 'quite']
  },
  {
    fields: ['新しい', 'あたらしい', 'new']
  },
  {
    fields: ['程度', 'ていど', 'degree, extent']
  },
  {
    fields: ['壁', 'かべ', 'wall, partition']
  },
  {
    fields: ['用', 'よう', 'things to do, (as a suffix) to do..., made for...']
  },
  {
    fields: ['背中', 'せなか', 'back']
  },
  {
    fields: ['気付く', 'きづく', 'realize, notice']
  },
  {
    fields: ['いきなり', 'いきなり', 'all of a sudden, without warning']
  },
  {
    fields: ['渡す', 'わたす', 'carry across, hand over']
  },
  {
    fields: ['喜ぶ', 'よろこぶ', 'be happy, be delighted']
  },
  {
    fields: ['可愛い', 'かわいい', 'cute']
  },
  {
    fields: ['始まる', 'はじまる', 'begin']
  },
  {
    fields: ['色', 'いろ', 'color']
  },
  {
    fields: ['認める', 'みとめる', 'recognize, approve, accept']
  },
  {
    fields: ['急', 'きゅう', 'suddenly']
  },
  {
    fields: ['向こう', 'むこう', 'the other side, the other party, opponent']
  },
  {
    fields: ['求める', 'もとめる', 'seek, wish for']
  },
  {
    fields: ['肩', 'かた', 'shoulder']
  },
  {
    fields: ['仲間', 'なかま', 'comrade, peer']
  },
  {
    fields: ['ようやく', 'ようやく', 'at last']
  },
  {
    fields: ['思わず', 'おもわず', 'unintentionally, involuntarily']
  },
  {
    fields: ['ほとんど', 'ほとんど', 'almost, hardly']
  },
  {
    fields: ['突然', 'とつぜん', 'abruptly, suddenly']
  },
  {
    fields: ['自身', 'じしん', 'self']
  },
  {
    fields: ['再び', 'ふたたび', 'again, a second time']
  },
  {
    fields: ['静か', 'しずか', 'quiet']
  },
  {
    fields: ['飛ぶ', 'とぶ', 'fly']
  },
  {
    fields: ['白い', 'しろい', 'white, blank']
  },
  {
    fields: ['届く', 'とどく', 'reach, be received']
  },
  {
    fields: ['生む', 'うむ', 'have children']
  },
  {
    fields: ['倒す', 'たおす', 'bring down, overthrow']
  },
  {
    fields: ['似る', 'にる', 'look similar to, resemble']
  },
  {
    fields: ['空気', 'くうき', 'atmosphere, air']
  },
  {
    fields: ['腰', 'こし', 'hip, lower back']
  },
  {
    fields: ['名', 'な', 'name, reputation']
  },
  {
    fields: ['危険', 'きけん', 'danger, dangerous']
  },
  {
    fields: ['付く', 'つく', 'attach itself to, be connected with, come in contact with']
  },
  {
    fields: ['つく', 'つく', 'be on, switched on']
  },
  {
    fields: ['熱い', 'あつい', 'hot (things, touch)']
  },
  {
    fields: ['ただいま', 'ただいま', "I'm back (said when arriving home)"]
  },
  {
    fields: ['頂きます', 'いただきます', "let's eat!, thank you for the meal"]
  },
  {
    fields: ['慌てる', 'あわてる', 'be flustered, hurry']
  },
  {
    fields: ['周囲', 'しゅうい', 'circumference, surroundings']
  },
  {
    fields: ['気分', 'きぶん', 'mood, feeling']
  },
  {
    fields: ['事実', 'じじつ', 'fact, truth']
  },
  {
    fields: ['まず', 'まず', 'first (of all), to begin with']
  },
  {
    fields: ['本気', 'ほんき', 'seriousness']
  },
  {
    fields: ['頷く', 'うなずく', 'nod']
  },
  {
    fields: ['通り', 'とおり', 'street']
  },
  {
    fields: ['想像', 'そうぞう', 'imagination']
  },
  {
    fields: ['店', 'みせ', 'shop, store']
  },
  {
    fields: ['何だか', 'なんだか', 'somehow, for some reason']
  },
  {
    fields: ['目的', 'もくてき', 'purpose, aim, object']
  },
  {
    fields: ['眠る', 'ねむる', 'sleep']
  },
  {
    fields: ['確か', 'たしか', "certainly, surely, if I'm not mistaken..."]
  },
  {
    fields: ['十分', 'じゅうぶん', 'plenty']
  },
  {
    fields: ['料理', 'りょうり', 'cooking, cuisine']
  },
  {
    fields: ['頃', 'ころ', 'approximate time']
  },
  {
    fields: ['なかなか', 'なかなか', 'rather, fairly']
  },
  {
    fields: ['正直', 'しょうじき', 'honest, upright']
  },
  {
    fields: ['身', 'み', "body, one's own person"]
  },
  {
    fields: ['いっぱい', 'いっぱい', 'full, a lot']
  },
  {
    fields: ['美しい', 'うつくしい', 'beautiful']
  },
  {
    fields: ['甘い', 'あまい', 'sweet']
  },
  {
    fields: ['むしろ', 'むしろ', 'rather']
  },
  {
    fields: ['首', 'くび', 'neck']
  },
  {
    fields: ['感情', 'かんじょう', 'feeling, emotion']
  },
  {
    fields: ['周り', 'まわり', 'around, surroundings']
  },
  {
    fields: ['方法', 'ほうほう', 'method, way']
  },
  {
    fields: ['もう一度', 'もういちど', 'once more']
  },
  {
    fields: ['遅い', 'おそい', 'slow, late']
  },
  {
    fields: ['会話', 'かいわ', 'conversation']
  },
  {
    fields: ['合う', 'あう', 'fit']
  },
  {
    fields: ['やって来る', 'やってくる', 'come around, come along']
  },
  {
    fields: ['森', 'もり', 'thick woods, forest']
  },
  {
    fields: ['動かす', 'うごかす', 'move, make a move']
  },
  {
    fields: ['能力', 'のうりょく', 'ability, capacity']
  },
  {
    fields: ['震える', 'ふるえる', 'tremble, shake']
  },
  {
    fields: ['期待', 'きたい', 'expectation, anticipation']
  },
  {
    fields: ['無事', 'ぶじ', 'safely, peacefully']
  },
  {
    fields: ['起こす', 'おこす', 'bring about, cause']
  },
  {
    fields: ['起こす', 'おこす', 'wake up']
  },
  {
    fields: ['耳', 'みみ', 'ear, hearing']
  },
  {
    fields: ['生まれる', 'うまれる', 'be born']
  },
  {
    fields: ['移動', 'いどう', 'movement, shift']
  },
  {
    fields: ['邪魔', 'じゃま', 'obstacle, hindrance']
  },
  {
    fields: ['遊ぶ', 'あそぶ', 'play']
  },
  {
    fields: ['要る', 'いる', 'need, require']
  },
  {
    fields: ['無くなる', 'なくなる', 'to be lost, to be used up']
  },
  {
    fields: ['唇', 'くちびる', 'lip']
  },
  {
    fields: ['着る', 'きる', 'wear, put on']
  },
  {
    fields: ['色々', 'いろいろ', 'various, in various ways']
  },
  {
    fields: ['どうぞ', 'どうぞ', 'go ahead']
  },
  {
    fields: ['立ち上がる', 'たちあがる', 'stand up']
  },
  {
    fields: ['思い', 'おもい', 'thought']
  },
  {
    fields: ['以前', 'いぜん', 'before, ago']
  },
  {
    fields: ['もう少し', 'もうすこし', 'a little more, a bit more']
  },
  {
    fields: ['襲う', 'おそう', 'assault, attack']
  },
  {
    fields: ['見つかる', 'みつかる', 'be found, be caught']
  },
  {
    fields: ['急ぐ', 'いそぐ', 'hurry']
  },
  {
    fields: ['せっかく', 'せっかく', 'with (much) trouble, specially']
  },
  {
    fields: ['降りる', 'おりる', 'get off, go down']
  },
  {
    fields: ['下りる', 'おりる', 'go down, come down']
  },
  {
    fields: ['切る', 'きる', 'cut']
  },
  {
    fields: ['事件', 'じけん', 'affair, case']
  },
  {
    fields: ['返事', 'へんじ', 'reply']
  },
  {
    fields: ['酷い', 'ひどい', 'terrible, cruel']
  },
  {
    fields: ['重い', 'おもい', 'heavy']
  },
  {
    fields: ['起こる', 'おこる', 'occur, happen']
  },
  {
    fields: ['逆', 'ぎゃく', 'reverse, inverse']
  },
  {
    fields: ['納得', 'なっとく', 'consent, accept']
  },
  {
    fields: ['楽しむ', 'たのしむ', 'enjoy']
  },
  {
    fields: ['叫ぶ', 'さけぶ', 'shout, yell, cry out']
  },
  {
    fields: ['集まる', 'あつまる', 'gather, be collected']
  },
  {
    fields: ['構う', 'かまう', 'mind, care for']
  },
  {
    fields: ['王', 'おう', 'king']
  },
  {
    fields: ['途中', 'とちゅう', 'on the way, half way']
  },
  {
    fields: ['慣れる', 'なれる', 'grow accustomed to']
  },
  {
    fields: ['終わり', 'おわり', 'end']
  },
  {
    fields: ['一応', 'いちおう', 'for the time being, more or less']
  },
  {
    fields: ['引く', 'ひく', 'draw, pull']
  },
  {
    fields: ['海', 'うみ', 'sea, ocean']
  },
  {
    fields: ['諦める', 'あきらめる', 'give up, abandon']
  },
  {
    fields: ['必ず', 'かならず', 'without exception, always, certainly']
  },
  {
    fields: ['狙う', 'ねらう', 'aim, be after']
  },
  {
    fields: ['いくら', 'いくら', 'how much']
  },
  {
    fields: ['落とす', 'おとす', 'drop']
  },
  {
    fields: ['部分', 'ぶぶん', 'part, section']
  },
  {
    fields: ['必死', 'ひっし', 'frantic, desperate']
  },
  {
    fields: ['珍しい', 'めずらしい', 'rare, uncommon']
  },
  {
    fields: ['意外', 'いがい', 'unexpected, unforeseen']
  },
  {
    fields: ['報告', 'ほうこく', 'report']
  },
  {
    fields: ['握る', 'にぎる', 'grasp, grip']
  },
  {
    fields: ['結婚', 'けっこん', 'marriage']
  },
  {
    fields: ['戦い', 'たたかい', 'war, battle']
  },
  {
    fields: ['感謝', 'かんしゃ', 'appreciation, thanks']
  },
  {
    fields: ['激しい', 'はげしい', 'intense, violent']
  },
  {
    fields: ['倒れる', 'たおれる', 'collapse, fall down']
  },
  {
    fields: ['既に', 'すでに', 'already, too late']
  },
  {
    fields: ['疲れる', 'つかれる', 'get tired']
  },
  {
    fields: ['生活', 'せいかつ', 'life, lifestyle']
  },
  {
    fields: ['場', 'ば', 'opportunity, occasion']
  },
  {
    fields: ['愛する', 'あいする', 'love, care for']
  },
  {
    fields: ['冷たい', 'つめたい', 'cold (to the touch)']
  },
  {
    fields: ['捨てる', 'すてる', 'throw away']
  },
  {
    fields: ['過ごす', 'すごす', 'spend (time), pass']
  },
  {
    fields: ['食事', 'しょくじ', 'meal, dinner']
  },
  {
    fields: ['働く', 'はたらく', 'work']
  },
  {
    fields: ['答え', 'こたえ', 'answer, response']
  },
  {
    fields: ['風', 'かぜ', 'wind']
  },
  {
    fields: ['黒い', 'くろい', 'black, dark']
  },
  {
    fields: ['助かる', 'たすかる', 'be saved, survive']
  },
  {
    fields: ['受け取る', 'うけとる', "receive, take (someone's words or behavior)"]
  },
  {
    fields: ['足りる', 'たりる', 'be enough, be sufficient']
  },
  {
    fields: ['判断', 'はんだん', 'judgment, decision']
  },
  {
    fields: ['未来', 'みらい', 'future']
  },
  {
    fields: ['食う', 'くう', 'eat, live on']
  },
  {
    fields: ['分', 'ぶん', 'amount, share']
  },
  {
    fields: ['そっち', 'そっち', 'there']
  },
  {
    fields: ['上手い', 'うまい', 'skilled, good']
  },
  {
    fields: ['合わせる', 'あわせる', 'adjust, match']
  },
  {
    fields: ['大切', 'たいせつ', 'important, valuable']
  },
  {
    fields: ['花', 'はな', 'flower']
  },
  {
    fields: ['謝る', 'あやまる', 'apologize']
  },
  {
    fields: ['奪う', 'うばう', 'snatch, take by force']
  },
  {
    fields: ['勢い', 'いきおい', 'vigor, momentum']
  },
  {
    fields: ['涙', 'なみだ', 'tear']
  },
  {
    fields: ['雰囲気', 'ふんいき', 'atmosphere, mood']
  },
  {
    fields: ['嘘', 'うそ', 'lie']
  },
  {
    fields: ['望む', 'のぞむ', 'desire, hope']
  },
  {
    fields: ['緊張', 'きんちょう', 'tension, strain, be nervous']
  },
  {
    fields: ['一緒', 'いっしょ', 'together']
  },
  {
    fields: ['救う', 'すくう', 'save']
  },
  {
    fields: ['自ら', 'みずから', 'oneself']
  },
  {
    fields: ['地面', 'じめん', 'surface, ground']
  },
  {
    fields: ['失敗', 'しっぱい', 'failure, blunder']
  },
  {
    fields: ['避ける', 'さける', 'avoid,&nbsp;evade']
  },
  {
    fields: ['窓', 'まど', 'window']
  },
  {
    fields: ['素直', 'すなお', 'honest, straightforward']
  },
  {
    fields: ['肉', 'にく', 'flesh, meat']
  },
  {
    fields: ['冗談', 'じょうだん', 'joke']
  },
  {
    fields: ['余裕', 'よゆう', 'room, leeway']
  },
  {
    fields: ['連絡', 'れんらく', 'connection, communication']
  },
  {
    fields: ['人生', 'じんせい', '(human) life']
  },
  {
    fields: ['放つ', 'はなつ', 'emit, set free, shoot (e.g. an arrow or bullet)']
  },
  {
    fields: ['流れる', 'ながれる', 'flow, pass']
  },
  {
    fields: ['特別', 'とくべつ', 'special, extraordinary']
  },
  {
    fields: ['連中', 'れんちゅう', 'party, this bunch']
  },
  {
    fields: ['両手', 'りょうて', 'both hands']
  },
  {
    fields: ['増える', 'ふえる', 'increase, accrue']
  },
  {
    fields: ['出会う', 'であう', 'meet (by chance), come across']
  },
  {
    fields: ['少年', 'しょうねん', 'boy']
  },
  {
    fields: ['繰り返す', 'くりかえす', 'repeat']
  },
  {
    fields: ['我慢', 'がまん', 'patience, bearing with']
  },
  {
    fields: ['我々', 'われわれ', 'we (formal)']
  },
  {
    fields: ['感覚', 'かんかく', 'sensation']
  },
  {
    fields: ['響く', 'ひびく', 'reverberate']
  },
  {
    fields: ['何とか', 'なんとか', 'somehow, please']
  },
  {
    fields: ['山', 'やま', 'mountain']
  },
  {
    fields: ['当たり前', 'あたりまえ', 'of course, obvious']
  },
  {
    fields: ['予定', 'よてい', 'schedule, plan']
  },
  {
    fields: ['残念', 'ざんねん', 'regretful, disappointing']
  },
  {
    fields: ['追う', 'おう', 'chase, pursue']
  },
  {
    fields: ['綺麗', 'きれい', 'beautiful, clean']
  },
  {
    fields: ['いらっしゃる', 'いらっしゃる', 'be, come, go (honorific form)']
  },
  {
    fields: ['若い', 'わかい', 'young']
  },
  {
    fields: ['どうしても', 'どうしても', 'by any means, really']
  },
  {
    fields: ['考え', 'かんがえ', 'thought, view']
  },
  {
    fields: ['過去', 'かこ', 'the past']
  },
  {
    fields: ['気配', 'けはい', 'indication, sign']
  },
  {
    fields: ['本人', 'ほんにん', 'the person in question']
  },
  {
    fields: ['現実', 'げんじつ', 'reality, actuality']
  },
  {
    fields: ['決して', 'けっして', 'never, by no means']
  },
  {
    fields: ['いつか', 'いつか', 'some time, some day']
  },
  {
    fields: ['床', 'ゆか', 'floor']
  },
  {
    fields: ['横', 'よこ', 'side, width across']
  },
  {
    fields: ['休む', 'やすむ', 'rest, take time off']
  },
  {
    fields: ['振り返る', 'ふりかえる', "turn one's head, look back on"]
  },
  {
    fields: ['わざわざ', 'わざわざ', "go out of one's way"]
  },
  {
    fields: ['質問', 'しつもん', 'question']
  },
  {
    fields: ['興味', 'きょうみ', 'interest']
  },
  {
    fields: ['距離', 'きょり', 'distance, interval']
  },
  {
    fields: ['内容', 'ないよう', 'contents']
  },
  {
    fields: ['つい', 'つい', 'inadvertently, carelessly']
  },
  {
    fields: ['回る', 'まわる', 'rotate, go around']
  },
  {
    fields: ['並ぶ', 'ならぶ', 'line up']
  },
  {
    fields: ['終える', 'おえる', 'end, finish']
  },
  {
    fields: ['態度', 'たいど', 'attitude, manner']
  },
  {
    fields: ['金', 'かね', 'money']
  },
  {
    fields: ['今夜', 'こんや', 'tonight, this evening']
  },
  {
    fields: ['昨夜', 'ゆうべ', 'last night, last evening']
  },
  {
    fields: ['さすが', 'さすが', "just as expected, true to one's reputation"]
  },
  {
    fields: ['自然', 'しぜん', 'nature']
  },
  {
    fields: ['眺める', 'ながめる', 'look out, gaze']
  },
  {
    fields: ['向く', 'むく', 'face, look']
  },
  {
    fields: ['相変わらず', 'あいかわらず', 'as usual, as before']
  },
  {
    fields: ['普段', 'ふだん', 'usual, ordinary']
  },
  {
    fields: ['どうも', 'どうも', 'for some reason, somehow']
  },
  {
    fields: ['運ぶ', 'はこぶ', 'carry']
  },
  {
    fields: ['やっと', 'やっと', 'at last, finally']
  },
  {
    fields: ['弱い', 'よわい', 'weak']
  },
  {
    fields: ['どうせ', 'どうせ', 'anyway']
  },
  {
    fields: ['離す', 'はなす', 'separate, detach']
  },
  {
    fields: ['貴族', 'きぞく', 'noble']
  },
  {
    fields: ['広がる', 'ひろがる', 'spread out, extend']
  },
  {
    fields: ['頬', 'ほお', 'cheek']
  },
  {
    fields: ['寂しい', 'さびしい', 'lonely, sad']
  },
  {
    fields: ['正しい', 'ただしい', 'correct']
  },
  {
    fields: ['自由', 'じゆう', 'freedom, free']
  },
  {
    fields: ['全身', 'ぜんしん', 'the whole body']
  },
  {
    fields: ['武器', 'ぶき', 'weapon, arms']
  },
  {
    fields: ['それぞれ', 'それぞれ', 'each, respective']
  },
  {
    fields: ['語る', 'かたる', 'tell, talk']
  },
  {
    fields: ['持ってくる', 'もってくる', 'bring']
  },
  {
    fields: ['息子', 'むすこ', 'son']
  },
  {
    fields: ['娘', 'むすめ', 'daughter']
  },
  {
    fields: ['一気に', 'いっきに', 'in one go']
  },
  {
    fields: ['そっと', 'そっと', 'softly, gently']
  },
  {
    fields: ['伝わる', 'つたわる', 'be transmitted, be handed down']
  },
  {
    fields: ['当たる', 'あたる', 'hit, strike']
  },
  {
    fields: ['痛み', 'いたみ', 'pain, ache']
  },
  {
    fields: ['妙', 'みょう', 'strange']
  },
  {
    fields: ['影', 'かげ', 'shadow, shade']
  },
  {
    fields: ['死', 'し', 'death']
  },
  {
    fields: ['多分', 'たぶん', 'probably, perhaps']
  },
  {
    fields: ['協力', 'きょうりょく', 'cooperation, collaboration']
  },
  {
    fields: ['見上げる', 'みあげる', 'look up']
  },
  {
    fields: ['覚悟', 'かくご', 'readiness, resolution']
  },
  {
    fields: ['連れる', 'つれる', 'take along, bring along']
  },
  {
    fields: ['低い', 'ひくい', 'low, short (height)']
  },
  {
    fields: ['木', 'き', 'tree']
  },
  {
    fields: ['面倒', 'めんどう', 'annoying, troublesome']
  },
  {
    fields: ['闇', 'やみ', 'darkness']
  },
  {
    fields: ['広い', 'ひろい', 'wide, big']
  },
  {
    fields: ['告げる', 'つげる', 'tell, notify']
  },
  {
    fields: ['叩く', 'たたく', 'tap, hit']
  },
  {
    fields: ['自信', 'じしん', 'self-confidence']
  },
  {
    fields: ['集める', 'あつめる', 'gather, collect']
  },
  {
    fields: ['振る', 'ふる', 'wave, shake']
  },
  {
    fields: ['余計', 'よけい', 'excess, needless']
  },
  {
    fields: ['他に', 'ほかに', 'else, in addition']
  },
  {
    fields: ['誘う', 'さそう', 'invite, ask out']
  },
  {
    fields: ['付き合う', 'つきあう', 'socialize with, see someone']
  },
  {
    fields: ['村', 'むら', 'village']
  },
  {
    fields: ['人物', 'じんぶつ', 'character, person']
  },
  {
    fields: ['数', 'かず', 'number']
  },
  {
    fields: ['危ない', 'あぶない', 'dangerous, uncertain']
  },
  {
    fields: ['事情', 'じじょう', 'circumstances, conditions']
  },
  {
    fields: ['本当に', 'ほんとうに', 'really, truly']
  },
  {
    fields: ['噂', 'うわさ', 'gossip, rumor']
  },
  {
    fields: ['断る', 'ことわる', 'refuse, turn down']
  },
  {
    fields: ['どうか', 'どうか', 'if possible, somehow']
  },
  {
    fields: ['巨大', 'きょだい', 'huge, gigantic']
  },
  {
    fields: ['最高', 'さいこう', 'best, supreme']
  },
  {
    fields: ['お金', 'おかね', 'money']
  },
  {
    fields: ['傷', 'きず', 'wound, cut']
  },
  {
    fields: ['怒り', 'いかり', 'anger, rage']
  },
  {
    fields: ['どうやって', 'どうやって', 'how, in what way']
  },
  {
    fields: ['効果', 'こうか', 'effect, result']
  },
  {
    fields: ['取り出す', 'とりだす', 'take out, pull out']
  },
  {
    fields: ['黒', 'くろ', 'black']
  },
  {
    fields: ['愛', 'あい', 'love']
  },
  {
    fields: ['直接', 'ちょくせつ', 'directly']
  },
  {
    fields: ['浮かぶ', 'うかぶ', 'to float']
  },
  {
    fields: ['抜ける', 'ぬける', 'to fall out, to leave']
  },
  {
    fields: ['暗い', 'くらい', 'dark']
  },
  {
    fields: ['息', 'いき', 'breath']
  },
  {
    fields: ['駄目', 'だめ', 'no good']
  },
  {
    fields: ['点', 'てん', 'point, mark']
  },
  {
    fields: ['参加', 'さんか', 'participation']
  },
  {
    fields: ['はっきり', 'はっきり', 'clearly']
  },
  {
    fields: ['描く', 'かく', 'to depict, to describe, to draw']
  },
  {
    fields: ['描く', 'えがく', 'to depict, to describe, to draw']
  },
  {
    fields: ['無視', 'むし', 'ignoring, disregarding']
  },
  {
    fields: ['生徒', 'せいと', 'pupil, student']
  },
  {
    fields: ['詳しい', 'くわしい', 'detailed']
  },
  {
    fields: ['触る', 'さわる', 'to touch']
  },
  {
    fields: ['これまで', 'これまで', 'until now, until here']
  },
  {
    fields: ['半分', 'はんぶん', 'half']
  },
  {
    fields: ['耐える', 'たえる', 'to withstand, to endure']
  },
  {
    fields: ['立場', 'たちば', 'standpoint, position']
  },
  {
    fields: ['石', 'いし', 'stone, small rock']
  },
  {
    fields: ['挨拶', 'あいさつ', 'greeting']
  },
  {
    fields: ['相談', 'そうだん', 'consultation, advice']
  },
  {
    fields: ['受け入れる', 'うけいれる', 'to accept, to accommodate']
  },
  {
    fields: ['練習', 'れんしゅう', 'practice, training']
  },
  {
    fields: ['無駄', 'むだ', 'wasteful, useless']
  },
  {
    fields: ['抱える', 'かかえる', "to hold in one's arms"]
  },
  {
    fields: ['示す', 'しめす', 'to show, to indicate']
  },
  {
    fields: ['成功', 'せいこう', 'success']
  },
  {
    fields: ['抱く', 'だく', "to hug, to hold in one's arms"]
  },
  {
    fields: ['味', 'あじ', 'taste, flavor']
  },
  {
    fields: ['男性', 'だんせい', 'male, man']
  },
  {
    fields: ['否定', 'ひてい', 'denial, negation']
  },
  {
    fields: ['致す', 'いたす', 'do (humble form)']
  },
  {
    fields: ['現在', 'げんざい', 'present time, now']
  },
  {
    fields: ['輝く', 'かがやく', 'to glitter, to shine']
  },
  {
    fields: ['熱', 'ねつ', 'fever']
  },
  {
    fields: ['始め', 'はじめ', 'beginning, origin']
  },
  {
    fields: ['厳しい', 'きびしい', 'strict']
  },
  {
    fields: ['匂い', 'におい', 'smell, odor']
  },
  {
    fields: ['席', 'せき', 'seat']
  },
  {
    fields: ['売る', 'うる', 'to sell']
  },
  {
    fields: ['暮らす', 'くらす', 'to live, to make a living']
  },
  {
    fields: ['利用', 'りよう', 'usage, utilization']
  },
  {
    fields: ['ふと', 'ふと', 'suddenly, unintentionally']
  },
  {
    fields: ['経験', 'けいけん', 'experience']
  },
  {
    fields: ['変化', 'へんか', 'change, variation']
  },
  {
    fields: ['王子', 'おうじ', 'prince']
  },
  {
    fields: ['満足', 'まんぞく', 'satisfaction']
  },
  {
    fields: ['どんどん', 'どんどん', 'steadily']
  },
  {
    fields: ['命令', 'めいれい', 'order, command']
  },
  {
    fields: ['主', 'おも', 'main, chief']
  },
  {
    fields: ['美味しい', 'おいしい', 'tasty']
  },
  {
    fields: ['手紙', 'てがみ', 'letter']
  },
  {
    fields: ['掴む', 'つかむ', 'to grip, to grab']
  },
  {
    fields: ['他人', 'たにん', 'another person, stranger']
  },
  {
    fields: ['格好', 'かっこう', 'shape, appearance']
  },
  {
    fields: ['光景', 'こうけい', 'sight, spectacle']
  },
  {
    fields: ['すっかり', 'すっかり', 'all, completely']
  },
  {
    fields: ['どちら', 'どちら', 'which']
  },
  {
    fields: ['親', 'おや', 'parent']
  },
  {
    fields: ['時代', 'じだい', 'period, age']
  },
  {
    fields: ['作戦', 'さくせん', 'tactic, strategy']
  },
  {
    fields: ['もしかしたら', 'もしかしたら', 'possibly, perhaps']
  },
  {
    fields: ['苦しい', 'くるしい', 'painful, difficult']
  },
  {
    fields: ['明るい', 'あかるい', 'bright']
  },
  {
    fields: ['原因', 'げんいん', 'cause, origin']
  },
  {
    fields: ['廊下', 'ろうか', 'hallway']
  },
  {
    fields: ['そいつ', 'そいつ', 'that person, that guy']
  },
  {
    fields: ['先ほど', 'さきほど', 'some time ago']
  },
  {
    fields: ['大人', 'おとな', 'adult']
  },
  {
    fields: ['人々', 'ひとびと', 'people']
  },
  {
    fields: ['撫でる', 'なでる', 'to pat, to stroke']
  },
  {
    fields: ['立てる', 'たてる', 'to put up, to erect']
  },
  {
    fields: ['たまに', 'たまに', 'occasionally, by chance']
  },
  {
    fields: ['押す', 'おす', 'to push, to press down']
  },
  {
    fields: ['平気', 'へいき', 'calm, all right']
  },
  {
    fields: ['悲しい', 'かなしい', 'sad']
  },
  {
    fields: ['隠れる', 'かくれる', 'to hide, to disappear']
  },
  {
    fields: ['まだまだ', 'まだまだ', 'still, not there yet']
  },
  {
    fields: ['皆さん', 'みなさん', 'everyone']
  },
  {
    fields: ['戻す', 'もどす', 'to return']
  },
  {
    fields: ['戦闘', 'せんとう', 'battle, fight']
  },
  {
    fields: ['火', 'ひ', 'fire']
  },
  {
    fields: ['炎', 'ほのお', 'flame, blaze']
  },
  {
    fields: ['恐怖', 'きょうふ', 'fear']
  },
  {
    fields: ['迷う', 'まよう', 'to be perplexed, to get lost']
  },
  {
    fields: ['よろしい', 'よろしい', 'all right']
  },
  {
    fields: ['機会', 'きかい', 'chance, opportunity, occasion']
  },
  {
    fields: ['恐ろしい', 'おそろしい', 'terrible, frightening']
  },
  {
    fields: ['借りる', 'かりる', 'to borrow']
  },
  {
    fields: ['外す', 'はずす', 'to remove']
  },
  {
    fields: ['地', 'ち', 'ground, place']
  },
  {
    fields: ['速い', 'はやい', 'fast (in terms of speed)']
  },
  {
    fields: ['短い', 'みじかい', 'short, brief']
  },
  {
    fields: ['気に入る', 'きにいる', 'to like, to be pleased with']
  },
  {
    fields: ['改めて', 'あらためて', 'once again']
  },
  {
    fields: ['うるさい', 'うるさい', 'noisy, annoying']
  },
  {
    fields: ['当てる', 'あてる', 'to hit, to guess']
  },
  {
    fields: ['包む', 'つつむ', 'to wrap, to pack']
  },
  {
    fields: ['位置', 'いち', 'position, place']
  },
  {
    fields: ['打つ', 'うつ', 'to hit, to strike']
  },
  {
    fields: ['目指す', 'めざす', 'to aim for']
  },
  {
    fields: ['秘密', 'ひみつ', 'secret, privacy']
  },
  {
    fields: ['屋敷', 'やしき', 'mansion']
  },
  {
    fields: ['限界', 'げんかい', 'boundary, limit']
  },
  {
    fields: ['勝負', 'しょうぶ', 'match, contest']
  },
  {
    fields: ['星', 'ほし', 'star, planet']
  },
  {
    fields: ['明らか', 'あきらか', 'clear, obvious']
  },
  {
    fields: ['悩む', 'なやむ', 'to be troubled, to worry']
  },
  {
    fields: ['集中', 'しゅうちゅう', 'concentration, convergence']
  },
  {
    fields: ['間違う', 'まちがう', 'to be mistaken, to be incorrect']
  },
  {
    fields: ['裏', 'うら', 'rear, reverse']
  },
  {
    fields: ['薄い', 'うすい', 'weak, pale']
  },
  {
    fields: ['願う', 'ねがう', 'to wish, to ask a favor, to pray']
  },
  {
    fields: ['回復', 'かいふく', 'recovery']
  },
  {
    fields: ['流す', 'ながす', 'to let flow, to set adrift']
  },
  {
    fields: ['じっと', 'じっと', 'without moving, still']
  },
  {
    fields: ['本物', 'ほんもの', 'real thing, genuine article']
  },
  {
    fields: ['正に', 'まさに', 'exactly, surely, truly']
  },
  {
    fields: ['取り戻す', 'とりもどす', 'to take back, to recover']
  },
  {
    fields: ['何より', 'なにより', 'above all, most important']
  },
  {
    fields: ['身体', 'しんたい', 'body']
  },
  {
    fields: ['方向', 'ほうこう', 'direction, course']
  },
  {
    fields: ['通る', 'とおる', 'to pass, to take, to go through']
  },
  {
    fields: ['空間', 'くうかん', 'space, room']
  },
  {
    fields: ['着く', 'つく', 'to arrive']
  },
  {
    fields: ['可能', 'かのう', 'possible, potential']
  },
  {
    fields: ['新た', 'あらた', 'new']
  },
  {
    fields: ['随分', 'ずいぶん', 'extremely, considerably']
  },
  {
    fields: ['尋ねる', 'たずねる', 'to inquire, to search for']
  },
  {
    fields: ['椅子', 'いす', 'chair']
  },
  {
    fields: ['城', 'しろ', 'castle']
  },
  {
    fields: ['恐らく', 'おそらく', "probably (usually negative), I'm afraid ..."]
  },
  {
    fields: ['お茶', 'おちゃ', 'tea (polite)']
  },
  {
    fields: ['雨', 'あめ', 'rain']
  },
  {
    fields: ['いやいや', 'いやいや', 'reluctantly']
  },
  {
    fields: ['そのもの', 'そのもの', 'the very thing, the picture of']
  },
  {
    fields: ['教室', 'きょうしつ', 'classroom']
  },
  {
    fields: ['馬鹿', 'ばか', 'fool, nonsense']
  },
  {
    fields: ['遠慮', 'えんりょ', 'reserve, refraining']
  },
  {
    fields: ['まずい', 'まずい', 'problematic, troublesome']
  },
  {
    fields: ['まずい', 'まずい', 'bad-tasting, bad']
  },
  {
    fields: ['せめて', 'せめて', 'at least']
  },
  {
    fields: ['迎える', 'むかえる', 'to welcome, to go out to meet, to invite']
  },
  {
    fields: ['少なくとも', 'すくなくとも', 'at least']
  },
  {
    fields: ['魂', 'たましい', 'soul, spirit']
  },
  {
    fields: ['消す', 'けす', 'turn off']
  },
  {
    fields: ['調子', 'ちょうし', 'condition, state of health']
  },
  {
    fields: ['お互い', 'おたがい', 'each other']
  },
  {
    fields: ['似合う', 'にあう', 'to suit, to match well']
  },
  {
    fields: ['猫', 'ねこ', 'cat']
  },
  {
    fields: ['犬', 'いぬ', 'dog']
  },
  {
    fields: ['お礼', 'おれい', 'gratitude']
  },
  {
    fields: ['後悔', 'こうかい', 'regret']
  },
  {
    fields: ['希望', 'きぼう', 'hope, wish']
  },
  {
    fields: ['下がる', 'さがる', 'to come down, to hang down, to fall']
  },
  {
    fields: ['訪れる', 'おとずれる', 'to visit, to call on']
  },
  {
    fields: ['褒める', 'ほめる', 'to praise, to commend']
  },
  {
    fields: ['性格', 'せいかく', 'character, personality']
  },
  {
    fields: ['写真', 'しゃしん', 'photograph']
  },
  {
    fields: ['薬', 'くすり', 'drug, remedy']
  },
  {
    fields: ['友人', 'ゆうじん', 'friend']
  },
  {
    fields: ['かつて', 'かつて', 'once, formerly']
  },
  {
    fields: ['確実', 'かくじつ', 'certain, secure']
  },
  {
    fields: ['もはや', 'もはや', 'already, no longer']
  },
  {
    fields: ['去る', 'さる', 'to go away, to pass']
  },
  {
    fields: ['一部', 'いちぶ', '(one) part']
  },
  {
    fields: ['遠く', 'とおく', 'far (away)']
  },
  {
    fields: ['腹', 'はら', 'belly']
  },
  {
    fields: ['階段', 'かいだん', 'stairs']
  },
  {
    fields: ['適当', 'てきとう', 'suitable, appropriate']
  },
  {
    fields: ['舌', 'した', 'tongue']
  },
  {
    fields: ['予想', 'よそう', 'prospect, expectation']
  },
  {
    fields: ['興奮', 'こうふん', 'excitement, agitation']
  },
  {
    fields: ['関わる', 'かかわる', 'to involve, to concern']
  },
  {
    fields: ['白', 'しろ', 'white']
  },
  {
    fields: ['進める', 'すすめる', 'to advance, to promote']
  },
  {
    fields: ['真剣', 'しんけん', 'serious, sincere']
  },
  {
    fields: ['迫る', 'せまる', 'to press, to close in on']
  },
  {
    fields: ['ほぼ', 'ほぼ', 'almost, nearly']
  },
  {
    fields: ['ちょうど', 'ちょうど', 'just, as if']
  },
  {
    fields: ['疑問', 'ぎもん', 'question, doubt']
  },
  {
    fields: ['指示', 'しじ', 'instruction, indication']
  },
  {
    fields: ['揺れる', 'ゆれる', 'to shake, to sway']
  },
  {
    fields: ['相当', 'そうとう', 'correspondence, suitability']
  },
  {
    fields: ['楽', 'らく', 'easy, comfortable']
  },
  {
    fields: ['勘違い', 'かんちがい', 'misunderstanding']
  },
  {
    fields: ['警戒', 'けいかい', 'vigilance, precaution']
  },
  {
    fields: ['確かめる', 'たしかめる', 'to check, to make sure of']
  },
  {
    fields: ['月', 'つき', 'moon']
  },
  {
    fields: ['疑う', 'うたがう', 'to doubt, to be suspicious']
  },
  {
    fields: ['電話', 'でんわ', 'telephone']
  },
  {
    fields: ['成長', 'せいちょう', 'growth']
  },
  {
    fields: ['鋭い', 'するどい', 'acute, sharp']
  },
  {
    fields: ['証拠', 'しょうこ', 'proof, evidence']
  },
  {
    fields: ['紹介', 'しょうかい', 'introduction, referral']
  },
  {
    fields: ['実際', 'じっさい', 'reality, actuality']
  },
  {
    fields: ['何でも', 'なんでも', 'anything, whatever']
  },
  {
    fields: ['作業', 'さぎょう', 'work, operation']
  },
  {
    fields: ['重要', 'じゅうよう', 'important, essential']
  },
  {
    fields: ['鍵', 'かぎ', 'key']
  },
  {
    fields: ['衝撃', 'しょうげき', 'impact, shock']
  },
  {
    fields: ['巻き込む', 'まきこむ', 'to roll up, to involve']
  },
  {
    fields: ['差し出す', 'さしだす', 'submit']
  },
  {
    fields: ['軍', 'ぐん', 'army, troops']
  },
  {
    fields: ['そちら', 'そちら', 'there, that way']
  },
  {
    fields: ['悔しい', 'くやしい', 'vexing, frustrating']
  },
  {
    fields: ['抜く', 'ぬく', 'to pull out']
  },
  {
    fields: ['破壊', 'はかい', 'breaking, destruction']
  },
  {
    fields: ['運命', 'うんめい', 'fate, fortune']
  },
  {
    fields: ['案内', 'あんない', '案[あん] 内[ない]']
  },
  {
    fields: ['努力', 'どりょく', 'endeavor, effort']
  },
  {
    fields: ['いずれ', 'いずれ', 'eventually, sometime']
  },
  {
    fields: ['一言', 'ひとこと', 'single word, a few words']
  },
  {
    fields: ['ついに', 'ついに', 'at last, finally']
  },
  {
    fields: ['心臓', 'しんぞう', 'heart']
  },
  {
    fields: ['荷物', 'にもつ', 'baggage, load']
  },
  {
    fields: ['伸びる', 'のびる', 'to stretch, to grow']
  },
  {
    fields: ['両親', 'りょうしん', '(both) parents']
  },
  {
    fields: ['量', 'りょう', 'amount, portion']
  },
  {
    fields: ['払う', 'はらう', 'to pay']
  },
  {
    fields: ['二度と', 'にどと', 'never again']
  },
  {
    fields: ['辺り', 'あたり', 'vicinity, around']
  },
  {
    fields: ['開始', 'かいし', 'beginning']
  },
  {
    fields: ['解放', 'かいほう', 'release, setting free']
  },
  {
    fields: ['仲良く', 'なかよく', 'harmoniously, amicably']
  },
  {
    fields: ['獣', 'けもの', 'beast, brute']
  },
  {
    fields: ['取れる', 'とれる', 'to come off, to be removed']
  },
  {
    fields: ['建物', 'たてもの', 'building, structure']
  },
  {
    fields: ['本来', 'ほんらい', 'originally, essentially']
  },
  {
    fields: ['扱う', 'あつかう', 'to handle, to deal with']
  },
  {
    fields: ['真面目', 'まじめ', 'serious, earnest']
  },
  {
    fields: ['影響', 'えいきょう', 'influence, effect']
  },
  {
    fields: ['真っ赤', 'まっか', 'deep red']
  },
  {
    fields: ['発見', 'はっけん', 'discovery, revelation']
  },
  {
    fields: ['支える', 'ささえる', 'to support, to maintain']
  },
  {
    fields: ['第一', 'だいいち', 'number one, first']
  },
  {
    fields: ['お父さん', 'おとうさん', 'father']
  },
  {
    fields: ['お母さん', 'おかあさん', 'mother']
  },
  {
    fields: ['お兄さん', 'おにいさん', 'older brother']
  },
  {
    fields: ['お姉さん', 'おねえさん', 'older sister']
  },
  {
    fields: ['おじさん', 'おじさん', 'uncle']
  },
  {
    fields: ['おばさん', 'おばさん', 'aunt']
  },
  {
    fields: ['いとこ', 'いとこ', 'cousin']
  },
  {
    fields: ['机', 'つくえ', 'desk, table']
  },
  {
    fields: ['同士', 'どうし', 'of the same kind, each other, fellow']
  },
  {
    fields: ['遅れる', 'おくれる', 'to be late']
  },
  {
    fields: ['車', 'くるま', 'car, automobile']
  },
  {
    fields: ['飛び出す', 'とびだす', 'fly out, dash out']
  },
  {
    fields: ['事態', 'じたい', 'situation, state of affairs']
  },
  {
    fields: ['味方', 'みかた', 'friend, ally']
  },
  {
    fields: ['展開', 'てんかい', 'unfolding, development']
  },
  {
    fields: ['学園', 'がくえん', 'educational institution, school']
  },
  {
    fields: ['怪しい', 'あやしい', 'suspicious, dubious']
  },
  {
    fields: ['型', 'かた', 'type, model']
  },
  {
    fields: ['流れ', 'ながれ', 'flow, stream']
  },
  {
    fields: ['残り', 'のこり', 'rest, leftover']
  },
  {
    fields: ['偶然', 'ぐうぜん', 'chance, accident']
  },
  {
    fields: ['柔らかい', 'やわらかい', 'soft']
  },
  {
    fields: ['感触', 'かんしょく', 'feeling, touch']
  },
  {
    fields: ['女子', 'じょし', 'woman, girl']
  },
  {
    fields: ['無し', 'なし', 'naught, nothing']
  },
  {
    fields: ['壊れる', 'こわれる', 'to break, to fall apart']
  },
  {
    fields: ['苦手', 'にがて', 'hard to deal with, weak point']
  },
  {
    fields: ['試す', 'ためす', 'to try, to test']
  },
  {
    fields: ['立派', 'りっぱ', 'fine, excellent']
  },
  {
    fields: ['回す', 'まわす', 'to turn, to rotate']
  },
  {
    fields: ['なぜか', 'なぜか', 'for some reason']
  },
  {
    fields: ['意見', 'いけん', 'opinion']
  },
  {
    fields: ['大量', 'たいりょう', 'large quantity, great volume']
  },
  {
    fields: ['提案', 'ていあん', 'proposal, proposition']
  },
  {
    fields: ['責任', 'せきにん', 'responsibility, liability']
  },
  {
    fields: ['抑える', 'おさえる', 'to hold back, to restrain']
  },
  {
    fields: ['全力', 'ぜんりょく', "with all of one's strength, at full capacity"]
  },
  {
    fields: ['伸ばす', 'のばす', 'to stretch, to straighten']
  },
  {
    fields: ['客', 'きゃく', 'customer, guest']
  },
  {
    fields: ['王国', 'おうこく', 'kingdom, monarchy']
  },
  {
    fields: ['抵抗', 'ていこう', 'resistance, opposition']
  },
  {
    fields: ['混乱', 'こんらん', 'disorder, chaos']
  },
  {
    fields: ['条件', 'じょうけん', 'condition, item']
  },
  {
    fields: ['迷惑', 'めいわく', 'trouble, annoyance']
  },
  {
    fields: ['例', 'れい', 'example']
  },
  {
    fields: ['頼る', 'たよる', 'to rely on, to depend on']
  },
  {
    fields: ['完璧', 'かんぺき', 'flawless, perfect']
  },
  {
    fields: ['日々', 'ひび', 'daily, every day']
  },
  {
    fields: ['行為', 'こうい', 'act, conduct']
  },
  {
    fields: ['ともかく', 'ともかく', 'at least, at any rate']
  },
  {
    fields: ['減る', 'へる', 'to decrease, to diminish']
  },
  {
    fields: ['嫌う', 'きらう', 'to dislike, to hate']
  },
  {
    fields: ['知り合い', 'しりあい', 'acquaintance']
  },
  {
    fields: ['思考', 'しこう', 'thinking, thought']
  },
  {
    fields: ['解決', 'かいけつ', 'solution, settlement']
  },
  {
    fields: ['冷静', 'れいせい', 'cool, calm']
  },
  {
    fields: ['天', 'てん', 'sky, Heaven']
  },
  {
    fields: ['いつの間にか', 'いつのまにか', 'before one knows, unnoticed']
  },
  {
    fields: ['直す', 'なおす', 'to repair, to cure, to alter']
  },
  {
    fields: ['常に', 'つねに', 'always, constantly']
  },
  {
    fields: ['犯人', 'はんにん', 'criminal, culprit']
  },
  {
    fields: ['許可', 'きょか', 'permission, approval']
  },
  {
    fields: ['閉じる', 'とじる', 'to close']
  },
  {
    fields: ['重ねる', 'かさねる', 'to put on top of something, to pile up']
  },
  {
    fields: ['細い', 'ほそい', 'thin, narrow, slender']
  },
  {
    fields: ['久しぶり', 'ひさしぶり', 'for the first time in a while']
  },
  {
    fields: ['目立つ', 'めだつ', 'to stand out, to be conspicuous']
  },
  {
    fields: ['到着', 'とうちゃく', 'arrival']
  },
  {
    fields: ['押さえる', 'おさえる', 'to hold down, to hold steady']
  },
  {
    fields: ['通う', 'かよう', 'to go to and from, to frequent a place']
  },
  {
    fields: ['殴る', 'なぐる', 'to hit, to strike']
  },
  {
    fields: ['広げる', 'ひろげる', 'to spread, to unfold']
  },
  {
    fields: ['引っ張る', 'ひっぱる', 'to pull, to drag']
  },
  {
    fields: ['いつまでも', 'いつまでも', 'endlessly, as long as one likes']
  },
  {
    fields: ['間に合う', 'まにあう', 'to be in time, to answer the purpose, can do without']
  },
  {
    fields: ['了解', 'りょうかい', 'consent, understanding, roger that']
  },
  {
    fields: ['番', 'ばん', "one's turn"]
  },
  {
    fields: ['戦争', 'せんそう', 'war, battle']
  },
  {
    fields: ['寒い', 'さむい', 'cold (temperature)']
  },
  {
    fields: ['見事', 'みごと', 'splendid, admirable']
  },
  {
    fields: ['酒', 'さけ', 'alcoholic drink, Japanese rice wine']
  },
  {
    fields: ['恋人', 'こいびと', 'lover, sweetheart']
  },
  {
    fields: ['一切', 'いっさい', 'not at all, absolutely nothing']
  },
  {
    fields: ['穴', 'あな', 'hole, cavity']
  },
  {
    fields: ['依頼', 'いらい', 'request, commission']
  },
  {
    fields: ['中身', 'なかみ', 'content, interior']
  },
  {
    fields: ['多少', 'たしょう', 'a little, somewhat']
  },
  {
    fields: ['真実', 'しんじつ', 'truth, reality']
  },
  {
    fields: ['見た目', 'みため', 'outward appearance']
  },
  {
    fields: ['間違い', 'まちがい', 'mistake, error']
  },
  {
    fields: ['青い', 'あおい', 'blue']
  },
  {
    fields: ['辛い', 'からい', 'spicy']
  },
  {
    fields: ['辛い', 'つらい', 'difficult, harsh']
  },
  {
    fields: ['対応', 'たいおう', 'correspondence, equivalence, response']
  },
  {
    fields: ['光る', 'ひかる', 'to shine, to emit light']
  },
  {
    fields: ['苦労', 'くろう', 'difficulty, hardship']
  },
  {
    fields: ['通じる', 'つうじる', 'to pass, to communicate with']
  },
  {
    fields: ['罪', 'つみ', 'crime, sin']
  },
  {
    fields: ['授業', 'じゅぎょう', 'class, lesson']
  },
  {
    fields: ['最悪', 'さいあく', 'worst, terrible']
  },
  {
    fields: ['差', 'さ', 'difference']
  },
  {
    fields: ['信用', 'しんよう', 'trust, credit']
  },
  {
    fields: ['壊す', 'こわす', 'to break, to destroy, to smash']
  },
  {
    fields: ['式', 'しき', 'ceremony']
  },
  {
    fields: ['人形', 'にんぎょう', 'doll']
  },
  {
    fields: ['結ぶ', 'むすぶ', 'to tie, to join']
  },
  {
    fields: ['あんなに', 'あんなに', 'that much, such...']
  },
  {
    fields: ['計画', 'けいかく', 'plan, project']
  },
  {
    fields: ['囲む', 'かこむ', 'to enclose, to encircle']
  },
  {
    fields: ['知識', 'ちしき', 'knowledge']
  },
  {
    fields: ['切り', 'きり', 'end, place to stop']
  },
  {
    fields: ['注意', 'ちゅうい', 'care, watch out']
  },
  {
    fields: ['言い方', 'いいかた', 'way of speaking, expression']
  },
  {
    fields: ['経つ', 'たつ', 'to pass, to elapse']
  },
  {
    fields: ['背', 'せ', 'height, stature']
  },
  {
    fields: ['問う', 'とう', 'to ask, to inquire']
  },
  {
    fields: ['恋', 'こい', 'love, romance']
  },
  {
    fields: ['とんでもない', 'とんでもない', 'unthinkable, outrageous']
  },
  {
    fields: ['中心', 'ちゅうしん', 'center, middle']
  },
  {
    fields: ['汗', 'あせ', 'sweat']
  },
  {
    fields: ['異常', 'いじょう', 'extraordinary, exceptional']
  },
  {
    fields: ['非常', 'ひじょう', 'emergency, calamity']
  },
  {
    fields: ['膝', 'ひざ', 'knee']
  },
  {
    fields: ['わずか', 'わずか', 'few, little']
  },
  {
    fields: ['役', 'やく', 'role, part']
  },
  {
    fields: ['焦る', 'あせる', 'to feel pressured, to feel hurried']
  },
  {
    fields: ['川', 'かわ', 'river, stream']
  },
  {
    fields: ['悪魔', 'あくま', 'demon, devil']
  },
  {
    fields: ['唯一', 'ゆいいつ', '(the) only, unique']
  },
  {
    fields: ['もうすぐ', 'もうすぐ', 'soon, before long']
  },
  {
    fields: ['中央', 'ちゅうおう', 'center']
  },
  {
    fields: ['突っ込む', 'つっこむ', 'to thrust in, to dash into']
  },
  {
    fields: ['技術', 'ぎじゅつ', 'technology']
  },
  {
    fields: ['素晴らしい', 'すばらしい', 'splendid, excellent']
  },
  {
    fields: ['単純', 'たんじゅん', 'simple, uncomplicated']
  },
  {
    fields: ['穏やか', 'おだやか', 'calm, mild']
  },
  {
    fields: ['撃つ', 'うつ', 'to fire, to shoot']
  },
  {
    fields: ['拾う', 'ひろう', 'to pick up, to find']
  },
  {
    fields: ['完成', 'かんせい', 'completion, finish']
  },
  {
    fields: ['毒', 'どく', 'poison, harm']
  },
  {
    fields: ['馬', 'うま', 'horse']
  },
  {
    fields: ['覆う', 'おおう', 'to cover, to hide']
  },
  {
    fields: ['趣味', 'しゅみ', 'hobby']
  },
  {
    fields: ['どうにか', 'どうにか', 'somehow']
  },
  {
    fields: ['何となく', 'なんとなく', 'for some reason']
  },
  {
    fields: ['価値', 'かち', 'value, merit']
  },
  {
    fields: ['見守る', 'みまもる', 'to watch, to keep watch over']
  },
  {
    fields: ['安全', 'あんぜん', 'safety, security']
  },
  {
    fields: ['連れてくる', 'つれてくる', 'to bring over, to bring along']
  },
  {
    fields: ['そば', 'そば', 'side, vicinity']
  },
  {
    fields: ['万', 'まん', 'ten thousand']
  },
  {
    fields: ['額', 'がく', 'picture frame']
  },
  {
    fields: ['受け止める', 'うけとめる', 'catch, receive']
  },
  {
    fields: ['素敵', 'すてき', 'lovely, superb']
  },
  {
    fields: ['正体', 'しょうたい', 'true character, true form']
  },
  {
    fields: ['あっさり', 'あっさり', 'lightly, easily, simply']
  },
  {
    fields: ['吸う', 'すう', 'to smoke']
  },
  {
    fields: ['鳴る', 'なる', 'to ring, to beep']
  },
  {
    fields: ['研究', 'けんきゅう', 'research']
  },
  {
    fields: ['まとめる', 'まとめる', 'to gather together, to put in order']
  },
  {
    fields: ['別れる', 'わかれる', 'to separate, to part from']
  },
  {
    fields: ['ふざける', 'ふざける', 'to mess around, to fool around']
  },
  {
    fields: ['着替える', 'きがえる', 'to change clothes']
  },
  {
    fields: ['箱', 'はこ', 'box, case']
  },
  {
    fields: ['無言', 'むごん', 'silence, muteness']
  },
  {
    fields: ['何で', 'なんで', 'why, what for']
  },
  {
    fields: ['裏切る', 'うらぎる', 'to betray']
  },
  {
    fields: ['焼く', 'やく', 'to burn, to bake']
  },
  {
    fields: ['怪我', 'けが', 'injury']
  },
  {
    fields: ['門', 'もん', 'gate, entrance']
  },
  {
    fields: ['不可能', 'ふかのう', 'impossible']
  },
  {
    fields: ['妻', 'つま', 'wife']
  },
  {
    fields: ['時には', 'ときには', 'occasionally, at times']
  },
  {
    fields: ['発言', 'はつげん', 'speech']
  },
  {
    fields: ['正確', 'せいかく', 'accurate, precise']
  },
  {
    fields: ['認識', 'にんしき', 'recognition, acknowledgment']
  },
  {
    fields: ['速度', 'そくど', 'velocity, speed']
  },
  {
    fields: ['謎', 'なぞ', 'mystery, puzzle']
  },
  {
    fields: ['文字', 'もじ', 'character, letter']
  },
  {
    fields: ['吐く', 'はく', 'to spew, to vomit, to holler']
  },
  {
    fields: ['鬼', 'おに', 'demon, ogre']
  },
  {
    fields: ['刺激', 'しげき', 'stimulus, stimulation']
  },
  {
    fields: ['最も', 'もっとも', 'the most']
  },
  {
    fields: ['制服', 'せいふく', 'uniform']
  },
  {
    fields: ['爆発', 'ばくはつ', 'blast, explosion']
  },
  {
    fields: ['訓練', 'くんれん', 'training, drill']
  },
  {
    fields: ['振り向く', 'ふりむく', 'to turn around, to look back']
  },
  {
    fields: ['脱ぐ', 'ぬぐ', 'to remove clothes, to take off']
  },
  {
    fields: ['信頼', 'しんらい', 'trust, faith']
  },
  {
    fields: ['寄る', 'よる', 'to stop by, to drop by']
  },
  {
    fields: ['飛ばす', 'とばす', 'to fly, to launch in the air']
  },
  {
    fields: ['貸す', 'かす', 'to lend, to lease']
  },
  {
    fields: ['パン', 'ぱん', 'bread']
  },
  {
    fields: ['ありがたい', 'ありがたい', 'welcome, grateful']
  },
  {
    fields: ['赤', 'あか', 'red']
  },
  {
    fields: ['大体', 'だいたい', 'mostly']
  },
  {
    fields: ['きちんと', 'きちんと', 'neatly, accurately']
  },
  {
    fields: ['喉', 'のど', 'throat']
  },
  {
    fields: ['少々', 'しょうしょう', 'a little, a few']
  },
  {
    fields: ['有名', 'ゆうめい', 'famous']
  },
  {
    fields: ['船', 'ふね', 'ship, boat']
  },
  {
    fields: ['転がる', 'ころがる', 'to roll over, to tumble']
  },
  {
    fields: ['切れる', 'きれる', 'to be able to cut, to run out, to expire']
  },
  {
    fields: ['たった', 'たった', 'only, merely']
  },
  {
    fields: ['話題', 'わだい', 'topic of conversation']
  },
  {
    fields: ['濡れる', 'ぬれる', 'to get wet']
  },
  {
    fields: ['ついでに', 'ついでに', "on the way, while one's at it"]
  },
  {
    fields: ['呼び出す', 'よびだす', 'to call someone to']
  },
  {
    fields: ['確信', 'かくしん', 'firm belief, conviction']
  },
  {
    fields: ['込める', 'こめる', 'to put in, to concentrate on']
  },
  {
    fields: ['自覚', 'じかく', 'awareness']
  },
  {
    fields: ['空く', 'あく', 'to become available or vacant']
  },
  {
    fields: ['空く', 'すく', 'to be empty, to become less crowded']
  },
  {
    fields: ['警察', 'けいさつ', 'police']
  },
  {
    fields: ['悲鳴', 'ひめい', 'shriek, scream']
  },
  {
    fields: ['捕まえる', 'つかまえる', 'to arrest, to capture']
  },
  {
    fields: ['早速', 'さっそく', 'immediately']
  },
  {
    fields: ['お腹', 'おなか', 'stomach, belly']
  },
  {
    fields: ['掃除', 'そうじ', 'cleaning']
  },
  {
    fields: ['硬い', 'かたい', 'hard, stiff']
  },
  {
    fields: ['際', 'さい', 'occasion, time']
  },
  {
    fields: ['漏らす', 'もらす', 'to give away, to let leak']
  },
  {
    fields: ['面', 'めん', 'surface, aspect']
  },
  {
    fields: ['不満', 'ふまん', 'dissatisfaction, discontent']
  },
  {
    fields: ['驚き', 'おどろき', 'surprise, amazement']
  },
  {
    fields: ['旅', 'たび', 'journey, travel']
  },
  {
    fields: ['絵', 'え', 'picture, drawing']
  },
  {
    fields: ['組む', 'くむ', 'to pair up, to partner with']
  },
  {
    fields: ['沈黙', 'ちんもく', 'reticence, silence']
  },
  {
    fields: ['張る', 'はる', 'to strain, to be stretched']
  },
  {
    fields: ['告白', 'こくはく', 'confession, admission']
  },
  {
    fields: ['舐める', 'なめる', 'to lick']
  },
  {
    fields: ['潰す', 'つぶす', 'to crush, to smash']
  },
  {
    fields: ['含める', 'ふくめる', 'to include']
  },
  {
    fields: ['時期', 'じき', 'time, season, period']
  },
  {
    fields: ['活動', 'かつどう', 'activity']
  },
  {
    fields: ['育てる', 'そだてる', 'to bring up, to breed']
  },
  {
    fields: ['優秀', 'ゆうしゅう', 'excellent, exceptional']
  },
  {
    fields: ['予感', 'よかん', 'hunch, premonition']
  },
  {
    fields: ['解く', 'とく', 'to solve']
  },
  {
    fields: ['元々', 'もともと', 'originally, by nature']
  },
  {
    fields: ['溢れる', 'あふれる', 'to overflow, to flood']
  },
  {
    fields: ['発生', 'はっせい', 'occurrence, happening']
  },
  {
    fields: ['微妙', 'びみょう', 'subtle, delicate, sensitive, iffy']
  },
  {
    fields: ['違い', 'ちがい', 'difference, mistake']
  },
  {
    fields: ['直後', 'ちょくご', 'immediately after']
  },
  {
    fields: ['地下', 'ちか', 'underground']
  },
  {
    fields: ['香り', 'かおり', 'perfume, fragrance']
  },
  {
    fields: ['効く', 'きく', 'to be effective']
  },
  {
    fields: ['使用', 'しよう', 'usage']
  },
  {
    fields: ['道具', 'どうぐ', 'tool']
  },
  {
    fields: ['願い', 'ねがい', 'wish, request']
  },
  {
    fields: ['洗う', 'あらう', 'to wash']
  },
  {
    fields: ['手段', 'しゅだん', 'means, way']
  },
  {
    fields: ['誤解', 'ごかい', 'misunderstanding']
  },
  {
    fields: ['応援', 'おうえん', 'cheering']
  },
  {
    fields: ['含む', 'ふくむ', 'to contain, to include']
  },
  {
    fields: ['当時', 'とうじ', 'at that time, at the present time']
  },
  {
    fields: ['勝利', 'しょうり', 'triumph, victory']
  },
  {
    fields: ['降る', 'ふる', 'to fall (e.g. rain)']
  },
  {
    fields: ['雪', 'ゆき', 'snow, snowfall']
  },
  {
    fields: ['入り口', 'いりぐち', 'entrance']
  },
  {
    fields: ['一方', 'いっぽう', 'one way']
  },
  {
    fields: ['古い', 'ふるい', 'old']
  },
  {
    fields: ['役に立つ', 'やくにたつ', 'to be useful, to be helpful']
  },
  {
    fields: ['懐かしい', 'なつかしい', 'longed-for, nostalgic']
  },
  {
    fields: ['もしも', 'もしも', 'if, if ever']
  },
  {
    fields: ['才能', 'さいのう', 'talent, ability']
  },
  {
    fields: ['逃げ出す', 'にげだす', 'make a break for, run off']
  },
  {
    fields: ['様々', 'さまざま', 'various, diverse']
  },
  {
    fields: ['病院', 'びょういん', 'hospital']
  },
  {
    fields: ['比べる', 'くらべる', 'to compare, to contrast']
  },
  {
    fields: ['氷', 'こおり', 'ice']
  },
  {
    fields: ['狭い', 'せまい', 'narrow, cramped']
  },
  {
    fields: ['神様', 'かみさま', 'God, the divine']
  },
  {
    fields: ['動揺', 'どうよう', 'shaking, turbulence']
  },
  {
    fields: ['長', 'ちょう', 'chief, head']
  },
  {
    fields: ['なお', 'なお', 'still, in addition']
  },
  {
    fields: ['物語', 'ものがたり', 'story, tale']
  },
  {
    fields: ['文句', 'もんく', 'complaint']
  },
  {
    fields: ['至る', 'いたる', 'to come to, to reach']
  },
  {
    fields: ['魚', 'さかな', 'fish']
  },
  {
    fields: ['鳥', 'とり', 'bird']
  },
  {
    fields: ['映る', 'うつる', 'to be reflected, to appear']
  },
  {
    fields: ['一生', 'いっしょう', 'a lifetime']
  },
  {
    fields: ['紙', 'かみ', 'paper']
  },
  {
    fields: ['申す', 'もうす', 'to be called..., to speak (humble form)']
  },
  {
    fields: ['複雑', 'ふくざつ', 'complicated, intricate']
  },
  {
    fields: ['投げる', 'なげる', 'to throw, to abandon']
  },
  {
    fields: ['出来事', 'できごと', 'occurrence, incident']
  },
  {
    fields: ['部下', 'ぶか', 'subordinate']
  },
  {
    fields: ['たっぷり', 'たっぷり', 'fully, amply']
  },
  {
    fields: ['実力', 'じつりょく', 'real ability, capability']
  },
  {
    fields: ['左右', 'さゆう', 'right and left']
  },
  {
    fields: ['選択', 'せんたく', 'choice, selection']
  },
  {
    fields: ['調査', 'ちょうさ', 'investigation, inquiry']
  },
  {
    fields: ['例えば', 'たとえば', 'for example']
  },
  {
    fields: ['見送る', 'みおくる', 'to see (someone) off']
  },
  {
    fields: ['もっとも', 'もっとも', 'quite right, reasonable']
  },
  {
    fields: ['従う', 'したがう', 'to follow, to obey']
  },
  {
    fields: ['通す', 'とおす', 'to let pass, to run through']
  },
  {
    fields: ['間違える', 'まちがえる', 'to mistake, to confuse']
  },
  {
    fields: ['体力', 'たいりょく', 'stamina, endurance']
  },
  {
    fields: ['果たす', 'はたす', 'to accomplish, to carry out, to fulfill']
  },
  {
    fields: ['騒ぐ', 'さわぐ', 'to make a racket, to mess around']
  },
  {
    fields: ['飛び込む', 'とびこむ', 'to dive into']
  },
  {
    fields: ['増す', 'ます', 'to increase, to augment, to rise']
  },
  {
    fields: ['ぶつかる', 'ぶつかる', 'to hit, to bump into']
  },
  {
    fields: ['思い出', 'おもいで', 'recollections, memory']
  },
  {
    fields: ['天井', 'てんじょう', 'ceiling']
  },
  {
    fields: ['兵士', 'へいし', 'soldier']
  },
  {
    fields: ['満ちる', 'みちる', 'to fill, to become full']
  },
  {
    fields: ['たまらない', 'たまらない', "can't stand, can't put up with"]
  },
  {
    fields: ['味わう', 'あじわう', 'to taste, to appreciate']
  },
  {
    fields: ['出かける', 'でかける', 'to go out']
  },
  {
    fields: ['背負う', 'せおう', "to carry on one's back, to shoulder"]
  },
  {
    fields: ['揃う', 'そろう', 'to be (all) together']
  },
  {
    fields: ['呼吸', 'こきゅう', 'breathing, respiration']
  },
  {
    fields: ['真似', 'まね', 'imitation, mimicry']
  },
  {
    fields: ['人気', 'にんき', 'popularity']
  },
  {
    fields: ['偉い', 'えらい', 'great, famous']
  },
  {
    fields: ['いよいよ', 'いよいよ', 'finally, at last']
  },
  {
    fields: ['対象', 'たいしょう', 'target, object']
  },
  {
    fields: ['整える', 'ととのえる', 'to arrange, to adjust']
  },
  {
    fields: ['沈む', 'しずむ', 'to sink, to set']
  },
  {
    fields: ['地上', 'ちじょう', 'above ground']
  },
  {
    fields: ['用事', 'ようじ', 'things to do, errand, business']
  },
  {
    fields: ['よる', 'よる', 'to be caused by']
  },
  {
    fields: ['反対', 'はんたい', 'oppose, object']
  },
  {
    fields: ['保つ', 'たもつ', 'to preserve, to endure']
  },
  {
    fields: ['歴史', 'れきし', 'history']
  },
  {
    fields: ['島', 'しま', 'island, isle']
  },
  {
    fields: ['それほど', 'それほど', 'so much, that much']
  },
  {
    fields: ['実に', 'じつに', 'truly, surely']
  },
  {
    fields: ['恐れる', 'おそれる', 'to fear, to apprehend']
  },
  {
    fields: ['あくまで', 'あくまで', 'to the end, persistently']
  },
  {
    fields: ['鼻', 'はな', 'nose']
  },
  {
    fields: ['担当', 'たんとう', 'person in charge']
  },
  {
    fields: ['片手', 'かたて', 'one hand']
  },
  {
    fields: ['幼い', 'おさない', 'young, childish']
  },
  {
    fields: ['学ぶ', 'まなぶ', 'to learn, to study']
  },
  {
    fields: ['強引', 'ごういん', 'overbearing, pushy']
  },
  {
    fields: ['捲る', 'まくる', 'to turn up, to roll up (e.g. sleeves)']
  },
  {
    fields: ['漏れる', 'もれる', 'to leak, to be disclosed']
  },
  {
    fields: ['全体', 'ぜんたい', 'whole, total']
  },
  {
    fields: ['度', 'ど', 'degree, extent']
  },
  {
    fields: ['情けない', 'なさけない', 'pathetic, shameful']
  },
  {
    fields: ['太陽', 'たいよう', 'sun']
  },
  {
    fields: ['甘える', 'あまえる', 'to depend on, to take advantage of']
  },
  {
    fields: ['踏む', 'ふむ', 'to step on, to tread on']
  },
  {
    fields: ['印象', 'いんしょう', 'impression']
  },
  {
    fields: ['死体', 'したい', 'corpse, body']
  },
  {
    fields: ['支配', 'しはい', 'control, management']
  },
  {
    fields: ['現場', 'げんば', 'actual spot, job site']
  },
  {
    fields: ['絶望', 'ぜつぼう', 'despair, hopelessness']
  },
  {
    fields: ['察する', 'さっする', 'to sense, to guess']
  },
  {
    fields: ['以来', 'いらい', 'since']
  },
  {
    fields: ['漂う', 'ただよう', 'to drift, to float']
  },
  {
    fields: ['探る', 'さぐる', 'to probe, to search into']
  },
  {
    fields: ['最大', 'さいだい', 'biggest, largest']
  },
  {
    fields: ['下げる', 'さげる', 'to lower, to turn down']
  },
  {
    fields: ['捕まる', 'つかまる', 'to be caught, to be arrested']
  },
  {
    fields: ['戸惑う', 'とまどう', 'to be perplexed, to be bewildered']
  },
  {
    fields: ['言い訳', 'いいわけ', 'apology, excuse']
  },
  {
    fields: ['証明', 'しょうめい', 'proof, evidence']
  },
  {
    fields: ['参る', 'まいる', 'to go, come (humble form)']
  },
  {
    fields: ['見下ろす', 'みおろす', 'to look down, to overlook']
  },
  {
    fields: ['燃える', 'もえる', 'to burn, to get fired up']
  },
  {
    fields: ['たまる', 'たまる', 'to accumulate, to store up']
  },
  {
    fields: ['暴れる', 'あばれる', 'to act violently, to rage about']
  },
  {
    fields: ['越える', 'こえる', 'to go over, to go across, to go beyond']
  },
  {
    fields: ['精神', 'せいしん', 'mind, spirit']
  },
  {
    fields: ['男子', 'だんし', 'boy, young man']
  },
  {
    fields: ['宣言', 'せんげん', 'declaration']
  },
  {
    fields: ['挟む', 'はさむ', 'to hold between, to put between, to pinch']
  },
  {
    fields: ['防ぐ', 'ふせぐ', 'to prevent, to defend']
  },
  {
    fields: ['預ける', 'あずける', 'to deposit, to entrust']
  },
  {
    fields: ['限る', 'かぎる', 'to be limited to']
  },
  {
    fields: ['責める', 'せめる', 'to blame']
  },
  {
    fields: ['崩れる', 'くずれる', 'to crumble, to collapse']
  },
  {
    fields: ['一度も', 'いちども', '(not) even once, (not) ever']
  },
  {
    fields: ['ぼんやり', 'ぼんやり', 'vaguely, absent-mindedly']
  },
  {
    fields: ['その内', 'そのうち', 'before long, sooner or later']
  },
  {
    fields: ['鏡', 'かがみ', 'mirror']
  },
  {
    fields: ['貫く', 'つらぬく', 'to go through, to carry out']
  },
  {
    fields: ['固まる', 'かたまる', 'to harden, to solidify']
  },
  {
    fields: ['平和', 'へいわ', 'peace, harmony']
  },
  {
    fields: ['意志', 'いし', 'will, volition']
  },
  {
    fields: ['下手', 'へた', 'bad at, poor']
  },
  {
    fields: ['続き', 'つづき', 'continuation, sequel']
  },
  {
    fields: ['祈る', 'いのる', 'to pray']
  },
  {
    fields: ['午後', 'ごご', 'afternoon, p.m.']
  },
  {
    fields: ['同様', 'どうよう', 'similar']
  },
  {
    fields: ['外れる', 'はずれる', 'to come undone, to be removed']
  },
  {
    fields: ['歌う', 'うたう', 'to sing']
  },
  {
    fields: ['回', 'かい', 'times']
  },
  {
    fields: ['固い', 'かたい', 'stiff, tight']
  },
  {
    fields: ['最強', 'さいきょう', 'strongest']
  },
  {
    fields: ['弾く', 'ひく', 'to strum (e.g. a guitar), to flick']
  },
  {
    fields: ['正解', 'せいかい', 'right answer, correct solution']
  },
  {
    fields: ['きつい', 'きつい', 'tight, tough']
  },
  {
    fields: ['お陰', 'おかげ', 'help, thanks to']
  },
  {
    fields: ['地獄', 'じごく', 'hell']
  },
  {
    fields: ['年齢', 'ねんれい', 'age, years']
  },
  {
    fields: ['病気', 'びょうき', 'illness']
  },
  {
    fields: ['携帯', 'けいたい', 'cell phone']
  },
  {
    fields: ['ますます', 'ますます', 'increasingly']
  },
  {
    fields: ['並べる', 'ならべる', 'to line up, to display, to set up']
  },
  {
    fields: ['契約', 'けいやく', 'contract, agreement']
  },
  {
    fields: ['永遠', 'えいえん', 'eternity']
  },
  {
    fields: ['不意に', 'ふいに', 'suddenly, unexpectedly']
  },
  {
    fields: ['呪い', 'のろい', 'curse, spell']
  },
  {
    fields: ['組', 'くみ', 'school class']
  },
  {
    fields: ['踊る', 'おどる', 'to dance']
  },
  {
    fields: ['目覚める', 'めざめる', "to wake (up), to come to one's senses"]
  },
  {
    fields: ['事故', 'じこ', 'accident, incident']
  },
  {
    fields: ['袋', 'ふくろ', 'bag, sack']
  },
  {
    fields: ['派手', 'はで', 'showy, flashy']
  },
  {
    fields: ['今更', 'いまさら', "now (when it's too late), at this stage"]
  },
  {
    fields: ['真っ直ぐ', 'まっすぐ', 'straight ahead, straightforward']
  },
  {
    fields: ['油断', 'ゆだん', 'inattention, carelessness']
  },
  {
    fields: ['ぶつける', 'ぶつける', 'to bump']
  },
  {
    fields: ['育つ', 'そだつ', 'to be brought up, to grow']
  },
  {
    fields: ['傷つく', 'きずつく', 'to get hurt']
  },
  {
    fields: ['発する', 'はっする', 'to emit, to radiate']
  },
  {
    fields: ['終了', 'しゅうりょう', 'end, expiry']
  },
  {
    fields: ['足音', 'あしおと', 'sound of footsteps']
  },
  {
    fields: ['決意', 'けつい', 'decision, resolution']
  },
  {
    fields: ['感心', 'かんしん', 'admiration']
  },
  {
    fields: ['飲み込む', 'のみこむ', 'to swallow, to grasp']
  },
  {
    fields: ['仮に', 'かりに', 'supposing that, even if']
  },
  {
    fields: ['お菓子', 'おかし', 'sweets, snacks']
  },
  {
    fields: ['染まる', 'そまる', 'to be dyed, to be tainted']
  },
  {
    fields: ['笑い', 'わらい', 'laughter, laugh']
  },
  {
    fields: ['買い物', 'かいもの', 'shopping']
  },
  {
    fields: ['歌', 'うた', 'song']
  },
  {
    fields: ['庭', 'にわ', 'garden, yard']
  },
  {
    fields: ['生き物', 'いきもの', 'living creature']
  },
  {
    fields: ['特殊', 'とくしゅ', 'special, unique']
  },
  {
    fields: ['連れて行く', 'つれていく', 'to take (a person) along']
  },
  {
    fields: ['現状', 'げんじょう', 'present condition']
  },
  {
    fields: ['大分', 'だいぶ', 'very, greatly']
  },
  {
    fields: ['底', 'そこ', 'bottom']
  },
  {
    fields: ['学生', 'がくせい', 'student']
  },
  {
    fields: ['丁寧', 'ていねい', 'polite, careful']
  },
  {
    fields: ['範囲', 'はんい', 'range, scope']
  },
  {
    fields: ['テレビ', 'テレビ', 'television']
  },
  {
    fields: ['美人', 'びじん', 'beautiful woman']
  },
  {
    fields: ['技', 'わざ', 'skill']
  },
  {
    fields: ['将来', 'しょうらい', "one's future, in the future"]
  },
  {
    fields: ['記録', 'きろく', 'record, documentation']
  },
  {
    fields: ['大人しい', 'おとなしい', 'tame, quiet, obedient, calm']
  },
  {
    fields: ['骨', 'ほね', 'bone']
  },
  {
    fields: ['目標', 'もくひょう', 'target, goal']
  },
  {
    fields: ['肉体', 'にくたい', 'body, flesh']
  },
  {
    fields: ['届ける', 'とどける', 'to deliver, to give notice']
  },
  {
    fields: ['足元', 'あしもと', 'step, under foot']
  },
  {
    fields: ['捜す', 'さがす', 'to look for, to search for']
  },
  {
    fields: ['わざと', 'わざと', 'on purpose']
  },
  {
    fields: ['いかが', 'いかが', 'how, would you like']
  },
  {
    fields: ['布', 'ぬの', 'cloth']
  },
  {
    fields: ['種類', 'しゅるい', 'kind, species']
  },
  {
    fields: ['満たす', 'みたす', 'to fill, to satisfy']
  },
  {
    fields: ['景色', 'けしき', 'scenery']
  },
  {
    fields: ['勇気', 'ゆうき', 'courage, nerve']
  },
  {
    fields: ['強化', 'きょうか', 'strengthening']
  },
  {
    fields: ['加える', 'くわえる', 'to add, to include']
  },
  {
    fields: ['言い出す', 'いいだす', 'begin to say, be the first to say, propose']
  },
  {
    fields: ['収まる', 'おさまる', 'to be settled (e.g. a dispute), to be contained within']
  },
  {
    fields: ['組織', 'そしき', 'organization, structure']
  },
  {
    fields: ['隙間', 'すきま', 'crack, gap']
  },
  {
    fields: ['本日', 'ほんじつ', 'today']
  },
  {
    fields: ['先日', 'せんじつ', 'the other day, a few days ago']
  },
  {
    fields: ['月曜日', 'げつようび', 'Monday']
  },
  {
    fields: ['火曜日', 'かようび', 'Tuesday']
  },
  {
    fields: ['水曜日', 'すいようび', 'Wednesday']
  },
  {
    fields: ['木曜日', 'もくようび', 'Thursday']
  },
  {
    fields: ['金曜日', 'きんようび', 'Friday']
  },
  {
    fields: ['土曜日', 'どようび', 'Saturday']
  },
  {
    fields: ['日曜日', 'にちようび', 'Sunday']
  },
  {
    fields: ['一つ', 'ひとつ', 'one (thing)']
  },
  {
    fields: ['二つ', 'ふたつ', 'two (things)']
  },
  {
    fields: ['三つ', 'みっつ', 'three (things)']
  },
  {
    fields: ['四つ', 'よっつ', 'four (things)']
  },
  {
    fields: ['五つ', 'いつつ', 'five (things)']
  },
  {
    fields: ['六つ', 'むっつ', 'six (things)']
  },
  {
    fields: ['七つ', 'ななつ', 'seven (things)']
  },
  {
    fields: ['八つ', 'やっつ', 'eight (things)']
  },
  {
    fields: ['九つ', 'ここのつ', 'nine (things)']
  },
  {
    fields: ['評価', 'ひょうか', 'evaluation, appraisal, recognition']
  }
]

const MIN_EF = 1.3
// const DAILY_NEW_LIMIT = 10

export interface VocabEntry {
  word: string
  meaning: string
  easeFactor: number
  interval: number
  repetitions: number
  dueDate: number
  lastReviewed: number
  isActive: boolean
  lapseState: boolean
}

const createEntry = (word: string, meaning: string): VocabEntry => {
  const now = Date.now()
  return {
    word,
    meaning,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    dueDate: now,
    lastReviewed: now,
    isActive: false,
    lapseState: false
  }
}

const updateEntry = (entry: VocabEntry, quality: 1 | 3 | 4 | 5): VocabEntry => {
  const now = Date.now()
  let { easeFactor, repetitions, interval, lapseState } = entry
  let dueDate = now

  if (quality >= 3) {
    repetitions += 1

    if (!lapseState) {
      if (repetitions === 1) {
        interval = 0 // Lernphase Schritt 1: 10 Minuten
        dueDate = now + 10 * 60 * 1000
      } else if (repetitions === 2) {
        interval = 1 // Lernphase Schritt 2: 1 Tag
        dueDate = now + interval * 24 * 60 * 60 * 1000
      } else if (repetitions === 3 && !lapseState) {
        interval = 6 // Start Intervallphase
        dueDate = now + interval * 24 * 60 * 60 * 1000
      } else {
        interval = Math.round(interval * easeFactor)
        dueDate = now + interval * 24 * 60 * 60 * 1000
      }
      easeFactor = Math.max(MIN_EF, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
    } else {
      if (repetitions === 1) {
        dueDate = now + 10 * 60 * 1000
      } else {
        interval = Math.round(interval * easeFactor)
        dueDate = now + interval * 24 * 60 * 60 * 1000
        repetitions = 4
        lapseState = false
        easeFactor = Math.max(MIN_EF, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
      }
    }
  } else {
    // Bei Fehler → Zurück zur Lernphase
    interval = Math.round(entry.interval * 0.7)
    dueDate = now
    lapseState = repetitions >= 3 ? true : lapseState
    repetitions = 0
    easeFactor = Math.max(MIN_EF, easeFactor - 0.2) <= 1.3 ? Math.max(MIN_EF, easeFactor - 0.2) : 1.3
  }

  return {
    ...entry,
    easeFactor,
    interval,
    repetitions,
    lapseState,
    lastReviewed: now,
    dueDate
  }
}

export const useVocabStore = create<{
  vocab: Record<string, VocabEntry>
  lastActivation: number
  update: (word: string, quality: 1 | 3 | 4 | 5) => void
  getNext: () => VocabEntry | null
  activateNow: (word: string) => void
  markKnown: (word: string) => void
  resetWord: (word: VocabEntry) => void
  reset: () => void
  setApiKey: (word: string) => void
  getApiKey: () => string
}>(() => {
  const load = () => {
    const raw = localStorage.getItem('vocab')
    const time = Number(localStorage.getItem('lastActivation') || '0')
    if (raw) return { vocab: JSON.parse(raw), lastActivation: time }

    const entries = Object.fromEntries(initialWords.map((w) => [w, createEntry(`${w.fields[0]}/${w.fields[1]}`, w.fields[2])]))
    return { vocab: entries, lastActivation: 0 }
  }

  const save = (vocab: Record<string, VocabEntry>, lastActivation: number) => {
    localStorage.setItem('vocab', JSON.stringify(vocab))
    localStorage.setItem('lastActivation', String(lastActivation))
  }

  const { vocab: initialVocab, lastActivation } = load()

  return {
    vocab: initialVocab,
    lastActivation,
    update: (word, quality) => {
      const state = useVocabStore.getState()
      const updated = updateEntry(state.vocab[word], quality)
      const newVocab = { ...state.vocab, [word]: updated }
      save(newVocab, state.lastActivation)
      useVocabStore.setState({ vocab: newVocab })
    },
    getNext: (): VocabEntry | null => {
      const now = Date.now()
      const state = useVocabStore.getState()
      const { vocab, lastActivation } = state

      // Neue Aktivierung falls neuer Tag
      const lastDay = new Date(lastActivation).toDateString()
      const today = new Date(now).toDateString()

      const updatedVocab = { ...vocab }
      if (lastDay !== today) {
        // Neue Aktivierung von 10 Wörtern pro Tag
        // const inactive = Object.values(vocab).filter((v) => !v.isActive)
        // const toActivate = inactive.slice(0, DAILY_NEW_LIMIT)

        // for (const entry of toActivate) {
        //   updatedVocab[entry.word] = { ...entry, isActive: true }
        // }

        const active = Object.values(vocab).filter((v) => v.isActive)

        for (const entry of active) {
          if (entry.dueDate < now * 24 * 60 * 60 * 1000) {
            updatedVocab[entry.word] = { ...entry, dueDate: now }
          }
        }

        save(updatedVocab, now)
        useVocabStore.setState({ vocab: updatedVocab, lastActivation: now })
      }

      const due = Object.values(updatedVocab)
        .filter((v) => {
          if (!v.isActive) return false
          if (v.dueDate > now) return false

          // Alle fälligen Karten zeigen, auch wenn sie heute schon gesehen wurden (wenn dueDate wieder <= now)
          return true
        })
        .sort((a, b) => a.dueDate - b.dueDate)

      return due.length > 0 ? due[0] : null
    },
    reset: () => {
      const entries = Object.fromEntries(
        initialWords.map((w) => [`${w.fields[0]}/${w.fields[1]}`, createEntry(`${w.fields[0]}/${w.fields[1]}`, w.fields[2])])
      )
      localStorage.removeItem('vocab')
      localStorage.removeItem('lastActivation')
      useVocabStore.setState({ vocab: entries, lastActivation: 0 })
    },
    setApiKey: (key: string) => {
      localStorage.setItem('apikey', String(key))
    },
    getApiKey: (): string => {
      const key = localStorage.getItem('apikey')

      if (key == '' || key == null) {
        return import.meta.env.VITE_OPENAI_KEY
      } else {
        return key
      }
    },
    activateNow: (word: string) => {
      const state = useVocabStore.getState()
      const now = Date.now()
      const entry = state.vocab[word]
      const updated = { ...entry, isActive: true, dueDate: now }
      const newVocab = { ...state.vocab, [word]: updated }
      save(newVocab, state.lastActivation)
      useVocabStore.setState({ vocab: newVocab })
    },

    markKnown: (word: string) => {
      const state = useVocabStore.getState()
      const now = Date.now()
      const updated = {
        ...state.vocab[word],
        isActive: true,
        easeFactor: 2.6,
        interval: 21,
        repetitions: 4,
        dueDate: now + 21 * 24 * 60 * 60 * 1000,
        lastReviewed: now
      }
      const newVocab = { ...state.vocab, [word]: updated }
      save(newVocab, state.lastActivation)
      useVocabStore.setState({ vocab: newVocab })
    },

    resetWord: (w: VocabEntry) => {
      const state = useVocabStore.getState()
      const updated = createEntry(w.word, w.meaning)
      const newVocab = { ...state.vocab, [w.word]: updated }
      save(newVocab, state.lastActivation)
      useVocabStore.setState({ vocab: newVocab })
    }
  }
})
