// 問題の配列
const quizData = [
    {
        question: "トヨタウェイって？",
        options: ["競争を推奨する", 
                  "「だれか」のために",
                  "情報を出さない",
                  "知識を上げる",
                  "余力を使い切る"],
        answer: 2
    },
    {
        question: "STOP6を選んでください",
        options: ["設備との接触",
                  "転倒",
                  "切創",
                  "疾病",
                  "転落"],
        answer: 5

    },
    {
        question: "トヨタ生産方式の２本の柱は？",
        options: ["ジャストインタイムと自動化", 
                  "ジャストタイムと自働化", 
                  "ジャストシステムと高能率化", 
                  "ジャストインタイムと自働化", 
                  "ジャストインタイムと生産性向上"],
        answer: 4
    },
    {
        question: "安全の門に書いてあるのは？",
        options: ["失敗のない作業", 
                  "不安全な作業",
                  "熟練した作業",
                  "直感的な判断",
                  "確実な報告"],
        answer: 3
    },
    {
        question: "「豊田綱領」間違えはどれ？",
        options: ["上下一致 至誠業務に服し 産業報国の実を挙ぐべし",
                   "研究と創造に心を致し 常に時流に先んずべし",
                   "華美を戒め 質実剛健たるべし",
                   "温情友愛の精神を発揮し 社会的美風を作興すべし",
                   "神仏を尊崇し 報恩感謝の生活を為すべし"],
        answer: 4
    },
];
//　画像の配列
const imageList = ["toyotaWay.jpg","stop6.jpg","TPS.jpg","anzen.jpg","koryoSeisin.jpg"]

//　画像のタイトル
const imageTitle = ["トヨタウェイ","ＳＴＯＰ６","ＴＰＳ","安全の門","豊田綱領"]

//クイズ開始
let quesNo = 0;
let score = 0;
showQuiz();

//クイズ表示
function showQuiz() {
  const question = document.getElementById("question");
  const options = document.getElementById("options");
  question.innerHTML = "";  // クイズクリア
  options.innerHTML = "";
  question.innerText = (quesNo + 1) + ": " + quizData[quesNo].question;  //問題表示
  //選択肢表示 　＊＊　選択肢の数に応じたボタン数作成
  quizData[quesNo].options.forEach((option, index) => { 
    const quesBtn = document.createElement("button");
    quesBtn.innerText = option;
    quesBtn.addEventListener("click", () => checkAnswer(index + 1)); //配列内要素+1
    options.appendChild(quesBtn)
  });
  return;
}

//答えチェック
function checkAnswer(selectedIndex) {
  if (selectedIndex === quizData[quesNo].answer) {
    score++; //正解の場合＋＋
    showResult("正解！");
  } else {
    showResult("不正解...");
  }
  quesNo++; //次の問題へ
  if (quesNo < quizData.length) {
    showQuiz(); //次の問題がある場合は表示
  } else {
    showFinalResult();
  }
  return;
}

//正解・不正解、タイトル、画像表示
function showResult(message) {
  const resultDisp = document.getElementById("result");  //正解・不正解表示
  const resultElement = document.createElement("p"); 
  resultElement.innerText = (quesNo + 1) + ": " + message;
  resultDisp.appendChild(resultElement);
  const imageNameDisp = document.getElementById("imageName");  //タイトル表示
  const nameElement = document.createElement("p"); 
  imageNameDisp.innerText = (quesNo + 1) + ": " + imageTitle[quesNo];
  imageNameDisp.appendChild(nameElement);
  const image = document.getElementById("image");  // 画像要素を作成
  const imageElement = document.createElement("img");  
  imageElement.src = imageList[quesNo];  
  image.appendChild(imageElement);
return;   
}

//最終結果表示
function showFinalResult() {
  const clearQuiz = document.getElementById("clearQuiz");
  const finalResultDisp = document.getElementById("finalResult");
  const scoreElement = document.createElement("p");
  const resultDisp = document.getElementById("result");
  const accuracy = (score / quizData.length) * 100;
  clearQuiz.style.display = "none";   //クイズコンテナ非表示
  scoreElement.innerText = "正解率：　" + accuracy.toFixed(2) + "%";
  finalResultDisp.appendChild(scoreElement);
  resultDisp.style.top = "40px";
  const btn = document.createElement("returnButton"); 
  btn.innerText = "もう一回やってみる！"; 
  //画面のリロードを行う
  btn.addEventListener("click", function() { 
    location.reload();  
  });
  document.body.appendChild(btn); 
  const btn1 = document.createElement("returnButton1"); // 新しいボタン要素を作成
  btn1.innerText = "もう終わる"; // ボタンのテキストを設定
  // ボタンにクリックイベントのリスナーを追加
  btn1.addEventListener("click", () => { 
    window.location.href = "index_main.html";  // メイン画面へ
  });
  document.body.appendChild(btn1); // ボタンをbody要素に追加
  return;   
}

