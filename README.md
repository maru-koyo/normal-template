# テンプレート

## head タグと構造化データの自動生成・挿入

npm run build

auto は src 内の html ファイルが対象になる。
除外ファイルは tools/auto/ignore.js

## 差分ファイルの抽出

npm run diff

src 内の差分のみ抽出する。
差分ファイルは tools/difference の中に生成される。
