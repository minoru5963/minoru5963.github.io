const quizData = [
    {
        //question: "豊田綱領を選んでみよう",
        options: ["CH-R", "GR-Yaris", "Prius", "Prius-α"],
        answer: 4
    },
    {
       // question: "豊田綱領を選んでみよう",
        options: ["研究と創造に心を致し", "常に時流に先んずべし"],
        answer: 2
    },
    {
        //question: "豊田綱領を選んでみよう",
        options: ["華美を戒め", "質実剛健たるべし"],
        answer: 2
    },
    {
        //question: "豊田綱領を選んでみよう",
        options: ["温情友愛の精神を発揮し", "家庭的美風を作興すべし"],
        answer: 2
    },
    {
        //question: "豊田綱領を選んでみよう",
        options: ["神仏を尊崇し", "報恩感謝の生活を為すべし"],
        answer: 2
    },
];

let currenQuestion = 0;
let score = 0;

function showKoryo() {
    const text = document.querySelector("#text");

}

//クイズ表示
function showQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");


  // クイズクリア
  questionElement.innerHTML = "";
  optionsContainer.innerHTML = "";

  //問題表示
  //questionElement.innerHTML = quizData[currenQuestion].question;

  //選択肢表示
  quizData[currenQuestion].options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.innerHTML = option;
    optionElement.addEventListener("click", () => highlightElement());
    optionsContainer.appendChild(optionElement);
  });
}

//ボタンチェック
function highlightElement() {
    var target = document.getElementById("target-element");
    target.classList.toggle("highlight");
}

//答えチェック
function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currenQuestion].answer) {
        score++; //正解の場合＋＋
        showResult("正解！");
    } else {
        showResult("不正解...");
    }
    currenQuestion++; //次の問題へ
    if (currenQuestion < quizData.length) {
        showQuiz(); //次の問題がある場合は表示
    } else {
        showFinalResult();
    }
}

//正解・不正解表示
function showResult(message) {
    const resultContainer = document.getElementById("result");
    const resultElement = document.createElement("p");
    resultElement.innerHTML = message;
    resultContainer.appendChild(resultElement);
}

//最終結果表示
function showFinalResult() {
    const quizContainer = document.getElementById("quiz-container");
    const finalResultContainer = document.getElementById("final-result");
    const scoreElement = document.createElement("p");
    const accuracy = (score / quizData.length) * 100;
    scoreElement.innerHTML = "正解率：　" + accuracy.toFixed(2) + "%";
    finalResultContainer.appendChild(scoreElement);
    quizContainer.style.display = "none"; //クイズコンテナ非表示
    finalResultContainer.style.display = "block"; //最終結果コンテナ表示
}

//クイズ開始
showQuiz();
