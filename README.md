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
    return (
      // 注意：是个匿名函数
      <FocaProvider>{() => this.props.children}</FocaProvider>
    );
  }
}
```

### 路由

关注 taro 官方 issue https://github.com/NervJS/taro/issues/6548#issuecomment-717896033 ，需要在`首页`加入拦截器以保证数据的稳定性

```typescript
import { persistInterceptor } from 'foca-taro-storage';

// 写法1
@persistInterceptor
export class HomePage extends Component {}

// 写法2
class HomePage extends Component {}
export default persistInterceptor(HomePage);

// 写法3
const HomePage: FC<Props> = (props) => {};
export default persistInterceptor(HomePage);
```

如果你的某些页面需要分享给用户，则`分享入口`文件也需要搭配拦截器。

```typescript
import { persistInterceptor } from 'foca-taro-storage';

@persistInterceptor
export class MySharePage extends Component {}
```
