# H-Company コーディング課題 / ローカルでの実行環境構築手順書

このリポジトリは H-Company のコーディング課題であり、TypeScript、ESLint、Axios を使用して構築された Next.js アプリケーションです。

## 前提条件

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

app
├── \_components  
│ └── styles  
│ └── ui
├── (home)
│ ├── \_components
│ └── styles
├── api
│ └── todos
│ └── route.ts
├── context
│ └── todoContext.ts
├── data
│ └── todos.json
├── todos
│ ├── [id]
│ │ ├── \_components
│ │ ├── \_hooks
│ │ ├── styles
│ │ ├── layout.tsx
│ │ └── page.tsx
│ └── index.ts
├── utils
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx
