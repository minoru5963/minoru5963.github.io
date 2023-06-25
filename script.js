
function selectButton(index) {
  shopSelect(index);
}

//職場選択
function shopSelect(index) {
    const image = document.getElementById("image");
    const shopName = document.getElementsByClassName("shopName"); //配列で帰る　＞　[1]で上書き
    const mapImage = document.getElementById("map");
    if (index === 0) {
      image.innerHTML = '<img src="CHR.jpg" width="550" height="250" alt="部品課説明" />';
      shopName[1].innerHTML = "職場紹介：　エンジン部品製造課";
      mapImage.innerHTML = `<img src="allEngBuhin.jpg" width="550" height="500" />`
      }else {
        if (index === 1) {
          image.innerHTML = '<img src="GRyaris.jpg" width="550" height="250" alt="１２説明" />';
          shopName[1].innerHTML = "職場紹介：　１２エンジン製造課";
          mapImage.innerHTML = `<img src="all12Eng.jpg" width="550" height="500" />`
        }else {
          if (index === 2) {
            image.innerHTML = '<img src="18ENG.jpg" width="550" height="250" alt="１８説明" />';
            shopName[1].innerHTML = "職場紹介：　１８エンジン製造課";
            mapImage.innerHTML = `<img src="all18Eng.jpg" width="550" height="500" />`
          }else {
            if (index === 3) {
              location.reload();  //画面のリロードを行う
            }else { 
              if (index === 4) {
                window.location.href = "quiz_index.html";  // クイズへ
              }
            }
          }
        }
      }
}

