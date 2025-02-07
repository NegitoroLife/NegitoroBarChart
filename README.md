## セットアップ

```npm
npm i
npm run dev
```

http://localhost:3000 にアプリ起動

### Volta

node のバージョン管理に volta 使ってみたよ！  
入れとくと npm i の時に自分の PC の node バージョンを package.json に記載されてる node バージョンに合わせてくれるよ！  
https://qiita.com/nakashun1129/items/47c09ccbbba73c4ef8c4

### ローカル環境

Mac 人 と Windows 人が混ざって開発する際、ローカルでアプリ起動時にパス解決でバグる事案が発生する事があるらしい…  
そんな時は Windows の人が Mac に合わせて Ubuntu 環境で開発してあげよう！  
WSL2：https://qiita.com/ryome/items/240f36923f5cb989da27

## デプロイとブランチ

とりあえず main ブランチにマージすると下記に公開されるので develop ブランチで開発してキリのいいときに main にマージするのはどうだろう(^^)/  
https://negitorobarchart.netlify.app/

https://app.netlify.com  
フリープランは環境にメンバー招待できないので私一人しかコンソール見れない…  
環境変数とか必要になったら教えてね(´・ω・｀)
