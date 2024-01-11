# [尚硅谷-Vue3-硅谷甄选](https://www.youtube.com/playlist?list=PLmOn9nNkQxJECrx-JlaaJaC2gthMP7B7r)

## 指令

```ps
# 查看版本
node --version
npm --version
# 安装 pnpm
npm install -g pnpm
# 查看版本
pnpm --version
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

## 配置运行时启动浏览器

```csharp
// frontend\package.json
// "dev": "vite",
// 变更为：
// "dev": "vite --open",
```

## ESLint 配置

```csharp
// ESLint 中文官网 http://eslint.cn
// 安装 ESLint
// --dev, -D 仅安装devDependencies并删除已安装的dependencies，无论 NODE_ENV是什么
// pnpm install eslint --dev
// pnpm i eslint -D

// 生成 ESLint 配置文件
// npx eslint --init 或者 npm init @eslint/config

// 安装&配置 Vue3 环境代码校验插件
// pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser
// 添加忽略文件 .eslintignore (dist node_modules)
// 新增两个运行脚本 frontend\package.json
// "scripts" 中添加 ("lint": "eslint src" & "fix": "eslint src --fix")
```
