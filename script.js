
function selectButton(index) {
  shopSelect(index);
}

//職場選択
function shopSelect(index) {
    const image = document.getElementById("image");
    const shopName = document.getElementById("shopName"); //配列で帰る　＞　[1]で上書き
    const mapImage = document.getElementById("map");
    //console.log(shopName[1]);
    if (index === 0) {
     image.innerHTML = '<img src="buhin.jpg" width="520" height="470" alt="部品課説明" />';
      shopName.textContent = "職場紹介：　エンジン部品製造課";
      mapImage.innerHTML = `<img src="allEngBuhin.jpg" width="350" height="300" />`;
      }else {
        if (index === 1) {
         image.innerHTML = '<img src="12E.jpg" width="520" height="470" alt="１２説明" />';
          shopName.textContent = "職場紹介：　１２エンジン製造課";
         mapImage.innerHTML = `<img src="all12Eng.jpg" width="350" height="300" />`;
        }else {
          if (index === 2) {
           image.innerHTML = '<img src="18E.jpg" width="520" height="470" alt="１８説明" />';
            shopName.textContent = "職場紹介：　１８エンジン製造課";
            mapImage.innerHTML = `<img src="all18Eng.jpg" width="350" height="300" />`;
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
