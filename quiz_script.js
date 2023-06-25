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
  const problemDisplay = document.getElementById("question");
  const problemStatement = document.getElementById("options");

  
  // クイズクリア
  problemDisplay.innerHTML = "";
  problemStatement.innerHTML = "";

  //問題表示
  problemDisplay.innerHTML = (quesNo + 1) + ": " + quizData[quesNo].question;

  //選択肢表示
  quizData[quesNo].options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.innerHTML = option;
    optionElement.addEventListener("click", () => checkAnswer(index + 1)); //配列内要素+1
    problemStatement.appendChild(optionElement);
  });
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
}

//正解・不正解表示
function showResult(message) {
    const resultDisp = document.getElementById("result");
    const resultElement = document.createElement("p"); 
    resultElement.innerHTML = (quesNo + 1) + ": " + message;
    resultDisp.appendChild(resultElement);
    const imageNameDisp = document.getElementById("imageName");
    const nameElement = document.createElement("p"); 
    imageNameDisp.innerHTML = (quesNo + 1) + ": " + imageTitle[quesNo];
    imageNameDisp.appendChild(nameElement);
    displayImage();
}

// 任意のタイミングで画像を表示する処理を行う関数
function displayImage() {
    const imageContainer = document.getElementById("imageContainer");
    const imageElement = document.createElement("img");// 画像要素を作成
    imageElement.src = imageList[quesNo];  // 画像のパスを指定
    imageContainer.appendChild(imageElement);    // 画像を表示する
  }

//最終結果表示
function showFinalResult() {
    const quizDisp = document.getElementById("quiz-container");
    const finalResultDisp = document.getElementById("final-result");
    const scoreElement = document.createElement("p");
    const resultDisp = document.getElementById("result");
    const accuracy = (score / quizData.length) * 100;
    scoreElement.innerHTML = "正解率：　" + accuracy.toFixed(2) + "%";
    finalResultDisp.appendChild(scoreElement);
    resultDisp.style.top = "40px";
    quizDisp.style.display = "none"; //クイズコンテナ非表示
    finalResultDisp.style.display = "block"; //最終結果コンテナ表示

    let btn = document.createElement("returnButton"); 
    btn.innerHTML = "もう一回やってみる！"; 
    btn.addEventListener("click", function() { 
      location.reload();  //画面のリロードを行う
    });
    document.body.appendChild(btn); 

    let btn1 = document.createElement("returnButton1"); // 新しいボタン要素を作成
    btn1.innerHTML = "もう終わる"; // ボタンのテキストを設定
    btn1.addEventListener("click", () => { // ボタンにクリックイベントのリスナーを追加
      window.location.href = "index_main.html";  // メイン画面へ
    });
    document.body.appendChild(btn1); // ボタンをbody要素に追加   
}
