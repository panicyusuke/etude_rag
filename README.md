
# RAG Chatbot Project

## 概要

このプロジェクトは、RAG（Retrieval-Augmented Generation）を活用したチャットボットアプリケーションです。ユーザーからの質問に対して、関連する文書を参照しながら回答を生成します。UI は React と TypeScript で構築されており、モダンでレスポンシブなデザインを採用しています。

## 主要な機能

- チャットインターフェース
- 関連文書の表示（Slack、Notion、OneDrive などからの情報）
- 回答内容の根拠となる部分のハイライト表示

## 技術スタック

- React
- TypeScript
- Tailwind CSS
- Yarn

## セットアップ手順

1. リポジトリをクローンします：
   ```
   git clone [repository-url]
   cd rag-chatbot
   ```

2. 依存関係をインストールします：
   ```
   yarn install
   ```

3. 環境変数を設定します（必要な場合）：
   ```
   cp .env.example .env
   ```
   `.env` ファイルを編集し、必要な環境変数を設定してください。

## 実行方法

開発モードでアプリケーションを起動するには：

```
yarn start
```

ブラウザで `http://localhost:3000` を開いてアプリケーションにアクセスできます。

## ビルド方法

プロダクション用のビルドを作成するには：

```
yarn build
```

ビルドされたファイルは `build` ディレクトリに生成されます。

## テスト

テストを実行するには：

```
yarn test
```

## プロジェクト構造

```
rag-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   ├── Documents/
│   │   └── Layout/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 貢献ガイドライン

1. 新しい機能を追加する場合は、まず issue を作成してください。
2. コードを変更する前に、既存のテストが全て通ることを確認してください。
3. 新しい機能には適切なテストを追加してください。
4. プルリクエストを作成する前に、コードのフォーマットとリントを行ってください。

