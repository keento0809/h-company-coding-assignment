# 株式会社H&Company コーディング課題

このリポジトリは 株式会社H＆Company のコーディング課題であり、Next.js 13 (App Router), TypeScript, プレーンな CSS を用いて作成した TODO リストアプリケーションです。

## インストール前提条件

- Node.js がインストールされていること
- npm (または Yarn ですが、以下のコマンドはすべて npm を使用します)がインストールされていること
- Git がインストールされていること

## インストール手順

1. Git コマンドを使用して、Vite アプリケーションのリポジトリをクローンします。以下のコマンドを実行してください。

   ```bash
   git clone https://github.com/yourusername/h-company-coding-assignment.git
   ```

2. コマンドラインで、クローンしたディレクトリに移動します。

   ```
   cd h-company-coding-assignment
   ```

3. `npm install` を実行して、アプリケーションの依存関係をインストールします。

4. `npm run dev` を実行して、アプリケーションを起動します。

5. ブラウザで `http://localhost:3000` を開き、アプリケーションが正常に表示されていることを確認してください。

## プロジェクト構成

```plaintext
app
├── _components             # プロジェクト内全般で使用される共通のコンポーネント
│   ├── styles              # 共通のコンポーネントのmodules.cssを格納
│   └── ui                  # button, inputなどのuiコンポーネント
├── (home)                  # Topページで使用されるファイルを格納
│   ├── _components         # Topページで使用されるコンポーネント
│   └── styles              # Topページで使用されるコンポーネントのmodules.cssを格納
├── api                     # API request declarations
│   └── todos
│       └── route.ts        # data.jsonを更新するためのAPI Routeを定義
├── context                 # Context API declaration
│   └── todoContext.ts      # Global Stateを定義
├── data
│   └── todos.json          # フロント側でデータを保存するためのjsonファイル
├── todos                   # Todoの詳細ページで使用されるファイルを格納
│   ├── [id]                # Dynamic route
│   │   ├── _components     # Todoの詳細ページで使用されるコンポーネント
│   │   ├── _hooks          # Todoの詳細ページで使用されるカスタムフック
│   │   ├── styles          # Todoの詳細ページで使用されるコンポーネントのmodule.cssを格納
│   │   ├── layout.tsx      # Todoの詳細ページのレイアウト
│   │   └── page.tsx        # Todoの詳細ページのpage
├── utils
|   └── index.ts            # API Routeで使用されるfunctionを定義
├── favicon.ico
├── globals.css
├── layout.tsx              # Root Layout
└── page.tsx                # Root Page
```

## アプリケーションの特徴

- Next.js の App Router を用いた、シンプルで分かりやすいディレクトリ構造となっています。
- プレーンな CSS によるスタイリングには CSS Modules を用いています。
- Todo の新規作成、更新、削除に応じて Todo のデータを Global State だけでなく、`data.json`にも保存します。（`/api/todos`を用いて`data.json`を更新しています。）その為、ページをリロードしても Todo のデータはリセットされることなく表示されます。
- 完了した Todo については、各 Todo の左端にあるチェックボックスにチェックを入れることで完了状態へ変更することができます。

## スクリーンショット

![coding assignment](https://github.com/keento0809/h-company-coding-assignment/assets/65790344/b08a9599-90a8-41c3-8f78-43c46acaed30)
