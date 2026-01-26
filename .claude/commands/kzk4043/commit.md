---
description: ステージング済みの変更を確認し、Gitmoji + Conventional Commits形式でコミットメッセージを生成してコミットする
argument-hint: [commit-hint] コミットメッセージのタイプや説明（オプション）
allowed-tools: Bash(git:*)
---

## 前提条件

- **重要**: `git add` は実行しません。ユーザーが事前に `git add` でステージング済みであることを前提とします
- ステージング済みの変更がない場合は処理を中止します

## 実行手順

### 1. ステージング済みの変更を確認

```bash
git diff --cached --name-status
```

- **変更がない場合**: 以下のメッセージを表示して処理を中止
  > ⚠️ ステージング済みの変更がありません。
  > 
  > `git add` で変更をステージングしてから再度実行してください。

- **変更がある場合**: 次のステップへ進む

### 2. 変更内容の詳細を取得

```bash
git diff --cached
```

### 3. 変更の分析とコミットメッセージ生成

変更内容を分析して、このプロジェクトの [Gitmoji](https://gitmoji.dev/) + Conventional Commits 形式のコミットメッセージを生成します。

#### タイプの判定ルール（このプロジェクトで使用可能）

commitlintの設定: `extends: ['gitmoji'], type-enum: ['feat', 'nits', 'fix', 'refactor', 'docs', 'chore']`

- **`✨feat:`**: 新機能の追加
  - 新しいコンポーネント、機能、APIエンドポイントの追加
  - 新しいページやルートの追加
  - ユーザー向けの新機能実装

- **`🐛fix:`**: バグ修正
  - バグの修正、エラーハンドリングの改善
  - 既存機能の動作不良の修正

- **`🩹nits:`**: 軽微な修正・調整
  - UIの微調整、テキスト修正
  - 軽微なバグフィックス
  - 小さな改善・調整

- **`♻️refactor:`**: リファクタリング
  - バグ修正や機能追加ではないコード変更
  - コードの整理、構造の改善
  - 不要ファイル・コードの削除

- **`📝docs:`**: ドキュメント変更
  - README、コメント、ドキュメントファイルの変更

- **`🔧chore:`**: 環境・設定変更
  - 依存関係の更新、設定ファイルの変更
  - ビルドスクリプトの変更
  - 環境設定の変更（本番ドメイン設定など）

#### スコープの判定

このプロジェクトでは**スコープを省略**することが多いです。
過去のコミット履歴を見ても、ほとんどスコープは使用されていません。

変更されたファイルが特定の領域に集中している場合のみ、以下のスコープを使用できます：

- `src/components/auth/` → `auth`
- `src/components/matches/` → `matches`
- `src/components/teams/` → `teams`
- `src/components/messages/` → `messages`
- `src/components/common/` → `common`
- `src/pages/api/` → `api`
- `src/lib/` → `lib`
- `package.json`, `pnpm-lock.yaml` → `deps`

**推奨**: 複数のディレクトリにまたがる変更の場合はスコープを省略してください。

#### 説明文の生成

このプロジェクトでは**日本語と英語が混在**しています。
過去のコミット例：
- `✨feat: 対戦希望レベルにバリデーション追加`（日本語）
- `✨feat: Add filter after selecting start time`（英語）
- `🩹nits: タイトル修正`（日本語）

説明文の生成ルール：
- **日本語または英語**で記述（変更内容に応じて適切な方を選択）
- 命令形で記述（日本語: "追加", "修正", "更新" / 英語: "Add", "Fix", "Update"）
- 50文字以内を目安
- 変更の本質を簡潔に表現

### 4. コミットメッセージの形式

このプロジェクトの形式:
```
<gitmoji><type>[optional scope]: <description>

[optional body]
```

**実際のコミット例:**
```
✨feat: 対戦希望レベルにバリデーション追加
```

```
♻️refactor: 不要ファイルの削除
```

```
🩹nits: タイトル修正
```

```
🔧chore: 本番ドメイン設定
```

**スコープ付きの例:**
```
✨feat(matches): Add filter after selecting start time
```

**重要**:
- 通常は1行のシンプルなメッセージ
- bodyは必要な場合のみ追加
- gitmojiは必須（commitlintで `gitmoji` 設定を使用）

### 5. コミット実行

**基本形式（シンプルなメッセージ）:**

```bash
git commit -m "{emoji}{type}: {description}"
```

例:
```bash
git commit -m "✨feat: 対戦希望レベルにバリデーション追加"
```

**スコープ付きの場合:**

```bash
git commit -m "{emoji}{type}({scope}): {description}"
```

**bodyが必要な場合（複数行）:**

```bash
git commit -F - <<EOF
{emoji}{type}: {description}

{body}
EOF
```

### 6. 完了メッセージ

> ✅ コミットが完了しました！
> 
> ```
> {コミットハッシュ} {コミットメッセージの1行目}
> ```

## 注意事項

- **`git add` は実行しません** - ユーザーが事前にステージングする必要があります
- コミットメッセージは [Gitmoji](https://gitmoji.dev/) + [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 形式に準拠します
- commitlint設定: `extends: ['gitmoji']`, 使用可能なタイプ: `feat`, `nits`, `fix`, `refactor`, `docs`, `chore`
- 最大行長: 100文字
- スコープは通常省略されます（過去のコミット履歴を参照）
