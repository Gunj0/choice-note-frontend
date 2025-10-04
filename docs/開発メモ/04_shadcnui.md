# shadcn/ui

## 導入

- [init](https://ui.shadcn.com/docs/installation/next)
  - [base color](https://ui.shadcn.com/colors)
    - neutral, stone, zinc, slate, gray

```zsh
% npx shadcn@latest init
Need to install the following packages:
shadcn@3.3.1
Ok to proceed? (y) y

✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
✔ Which color would you like to use as the base color? › Neutral
✔ Writing components.json.
✔ Checking registry.
✔ Updating CSS variables in src/app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.
```

- 変更されたもの

```text
/
├components.json (new)
└package.json (fix)
src/
├app/
│└global.css (fix)
└lib/
  └utils.ts (new)
```

- 追加 package

```json
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.544.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "tw-animate-css": "^1.4.0",
  }
```

## Button

- [Button](https://ui.shadcn.com/docs/components/button)

```zsh
% npx shadcn@latest add button
✔ Checking registry.
✔ Installing dependencies.
✔ Created 1 file:
  - src/components/ui/button.tsx
```

- 追加 package

```json
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.3",
  }
```
