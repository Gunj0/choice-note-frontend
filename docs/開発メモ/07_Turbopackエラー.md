# Turbopack エラー

- package.json で `"build": "next build"` に`--turbopack`をつけると
  - `npm run preview`で OpenNext を起動したときにエラーになる

```zsh
✘ [ERROR]  ⨯ Error: Failed to load chunk server/chunks/ssr/[root-of-the-server]__aa9358fa._.js from runtime for chunk server/app/(home)/page.js
```

- Turbopack は Next.js 15 では正式ではなく、OpenNext では対応していないらしい
  - [[FEATURE] support turbopack](https://github.com/opennextjs/opennextjs-cloudflare/issues/569#issuecomment-2849350717)
  - [Turbopack Builds](https://nextjs.org/blog/next-15-4#turbopack-builds)
- `"build": "next build"` から`--turbopack`を外すと解消
