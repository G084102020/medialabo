// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    console.log(kaisu +"回目の予想：４");
    if(4<kaisu){
        console.log("答えは4でした。すでにゲームは終わっています。");
    }
    if(yoso = kotae){
        console.log("正解です。おめでとう‼");
    }
    if(3 === kaisu){
        console.log("間違い。残念でした答えは"+ kotae +"です。");
    }else if (kotae > yoso){
        console.log("間違い。答えはもっと大きいですよ。");
    }else if (kotae < yoso){
        console.log("間違い。答えはもっと小さいですよ。");
    }
}