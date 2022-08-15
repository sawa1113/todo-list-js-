import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.className = "list-row__item";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTraget = completeButton.parentNode;

    //TODO内容テキストを取得する
    const text = addTraget.firstElementChild.innerText;

    //div以下を初期化する
    addTraget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //button(戻す)タグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTraget.appendChild(li);
    addTraget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTraget);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (traget) => {
  document.getElementById("incomplete-list").removeChild(traget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
