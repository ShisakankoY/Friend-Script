# Friend-Script

## 概要

Friend-Scriptは、JavaScriptベースのブラウザ操作特化型DSLです。
上から順に実行される仕様です。
MITライセンスを使用しています。ご注意ください。

## 構文

---実行(上から順に実行)---

`friend(code);`

---コード(実行外枠は省略)---

---コンソール出力---
`Log element`

---ページオープン---
`Open URL`

---クリック---
`Knock htmlID`

---待機---
`Wait time`

---存在確認---
- 要素が存在しない場合、その時点でスクリプトを終了
`If target`
＊targetはCSSセレクタ(htmlIDでも良い。その場合は#をつける)

---ループ---
```
Loop time
//処理
Finish
```

## 使い方

`<script src=>`
をhtmlファイルに記述してください。
