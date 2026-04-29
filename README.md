# Friend-Script

## 概要

Friend-Scriptは、JavaScriptベースのブラウザ操作特化型DSLです。
上から順に実行される仕様です。
MITライセンスを使用しています。ご注意ください。

## 構文

---コードは文字列として扱ってください。拡張子はjsと同じです。---

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

`If target`

- 要素が存在しない場合、その時点でスクリプトを終了
＊targetはCSSセレクタ(htmlIDでも良い。その場合は#をつける)

---ループ(バッククォートを使用して記述してください)---

```
Loop time
//処理
Finish
```

## 使い方

`<script src="https://shisakankoy.github.io/Friend-Script/friend.js">`
をhtmlファイルに記述してください。


## Overview
Friend-Script is a JavaScript-based DSL specifically designed for browser manipulation. It executes from top to bottom. It uses the MIT license. Please note this.

## Syntax

---Please treat the code as a string. The file extension is the same as .js.---

---Execution (Executes from top to bottom)---

friend(code);

---Code (Execution outline omitted)---

---Console Output--- 

`Log element`

---Page Open--- 

`Open URL`

---Click--- 

`Knock htmlID`

---Wait--- 

`Wait time`

---Existence Check---

`If target `

If the element does not exist, terminate the script at that point.
*target is a CSS selector (htmlID is also acceptable; in that case, add #)

---Loop(Please use backticks)---

```
Loop time
//Processing
Finish
```

## How to Use
Add `<script src="https://shisakankoy.github.io/Friend-Script/friend.js">` to your HTML file.
