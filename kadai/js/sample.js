function janru() {
    var random = Math.floor(Math.random() * 3) + 1,
        judge = ["ヒップホップ", "ロック", "ブレイク"],
        result;

    if (random == 1) {
            result = 0;
        } else if (random == 2) {
            result = 1;
        } else if (random = 3) {
            result = 2;
        }
    document.getElementById("message");
    message.innerHTML = "あなたにおすすめのジャンルは" + judge[result]  + "です．上のボタンをクリック‼";
}