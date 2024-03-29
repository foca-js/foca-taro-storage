# foca-taro-storage

taro 端的持久化引擎。彻底解决经典的 `没有找到页面实例` 问题 https://github.com/NervJS/taro/issues/6548

[![npm peer dependency version](https://img.shields.io/npm/dependency-version/foca-taro-storage/peer/@tarojs/taro?label=taro&logo=taro)](https://github.com/NervJS/taro)
[![License](https://img.shields.io/github/license/foca-js/foca-taro-storage?logo=open-source-initiative)](https://github.com/foca-js/foca-taro-storage/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/foca-taro-storage?logo=npm)](https://www.npmjs.com/package/foca-taro-storage)

# 安装

```bash
# npm
npm install foca-taro-storage
# yarn
yarn add foca-taro-storage
# pnpm
pnpm add foca-taro-storage
```

# 使用

```typescript
import { store } from 'foca';
import { taroStorage } from 'foca-taro-storage';

store.init({
  persist: [
    {
      key: 'my-project',
      version: '1',
      engine: taroStorage,
      models: [],
    },
  ],
});
```
