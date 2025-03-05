// ボタンをクリックしたら色を変える
document.getElementById('changeColorButton').addEventListener('click', () => {
    const box = document.getElementById('colorBox');
    
    // 新しく設定する色の候補をいくつか定義
    const colors = ['skyblue', 'tomato', 'limegreen', 'gold', 'hotpink', 'rebeccapurple'];
    
    // 現在の色とは別の色を選んで適用
    const currentColor = box.style.backgroundColor;
    let newColor = currentColor;
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    box.style.backgroundColor = newColor;
  });
  