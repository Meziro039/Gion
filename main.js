let Output;

const hiragana = ["あ","い","う","え","お","か","が","き","ぎ","く","ぐ","け","げ","こ","ご","さ","ざ","し","じ","す","ず","せ","ぜ","そ","ぞ","た","だ","ち","ぢ","つ","づ","て","で","と","ど","な","に","ぬ","ね","の","は","ば","ぱ","ひ","び","ぴ","ふ","ぶ","ぷ","へ","べ","ぺ","ほ","ぼ","ぽ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","きゃ","きぃ","きゅ","きぇ","きょ","しゃ","しぃ","しゅ","しぇ","しょ","ちゃ","ちぃ","ちゅ","ちぇ","ちょ","にゃ","にぃ","にゅ","にぇ","にょ","ひゃ","ひぃ","ひゅ","ひぇ","ひょ","みゃ","みぃ","みゅ","みぇ","みょ","りゃ","りぃ","りゅ","りぇ","りょ"];

const WordParams = new URL(location.href).searchParams.get("word");
if (WordParams){
    document.getElementById("gion").textContent = WordParams;
}
else {
    Dice();
}

function Dice(){
    let RandomTop = hiragana[Math.floor(Math.random() * 100)];
    let RandomEnd = hiragana[Math.floor(Math.random() * 100)];
    Output = (RandomTop + RandomEnd + RandomTop + RandomEnd);

    document.getElementById("gion").textContent = Output;
    // location.replace(location.host + location.pathname + "?word=" + Output);
}

function Share(){
    //const ShareLink = location.host + location.pathname + "?word=" + Output;
    const ShareLink = "「"+ Output + "」" + "\n" + "https://" + location.host + location.pathname + "?word=" + encodeURI(Output) + "\n#擬音ジェネレーター";
    navigator.clipboard.writeText(ShareLink);
    document.getElementById("ShareBt").value = "しました";
    window.setTimeout(function(){
        document.getElementById("ShareBt").value = "コピー"
    },1000);
}

function Tweet(){
    const Message = "hashtags=擬音ジェネレーター" + "&text=「"+ Output + "」" + "&url=" + encodeURI("https://"+location.host+location.pathname+"?word="+Output);
    window.open("https://twitter.com/intent/tweet?" + Message,"noopener","noreferrer");
}