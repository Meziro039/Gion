let RandomTop;
let RandomEnd;
let Output;

const hiragana = ["あ","い","う","え","お","か","が","き","ぎ","く","ぐ","け","げ","こ","ご","さ","ざ","し","じ","す","ず","せ","ぜ","そ","ぞ","た","だ","ち","ぢ","つ","づ","て","で","と","ど","な","に","ぬ","ね","の","は","ば","ぱ","ひ","び","ぴ","ふ","ぶ","ぷ","へ","べ","ぺ","ほ","ぼ","ぽ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","きゃ","きぃ","きゅ","きぇ","きょ","しゃ","しぃ","しゅ","しぇ","しょ","ちゃ","ちぃ","ちゅ","ちぇ","ちょ","にゃ","にぃ","にゅ","にぇ","にょ","ひゃ","ひぃ","ひゅ","ひぇ","ひょ","みゃ","みぃ","みゅ","みぇ","みょ","りゃ","りぃ","りゅ","りぇ","りょ"];

const SeedParams = new URL(location.href).searchParams.get("seed");

//表示更新
if (SeedParams){
    // 入力Seedを処理
    const SeedValue = SeedParams.split(",");

    if (SeedValue[0] > 100 || SeedValue[1] > 100){
        document.getElementById("gion").textContent = "不正な値です";
    }
    else {
        document.getElementById("gion").textContent = hiragana[SeedValue[0]] + hiragana[SeedValue[1]] + hiragana[SeedValue[0]] + hiragana[SeedValue[1]];
    }

}
else {
    Dice();
}

function Dice(){
    RandomTop = hiragana[Math.floor(Math.random() * 100)];
    RandomEnd = hiragana[Math.floor(Math.random() * 100)];
    Output = (RandomTop + RandomEnd + RandomTop + RandomEnd);

    //表示更新
    document.getElementById("gion").textContent = Output;
}

function Share(){
    // シェアテキスト生成
    const ShareText = "「"+ Output + "」" + "\n" + "https://" + location.host + location.pathname + "?Seed=" + RandomTop + "," + RandomEnd + "\n#擬音ジェネレーター";
    navigator.clipboard.writeText(ShareText);

    //コピー完了表示
    document.getElementById("ShareBt").value = "しました";
    window.setTimeout(function(){
        document.getElementById("ShareBt").value = "コピー"
    },1000);
}

function Tweet(){
    // 投稿URL生成
    const TweetText = "https://twitter.com/intent/tweet?" + "hashtags=擬音ジェネレーター" + "&text=「"+ Output + "」" + "&url=" + "https://" + location.host + location.pathname + "?Seed=" + RandomTop + "," + RandomEnd;
    window.open(TweetText, "noopener", "noreferrer");
}

