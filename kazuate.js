// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;
let b = document.querySelector('#botan');
b.addEventListener('click', hantei);
let kazu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="a"]');
    let yoso = Number(i.value);       // 第5回課題:テキストボックスの数値をここに代入
    let result = document.querySelector('p#result');

    let answer = document.querySelector('p#answer');
    let a = document.querySelector('span#kaisu');
    a.textContent = kaisu;
    let b = document.querySelector('span#count');
    b.textContent = yoso;
    console.log(kaisu +"回目の予想："+yoso);

    if(3<kaisu|| kazu>0){
        result.textContent ="答えは"+kotae+"でした。すでにゲームは終わっています。";
    }else{
        if(yoso === kotae){
        result.textContent ="正解です。おめでとう‼";
        kazu++;
        }
        if(3 === kaisu){
            result.textContent ="間違い。残念でした答えは"+ kotae +"です。";
        }else if (kotae > yoso){
            result.textContent ="間違い。答えはもっと大きいですよ。";
        }else if (kotae < yoso){
            result.textContent ="間違い。答えはもっと小さいですよ。";
        }
    }

    kaisu++;
}