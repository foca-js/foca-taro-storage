# foca-taro-storage

taro 端的持久化引擎。

[![npm peer dependency version](https://img.shields.io/npm/dependency-version/foca-taro-storage/peer/@tarojs/taro?label=taro)](https://github.com/NervJS/taro)
[![License](https://img.shields.io/github/license/foca-js/foca-taro-storage)](https://github.com/foca-js/foca-taro-storage/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/foca-taro-storage)](https://www.npmjs.com/package/foca-taro-storage)

# 安装

```bash
yarn add foca-taro-storage
```

# 使用

### 入口

```typescript
import { FocaProvider } from 'foca';
import { taroStorage } from 'foca-taro-storage';

class App extends Component {
  render() {
    return <FocaProvider>{this.props.children}</FocaProvider>;
  }
}
```
