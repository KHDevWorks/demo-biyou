# demosaito-biyou

## 概要

このリポジトリは美容サロン向けのデモサイトです。
HTML、SCSS、CSS、および画像素材を使ってレスポンシブなトップページを構築しています。

## 作成の意図
美容室等のサイトの案件獲得用に作成

##工夫したこと
既存のサイトをAIを活用して、分析・解析しMVPを作成しました。
今後の目標はAIのヘヤーシュミレーションをサイトに内蔵することで
自分のイメージを伝えやすくするサイトにしていきます。

## ファイル構成

- `index.html` - サイト本体の HTML
- `style.scss` - SCSS エントリポイント
- `style.css` - コンパイル済み CSS
- `style.css.map` - ソースマップ
- `scss/` - SCSS モジュールとレイアウト定義
- `images/` - 画像素材
- `setting/` - VS Code タスク / ランチ構成
- `main.js` - 必要に応じた JavaScript（現状は読み込みのみ）

## 開発とプレビュー

### 1. そのままブラウザで確認

`index.html` をブラウザで開くだけでも表示できます。

### 2. Live Server で起動

VS Code の Live Server 拡張機能を使うか、以下のタスクを実行します。

- `Start Live Server`

タスクは `setting/tasks.json` に定義されています。

### 3. SCSS を更新する場合

SCSS を編集したら `style.scss` をコンパイルして `style.css` を生成してください。

`setting/settings.js` では Live Sass Compile 設定が想定されています。

## 使い方

1. `index.html` を開く
2. 必要に応じて SCSS を編集
3. ブラウザで表示を確認

## 備考

- モバイル対応として、ヘッダーや画像のレスポンシブ調整が含まれています。
- `style.css` は現在の表示ロジックに依存しているので、SCSS を編集した場合は CSS の再生成を忘れないでください。
