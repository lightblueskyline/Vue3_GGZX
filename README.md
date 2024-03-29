# [尚硅谷-Vue3-硅谷甄选](https://www.youtube.com/playlist?list=PLmOn9nNkQxJECrx-JlaaJaC2gthMP7B7r)

## [前端项目](https://gitee.com/jch1011/vue3_admin_template-bj1)

### 项目的初始化

```ps
# 查看版本
node --version
npm --version
# 安装 pnpm
npm install -g pnpm
# 查看版本
pnpm --version
pnpm -v
# 更新 npm
npm install -g npm@latest
npm install -g npm@10.3.0

# 项目初始化指令 -> 项目名称 frontend
pnpm create vite
# 进入前端目录
cd frontend
# 安装依赖
pnpm install
# 运行
pnpm run dev
```

[Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 项目中的 ESLint 代码校验工具的配置

```csharp
/**
配置运行时启动浏览器
frontend\package.json 中的 "scripts"
"dev": "vite",
变更为：
"dev": "vite --open",
 */

/**
ESLint 中文官网 http://eslint.cn
安装 ESLint
--dev, -D 仅安装devDependencies并删除已安装的dependencies，无论 NODE_ENV是什么
pnpm install eslint --dev
-> pnpm i eslint -D

生成 ESLint 配置文件：
npx eslint --init 或者 npm init @eslint/config

安装 & 配置 Vue3 环境代码校验插件：
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser

添加 ESLint 忽略，并且指定忽略文件夹
frontend\.eslintignore
文件夹名称：dist, node_modules

添加运行脚本：
frontend\package.json 中的 "scripts" 中添加 ("lint": "eslint src" & "fix": "eslint src --fix")
之后可以运行脚本校验、修复：
pnpm run lint, pnpm run fix
 */
```

### 项目中的 prettier 格式化工具的配置

```csharp
/**
安装依赖包：
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier

在项目根目录创建文件：
.prettierrc.json
在项目根目录创建忽略文件：
.prettierignore
检核、修复格式：
pnpm run lint / pnpm run fix
 */
```

### 项目中的 Stylelint 工具的配置

```csharp
/**
https://stylelint.bootcss.com/
CSS 校验工具。格式化 CSS 代码，检查 CSS 语法错误与不合理的写法，指定 CSS 书写顺序...
项目中使用 SCSS 预处理器，安装以下依赖：
pnpm install -D sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss
项目根目录创建配置文件：
.stylelintrc.cjs
项目根目录创建配置文件：
.stylelintignore
添加运行脚本：(frontend\package.json)
-> pnpm run format
 */
```

### 项目中的 Husky 工具的配置

```csharp
/**
强制格式化、检查代码，提交之前出发 Git 管控
安装 Husky
pnpm install -D husky
执行：
npx husky-init
frontend\.husky\pre-commit
 */
```

### 项目中的 CommitLint 工具的配置

```csharp
/**
pnpm install -D @commitlint/config-conventional @commitlint/cli
添加配置文件 commitlint.config.cjs
frontend\package.json 中的 "scripts" 添加
"commitlint": "commitlint --config commitlint.config.cjs -e -V"
配置 Husky
npx husky add .husky/commit-msg
 */
```

### 强制使用 pnpm 包管理器工具

```csharp
/**
根目录创建 scripts/preinstall.js 并加入以下内容
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn(
        `\u001b[33mThis repository must using pnpm as the package manager ` +
        ` for scripts to work properly.\u001b[39m\n`,
    )
    process.exit(1)
}
frontend\package.json 中的 "scripts" 添加
"preinstall": "node ./scripts/preinstall.js"
 */
```

### 项目集成 Element-Plus

```csharp
/**
pnpm install element-plus @element-plus/icons-vue
-> frontend\src\main.ts 完整引入 (// @ts-ignore)
-> frontend\tsconfig.json
 */
```

### src 文件夹别名配置

```csharp
/**
-> frontend\vite.config.ts
import path from 'path'
resolve: {
  alias: {
    "@": path.resolve("./src")
  }
}
-> frontend\tsconfig.json "compilerOptions"
"baseUrl": "./",
"paths": {
  "@/*": [
    "src/*"
  ]
}
-> import App from '@/App.vue'
 */
```

### 环境变量的配置

```csharp
/**
项目根目录创建配置文件：
.env.development
.env.production
.env.test
配置运行命令：(frontend\package.json "scripts")
-> "dev": "vite --open"
-> "build:test": "vue-tsc && vite build --mode test"
-> "build:pro": "vue-tsc && vite build --mode production"
// 获取环境变量
console.log(import.meta.env)
 */
```
